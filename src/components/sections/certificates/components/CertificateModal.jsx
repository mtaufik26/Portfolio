import { useRef, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { motion } from 'framer-motion';
import { ModalContent } from './ModalContent';
import { FiChevronLeft, FiChevronRight, FiX } from 'react-icons/fi';

import { transitions } from '../../../../utils/motion';

export const CertificateModal = ({
  isOpen,
  onClose,
  onNext,
  onPrev,
  selectedIndex,
  totalCount,
  currentCert,
}) => {
  const touchStartX = useRef(0);

  // Close on Escape key
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen || !currentCert) return null;

  // Touch Swipe Navigation for mobile
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX.current - touchEndX;
    if (Math.abs(diff) > 45) {
      if (diff > 0) {
        onNext?.(); // Swiped left -> next
      } else {
        onPrev?.(); // Swiped right -> prev
      }
    }
  };

  const modalContent = (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: transitions.duration.fast, ease: transitions.smoothEase }}
      className="fixed inset-0 z-[9999] flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-sm"
      onClick={onClose}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      role="dialog"
      aria-modal="true"
      aria-label="Certificate preview modal"
    >
      {/* Top Action Bar */}
      <div className="absolute top-4 right-4 sm:top-6 sm:right-6 z-[10001] flex items-center gap-2 sm:gap-3">
        {selectedIndex !== null && typeof totalCount === 'number' && (
          <span className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-mono font-medium bg-neutral-900/90 text-neutral-300 border border-neutral-700/80 shadow-md">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
            {String(selectedIndex + 1).padStart(2, '0')} / {String(totalCount).padStart(2, '0')}
          </span>
        )}
        <button
          onClick={onClose}
          className="inline-flex items-center gap-2 px-3 sm:px-3.5 py-1.5 sm:py-2 rounded-xl
            bg-neutral-900/90 hover:bg-neutral-800 text-neutral-200 border border-neutral-700/80
            hover:border-blue-500/50 hover:text-white
            text-xs sm:text-sm font-medium transition-all shadow-xl cursor-pointer"
          aria-label="Close certificate preview"
        >
          <span className="hidden sm:inline">Close</span>
          <span className="hidden sm:inline text-[10px] font-mono px-1.5 py-0.5 rounded bg-neutral-800 text-neutral-400">
            ESC
          </span>
          <FiX className="w-4 h-4" />
        </button>
      </div>

      {/* Floating Navigation Button: PREVIOUS */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          onPrev?.();
        }}
        className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 z-[10001] w-11 h-11 sm:w-12 sm:h-12 flex items-center justify-center rounded-full
          bg-neutral-900/90 hover:bg-neutral-800 hover:border-blue-500/50 text-white border border-neutral-700 shadow-2xl transition-all duration-200
          hover:scale-110 active:scale-95 cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500/40"
        aria-label="Previous certificate"
      >
        <FiChevronLeft className="w-5 h-5 text-neutral-200" />
      </button>

      {/* Floating Navigation Button: NEXT */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          onNext?.();
        }}
        className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 z-[10001] w-11 h-11 sm:w-12 sm:h-12 flex items-center justify-center rounded-full
          bg-neutral-900/90 hover:bg-neutral-800 hover:border-blue-500/50 text-white border border-neutral-700 shadow-2xl transition-all duration-200
          hover:scale-110 active:scale-95 cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500/40"
        aria-label="Next certificate"
      >
        <FiChevronRight className="w-5 h-5 text-neutral-200" />
      </button>

      {/* Modal Center Content */}
      <motion.div
        initial={{ opacity: 0, scale: 0.96, y: 16 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.96, y: 16 }}
        transition={{ duration: transitions.duration.fast, ease: transitions.smoothEase }}
        className="w-full max-w-4xl relative z-[10000] px-2 sm:px-8"
      >
        <ModalContent
          selectedCert={currentCert}
          selectedIndex={selectedIndex}
          totalCount={totalCount}
        />
      </motion.div>
    </motion.div>
  );

  return createPortal(modalContent, document.body);
};