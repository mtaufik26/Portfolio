// src/components/sections/Certificates.jsx
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState, useRef, useEffect, useCallback, useMemo } from 'react';
import { createPortal } from 'react-dom';

// Modal Component - Dipisah agar bisa di-portal ke document.body
const CertificateModal = ({ isOpen, onClose, selectedImage, selectedCert }) => {
  // Close on Escape key
  useEffect(() => {
    if (!isOpen) return;
    
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen) return null;

const modalContent = (
  <motion.div
    className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-sm"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    onClick={onClose}
    role="dialog"
    aria-modal="true"
    aria-label="Certificate preview modal"
  >
    <motion.div
      className="relative w-full max-w-5xl"
      variants={{
        hidden: { opacity: 0, scale: 0.95, y: 20 },
        visible: {
          opacity: 1,
          scale: 1,
          y: 0,
          transition: { duration: 0.25, ease: [0.25, 0.1, 0.25, 1] },
        },
        exit: {
          opacity: 0,
          scale: 0.95,
          y: 20,
          transition: { duration: 0.2 },
        },
      }}
      initial="hidden"
      animate="visible"
      exit="exit"
      onClick={(e) => e.stopPropagation()}
    >
      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-3 right-3 z-[10000] w-10 h-10 sm:w-11 sm:h-11 flex items-center justify-center bg-black/50 hover:bg-black/70 rounded-full backdrop-blur-md border border-white/20 transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-blue-500"
        aria-label="Close modal"
      >
        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      {/* Content Container - dengan minimum height */}
      <div className="relative rounded-2xl overflow-hidden bg-gray-900 shadow-2xl border border-white/10 min-h-[400px] sm:min-h-[500px] flex flex-col">
        {selectedImage ? (
          /* Mode dengan gambar */
          <>
            <img
              src={selectedImage}
              alt={selectedCert?.title || "Certificate Preview"}
              className="w-full h-auto max-h-[70vh] sm:max-h-[75vh] object-contain"
              loading="eager"
              onError={(e) => {
                // Fallback jika gambar gagal dimuat
                e.target.style.display = 'none';
                const fallback = e.target.nextElementSibling;
                if (fallback) fallback.style.display = 'flex';
              }}
            />
            
            {/* Fallback placeholder (hidden by default) */}
            <div className="hidden absolute inset-0 flex-col items-center justify-center bg-gradient-to-br from-gray-800 to-gray-900 p-8">
              <div className="w-24 h-24 mb-6 rounded-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center border-2 border-blue-500/30">
                <svg className="w-12 h-12 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <h3 className="text-white font-bold text-xl text-center mb-2">
                {selectedCert?.title || 'Certificate'}
              </h3>
              <p className="text-gray-400 text-center mb-1">
                {selectedCert?.issuer} • {selectedCert?.date}
              </p>
              <p className="text-gray-500 text-sm font-mono">
                {selectedCert?.credential}
              </p>
            </div>
          </>
        ) : (
          /* Mode tanpa gambar - placeholder yang rapi */
          <div className="flex-1 flex flex-col items-center justify-center bg-gradient-to-br from-gray-800 to-gray-900 p-8 sm:p-12">
            <div className="w-20 h-20 sm:w-24 sm:h-24 mb-6 rounded-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center border-2 border-blue-500/30">
              <svg className="w-10 h-10 sm:w-12 sm:h-12 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
              </svg>
            </div>
            <h3 className="text-white font-bold text-lg sm:text-xl text-center mb-2">
              {selectedCert?.title || 'Certificate'}
            </h3>
            <p className="text-gray-400 text-center text-sm sm:text-base mb-1">
              {selectedCert?.issuer} • {selectedCert?.date}
            </p>
            {selectedCert?.credential && (
              <p className="text-gray-500 text-xs sm:text-sm font-mono">
                {selectedCert.credential}
              </p>
            )}
          </div>
        )}
        
        {/* Info Overlay - selalu ditampilkan di bottom */}
        {selectedCert && (
          <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 bg-gradient-to-t from-black/95 via-black/80 to-transparent">
            <h3 className="text-white font-bold text-base sm:text-lg mb-1 drop-shadow-lg line-clamp-2">
              {selectedCert.title}
            </h3>
            <p className="text-gray-200 text-sm drop-shadow">
              {selectedCert.issuer} • {selectedCert.date}
            </p>
            {selectedCert.credential && (
              <p className="text-gray-400 text-xs font-mono mt-1">
                {selectedCert.credential}
              </p>
            )}
          </div>
        )}
      </div>

      {/* Helper Text */}
      <div className="mt-4 flex justify-center">
        <div className="px-4 py-2 bg-black/60 backdrop-blur-sm rounded-lg border border-white/10">
          <p className="text-xs text-gray-300">
            Press <kbd className="px-1.5 py-0.5 bg-white/10 rounded text-white font-mono text-[10px]">ESC</kbd> or click outside to close
          </p>
        </div>
      </div>
    </motion.div>
  </motion.div>
);
  // Render modal via Portal to document.body to escape parent stacking contexts
  return createPortal(modalContent, document.body);
};

const Certificates = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedCert, setSelectedCert] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);
  const scrollContainerRef = useRef(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };

  const certificates = [
    {
      title: 'Advanced React Patterns',
      issuer: 'Frontend Masters',
      date: 'March 2025',
      credential: 'FM-REACT-2025',
      image: '/src/assets/img/cert1.jpg',
    },
    {
      title: 'Node.js Backend Development',
      issuer: 'Udemy',
      date: 'November 2024',
      credential: 'UD-NODE-1124',
      image: '/src/assets/img/Logo.png',
    },
    {
      title: 'AWS Certified Developer',
      issuer: 'Amazon Web Services',
      date: 'August 2024',
      credential: 'AWS-DEV-0824',
      image: '/src/assets/img/cert3.jpg',
    },
    {
      title: 'Responsive Web Design',
      issuer: 'freeCodeCamp',
      date: 'June 2024',
      credential: 'FCC-RWD-0624',
      image: '/src/assets/img/cert4.jpg',
    },
    {
      title: 'TypeScript Fundamentals',
      issuer: 'Pluralsight',
      date: 'April 2024',
      credential: 'PS-TS-0424',
      image: '/src/assets/img/cert5.jpg',
    },
    {
      title: 'UI/UX Design Principles',
      issuer: 'Coursera',
      date: 'February 2024',
      credential: 'CO-UIUX-0224',
      image: '/src/assets/img/cert6.jpg',
    },
  ];

  // Check scroll position for arrows visibility
  const checkScrollPosition = useCallback(() => {
    if (!scrollContainerRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
    setShowLeftArrow(scrollLeft > 20);
    setShowRightArrow(scrollLeft + clientWidth < scrollWidth - 20);
  }, []);

  // Wheel scroll with smooth behavior
  const handleWheel = useCallback((e) => {
    if (!scrollContainerRef.current) return;

    const containerRect = scrollContainerRef.current.getBoundingClientRect();
    const isInside = e.clientX >= containerRect.left &&
                     e.clientX <= containerRect.right &&
                     e.clientY >= containerRect.top &&
                     e.clientY <= containerRect.bottom;

    if (!isInside) return;

    e.preventDefault();
    const scrollAmount = e.deltaY * 0.8;
    scrollContainerRef.current.scrollLeft += scrollAmount;
  }, []);

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (scrollContainer) {
      scrollContainer.addEventListener('scroll', checkScrollPosition);
      checkScrollPosition();
    }
    
    window.addEventListener('wheel', handleWheel, { passive: false });
    
    return () => {
      if (scrollContainer) {
        scrollContainer.removeEventListener('scroll', checkScrollPosition);
      }
      window.removeEventListener('wheel', handleWheel);
    };
  }, [handleWheel, checkScrollPosition]);

  // Dragging functionality
  const handleMouseDown = useCallback((e) => {
    if (!scrollContainerRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - scrollContainerRef.current.offsetLeft);
    setScrollLeft(scrollContainerRef.current.scrollLeft);
    scrollContainerRef.current.style.cursor = 'grabbing';
  }, []);

  const handleMouseMove = useCallback((e) => {
    if (!isDragging || !scrollContainerRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollContainerRef.current.offsetLeft;
    const walk = (x - startX) * 1.5;
    scrollContainerRef.current.scrollLeft = scrollLeft - walk;
  }, [isDragging, startX, scrollLeft]);

  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
    if (scrollContainerRef.current) {
      scrollContainerRef.current.style.cursor = 'grab';
    }
  }, []);

  // Modal handlers
  const handleImageClick = (cert, index) => {
    setSelectedCert({ ...cert, index });
    setSelectedImage(cert.image);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    // Delay clearing data to allow exit animation
    setTimeout(() => {
      setSelectedImage(null);
      setSelectedCert(null);
    }, 200);
  };

  // Navigation
  const scrollToNext = useCallback(() => {
    if (scrollContainerRef.current) {
      const cardWidth = 340;
      scrollContainerRef.current.scrollBy({ left: cardWidth, behavior: 'smooth' });
    }
  }, []);

  const scrollToPrev = useCallback(() => {
    if (scrollContainerRef.current) {
      const cardWidth = 340;
      scrollContainerRef.current.scrollBy({ left: -cardWidth, behavior: 'smooth' });
    }
  }, []);

  // Keyboard navigation for carousel (only when modal is closed)
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (isModalOpen) return;
      
      if (e.key === 'ArrowLeft') {
        e.preventDefault();
        scrollToPrev();
      } else if (e.key === 'ArrowRight') {
        e.preventDefault();
        scrollToNext();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isModalOpen, scrollToPrev, scrollToNext]);

  // Memoize modal props to prevent unnecessary re-renders
  const modalProps = useMemo(() => ({
    isOpen: isModalOpen,
    onClose: handleCloseModal,
    selectedImage,
    selectedCert,
  }), [isModalOpen, selectedImage, selectedCert]);

  return (
    <>
      <motion.section
        ref={ref}
        id="certificates"
        className="relative py-28 px-4 sm:px-6 lg:px-8 overflow-hidden"
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        variants={containerVariants}
      >
        {/* Refined background elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-50/20 to-transparent dark:via-gray-900/10" />
          
          <motion.div
            className="absolute top-1/3 -left-32 w-96 h-96 rounded-full"
            style={{
              background: 'radial-gradient(circle, rgba(59,130,246,0.06) 0%, transparent 70%)',
            }}
            animate={{
              x: [0, 40, 0],
              y: [0, -30, 0],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
          
          <motion.div
            className="absolute bottom-1/3 -right-32 w-96 h-96 rounded-full"
            style={{
              background: 'radial-gradient(circle, rgba(139,92,246,0.06) 0%, transparent 70%)',
            }}
            animate={{
              x: [0, -50, 0],
              y: [0, 40, 0],
            }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: 1,
            }}
          />
        </div>

        <div className="max-w-7xl mx-auto w-full relative">
          {/* Header */}
          <motion.div className="text-center mb-16" variants={containerVariants}>
            <motion.h2
              className="text-4xl sm:text-5xl font-bold mb-5 tracking-tight"
              variants={itemVariants}
            >
              <span className="bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-400 bg-clip-text text-transparent">
                Professional {" "}
              </span>
              <span className="bg-gradient-to-r from-blue-500 to-blue-600 dark:from-blue-400 dark:to-blue-500 bg-clip-text text-transparent">
                Certificates
              </span>
            </motion.h2>
            
            <motion.p
              className="max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-400 leading-relaxed"
              variants={itemVariants}
            >
              Verified credentials from leading platforms and institutions,
              demonstrating my commitment to continuous learning.
            </motion.p>
          </motion.div>

          {/* Stats Badge */}
          <motion.div 
            className="flex justify-center mb-10"
            variants={itemVariants}
          >
            <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-white/40 dark:bg-gray-800/30 backdrop-blur-sm border border-gray-200/40 dark:border-gray-700/40">
              <div className="flex items-center gap-1">
                <svg className="w-4 h-4 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812z" clipRule="evenodd" />
                </svg>
                <span className="text-sm font-semibold text-gray-900 dark:text-white">
                  {certificates.length}
                </span>
              </div>
              <span className="text-xs text-gray-500 dark:text-gray-400">Verified Certificates</span>
            </div>
          </motion.div>

          {/* Horizontal Scrolling Container */}
          <motion.div className="relative group" variants={containerVariants}>
            {/* Navigation Arrows */}
            <AnimatePresence>
              {showLeftArrow && (
                <motion.button
                  key="left-arrow"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -10 }}
                  onClick={scrollToPrev}
                  className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-20 w-10 h-10 rounded-full bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm border border-gray-200 dark:border-gray-700 shadow-lg flex items-center justify-center hover:scale-110 transition-all duration-300 group-hover:opacity-100"
                  aria-label="Previous certificate"
                >
                  <svg className="w-5 h-5 text-gray-700 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </motion.button>
              )}
              
              {showRightArrow && (
                <motion.button
                  key="right-arrow"
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 10 }}
                  onClick={scrollToNext}
                  className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-20 w-10 h-10 rounded-full bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm border border-gray-200 dark:border-gray-700 shadow-lg flex items-center justify-center hover:scale-110 transition-all duration-300 group-hover:opacity-100"
                  aria-label="Next certificate"
                >
                  <svg className="w-5 h-5 text-gray-700 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </motion.button>
              )}
            </AnimatePresence>

            {/* Cards Container */}
            <div
              ref={scrollContainerRef}
              className="flex gap-6 pb-8 pt-4 overflow-x-auto scroll-smooth hide-scrollbar px-2 cursor-grab"
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseUp}
            >
              {certificates.map((cert, index) => (
                <motion.div
                  key={index}
                  className="flex-shrink-0 w-[340px]"
                  variants={itemVariants}
                >
                  <motion.div
                    className="group/card relative h-full bg-white/50 dark:bg-gray-900/30 backdrop-blur-xl rounded-2xl border border-gray-200/30 dark:border-gray-700/30 overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500"
                    whileHover={{ y: -6 }}
                  >
                    {/* Image Container */}
                    <div
                      className="relative aspect-[4/3] overflow-hidden cursor-pointer bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900"
                      onClick={() => handleImageClick(cert, index)}
                      role="button"
                      tabIndex={0}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                          e.preventDefault();
                          handleImageClick(cert, index);
                        }
                      }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-500 z-10" />
                      
                      <motion.img
                        src={cert.image}
                        alt={`${cert.title} certificate`}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover/card:scale-110"
                        initial={{ scale: 1 }}
                        whileHover={{ scale: 1.08 }}
                        transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
                        onError={(e) => {
                          e.target.style.display = 'none';
                          const fallback = e.target.nextElementSibling;
                          if (fallback) fallback.style.display = 'flex';
                        }}
                      />
                      
                      {/* Fallback */}
<div className="absolute inset-0 hidden flex-col items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900">
  <div className="relative mb-3">
    {/* Background badge */}
    <svg
      className="w-14 h-14 text-blue-500/1 dark:text-blue-400/20 drop-shadow-sm"
      fill="currentColor"
      viewBox="0 0 20 20"
    >
      <path
        fillRule="evenodd"
        d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812z"
        clipRule="evenodd"
      />
    </svg>

    {/* Check icon */}
    <svg
      className="absolute inset-0 m-auto w-6 h-6 text-white"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={3}
        d="M5 13l4 4L19 7"
      />
    </svg>

    {/* Soft glow */}
    <div className="absolute inset-0 rounded-full bg-blue-500/20 blur-md" />
  </div>

  <span className="text-sm font-medium text-gray-600 dark:text-gray-300 text-center px-4">
    {cert.title}
  </span>
</div>
                      
                      {/* Overlay on hover */}
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover/card:opacity-100 transition-opacity duration-500 z-20 pointer-events-none">
                        <div className="px-4 py-2 rounded-lg bg-black/60 backdrop-blur-md text-white text-sm font-medium flex items-center gap-2">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                          </svg>
                          View Certificate
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-5">
                      <h3 className="font-bold text-lg text-gray-900 dark:text-white mb-2 line-clamp-2 group-hover/card:text-blue-600 dark:group-hover/card:text-blue-400 transition-colors">
                        {cert.title}
                      </h3>
                      
                      <div className="space-y-2 mb-3">
                        <div className="flex items-center gap-2">
                          <svg className="w-4 h-4 text-gray-400 dark:text-gray-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                          </svg>
                          <span className="text-sm text-gray-600 dark:text-gray-400">{cert.issuer}</span>
                        </div>
                        
                        <div className="flex items-center gap-2">
                          <svg className="w-4 h-4 text-gray-400 dark:text-gray-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                          <span className="text-sm text-gray-500 dark:text-gray-500">{cert.date}</span>
                        </div>
                      </div>
                      
                      {/* Credential ID */}
                      <div className="pt-3 border-t border-gray-200/50 dark:border-gray-700/50">
                        <div className="flex items-center gap-2">
                          <svg className="w-3.5 h-3.5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                          </svg>
                          <span className="text-xs text-gray-500 dark:text-gray-500 font-mono">
                            {cert.credential}
                          </span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Hint Text */}
          <motion.p
            className="text-center text-sm text-gray-400 dark:text-gray-500 mt-8"
            variants={itemVariants}
          >
            ← Drag to scroll or use arrow keys → 
            <span className="hidden sm:inline"> | Scroll with mouse wheel</span>
          </motion.p>
        </div>
      </motion.section>

      {/* Modal via Portal - Rendered at document.body level */}
      <CertificateModal {...modalProps} />

      {/* Global Styles */}
      <style jsx global>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </>
  );
};

export default Certificates;