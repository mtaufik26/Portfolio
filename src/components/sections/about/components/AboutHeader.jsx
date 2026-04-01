import { motion } from 'framer-motion';
import { itemVariants } from '../constants/aboutVariants';

export const AboutHeader = () => {
  return (
    <motion.div variants={itemVariants} className="space-y-4">
      <div className="flex items-center gap-3">
        <div className="w-8 h-0.5 bg-gradient-to-r from-blue-500 to-blue-900 rounded-full" />
        <span className="text-sm font-medium text-blue-600 dark:text-blue-400 tracking-wider uppercase">
          About Me
        </span>
      </div>
      
      <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">
        <span className="bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-400 bg-clip-text text-transparent">
          Get to know{' '}
        </span>
        <span className="bg-gradient-to-r from-blue-600 to-blue-400 dark:from-blue-500 dark:to-blue-400 bg-clip-text text-transparent">
          me better
        </span>
      </h2>
    </motion.div>
  );
};