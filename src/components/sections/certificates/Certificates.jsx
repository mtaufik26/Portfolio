import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { containerVariants, itemVariants } from './constants/certificateVariants';
import { certificates } from './constants/certificatesData';
import { useCertificatesAnimation } from './hooks/useCertificatesAnimation';
import { useScrollContainer } from './hooks/useScrollContainer';
import { useModal } from './hooks/useModal';
import { setupKeyboardNavigation } from './utils/keyboardNav';
import { BackgroundEffects } from './components/BackgroundEffects';
import { CertificatesHeader } from './components/CertificatesHeader';
import { StatsBadge } from './components/StatsBadge';
import { ScrollContainer } from './components/ScrollContainer';
import { CertificateModal } from './components/CertificateModal';

const Certificates = () => {
  const { ref, inView } = useCertificatesAnimation();
  const { modalProps, handleOpen } = useModal();

  // State untuk arrow visibility
  const [showArrows, setShowArrows] = useState({
    showLeft: false,
    showRight: true,
  });

  // Setup scroll container
  const { scrollContainerRef, handlers, scrollTo } =
    useScrollContainer(setShowArrows);

  // Setup keyboard navigation
  useEffect(() => {
    return setupKeyboardNavigation(
      () => scrollTo(-1),
      () => scrollTo(1),
      modalProps.isOpen
    );
  }, [modalProps.isOpen, scrollTo]);

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
        <BackgroundEffects />

        <div className="max-w-7xl mx-auto w-full relative">
          <CertificatesHeader />
          <StatsBadge count={certificates.length} />

          <ScrollContainer
            inView={inView}
            onImageClick={handleOpen}
            scrollHandlers={{
              containerRef: scrollContainerRef,
              events: handlers,
            }}
            showArrows={showArrows}
            onScroll={scrollTo}
          />

          {/* Hint Text */}
          <motion.p
            className="text-center text-sm text-gray-400 dark:text-gray-500 mt-8"
            variants={itemVariants}
          >
            ← Drag to scroll or use arrow keys →
            <span className="hidden sm:inline">
              {' '}
              | Scroll with mouse wheel
            </span>
          </motion.p>
        </div>
      </motion.section>

      {/* Modal via Portal */}
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