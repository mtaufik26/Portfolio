import { motion } from 'framer-motion';
import { toggleButtonVariants } from '../constants/projectVariants';

export const ToggleButton = ({ showAll, hasMore, onToggle }) => {
  if (!hasMore) return null;

  return (
    <motion.div 
      className="flex justify-end mt-12"
      {...toggleButtonVariants}
      initial="initial"
      animate="animate"
    >
      <motion.button
        onClick={onToggle}
        className="group relative inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 font-semibold text-sm tracking-wide hover:text-blue-700 dark:hover:text-blue-300 transition-colors duration-300 cursor-pointer"
        whileHover={{ x: 4 }}
        whileTap={{ scale: 0.95 }}
      >
        {/* Animated underline effect */}
        <span className="relative">
          {showAll ? 'Tampilkan Lebih Sedikit' : 'Lihat Semua Project'}
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-300 to-blue-600 group-hover:w-full transition-all duration-300 ease-out" />
        </span>
        
        {/* Icon dengan animasi */}
        <motion.span
          className="flex items-center justify-center w-6 h-6 rounded-full border border-blue-600/30 dark:border-blue-400/30 group-hover:border-blue-600/60 dark:group-hover:border-blue-400/60 group-hover:bg-blue-600/10 transition-all duration-300"
          animate={{ 
            rotate: showAll ? 0 : 180,
            borderColor: showAll ? 'rgba(59, 130, 246, 0.3)' : 'rgba(59, 130, 246, 0.6)'
          }}
        >
          <svg className="w-3 h-3 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </motion.span>
      </motion.button>
    </motion.div>
  );
};