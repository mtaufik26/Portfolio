import { motion, AnimatePresence } from 'framer-motion';
import { arrowVariants } from '../constants/certificateVariants';

export const NavigationArrows = ({ showLeft, showRight, onPrev, onNext }) => {
  const ArrowIcon = ({ direction }) => (
    <svg className="w-5 h-5 text-gray-700 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={direction === 'left' ? 'M15 19l-7-7 7-7' : 'M9 5l7 7-7 7'} />
    </svg>
  );

  return (
    <AnimatePresence>
      {showLeft && (
        <motion.button
          key="left-arrow"
          {...arrowVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          onClick={onPrev}
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-20 w-10 h-10 rounded-full bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm border border-gray-200 dark:border-gray-700 shadow-lg flex items-center justify-center hover:scale-110 transition-all duration-300 group-hover:opacity-100"
          aria-label="Previous certificate"
        >
          <ArrowIcon direction="left" />
        </motion.button>
      )}
      
      {showRight && (
        <motion.button
          key="right-arrow"
          {...arrowVariants}
          initial={{ opacity: 0, x: 10 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 10 }}
          onClick={onNext}
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-20 w-10 h-10 rounded-full bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm border border-gray-200 dark:border-gray-700 shadow-lg flex items-center justify-center hover:scale-110 transition-all duration-300 group-hover:opacity-100"
          aria-label="Next certificate"
        >
          <ArrowIcon direction="right" />
        </motion.button>
      )}
    </AnimatePresence>
  );
};