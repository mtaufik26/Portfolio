import { motion } from 'framer-motion';
import { itemVariants } from '../constants/heroVariants';

export const CTAButtons = () => {
  const DownloadIcon = () => (
    <motion.svg
      className="w-4 h-4 sm:w-5 sm:h-5"
      initial={false}
      animate={{ x: 0 }}
      whileHover={{ x: 4 }}
      transition={{ type: 'tween', ease: 'easeOut', duration: 0.2 }}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
    </motion.svg>
  );

  const ViewIcon = () => (
    <motion.svg
      className="w-4 h-4 sm:w-5 sm:h-5"
      initial={false}
      animate={{ rotate: 0 }}
      whileHover={{ rotate: 10 }}
      transition={{ type: 'tween', ease: 'easeOut', duration: 0.2 }}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
    </motion.svg>
  );

  return (
    <motion.div className="flex flex-wrap gap-3 sm:gap-4 mt-8 sm:mt-12" variants={itemVariants}>
      <motion.a
        href="/src/assets/pdf/CV - Muhammad Taufik Ediansyah.pdf"
        download="CV_Taufik.pdf"
        className="group relative px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white rounded-lg sm:rounded-xl font-semibold text-base sm:text-lg overflow-hidden"
        whileHover={{ scale: 1.03, y: -2 }}
        whileTap={{ scale: 0.98 }}
        transition={{ type: 'tween', duration: 0.25 }}
      >
        <span className="relative flex items-center gap-2 sm:gap-3">
          Download CV
          <DownloadIcon />
        </span>
      </motion.a>

      <motion.a
        href="/src/assets/pdf/CV - Muhammad Taufik Ediansyah.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="group px-6 sm:px-8 py-3 sm:py-4 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg sm:rounded-xl font-semibold text-base sm:text-lg hover:border-gray-400 dark:hover:border-gray-400 flex items-center gap-2 sm:gap-3"
        whileHover={{ scale: 1.03, y: -2 }}
        whileTap={{ scale: 0.98 }}
        transition={{ type: 'tween', duration: 0.25 }}
      >
        <span>Lihat CV</span>
        <ViewIcon />
      </motion.a>
    </motion.div>
  );
};