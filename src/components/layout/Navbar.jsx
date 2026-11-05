import { motion } from 'framer-motion';
import DarkModeToggle from './DarkModeToggle';
import { transitions } from '../../utils/motion';

const Navbar = ({ isDarkMode, onToggleDarkMode, isMobile, isSidebarOpen, onToggleSidebar, isLoaded = true }) => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-40 h-16 pointer-events-none">
      <div className="relative h-full w-full px-4 flex items-center justify-between pointer-events-auto">
        
        {isMobile && !isSidebarOpen && (
          <motion.button
            onClick={onToggleSidebar}
            className="
              w-10 h-10 bg-white/90 dark:bg-[#070709]/90 backdrop-blur-md
              rounded-xl flex items-center justify-center shadow-xs
              border border-neutral-200/80 dark:border-white/10 text-neutral-800 dark:text-neutral-200
              hover:text-neutral-900 dark:hover:text-white hover:border-neutral-300 dark:hover:border-white/20 transition-colors
              focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer
            "
            aria-label="Open navigation menu"
            whileHover={{ scale: 1.05, transition: { duration: transitions.duration.fast, ease: transitions.smoothEase } }}
            whileTap={{ scale: 0.95, transition: { duration: 0.1 } }}
            initial={{ opacity: 0, x: -16 }}
            animate={isLoaded ? { opacity: 1, x: 0 } : { opacity: 0, x: -16 }}
            transition={{ duration: transitions.duration.normal, delay: 0.15, ease: transitions.smoothEase }}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </motion.button>
        )}

        {(!isMobile || isSidebarOpen) && <div className="w-10" />}
        
        <DarkModeToggle isDarkMode={isDarkMode} onToggle={onToggleDarkMode} isLoaded={isLoaded} />
      </div>
    </nav>
  );
};

export default Navbar;