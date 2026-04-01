import { motion } from 'framer-motion';
import { containerVariants, itemVariants } from '../constants/serviceVariants';

export const ServicesHeader = () => {
  return (
    <motion.div className="text-center mb-20" variants={containerVariants}>
      <motion.h2
        className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 tracking-tight"
        variants={itemVariants}
      >
        <span className="bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-400 bg-clip-text text-transparent">
          Services & {''}
        </span>
        <span className="bg-gradient-to-r from-blue-600 to-blue-400 dark:from-blue-500 dark:to-blue-400 bg-clip-text text-transparent">
          Expertise
        </span>
      </motion.h2>
      
      <motion.p
        className="max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-400 leading-relaxed"
        variants={itemVariants}
      >
        Creating modern digital solutions with a focus on clean code, responsive design, and user experience.
      </motion.p>
    </motion.div>
  );
};