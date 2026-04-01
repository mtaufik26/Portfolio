import { motion } from 'framer-motion';
import { itemVariants } from '../constants/certificateVariants';

export const StatsBadge = ({ count }) => {
  return (
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
            {count}
          </span>
        </div>
        <span className="text-xs text-gray-500 dark:text-gray-400">Verified Certificates</span>
      </div>
    </motion.div>
  );
};