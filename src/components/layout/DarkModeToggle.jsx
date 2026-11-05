import { motion, AnimatePresence } from 'framer-motion';
import { transitions } from '../../utils/motion';

const DarkModeToggle = ({ isDarkMode, onToggle, isLoaded = true }) => {
  const iconKey = isDarkMode ? 'dark' : 'light';
  const ariaLabel = isDarkMode 
    ? 'Switch to Light Mode (Currently Dark Mode)' 
    : 'Switch to Dark Mode (Currently Light Mode)';
  const tooltipText = isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode';
  const iconColor = isDarkMode ? 'text-neutral-200' : 'text-neutral-800';

  return (
    <motion.button
      onClick={onToggle}
      className="
        w-11 h-11
        bg-white/80 dark:bg-neutral-900/80
        rounded-full
        flex items-center justify-center
        shadow-sm
        backdrop-blur-md
        border border-neutral-200/80 dark:border-white/10
        group
        focus:outline-none focus:ring-2 focus:ring-neutral-400/30 dark:focus:ring-white/20
        hover:border-neutral-400 dark:hover:border-white/20
        hover:text-neutral-900 dark:hover:text-white
        transition-colors
      "
      aria-label={ariaLabel}
      whileHover={{ scale: 1.1, transition: { duration: transitions.duration.fast, ease: transitions.smoothEase } }}
      whileTap={{ scale: 0.9, transition: { duration: 0.1 } }}
      initial={{ opacity: 0, x: 20 }}
      animate={isLoaded ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
      transition={{ duration: transitions.duration.normal, delay: 0.15, ease: transitions.smoothEase }}
    >
      <AnimatePresence mode="wait">
        <motion.div
          className="relative w-5 h-5"
          key={iconKey}
          initial={{ rotate: 0, opacity: 0.8 }}
          animate={{ rotate: 180, opacity: 1 }}
          exit={{ rotate: 0, opacity: 0 }}
          transition={{ duration: transitions.duration.fast, ease: transitions.smoothEase }}
        >
          {isDarkMode ? (
            <svg className={`w-full h-full ${iconColor}`} fill="currentColor" viewBox="0 0 20 20">
              <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
            </svg>
          ) : (
            <svg className={`w-full h-full ${iconColor}`} fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
            </svg>
          )}
        </motion.div>
      </AnimatePresence>

      <span className="
        absolute -bottom-8 left-1/2 -translate-x-1/2
        px-2 py-1 bg-black/80 dark:bg-white/90
        text-white dark:text-black text-xs rounded
        opacity-0 group-hover:opacity-100
        transition-opacity duration-200 whitespace-nowrap
        pointer-events-none text-center
      ">
        {tooltipText}
      </span>
    </motion.button>
  );
};

export default DarkModeToggle;