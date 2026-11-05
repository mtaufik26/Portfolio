import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMaximize2, FiX } from 'react-icons/fi';
import { useImageError } from '../hooks/useImageError';

/**
 * Project preview container framed in an intentional, uniform browser viewport frame.
 * Identical visual structure across all projects with interactive fullscreen preview.
 */
export const ProjectImage = ({ src, alt, title, urlSlug, index }) => {
  const { currentSrc, showError, handleError } = useImageError(src);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const formattedIndex = String(index + 1).padStart(2, '0');

  // Handle ESC key and lock body scroll when modal is open
  useEffect(() => {
    if (!isLightboxOpen) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setIsLightboxOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isLightboxOpen]);

  const lightboxModal = (
    <AnimatePresence>
      {isLightboxOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={() => setIsLightboxOpen(false)}
          className="fixed inset-0 z-[99999] flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md"
          role="dialog"
          aria-modal="true"
          aria-label={`UI Preview for ${title}`}
        >
          {/* Modal Container */}
          <motion.div
            initial={{ scale: 0.95, opacity: 0, y: 12 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 12 }}
            transition={{ duration: 0.2 }}
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-5xl w-full max-h-[90vh] flex flex-col rounded-2xl overflow-hidden bg-neutral-900 border border-white/10 shadow-2xl"
          >
            {/* Modal Header Bar */}
            <div className="flex items-center justify-between px-4 py-3 bg-[#111116] border-b border-white/10 select-none">
              <div className="flex items-center gap-2 min-w-0 pr-3">
                <span className="text-xs font-mono font-semibold text-blue-400 shrink-0">
                  UI PREVIEW // {formattedIndex}
                </span>
                <span className="text-xs text-neutral-300 truncate">
                  — {title}
                </span>
              </div>
              <button
                type="button"
                onClick={() => setIsLightboxOpen(false)}
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl text-xs font-medium text-neutral-200 hover:text-white bg-white/[0.08] hover:bg-white/[0.16] border border-white/10 hover:border-white/20 transition-all cursor-pointer shrink-0 active:scale-95"
                aria-label="Tutup preview"
              >
                <span>Tutup</span>
                <span className="hidden sm:inline text-[10px] font-mono px-1.5 py-0.5 rounded bg-black/40 text-neutral-400">
                  ESC
                </span>
                <FiX className="w-4 h-4 text-neutral-300" />
              </button>
            </div>

            {/* Scrollable Full Image Display */}
            <div className="overflow-auto max-h-[calc(90vh-50px)] bg-neutral-950 p-2 sm:p-4 flex items-center justify-center">
              <img
                src={currentSrc}
                alt={`${title} Full Preview`}
                className="max-w-full h-auto rounded-lg shadow-lg object-contain"
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );

  return (
    <>
      <div className="relative overflow-hidden bg-neutral-900 border-b lg:border-b-0 border-neutral-200/80 dark:border-white/[0.08] flex flex-col h-full w-full">
        {/* Sleek Browser Frame Top Bar */}
        <div className="px-4 py-2.5 flex items-center justify-between bg-neutral-100 dark:bg-[#121216] border-b border-neutral-200/80 dark:border-white/[0.06] select-none shrink-0 h-10">
          {/* Subtle Window Frame Indicators */}
          <div className="flex items-center gap-1.5" aria-hidden="true">
            <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#27c93f]/80" />
          </div>

          {/* Minimal URL Address Pill */}
          <div className="flex items-center gap-1.5 px-3 py-0.5 rounded-md bg-white/80 dark:bg-white/[0.05] border border-neutral-200/60 dark:border-white/[0.06] text-[11px] font-mono text-neutral-500 dark:text-neutral-400 max-w-[220px] truncate">
            <svg className="w-2.5 h-2.5 text-neutral-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
            <span className="truncate">{urlSlug || `${title.toLowerCase().replace(/\s+/g, '-')}.local`}</span>
          </div>

          {/* Index Badge */}
          <div className="flex items-center">
            <span className="font-mono text-[11px] font-semibold text-neutral-400 dark:text-neutral-500">
              #{formattedIndex}
            </span>
          </div>
        </div>

        {/* Image Viewport Container */}
        <div
          onClick={() => currentSrc && setIsLightboxOpen(true)}
          className="relative flex-1 w-full min-h-[220px] sm:min-h-[280px] lg:min-h-0 aspect-[16/10] lg:aspect-auto bg-neutral-100 dark:bg-neutral-950 flex items-center justify-center overflow-hidden group/img cursor-pointer"
          title="Klik untuk melihat preview UI penuh"
        >
          {/* Subtle Ambient Hover Gradient & Zoom Indicator */}
          <div className="absolute inset-0 bg-neutral-950/40 opacity-0 group-hover/img:opacity-100 transition-opacity duration-300 z-10 flex items-center justify-center">
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/90 dark:bg-black/80 backdrop-blur-md text-xs font-medium text-neutral-900 dark:text-white shadow-lg transform translate-y-2 group-hover/img:translate-y-0 transition-all duration-300">
              <FiMaximize2 className="w-3.5 h-3.5 text-blue-500" />
              Preview UI
            </span>
          </div>

          {/* Main Image */}
          {currentSrc && (
            <img
              src={currentSrc}
              alt={alt}
              loading="lazy"
              decoding="async"
              width="800"
              height="500"
              className="w-full h-full object-cover object-top transform transition-transform duration-500 ease-out group-hover/img:scale-[1.04]"
              onError={handleError}
            />
          )}

          {/* Fallback Viewport */}
          {showError && (
            <div className="absolute inset-0 flex flex-col items-center justify-center text-neutral-500 dark:text-neutral-400 bg-neutral-100 dark:bg-neutral-900 p-6 text-center">
              <svg className="w-10 h-10 mb-2 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span className="text-xs font-mono font-medium">{title}</span>
            </div>
          )}
        </div>
      </div>

      {/* Render via Portal so it escapes parent CSS transform & clipping */}
      {typeof document !== 'undefined' && createPortal(lightboxModal, document.body)}
    </>
  );
};



