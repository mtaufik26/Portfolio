// src/components/sections/About.jsx
import { motion, useMotionTemplate, useMotionValue, useSpring } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState, useEffect, useRef } from 'react';

import { 
  SiHtml5, SiCss3, SiJavascript, SiTypescript, SiReact, 
  SiNextdotjs, SiTailwindcss, SiBootstrap, SiPhp, SiLaravel, 
  SiMysql, SiPostgresql, SiGit, SiGithub,  SiCodefactor,
  SiFigma,
  SiSpeedtest,
  SiWechat,
} from 'react-icons/si';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.15,
  });

  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (inView && !hasAnimated) {
      setHasAnimated(true);
    }
  }, [inView, hasAnimated]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };

  const techVariants = {
    hidden: { opacity: 0, scale: 0.92 },
    visible: (i) => ({
      opacity: 1,
      scale: 1,
      transition: {
        delay: i * 0.03,
        duration: 0.4,
        ease: [0.34, 1.2, 0.64, 1],
      },
    }),
  };

const strengths = [
  { 
    title: 'Clean Code', 
    desc: 'Structured, maintainable code with clear naming and reusable components.',
    icon: SiCodefactor,
  },
  { 
    title: 'Pixel-Perfect UI', 
    desc: 'Responsive interfaces that follow design requirements with meticulous attention to detail.',
    icon: SiFigma,
  },
  { 
    title: 'Performance First', 
    desc: 'Optimized frontend performance with efficient rendering and minimized re-renders.',
    icon: SiSpeedtest,
  },
  { 
    title: 'Proactive Communication', 
    desc: 'Clear collaboration, transparent updates, and accountability in team projects.',
    icon: SiWechat,
  },
];

  const techStack = [
    { name: 'HTML5', icon: SiHtml5 },
    { name: 'CSS3', icon: SiCss3 },
    { name: 'JavaScript', icon: SiJavascript },
    { name: 'TypeScript', icon: SiTypescript },
    { name: 'React', icon: SiReact },
    { name: 'Next.js', icon: SiNextdotjs },
    { name: 'Tailwind', icon: SiTailwindcss },
    { name: 'Bootstrap', icon: SiBootstrap },
    { name: 'PHP', icon: SiPhp },
    { name: 'Laravel', icon: SiLaravel },
    { name: 'MySQL', icon: SiMysql },
    { name: 'PostgreSQL', icon: SiPostgresql },
    { name: 'Git', icon: SiGit },
    { name: 'GitHub', icon: SiGithub }
  ];

  return (
    <section
      id="about"
      ref={ref}
      className="relative py-28 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Sophisticated Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={hasAnimated ? { opacity: 0.4, scale: 1 } : { opacity: 0, scale: 0.9 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="absolute top-1/4 left-1/4 w-80 h-80 bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-full blur-3xl"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={hasAnimated ? { opacity: 0.3, scale: 1 } : { opacity: 0, scale: 0.9 }}
          transition={{ duration: 1.2, delay: 0.2, ease: "easeOut" }}
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-l from-purple-400/10 to-pink-400/10 rounded-full blur-3xl"
        />
      </div>

      <div className="max-w-7xl mx-auto relative">
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20"
          initial="hidden"
          animate={hasAnimated ? 'visible' : 'hidden'}
          variants={containerVariants}
        >
          {/* Left Column */}
          <div className="space-y-10">
            {/* Header */}
            <motion.div variants={itemVariants} className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-0.5 bg-gradient-to-r from-blue-500 to-blue-900 rounded-full" />
                <span className="text-sm font-medium text-blue-600 dark:text-blue-400 tracking-wider uppercase">
                  About Me
                </span>
              </div>
              
              <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">
                <span className="bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-400 bg-clip-text text-transparent">
                  Get to know{' '}
                </span>
                <span className="bg-gradient-to-r from-blue-600 to-blue-400 dark:from-blue-500 dark:to-blue-400 bg-clip-text text-transparent">
                  me better
                </span>
              </h2>
            </motion.div>

            {/* Description */}
            <motion.div variants={itemVariants} className="space-y-5">
              <p className="text-base text-gray-600 dark:text-gray-400 leading-relaxed">
                I am a graduate of <span className="font-semibold text-gray-800 dark:text-white">SMK Wikrama Bogor</span>, majoring in PPLG (Software and Game Development), with a strong focus on Frontend Development. I have experience building responsive user interfaces using HTML, CSS, JavaScript, and React.js.
              </p>

              <p className="text-base text-gray-600 dark:text-gray-400 leading-relaxed">
                I am known for being communicative, disciplined, and responsible, with a strong commitment to delivering quality work and achieving targets. I value integrity and professionalism in every project I work on.
              </p>
            </motion.div>

            {/* Tech Stack Section */}
            <motion.div variants={itemVariants} className="space-y-5">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-1 h-5 bg-gradient-to-b from-blue-500 to-blue-900 rounded-full" />
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                    Tech Stack
                  </h3>
                </div>
                <span className="text-xs px-2.5 py-0.5 rounded-full bg-gray-100 dark:bg-gray-800/60 text-gray-500 dark:text-gray-400">
                  {techStack.length} technologies
                </span>
              </div>

              <div className="flex flex-wrap gap-2">
                {techStack.map((tech, i) => {
                  const Icon = tech.icon;
                  return (
                    <motion.div
                      key={tech.name}
                      custom={i}
                      initial="hidden"
                      animate={hasAnimated ? "visible" : "hidden"}
                      variants={techVariants}
                      whileHover={{ y: -2 }}
                      transition={{ duration: 0.2 }}
                      className="group relative"
                    >
                      <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white dark:bg-gray-800/40 border border-gray-200/60 dark:border-gray-700/50 hover:border-gray-300 dark:hover:border-gray-600 transition-all duration-200 cursor-default">
                        <Icon className="w-3.5 h-3.5 text-gray-700 dark:text-gray-400 group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-colors" />
                        <span className="text-xs font-medium text-gray-600 dark:text-gray-300">
                          {tech.name}
                        </span>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          </div>

          {/* Right Column - Strengths */}
          <motion.div variants={itemVariants} className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="w-1 h-5 bg-gradient-to-b from-blue-500 to-blue-900 rounded-full" />
              <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                What I Bring
              </h3>
            </div>

            <div className="space-y-4">
              {strengths.map((item, idx) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={item.title}
                    custom={idx}
                    initial="hidden"
                    animate={hasAnimated ? "visible" : "hidden"}
                    variants={{
                      hidden: { opacity: 0, x: 20 },
                      visible: {
                        opacity: 1,
                        x: 0,
                        transition: {
                          delay: 0.2 + (idx * 0.08),
                          duration: 0.5,
                          ease: [0.25, 0.1, 0.25, 1],
                        },
                      },
                    }}
                    whileHover={{ x: 4 }}
                    className="group"
                  >
                    <div className="p-5 rounded-xl bg-white/40 dark:bg-gray-800/20 backdrop-blur-sm border border-gray-200/40 dark:border-gray-700/30 hover:border-blue-200/50 dark:hover:border-blue-800/50 transition-all duration-300">
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-lg bg-gradient-to-br flex items-center justify-center flex-shrink-0">
                          <Icon className="w-5 h-5 text-gray-700 dark:text-gray-400 group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-colors" />
                        </div>

                        <div className="flex-1">
                          <h4 className="text-base font-semibold text-gray-800 dark:text-gray-200 mb-1">
                            {item.title}
                          </h4>
                          <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                            {item.desc}
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;