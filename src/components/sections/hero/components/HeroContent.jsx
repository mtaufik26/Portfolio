import { motion } from 'framer-motion';
import { itemVariants } from '../constants/heroVariants';
import { RunningText } from './RunningText';
import { CTAButtons } from './CTAButtons';

export const HeroContent = ({ displayName, displayTypingText, runningTextContent }) => {
  return (
    <div className="lg:w-1/2 order-2 lg:order-1 mt-12 lg:mt-0">
      <motion.div className="space-y-2 sm:space-y-4 mb-6 sm:mb-8" variants={itemVariants}>
        <motion.span className="block text-gray-500 dark:text-gray-400 font-light text-base sm:text-lg md:text-xl tracking-wide">
          Hi, I'm
        </motion.span>

        <h1 className="text-4xl sm:text-4xl md:text-6xl lg:text-6xl font-bold tracking-tight">
          <motion.span className="block text-gray-800 dark:text-gray-100 leading-[0.9]">
            {displayName?.first || 'Taufik'}
          </motion.span>
          <motion.span className="block text-gray-800 dark:text-gray-100 leading-[0.9] mt-2 sm:mt-4">
            {displayName?.last || 'Ediansyah'}
          </motion.span>
        </h1>
      </motion.div>

      <motion.div className="relative overflow-hidden mt-1" variants={itemVariants}>
        <span className="block text-lg sm:text-xl md:text-2xl font-semibold text-gray-800 dark:text-gray-100">
          {displayTypingText}
          <motion.span
            className="inline-block w-0.5 h-6 sm:h-7 ml-1 align-baseline bg-gray-800 dark:bg-gray-100"
            animate={{ opacity: [1, 0] }}
            transition={{ duration: 0.8, repeat: Infinity, ease: 'easeInOut' }}
          />
        </span>
        <RunningText content={runningTextContent} />
      </motion.div>

      <motion.p className="mt-6 sm:mt-8 text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-xl" variants={itemVariants}>
        I create digital experiences that combine visual appeal with functionality, focusing on clean code and user-friendly design.
      </motion.p>

      <CTAButtons />
    </div>
  );
};