import { useState, useEffect, lazy, Suspense } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Layout Components (eagerly loaded — visible on first paint)
import Sidebar from './components/layout/Sidebar';
import Navbar from './components/layout/Navbar';
import LoadingScreen from './components/layout/LoadingScreen';

// Background & Footer
import ParticleBackground from './components/layout/ParticlesBackground';
const Footer = lazy(() => import('./components/layout/Footer'));

// Section Components (all below-fold — lazy loaded)
const Hero = lazy(() => import('./components/sections/hero/Hero'));
const About = lazy(() => import('./components/sections/about/About'));
const Services = lazy(() => import('./components/sections/services/Services'));
const Projects = lazy(() => import('./components/sections/projects/Projects'));
const Certificate = lazy(() => import('./components/sections/certificates/Certificates'));
const Contact = lazy(() => import('./components/sections/contact/Contact'));

// Hooks & Utils
import { useDarkMode } from './hooks/useDarkMode';

// Minimal transparent fallback — preserves scroll rhythm without layout shift
const SectionFallback = ({ minH = 'min-h-screen' }) => (
  <div className={`${minH} w-full`} aria-hidden="true" />
);

// Constants
const SECTION_IDS = ['home', 'about', 'services', 'projects', 'certificates', 'contact'];
const INITIAL_MOUNT_DURATION = 950; // Smooth editorial mount transition
const SCROLL_OFFSET = 120;

const App = () => {
  // State
  const [isLoading, setIsLoading] = useState(true);
  const [currentSection, setCurrentSection] = useState('home');
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  
  const { darkMode, toggleDarkMode } = useDarkMode();

  useEffect(() => {
    // Graceful mount transition: only brief initial setup
    const timer = setTimeout(() => setIsLoading(false), INITIAL_MOUNT_DURATION);
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
    let sectionPositions = [];

    const measurePositions = () => {
      sectionPositions = SECTION_IDS.map((id) => {
        const el = document.getElementById(id);
        if (!el) return null;
        return {
          id,
          top: el.offsetTop - SCROLL_OFFSET,
          bottom: el.offsetTop + el.offsetHeight - SCROLL_OFFSET,
        };
      }).filter(Boolean);
    };

    measurePositions();
    const timer = setTimeout(measurePositions, 1000);
    window.addEventListener('resize', measurePositions, { passive: true });

    let ticking = false;
    const handleScroll = () => {
      if (ticking) return;
      
      window.requestAnimationFrame(() => {
        const scrollY = window.scrollY;
        
        for (let i = 0; i < sectionPositions.length; i++) {
          const { id, top, bottom } = sectionPositions[i];
          if (scrollY >= top && scrollY < bottom) {
            setCurrentSection((prev) => (prev === id ? prev : id));
            break;
          }
        }
        ticking = false;
      });
      ticking = true;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', measurePositions);
    };
  }, [isLoading]);

  const toggleSidebar = () => setIsSidebarOpen(prev => !prev);
  const closeSidebar = () => isMobile && setIsSidebarOpen(false);

  return (
    <>
      <AnimatePresence>
        {isLoading && (
          <LoadingScreen key="loading" darkMode={darkMode} />
        )}
      </AnimatePresence>

      {/* Interactive Particle Network Background */}
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
        isLoaded={!isLoading}
      />

      <AnimatePresence>
        {isSidebarOpen && isMobile && (
          <motion.div
            className="fixed inset-0 z-40 bg-black/60 backdrop-blur-xs"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={closeSidebar}
            aria-hidden="true"
          />
        )}
      </AnimatePresence>

      <AnimatePresence mode="wait">
        {isSidebarOpen && (
          <Sidebar
            key="sidebar"
            currentSection={currentSection}
            isOpen={isSidebarOpen}
            isMobile={isMobile}
            isLoaded={!isLoading}
            onClose={isMobile ? closeSidebar : undefined}
          />
        )}
      </AnimatePresence>

      <main
        className={`
          relative z-10 min-h-screen
          text-neutral-900 dark:text-white
          transition-colors duration-300
          ${!isMobile && isSidebarOpen ? 'ml-20' : 'ml-0'}
          pt-16 md:pt-0 overflow-x-hidden
        `}
      >
        <Suspense fallback={<SectionFallback />}>
          <section id="home"><Hero isLoaded={!isLoading} /></section>
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <section id="about"><About /></section>
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <section id="services"><Services /></section>
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <section id="projects"><Projects /></section>
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <section id="certificates"><Certificate /></section>
        </Suspense>
        <Suspense fallback={<SectionFallback />}>
          <section id="contact"><Contact /></section>
        </Suspense>
        <Suspense fallback={null}>
          <Footer />
        </Suspense>
      </main>
    </>
  );
};

export default App;