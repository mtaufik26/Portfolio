import { motion } from 'framer-motion';
import { toggleButtonVariants } from '../constants/projectVariants';

/**
 * Centered, tactile trigger button for viewing all projects in the archive modal.
 */
export const ToggleButton = ({ totalCount, onOpenAll }) => {
  return (
    <motion.div 
      className="flex justify-center mt-10 sm:mt-12"
      variants={toggleButtonVariants}
      initial="initial"
      animate="animate"
    >
      <motion.button
        onClick={onOpenAll}
        className="group relative inline-flex items-center gap-3 px-6 py-3.5 rounded-2xl
          bg-white/80 dark:bg-[#121218]/90 backdrop-blur-md
          border border-neutral-300/80 dark:border-white/10
          hover:border-neutral-400 dark:hover:border-white/20
          text-neutral-900 dark:text-white font-medium text-xs sm:text-sm tracking-wide
          shadow-xs hover:shadow-md transition-all duration-200 cursor-pointer"
        whileHover={{ y: -2 }}
        whileTap={{ scale: 0.98 }}
        aria-haspopup="dialog"
      >
        <span className="relative font-medium">
          View All Projects ({totalCount})
        </span>
        
        {/* Archive Stack Icon */}
        <span className="flex items-center justify-center w-5 h-5 rounded-full bg-neutral-100 dark:bg-white/[0.08] text-neutral-700 dark:text-neutral-300 group-hover:bg-blue-500 group-hover:text-white transition-colors duration-200">
          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </span>
      </motion.button>
    </motion.div>
  );
};
