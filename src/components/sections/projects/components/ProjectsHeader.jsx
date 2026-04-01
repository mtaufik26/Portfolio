import { motion } from 'framer-motion';
import { containerVariants, firstItemVariants } from '../constants/projectVariants';

export const ProjectsHeader = () => {
  return (
    <motion.div className="text-center mb-12 sm:mb-16" variants={containerVariants}>
      <motion.h2 
        className="text-3xl sm:text-4xl font-bold from-gray-900 to-gray-600 dark:text-white mb-4" 
        variants={firstItemVariants}
      >
        <span className="bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-400 bg-clip-text text-transparent">
          Featured {" "}
        </span>
        <span className="bg-gradient-to-r from-blue-500 to-blue-600 dark:from-blue-400 dark:to-blue-500 bg-clip-text text-transparent">
          Projects
        </span>
      </motion.h2>
      
      <motion.p
        className="max-w-2xl mx-auto text-base sm:text-lg text-gray-600 dark:text-gray-300 leading-relaxed"
        variants={firstItemVariants}
      >
        A selection of my recent work — built with performance, usability, and clean code in mind.
      </motion.p>
    </motion.div>
  );
};