import { motion } from 'framer-motion';

const LoadingScreen = ({ darkMode }) => {
  const gradientOrb = darkMode
    ? 'radial-gradient(circle, rgba(96,165,250,0.2) 0%, rgba(167,139,250,0.1) 50%, transparent 70%)'
    : 'radial-gradient(circle, rgba(59,130,246,0.15) 0%, rgba(139,92,246,0.1) 50%, transparent 70%)';

  const particleColors = darkMode
    ? { primary: '#60a5fa', secondary: '#a78bfa' }
    : { primary: '#3b82f6', secondary: '#8b5cf6' };

  const progressBarBg = darkMode 
    ? 'linear-gradient(to right, #60a5fa, #a78bfa, #f472b6)' 
    : 'linear-gradient(to right, #3b82f6, #8b5cf6, #ec4899)';

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center"
      style={{ backgroundColor: darkMode ? '#000000' : '#ffffff' }}
    >
      {/* Gradient Orb */}
      <div className="relative mb-12 w-24 h-24">
        <motion.div
          className="absolute inset-0 rounded-full blur-xl"
          style={{ background: gradientOrb }}
          animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        />
        
        {/* Floating Particles */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1.5 h-1.5 rounded-full"
            style={{
              background: i % 2 === 0 ? particleColors.primary : particleColors.secondary,
              top: '50%', left: '50%',
            }}
            animate={{
              x: [0, Math.cos(i * 60 * Math.PI / 180) * 40, 0],
              y: [0, Math.sin(i * 60 * Math.PI / 180) * 40, 0],
              scale: [0, 1, 0],
              opacity: [0, 1, 0],
            }}
            transition={{ duration: 3, repeat: Infinity, delay: i * 0.2, ease: "easeInOut" }}
          />
        ))}
      </div>

      {/* Progress Bar */}
      <div className="relative w-48 h-0.5 overflow-hidden rounded-full"
        style={{ backgroundColor: darkMode ? '#1f2937' : '#f3f4f6' }}
      >
        <motion.div 
          className="absolute inset-0"
          style={{ background: progressBarBg }}
          initial={{ x: '-100%' }}
          animate={{ x: '100%' }}
          transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
        />
      </div>

      {/* Loading Text */}
      <div className="mt-6 relative">
        <span 
          className="text-xs font-light tracking-[0.3em] uppercase"
          style={{ color: darkMode ? '#9ca3af' : '#6b7280' }}
        >
          Loading
        </span>
        <div className="absolute -right-8 top-1/2 -translate-y-1/2 flex space-x-1">
          {[0, 1, 2].map((i) => (
            <motion.span
              key={i}
              className="w-1 h-1 rounded-full"
              style={{ backgroundColor: darkMode ? '#6b7280' : '#9ca3af' }}
              animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.3 }}
            />
          ))}
        </div>
      </div>

      <motion.p 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ delay: 0.5 }}
        className="absolute bottom-8 text-xs"
        style={{ color: darkMode ? '#4b5563' : '#9ca3af' }}
      >
        © 2026 Portfolio
      </motion.p>
    </motion.div>
  );
};

export default LoadingScreen;