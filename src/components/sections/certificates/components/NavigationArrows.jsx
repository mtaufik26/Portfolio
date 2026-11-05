import { motion, AnimatePresence } from 'framer-motion';

export const NavigationArrows = ({ showLeft, showRight, onPrev, onNext }) => {
  return (
    <>
      <AnimatePresence>
        {showLeft && (
          <motion.button
            key="cert-left-arrow"
            initial={{ opacity: 0, scale: 0.9, x: -6 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            exit={{ opacity: 0, scale: 0.9, x: -6 }}
            transition={{ duration: 0.2 }}
            onClick={onPrev}
            className="hidden sm:flex absolute -left-2 sm:-left-3 lg:-left-5 top-[105px] -translate-y-1/2 z-20 w-11 h-11 rounded-full
              bg-white/95 dark:bg-[#101016]/95 backdrop-blur-md
              border border-neutral-200/80 dark:border-white/10
              hover:border-blue-500/50 text-neutral-700 dark:text-neutral-300 hover:text-blue-600 dark:hover:text-blue-400
              shadow-lg items-center justify-center hover:scale-110 active:scale-95 transition-all duration-200 cursor-pointer"
            aria-label="Sertifikat sebelumnya"
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
            key="cert-right-arrow"
            initial={{ opacity: 0, scale: 0.9, x: 6 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            exit={{ opacity: 0, scale: 0.9, x: 6 }}
            transition={{ duration: 0.2 }}
            onClick={onNext}
            className="hidden sm:flex absolute -right-2 sm:-right-3 lg:-right-5 top-[105px] -translate-y-1/2 z-20 w-11 h-11 rounded-full
              bg-white/95 dark:bg-[#101016]/95 backdrop-blur-md
              border border-neutral-200/80 dark:border-white/10
              hover:border-blue-500/50 text-neutral-700 dark:text-neutral-300 hover:text-blue-600 dark:hover:text-blue-400
              shadow-lg items-center justify-center hover:scale-110 active:scale-95 transition-all duration-200 cursor-pointer"
            aria-label="Sertifikat berikutnya"
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