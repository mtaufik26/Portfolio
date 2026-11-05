// src/components/layout/Sidebar.jsx
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  FaHome,
  FaUser,
  FaBriefcase,
  FaCode,
  FaAward,
  FaEnvelope,
} from "react-icons/fa";
import { transitions } from '../../utils/motion';

const Sidebar = ({ currentSection, isOpen, isMobile, isLoaded = true, onClose }) => {
  // Lock body scroll and handle Escape key on mobile drawer
  useEffect(() => {
    if (!isMobile || !isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose?.();
      }
    };

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isMobile, isOpen, onClose]);

  if (!isOpen) return null;

  const navItems = [
    { id: 'home', label: 'Home', icon: <FaHome className="w-4 h-4" /> },
    { id: 'about', label: 'About', icon: <FaUser className="w-4 h-4" /> },
    { id: 'services', label: 'Services', icon: <FaBriefcase className="w-4 h-4" /> },
    { id: 'projects', label: 'Projects', icon: <FaCode className="w-4 h-4" /> },
    { id: 'certificates', label: 'Certificates', icon: <FaAward className="w-4 h-4" /> },
    { id: 'contact', label: 'Contact', icon: <FaEnvelope className="w-4 h-4" /> },
  ];

  const itemVariants = {
    hidden: { opacity: 0, y: 10, scale: 0.95 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        delay: i * 0.04,
        duration: transitions.duration.fast,
        ease: transitions.smoothEase,
      },
    }),
  };

  // Dedicated Responsive Mobile Navigation Drawer (Full Accessibility & Dark/Light Theme Integration)
  if (isMobile) {
    return (
      <motion.aside
        className="fixed top-0 left-0 h-full z-50 w-72 max-w-[85vw] flex flex-col justify-between
          bg-white/95 dark:bg-[#070709]/95
          border-r border-neutral-200/90 dark:border-white/[0.08]
          backdrop-blur-xl
          shadow-2xl p-5 sm:p-6"
        initial={{ x: '-100%' }}
        animate={{ x: 0 }}
        exit={{ x: '-100%' }}
        transition={{
          type: "spring",
          stiffness: 280,
          damping: 30,
        }}
        aria-label="Mobile Navigation Menu"
      >
        <div className="space-y-6">
          {/* Mobile Drawer Header */}
          <div className="flex items-center justify-between pb-4 border-b border-neutral-100 dark:border-white/[0.06]">
            <div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-blue-600 dark:bg-blue-400" aria-hidden="true" />
                <span className="text-sm font-bold text-neutral-900 dark:text-white tracking-tight">
                  Taufik Ediansyah
                </span>
              </div>
              <span className="text-[11px] font-mono text-neutral-500 dark:text-neutral-400 block mt-0.5">
                Frontend Developer
              </span>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-xl border border-neutral-200/80 dark:border-white/10 text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white hover:border-neutral-300 dark:hover:border-white/20 hover:bg-neutral-50 dark:hover:bg-white/[0.06] transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer"
              aria-label="Close navigation menu"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Navigation Links with Explicit Labels */}
          <nav className="space-y-1.5" aria-label="Mobile navigation">
            {navItems.map((item, i) => {
              const isActive = currentSection === item.id;
              return (
                <motion.a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={onClose}
                  custom={i}
                  variants={itemVariants}
                  initial="hidden"
                  animate="visible"
                  className={`flex items-center justify-between px-3.5 py-2.5 rounded-xl transition-all duration-150 text-sm font-semibold select-none ${
                    isActive
                      ? 'bg-blue-600 text-white shadow-xs'
                      : 'text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-white/[0.06] hover:text-neutral-900 dark:hover:text-white'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className={isActive ? 'text-white' : 'text-neutral-500 dark:text-neutral-400'}>
                      {item.icon}
                    </span>
                    <span>{item.label}</span>
                  </div>
                  {isActive && (
                    <span className="w-1.5 h-1.5 rounded-full bg-white" aria-hidden="true" />
                  )}
                </motion.a>
              );
            })}
          </nav>
        </div>

        {/* Drawer Bottom Status & Note */}
        <div className="pt-4 border-t border-neutral-100 dark:border-white/[0.06] space-y-2">
          <div className="flex items-center gap-2 text-xs font-medium text-emerald-600 dark:text-emerald-400">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 inline-block" aria-hidden="true" />
            <span>Available for Work</span>
          </div>
          <p className="text-[11px] font-mono text-neutral-400 dark:text-neutral-500">
            © 2026 Taufik Ediansyah
          </p>
        </div>
      </motion.aside>
    );
  }

  // Desktop Dock Sidebar
  return (
    <motion.aside
      className="hidden md:flex fixed top-0 left-0 h-full z-30 flex-col items-center justify-center py-6
        bg-white/90 dark:bg-[#070709]/95
        border-r border-neutral-200/80 dark:border-white/[0.08]
        backdrop-blur-md
        shadow-[0_4px_24px_rgba(0,0,0,0.03)] dark:shadow-[0_4px_30px_rgba(0,0,0,0.5)]"
      style={{ width: '80px', minWidth: '80px' }}
      initial={{ x: -80, opacity: 0 }}
      animate={isLoaded ? { x: 0, opacity: 1 } : { x: -80, opacity: 0 }}
      exit={{ x: -80, opacity: 0 }}
      transition={{
        duration: 0.6,
        ease: transitions.smoothEase,
        delay: 0.1,
      }}
      aria-label="Desktop Sidebar"
    >
      {/* Navigation Stack */}
      <nav className="flex flex-col items-center space-y-3.5" aria-label="Desktop sidebar navigation">
        {navItems.map((item, i) => {
          const isActive = currentSection === item.id;
          
          return (
            <div key={item.id} className="relative group flex items-center">
              <motion.a
                href={`#${item.id}`}
                aria-label={item.label}
                className="relative w-11 h-11 rounded-xl transition-all duration-200 flex items-center justify-center select-none"
                onClick={onClose}
                custom={i}
                variants={itemVariants}
                initial="hidden"
                animate={isLoaded ? "visible" : "hidden"}
                whileHover={{
                  scale: 1.05,
                  transition: { duration: transitions.duration.fast, ease: transitions.smoothEase },
                }}
                whileTap={{
                  scale: 0.95,
                  transition: { duration: 0.1 },
                }}
              >
                {/* Active Sliding Background Pill with Solid Clean Color (Zero Neon) */}
                {isActive ? (
                  <motion.div
                    layoutId="activeDockPill"
                    className="absolute inset-0 rounded-xl bg-blue-600 shadow-xs"
                    transition={{
                      type: "spring",
                      stiffness: 380,
                      damping: 30,
                    }}
                  />
                ) : (
                  <div className="absolute inset-0 rounded-xl transition-colors duration-150 hover:bg-neutral-100 dark:hover:bg-white/[0.06] border border-transparent hover:border-neutral-200/80 dark:hover:border-white/10" />
                )}

                {/* Navigation Icon */}
                <span className={`relative z-10 transition-colors duration-200 ${
                  isActive
                    ? 'text-white'
                    : 'text-neutral-500 dark:text-neutral-400 group-hover:text-neutral-900 dark:group-hover:text-white'
                }`}>
                  {item.icon}
                </span>
              </motion.a>

              {/* Tooltip with Pointer Arrow */}
              <div className="
                absolute left-14 flex items-center opacity-0 group-hover:opacity-100 
                pointer-events-none transition-all duration-150 
                translate-x-1 group-hover:translate-x-0 z-50 select-none
              ">
                <div className="w-1.5 h-1.5 rotate-45 bg-neutral-900 dark:bg-[#1A1A1F] border-l border-b border-neutral-800 dark:border-white/10 -mr-1 z-10" />
                <span className="
                  px-2.5 py-1 
                  bg-neutral-900 text-white 
                  dark:bg-[#1A1A1F] dark:text-neutral-100 
                  border border-neutral-800 dark:border-white/10
                  text-xs font-semibold rounded-lg 
                  shadow-lg whitespace-nowrap
                ">
                  {item.label}
                </span>
              </div>
            </div>
          );
        })}
      </nav>
    </motion.aside>
  );
};

export default Sidebar;