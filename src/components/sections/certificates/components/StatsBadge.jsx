import { motion } from 'framer-motion';
import { itemVariants } from '../constants/certificateVariants';
import { FiCheckCircle } from 'react-icons/fi';

export const StatsBadge = ({ count }) => {
  return (
    <motion.div 
      className="flex justify-center mb-8 sm:mb-10"
      variants={itemVariants}
    >
      <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full
        bg-white/80 dark:bg-[#12131a]/80 backdrop-blur-md
        border border-neutral-200/80 dark:border-white/[0.08]
        hover:border-blue-500/40 dark:hover:border-blue-500/30
        shadow-[0_2px_8px_rgba(0,0,0,0.03)] dark:shadow-[0_2px_12px_rgba(0,0,0,0.4)]
        transition-colors duration-200"
      >
        <FiCheckCircle className="w-4 h-4 text-blue-600 dark:text-blue-400" />
        <span className="font-mono text-xs font-bold text-neutral-900 dark:text-white">
          {count}
        </span>
        <span className="text-[11px] font-mono uppercase tracking-wider text-neutral-500 dark:text-neutral-400 font-medium">
          Verified Accreditations
        </span>
      </div>
    </motion.div>
  );
};