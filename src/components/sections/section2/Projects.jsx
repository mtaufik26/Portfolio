// src/components/sections/Projects.jsx
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState, useRef } from 'react';

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const [hoveredCard, setHoveredCard] = useState(null);
  const [showAll, setShowAll] = useState(false);
  
  // Ref untuk section projects
  const sectionRef = useRef(null);
  // Ref untuk menyimpan posisi scroll saat expand
  const expandScrollPosition = useRef(null);

  // Animasi container dengan stagger (hanya untuk first load)
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  // Animasi untuk 4 project pertama (stagger dari bawah)
  const firstItemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'tween',
        duration: 0.7,
        ease: 'easeOut',
      },
    },
  };

  // Animasi ringan untuk project tambahan (fade + slide dari samping)
  const additionalItemVariants = {
    hidden: { opacity: 0, x: 30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.4,
        ease: 'easeOut',
      },
    },
  };

  // Handler toggle dengan save/restore scroll position
  const handleToggleProjects = () => {
    if (!showAll) {
      // 📥 Saat EXPAND: Simpan posisi scroll saat ini
      expandScrollPosition.current = window.scrollY;
    } else {
      // 📤 Saat COLLAPSE: Kembalikan ke posisi yang disimpan
      if (expandScrollPosition.current !== null) {
        window.scrollTo({
          top: expandScrollPosition.current,
          behavior: 'smooth',
        });
        // Reset setelah scroll selesai (opsional, untuk mencegah konflik jika expand lagi)
        setTimeout(() => {
          expandScrollPosition.current = null;
        }, 500);
      }
    }
    setShowAll(!showAll);
  };

  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'Full-featured online store with cart, payment, and admin dashboard.',
      tech: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      image: '/src/assets/img/project1.jpg',
      demo: true,
      liveUrl: '#',
      githubUrl: '#',
    },
    {
      title: 'Task Management App',
      description: 'Collaborative to-do app with real-time sync and team features.',
      tech: ['Next.js', 'Firebase', 'Tailwind CSS'],
      image: '/src/assets/img/project2.jpg',
      demo: false,
      liveUrl: '#',
      githubUrl: '#',
    },
    {
      title: 'Portfolio Generator',
      description: 'Dynamic portfolio builder with drag-and-drop and live preview.',
      tech: ['React', 'Express', 'PostgreSQL'],
      image: '/src/assets/img/project3.jpg',
      demo: false,
      liveUrl: '#',
      githubUrl: '#',
    },
    {
      title: 'Fitness Tracker',
      description: 'Mobile-first app for logging workouts and tracking progress.',
      tech: ['Flutter', 'Dart', 'Firebase'],
      image: '/src/assets/img/project4.jpg',
      demo: false,
      liveUrl: '#',
      githubUrl: '#',
    },
    // Project tambahan untuk testing toggle
    {
      title: 'Weather Dashboard',
      description: 'Real-time weather app with location detection and forecasts.',
      tech: ['React', 'OpenWeather API', 'Chart.js'],
      image: '/src/assets/img/project5.jpg',
      demo: false,
      liveUrl: '#',
      githubUrl: '#',
    },
    {
      title: 'Chat Application',
      description: 'End-to-end encrypted messaging with file sharing support.',
      tech: ['Socket.io', 'Express', 'Redis'],
      image: '/src/assets/img/project6.jpg',
      demo: true,
      liveUrl: '#',
      githubUrl: '#',
    },
  ];

  const displayedProjects = showAll ? projects : projects.slice(0, 4);
  const hasMoreProjects = projects.length > 4;

  return (
    <motion.section
      ref={(node) => {
        // Gabungkan ref dari useInView dan useRef
        if (typeof ref === 'function') {
          ref(node);
        } else if (ref) {
          ref.current = node;
        }
        sectionRef.current = node;
      }}
      className="min-h-screen flex items-center px-4 sm:px-6 lg:px-8 relative overflow-hidden"
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={containerVariants}
    >
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        <motion.div
          className="absolute top-1/4 -left-20 w-80 h-80 bg-gradient-to-r from-blue-500/4 to-transparent rounded-full blur-3xl"
          animate={{ x: [0, 10, 0], y: [0, -10, 0] }}
          transition={{ duration: 24, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute bottom-1/4 -right-20 w-80 h-80 bg-gradient-to-l from-purple-500/4 to-transparent rounded-full blur-3xl"
          animate={{ x: [0, -15, 0], y: [0, 15, 0] }}
          transition={{ duration: 28, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        />
      </div>

      <div className="max-w-6xl mx-auto w-full py-16 sm:py-24">
        <motion.div className="text-center mb-12 sm:mb-16" variants={containerVariants}>
          <motion.h2 className="text-3xl sm:text-4xl font-bold from-gray-900 to-gray-600 dark:text-white mb-4" variants={firstItemVariants}>
            <span className="bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-400 bg-clip-text text-transparent">
              Featured {" "}
            </span>
            {/* <br className="hidden sm:block" /> */}
            <span className="bg-gradient-to-r from-blue-500 to-blue-600 dark:from-blue-400 dark:to-blue-500 bg-clip-text text-transparent">
              Projects
            </span>
          </motion.h2>
          <motion.p
            className="max-w-2xl mx-auto text-base sm:text-lg text-gray-600 dark:text-gray-300 leading-relaxed"
            variants={firstItemVariants}
          >
            A selection of my recent work — built with performance, usability, and clean code in mind.
          </motion.p>
        </motion.div>

        {/* Grid Projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {displayedProjects.map((project, i) => {
            const isInitialItem = i < 4;
            
            return (
              <motion.div
                key={`${project.title}-${i}`}
                className="group bg-white/95 dark:bg-gray-900/30 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 rounded-xl overflow-hidden relative"
                initial={isInitialItem ? 'hidden' : 'hidden'}
                animate={isInitialItem ? (inView ? 'visible' : 'hidden') : 'visible'}
                variants={isInitialItem ? firstItemVariants : additionalItemVariants}
                whileHover={{
                  y: -4,
                  scale: 1.02,
                  boxShadow: '0 20px 25px -5px rgba(0,0,0,0.1), 0 10px 10px -5px rgba(0,0,0,0.06)',
                  transition: {
                    duration: 0.25,
                    ease: 'easeOut',
                  },
                }}
                whileTap={{ scale: 0.98 }}
                onMouseEnter={() => setHoveredCard(i)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* Efek overlay gradient pada hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 via-transparent to-purple-500/0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none rounded-xl" />
                
                {/* Border highlight pada hover */}
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-blue-400/30 dark:group-hover:border-blue-500/30 rounded-xl transition-all duration-500 pointer-events-none" />

                {/* Gambar Container */}
                <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 flex items-center justify-center relative overflow-hidden">
                  {/* Overlay gradient pada hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/0 via-transparent to-transparent group-hover:from-black/5 group-hover:via-black/2 group-hover:to-black/0 transition-all duration-500 z-10 pointer-events-none" />
                  
                  {/* Highlight atas gambar */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-blue-500/0 to-transparent group-hover:via-blue-500/30 transition-all duration-500 z-10" />
                  
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110 group-hover:brightness-110"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      const fallback = e.target.nextElementSibling;
                      if (fallback) fallback.style.display = 'flex';
                    }}
                  />
                  
                  {/* Fallback jika gambar error */}
                  <div className="absolute inset-0 hidden flex-col items-center justify-center text-gray-500 dark:text-gray-400 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900">
                    <div className="relative">
                      <svg className="w-12 h-12 mb-2" fill="currentColor" viewBox="0 0 20 20">
                        <path
                          fillRule="evenodd"
                          d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <div className="absolute inset-0 bg-blue-500/10 rounded-full blur-md" />
                    </div>
                    <span className="text-sm font-medium mt-2">{project.title}</span>
                  </div>
                </div>

                {/* Content Area */}
                <div className="p-6 relative">
                  {/* Accent Line */}
                  <div className="absolute top-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-blue-500/0 to-transparent group-hover:via-blue-500/40 transition-all duration-500" />
                  
                  {/* Title */}
                  <h3 className="font-bold text-lg text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors duration-300 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="mb-6">
                    <p className="text-xs font-medium text-gray-500 dark:text-gray-500 mb-2 group-hover:text-gray-600 dark:group-hover:text-gray-400 transition-colors duration-300">
                      Built with
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, idx) => (
                        <motion.span
                          key={idx}
                          className="px-3 py-1.5 bg-gray-100 dark:bg-gray-700/50 text-xs text-gray-700 dark:text-gray-300 rounded-lg border border-gray-200/50 dark:border-gray-700/50 backdrop-blur-sm cursor-default"
                          whileHover={{ 
                            scale: 1.05,
                            backgroundColor: "rgb(59 130 246 / 0.1)",
                            borderColor: "rgb(59 130 246 / 0.3)",
                            transition: { duration: 0.2 }
                          }}
                          transition={{ duration: 0.3 }}
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-200/50 dark:border-gray-700/50 group-hover:border-gray-300/50 dark:group-hover:border-gray-600/50 transition-colors duration-300">
                    <div className="flex gap-4">
                      <a
                        href={project.githubUrl}
                        className="flex items-center gap-2 text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 group/link"
                      >
                        <svg className="w-4 h-4 group-hover/link:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                        </svg>
                        <span>View Code</span>
                      </a>
                      {project.demo && (
                        <a
                          href={project.liveUrl}
                          className="flex items-center gap-2 text-sm font-medium text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-all duration-300 group/link"
                        >
                          <svg className="w-4 h-4 group-hover/link:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                          <span>Live Demo</span>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Toggle Button - Text Style, Posisi Kanan */}
        {hasMoreProjects && (
          <motion.div 
            className="flex justify-end mt-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <motion.button
              onClick={handleToggleProjects}
              className="group relative inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 font-semibold text-sm tracking-wide hover:text-blue-700 dark:hover:text-blue-300 transition-colors duration-300 cursor-pointer"
              whileHover={{ x: 4 }}
              whileTap={{ scale: 0.95 }}
            >
              {/* Animated underline effect */}
              <span className="relative">
                {showAll ? 'Tampilkan Lebih Sedikit' : 'Lihat Semua Project'}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 group-hover:w-full transition-all duration-300 ease-out" />
              </span>
              
              {/* Icon dengan animasi */}
              <motion.span
                className="flex items-center justify-center w-6 h-6 rounded-full border border-blue-600/30 dark:border-blue-400/30 group-hover:border-blue-600/60 dark:group-hover:border-blue-400/60 group-hover:bg-blue-600/10 transition-all duration-300"
                animate={{ 
                  rotate: showAll ? 0 : 180,
                  borderColor: showAll ? 'rgba(59, 130, 246, 0.3)' : 'rgba(59, 130, 246, 0.6)'
                }}
              >
                <svg className="w-3 h-3 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </motion.span>
            </motion.button>
          </motion.div>
        )}
      </div>
    </motion.section>
  );
};

export default Projects;