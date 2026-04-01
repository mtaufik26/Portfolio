// src/components/sections/Hero.jsx
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState, useEffect } from 'react';

const Hero = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // === Animasi mengetik manual dengan loop penuh ===
  const fullText = "Frontend Developer";
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(120); // ms per karakter

  useEffect(() => {
    const handleTyping = () => {
      if (!inView) return;

      if (!isDeleting) {
        // Mengetik
        if (displayText.length < fullText.length) {
          setDisplayText(fullText.substring(0, displayText.length + 1));
          setTypingSpeed(120); // normal speed
        } else {
          // Selesai mengetik → jeda → mulai hapus
          setTimeout(() => setIsDeleting(true), 1200); // jeda 1.2 detik
        }
      } else {
        // Menghapus
        if (displayText.length > 0) {
          setDisplayText(fullText.substring(0, displayText.length - 1));
          setTypingSpeed(80); // hapus sedikit lebih cepat
        } else {
          // Selesai hapus → mulai ketik ulang
          setIsDeleting(false);
          setLoopNum(loopNum + 1);
        }
      }
    };

    const timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, loopNum, typingSpeed, fullText, inView]);

  // Easing smooth yang konsisten
  const smoothEase = [0.25, 0.46, 0.45, 0.94];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
        ease: smoothEase,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 24, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'tween',
        duration: 0.6,
        ease: smoothEase,
      },
    },
  };

  const photoVariants = {
    hidden: { scale: 0.92, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: 'spring',
        damping: 30,
        stiffness: 100,
        mass: 0.6,
        delay: 0.4,
      },
    },
    hover: {
      scale: 1.02,
      transition: {
        type: 'spring',
        damping: 20,
        stiffness: 200,
        mass: 0.5,
      },
    },
  };

  const floatingBadgeVariants = {
    hidden: { y: 10, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        delay: 0.7,
        duration: 0.5,
        ease: smoothEase,
      },
    },
    float: {
      y: [0, -5, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: 'easeInOut',
      },
    },
  };

  const scrollIndicatorVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { delay: 1.2, duration: 0.4 },
    },
    bounce: {
      y: [0, 10, 0],
      transition: {
        duration: 1.5,
        repeat: Infinity,
        ease: 'easeInOut',
      },
    },
  };

  const runningTextVariants = {
    animate: {
      x: ['100%', '-100%'],
      transition: {
        repeat: Infinity,
        repeatType: 'loop',
        duration: 12,
        ease: 'linear',
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      className="min-h-screen flex items-center px-4 sm:px-6 lg:px-8 xl:px-12 relative overflow-hidden"
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      style={{ perspective: 1000 }}
    >
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/4 -left-16 sm:-left-20 w-72 sm:w-96 h-72 sm:h-96 bg-gradient-to-r from-blue-500/5 to-transparent rounded-full blur-3xl"
          animate={{ x: [0, 10, 0], y: [0, -10, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute bottom-1/4 -right-16 sm:-right-20 w-72 sm:w-96 h-72 sm:h-96 bg-gradient-to-l from-purple-500/5 to-transparent rounded-full blur-3xl"
          animate={{ x: [0, -15, 0], y: [0, 15, 0] }}
          transition={{ duration: 25, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
        />
      </div>

      <div className="container mx-auto relative z-10">
        <motion.div
          className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12 xl:gap-16"
          variants={containerVariants}
        >
          <div className="lg:w-1/2 order-2 lg:order-1 mt-12 lg:mt-0">
            <motion.div
              className="space-y-2 sm:space-y-4 mb-6 sm:mb-8"
              variants={itemVariants}
            >
              <motion.span className="block text-gray-500 dark:text-gray-400 font-light text-base sm:text-lg md:text-xl tracking-wide">
                HELLO, Saya
              </motion.span>

              <h1 className="text-4xl sm:text-4xl md:text-6xl lg:text-6xl font-bold tracking-tight">
                <motion.span className="block text-gray-800 dark:text-gray-100 leading-[0.9]">
                  Alex
                </motion.span>
                <motion.span className="block text-gray-800 dark:text-gray-100 leading-[0.9] mt-2 sm:mt-4">
                  Morgan
                </motion.span>
              </h1>
            </motion.div>

            <motion.div
              className="relative overflow-hidden mt-1"
              variants={itemVariants}
            >
              {/* Teks dengan animasi mengetik + menghapus + loop */}
              <span className="block text-lg sm:text-xl md:text-2xl font-semibold text-gray-800 dark:text-gray-100">
                {displayText}
                {/* Kursor berkedip */}
                <motion.span
                  className="inline-block w-0.5 h-6 sm:h-7 ml-1 align-baseline bg-gray-800 dark:bg-gray-100"
                  animate={{ opacity: [1, 0] }}
                  transition={{ duration: 0.8, repeat: Infinity, ease: 'easeInOut' }}
                />
              </span>

              <div className="relative h-8 mt-3 overflow-hidden">
                <motion.div
                  className="absolute whitespace-nowrap text-sm text-gray-500 dark:text-gray-400"
                  animate={{
                    x: ['0%', '-50%'],
                  }}
                  transition={{
                    duration: 15,
                    repeat: Infinity,
                    ease: 'linear',
                  }}
                >
                  <span className="inline-flex gap-6">
                    {['React', 'TypeScript', 'Tailwind CSS', 'Next.js', 'Clean Code', 'Responsive Design', 'UI/UX'].map((tech, i) => (
                      <span key={i} className="inline-flex items-center gap-2">
                        <span className="w-1 h-1 rounded-full bg-blue-400" />
                        {tech}
                      </span>
                    ))}
                  </span>
                  <span className="inline-flex gap-6 ml-6">
                    {['React', 'TypeScript', 'Tailwind CSS', 'Next.js', 'Clean Code', 'Responsive Design', 'UI/UX'].map((tech, i) => (
                      <span key={i} className="inline-flex items-center gap-2">
                        <span className="w-1 h-1 rounded-full bg-blue-400" />
                        {tech}
                      </span>
                    ))}
                  </span>
                </motion.div>
              </div>
            </motion.div>

            <motion.p className="mt-6 sm:mt-8 text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-xl" variants={itemVariants}>
              I build digital experiences that blend aesthetics and functionality, with a focus on clean code and intuitive design.
            </motion.p>

            <motion.div className="flex flex-wrap gap-3 sm:gap-4 mt-8 sm:mt-12" variants={itemVariants}>
              <motion.a
                href="/src/assets/pdf/CV-Taufik.pdf"
                download="CV_Taufik.pdf"
                className="group relative px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-700 to-blue-600 hover:from-blue-800 hover:to-blue-700 text-white  rounded-lg sm:rounded-xl font-semibold text-base sm:text-lg overflow-hidden"
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: 'tween', duration: 0.25 }}
              >
                <span className="relative flex items-center gap-2 sm:gap-3">
                  Download CV
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
                </span>
              </motion.a>

              <motion.a
                href="/src/assets/pdf/CV-Taufik.pdf" // Link ke CV untuk dilihat
                target="_blank" // Membuka di tab baru
                rel="noopener noreferrer"
                className="group px-6 sm:px-8 py-3 sm:py-4 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg sm:rounded-xl font-semibold text-base sm:text-lg hover:border-gray-400 dark:hover:border-gray-400 flex items-center gap-2 sm:gap-3"
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: 'tween', duration: 0.25 }}
              >
                <span>Lihat CV</span>
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
              </motion.a>
            </motion.div>
          </div>

          <div className="lg:w-1/2 order-1 lg:order-2 flex justify-center">
            <motion.div
              className="relative"
              variants={photoVariants}
              whileHover="hover"
            >
              <motion.div className="absolute -inset-3 sm:-inset-4">
                <motion.div
                  className="absolute inset-0 rounded-2xl sm:rounded-3xl border border-gray-300/30 dark:border-gray-600/30"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
                />
              </motion.div>

              <motion.div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-[28rem] lg:h-[28rem] overflow-hidden rounded-2xl sm:rounded-[2rem] shadow-xl">
                <motion.img
                  src="/src/assets/img/1.png"
                  alt="Muhammad Taufik Ediansyah - Frontend Developer"
                  className="w-full h-full object-cover object-top"
                  initial={{ scale: 1.08 }}
                  animate={{ scale: 1 }}
                  transition={{ type: 'tween', duration: 0.7, ease: 'easeOut' }}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 1.05 }}
                />
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
                  <span className="text-xs sm:text-sm font-medium text-gray-700 dark:text-gray-300">Working on</span>
                  <span className="text-xs sm:text-sm font-bold text-blue-600 dark:text-blue-400">React.js</span>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>

    </motion.div>
  );
};

export default Hero;