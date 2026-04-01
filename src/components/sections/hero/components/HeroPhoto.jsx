import { motion } from 'framer-motion';
import { photoVariants, floatingBadgeVariants } from '../constants/heroVariants';

export const HeroPhoto = ({ 
  photoSrc = '/src/assets/img/1.png', 
  altText = 'Muhammad Taufik Ediansyah - Frontend Developer',
  badgeText = 'React.js'
}) => {
  return (
    <div className="lg:w-1/2 order-1 lg:order-2 flex justify-center">
      <motion.div className="relative" variants={photoVariants} whileHover="hover">
        {/* Rotating border */}
        <motion.div className="absolute -inset-3 sm:-inset-4">
          <motion.div
            className="absolute inset-0 rounded-2xl sm:rounded-3xl border border-gray-300/30 dark:border-gray-600/30"
            animate={{ rotate: 360 }}
            transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
          />
        </motion.div>

        {/* Photo container */}
        <motion.div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-[28rem] lg:h-[28rem] overflow-hidden rounded-2xl sm:rounded-[2rem] shadow-xl">
          <motion.img
            src={photoSrc}
            alt={altText}
            className="w-full h-full object-cover object-top"
            initial={{ scale: 1.08 }}
            animate={{ scale: 1 }}
            transition={{ type: 'tween', duration: 0.7, ease: 'easeOut' }}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 1.05 }}
          />
          {/* Fallback placeholder (hidden by default) */}
          <div className="w-full h-full bg-gradient-to-br from-gray-900 to-gray-800 dark:from-gray-800 dark:to-gray-700 flex items-center justify-center hidden">
            <div className="text-center">
              <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-full overflow-hidden mx-auto mb-4 sm:mb-6 bg-gradient-to-br from-gray-700 to-gray-900 dark:from-gray-600 dark:to-gray-800 flex items-center justify-center">
                <svg className="w-20 h-20 sm:w-24 sm:h-24 text-gray-400 dark:text-gray-300" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                </svg>
              </div>
              <p className="text-gray-400 dark:text-gray-300 text-sm sm:text-base">Your Photo</p>
            </div>
          </div>
        </motion.div>

        {/* Floating badge */}
        <motion.div
          className="absolute -bottom-3 right-4 sm:-bottom-6 sm:right-8 px-4 sm:px-6 py-2 sm:py-3 bg-white/95 dark:bg-gray-900/95 backdrop-blur-md rounded-xl shadow-lg border border-gray-200/50 dark:border-gray-700/50"
          variants={floatingBadgeVariants}
          animate={['visible', 'float']}
        >
          <div className="flex items-center gap-2 sm:gap-3">
            <motion.div
              className="w-2 h-2 sm:w-3 sm:h-3 bg-green-500 rounded-full"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            />
            <span className="text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300">Open to Work</span>
            <span className="text-xs sm:text-sm font-bold text-blue-600 dark:text-blue-400">{badgeText}</span>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};