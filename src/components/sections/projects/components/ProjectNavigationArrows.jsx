import { motion, AnimatePresence } from 'framer-motion';

/**
 * Floating side arrows for fast left/right navigation over the project slider.
 * Styled with backdrop blur and responsive positioning matching the Certificates section.
 */
export const ProjectNavigationArrows = ({ showLeft, showRight, onPrev, onNext }) => {
  return (
    <>
      <AnimatePresence>
        {showLeft && (
          <motion.button
            key="proj-left-arrow"
            initial={{ opacity: 0, x: -8 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -8 }}
            transition={{ duration: 0.2 }}
            onClick={onPrev}
            className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full
              bg-white/95 dark:bg-[#101016]/95 backdrop-blur-md
              border border-neutral-200/80 dark:border-white/10
              hover:border-neutral-400 dark:hover:border-white/20 text-neutral-700 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white
              shadow-lg flex items-center justify-center hover:scale-110 active:scale-95 transition-all duration-200 cursor-pointer"
            aria-label="Project sebelumnya"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
            </svg>
          </motion.button>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showRight && (
          <motion.button
            key="proj-right-arrow"
            initial={{ opacity: 0, x: 8 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 8 }}
            transition={{ duration: 0.2 }}
            onClick={onNext}
            className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full
              bg-white/95 dark:bg-[#101016]/95 backdrop-blur-md
              border border-neutral-200/80 dark:border-white/10
              hover:border-neutral-400 dark:hover:border-white/20 text-neutral-700 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white
              shadow-lg flex items-center justify-center hover:scale-110 active:scale-95 transition-all duration-200 cursor-pointer"
            aria-label="Project berikutnya"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
            </svg>
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
};
