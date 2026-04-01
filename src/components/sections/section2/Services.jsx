// src/components/sections/Services.jsx
import { motion, useMotionTemplate, useMotionValue, useSpring } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useRef, useState } from 'react';
import { 
  Globe, 
  Code, 
  Cpu, 
  Smartphone,
  ArrowUpRight
} from 'lucide-react';

const Services = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.15,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.1, 0.25, 1], // Custom cubic bezier untuk easing premium
      },
    },
  };

  const services = [
    {
      icon: Globe,
      title: 'Web Development',
      desc: 'Solusi web modern dengan performa tinggi, scalable architecture, dan pengalaman pengguna yang exceptional.',
      tags: ['React', 'Next.js', 'Tailwind'],
      gradient: 'from-blue-500/10 to-cyan-500/10',
      hoverGradient: 'from-blue-500/20 to-cyan-500/20',
    },
    {
      icon: Code,
      title: 'Frontend Engineering',
      desc: 'Interface interaktif dengan kualitas kode terbaik, aksesibilitas tinggi, dan animasi yang seamless.',
      tags: ['TypeScript', 'Framer', 'Responsive'],
      gradient: 'from-purple-500/10 to-pink-500/10',
      hoverGradient: 'from-purple-500/20 to-pink-500/20',
    },
    {
      icon: Cpu,
      title: 'Backend Integration',
      desc: 'Integrasi API yang robust, state management optimal, dan real-time data synchronization.',
      tags: ['REST', 'GraphQL'],
      gradient: 'from-emerald-500/10 to-teal-500/10',
      hoverGradient: 'from-emerald-500/20 to-teal-500/20',
    },
    {
      icon: Smartphone,
      title: 'Responsive Excellence',
      desc: 'Pengalaman seamless di semua device dengan pendekatan mobile-first dan optimalisasi performa.',
      tags: ['Mobile-first', 'Cross-browser', 'Optimized'],
      gradient: 'from-amber-500/10 to-orange-500/10',
      hoverGradient: 'from-amber-500/20 to-orange-500/20',
    },
  ];

  return (
    <motion.section
      ref={ref}
      id="services"
      className="relative py-28 px-4 sm:px-6 lg:px-8 overflow-hidden"
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={containerVariants}
    >
      {/* Sophisticated background elements */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          className="absolute top-1/3 -left-1/4 w-[600px] h-[600px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(99,102,241,0.08) 0%, transparent 70%)',
          }}
          animate={{
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        <motion.div
          className="absolute bottom-1/3 -right-1/4 w-[600px] h-[600px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(139,92,246,0.08) 0%, transparent 70%)',
          }}
          animate={{
            x: [0, -40, 0],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Header with refined typography */}
        <motion.div className="text-center mb-20" variants={containerVariants}>
          
          <motion.h2
            className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 tracking-tight"
            variants={itemVariants}
          >
            <span className="bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-400 bg-clip-text text-transparent">
              Services & {''}
            </span>
            {/* <br className="hidden sm:block" /> */}
            <span className="bg-gradient-to-r from-blue-600 to-blue-400 dark:from-blue-500 dark:to-blue-400 bg-clip-text text-transparent">
              Expertise
            </span>
          </motion.h2>
          
          <motion.p
            className="max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-400 leading-relaxed"
            variants={itemVariants}
          >
            Delivering exceptional digital solutions with precision, 
            creativity, and technical excellence.
          </motion.p>
        </motion.div>

        {/* Services Grid with Mouse Tracking Effect */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            const cardRef = useRef(null);
            const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
            
            const mouseX = useMotionValue(0);
            const mouseY = useMotionValue(0);
            
            const springX = useSpring(mouseX, { stiffness: 300, damping: 30 });
            const springY = useSpring(mouseY, { stiffness: 300, damping: 30 });
            
            const handleMouseMove = (e) => {
              if (!cardRef.current) return;
              const rect = cardRef.current.getBoundingClientRect();
              const x = ((e.clientX - rect.left) / rect.width) * 100;
              const y = ((e.clientY - rect.top) / rect.height) * 100;
              mouseX.set(x);
              mouseY.set(y);
            };
            
            const handleMouseLeave = () => {
              mouseX.set(50);
              mouseY.set(50);
            };
            
            const radialGradient = useMotionTemplate`
              radial-gradient(circle at ${springX}% ${springY}%, 
                rgba(99,102,241,0.08) 0%,
                rgba(139,92,246,0.04) 50%,
                transparent 80%
              )
            `;
            
            return (
              <motion.div
                key={index}
                ref={cardRef}
                variants={itemVariants}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.3, ease: 'easeOut' }}
                className="group relative"
              >
                <motion.div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ background: radialGradient }}
                />
                
                <div className="relative h-full bg-white/95 dark:bg-gray-900/30 backdrop-blur-xl rounded-2xl border border-gray-200/30 dark:border-gray-700/30 p-8 transition-all duration-300 hover:border-blue-500/30 dark:hover:border-blue-400/30 shadow-sm hover:shadow-xl">
                  
                  {/* Icon with refined styling */}
                  <div className="relative mb-7">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500" />
                    <div className="relative inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-gray-500/10 to-gray-800/10 dark:from-gray-400/10 dark:to-gray-700/10 border border-blue-200/30 dark:border-gray-400/20 group-hover:border-blue-500/40 dark:group-hover:border-blue-400/40 transition-all duration-300">
                      <Icon className="w-6 h-6 text-gray-700 group-hover:text-blue-500 dark:text-gray-400 group-hover:scale-110 transition-transform duration-300" />
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 tracking-tight">
                    {service.title}
                  </h3>

                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-5">
                    {service.desc}
                  </p>
                  
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {service.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="text-xs px-2.5 py-1 rounded-full bg-gray-100/80 dark:bg-gray-800/60 text-gray-600 dark:text-gray-400 border border-gray-200/50 dark:border-gray-700/50 transition-all duration-300 hover:scale-105 hover:-translate-y-0.5 hover:border-blue-300/60 dark:hover:border-blue-700/60 hover:text-blue-600 dark:hover:text-blue-400 hover:shadow-md hover:shadow-blue-500/10 cursor-default"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </motion.section>
  );
};

export default Services;