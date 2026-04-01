import { motion } from 'framer-motion';
import { containerVariants, itemVariants } from '../constants/certificateVariants';

export const CertificatesHeader = () => {
  return (
    <motion.div className="text-center mb-16" variants={containerVariants}>
      <motion.h2
        className="text-4xl sm:text-5xl font-bold mb-5 tracking-tight"
        variants={itemVariants}
      >
        <span className="bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-400 bg-clip-text text-transparent">
          Professional {" "}
        </span>
        <span className="bg-gradient-to-r from-blue-500 to-blue-600 dark:from-blue-400 dark:to-blue-500 bg-clip-text text-transparent">
          Certificates
        </span>
      </motion.h2>
      
      <motion.p
        className="max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-400 leading-relaxed"
        variants={itemVariants}
      >
        Verified credentials from leading platforms and institutions,
        demonstrating my commitment to continuous learning.
      </motion.p>
    </motion.div>
  );
};