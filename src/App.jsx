import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Layout Components
import Sidebar from './components/layout/Sidebar';
import ParticleBackground from './components/layout/ParticlesBackground';
import LoadingScreen from './components/layout/LoadingScreen';
import Navbar from './components/layout/Navbar';

// Section Components
import Hero from './components/sections/hero/Hero';
import About from './components/sections/about/About';
import Services from './components/sections/services/Services';
import Projects from './components/sections/projects/Projects';
import Certificate from './components/sections/certificates/Certificates';
import Contact from './components/sections/contact/Contact';

// Hooks & Utils
import { useDarkMode } from './hooks/useDarkMode';

// Constants
const SECTION_IDS = ['home', 'about', 'services', 'projects', 'certificate', 'contact'];
const LOADING_DURATION = 2500;
const SCROLL_OFFSET = 120;

const App = () => {
  // State
  const [isLoading, setIsLoading] = useState(true);
  const [currentSection, setCurrentSection] = useState('home');
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  
  const { darkMode, toggleDarkMode } = useDarkMode();

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), LOADING_DURATION);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isLoading ? 'hidden' : 'unset';
    return () => { document.body.style.overflow = 'unset'; };
  }, [isLoading]);

  useEffect(() => {
    const checkScreenSize = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      setIsSidebarOpen(!mobile);
    };
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (ticking) return;
      
      window.requestAnimationFrame(() => {
        const scrollY = window.scrollY;
        
        for (const id of SECTION_IDS) {
          const el = document.getElementById(id);
          if (!el) continue;

          const { offsetTop, offsetHeight } = el;
          if (scrollY >= offsetTop - SCROLL_OFFSET && scrollY < offsetTop + offsetHeight - SCROLL_OFFSET) {
            setCurrentSection(id);
            break;
          }
        }
        ticking = false;
      });
      ticking = true;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleSidebar = () => setIsSidebarOpen(prev => !prev);
  const closeSidebar = () => isMobile && setIsSidebarOpen(false);

  if (isLoading) {
    return (
      <AnimatePresence mode="wait">
        <LoadingScreen key="loading" darkMode={darkMode} />
      </AnimatePresence>
    );
  }

  return (
    <>
      <ParticleBackground darkMode={darkMode} />
      <div
        className="fixed inset-0 z-[-2] transition-colors duration-300"
        style={{ backgroundColor: darkMode ? '#000000' : '#ffffff' }}
      />

      <Navbar
        isDarkMode={darkMode}
        onToggleDarkMode={toggleDarkMode}
        isMobile={isMobile}
        isSidebarOpen={isSidebarOpen}
        onToggleSidebar={toggleSidebar}
      />

      <AnimatePresence>
        {isSidebarOpen && isMobile && (
          <motion.div
            className="fixed inset-0 z-20 bg-black/50 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={closeSidebar}
          />
        )}
      </AnimatePresence>

      <AnimatePresence mode="wait">
        {isSidebarOpen && (
          <Sidebar
            key="sidebar"
            currentSection={currentSection}
            isOpen={isSidebarOpen}
            onClose={isMobile ? closeSidebar : undefined}
          />
        )}
      </AnimatePresence>

      <main
        className={`
          relative z-10 min-h-screen
          text-gray-900 dark:text-gray-100
          transition-colors duration-300
          transition-all duration-300
          ${!isMobile && isSidebarOpen ? 'ml-20' : 'ml-0'}
          pt-16 md:pt-0 overflow-x-hidden
        `}
      >
        <section id="home"><Hero /></section>
        <section id="about"><About /></section>
        <section id="services"><Services /></section>
        <section id="projects"><Projects /></section>
        <section id="contact"><Contact /></section>
      </main>
    </>
  );
};

export default App;