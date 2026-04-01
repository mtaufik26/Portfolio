import { motion } from 'framer-motion';
import DarkModeToggle from './DarkModeToggle';

const Navbar = ({ isDarkMode, onToggleDarkMode, isMobile, isSidebarOpen, onToggleSidebar }) => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-40 h-16 pointer-events-none">
      <div className="relative h-full w-full px-4 flex items-center justify-between pointer-events-auto">
        
        {isMobile && (
          <motion.button
            onClick={onToggleSidebar}
            className="
              w-10 h-10 bg-white/10 dark:bg-black/20 backdrop-blur-sm
              rounded-full flex items-center justify-center shadow-lg
              border border-white/10 text-gray-800 dark:text-white
              hover:bg-white/20 dark:hover:bg-black/30 transition-colors
              focus:outline-none focus:ring-2 focus:ring-indigo-400
            "
            aria-label={isSidebarOpen ? 'Tutup menu' : 'Buka menu'}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3 }}
          >
            {isSidebarOpen ? (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </motion.button>
        )}

        {!isMobile && <div className="w-10" />}
        
        <DarkModeToggle isDarkMode={isDarkMode} onToggle={onToggleDarkMode} />
      </div>
    </nav>
  );
};

export default Navbar;