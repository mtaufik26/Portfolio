import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const CURTAIN_EASE = [0.76, 0, 0.24, 1]; // Architectural ease

const LoadingScreen = ({ darkMode }) => {
  const [progress, setProgress] = useState(0);
  const [status, setStatus] = useState('INITIALIZING');

  useEffect(() => {
    // Accessibility: Respect reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      setProgress(100);
      setStatus('READY');
      return;
    }

    const duration = 680; // Smooth 680ms progress count
    const startTime = performance.now();
    let animationFrameId;

    const tick = (now) => {
      const elapsed = now - startTime;
      const linear = Math.min(elapsed / duration, 1);
      
      // Decelerating cubic curve for organic, deliberate feel
      const eased = 1 - Math.pow(1 - linear, 3);
      const currentVal = Math.round(eased * 100);
      
      setProgress(currentVal);

      if (currentVal < 35) {
        setStatus('INITIALIZING');
      } else if (currentVal < 70) {
        setStatus('ASSEMBLING UI');
      } else if (currentVal < 100) {
        setStatus('VERIFYING');
      } else {
        setStatus('READY');
      }

      if (linear < 1) {
        animationFrameId = requestAnimationFrame(tick);
      }
    };

    animationFrameId = requestAnimationFrame(tick);

    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, []);

  const bgColor = darkMode ? '#050505' : '#FAFAFA';

  return (
    <div
      role="status"
      aria-live="polite"
      aria-label="Loading Taufik Ediansyah Portfolio"
      className="fixed inset-0 z-50 select-none overflow-hidden"
    >
      {/* Top Shutter Curtain Panel */}
      <motion.div
        initial={{ y: 0 }}
        exit={{ y: '-100%', transition: { duration: 0.55, ease: CURTAIN_EASE } }}
        className="absolute top-0 left-0 right-0 h-1/2 flex flex-col justify-between p-6 sm:p-8 md:p-12 border-b border-neutral-200/70 dark:border-white/[0.06]"
        style={{ backgroundColor: bgColor }}
      >
        {/* Top Header Row */}
        <div className="flex items-center justify-between text-[11px] font-mono tracking-widest uppercase text-neutral-400 dark:text-neutral-500">
          <span className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-600 dark:bg-blue-400" aria-hidden="true" />
            <span>Taufik Ediansyah</span>
          </span>
          <span>Bogor, ID</span>
        </div>
      </motion.div>

      {/* Bottom Shutter Curtain Panel */}
      <motion.div
        initial={{ y: 0 }}
        exit={{ y: '100%', transition: { duration: 0.55, ease: CURTAIN_EASE } }}
        className="absolute bottom-0 left-0 right-0 h-1/2 flex flex-col justify-end p-6 sm:p-8 md:p-12 border-t border-neutral-200/70 dark:border-white/[0.06]"
        style={{ backgroundColor: bgColor }}
      >
        {/* Bottom Footer Row */}
        <div className="flex items-center justify-between text-[11px] font-mono tracking-wider uppercase text-neutral-400 dark:text-neutral-500">
          <span>Frontend Architecture</span>
          <span>© 2026</span>
        </div>
      </motion.div>

      {/* Center Focal Content: Pure Typography & Precision Ruler (Strictly Zero Logo UI) */}
      <motion.div
        initial={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, transition: { duration: 0.12, ease: "easeOut" } }}
        className="absolute inset-0 flex flex-col items-center justify-center p-6 pointer-events-none"
      >
        <div className="w-full max-w-sm flex flex-col items-center text-center space-y-6">
          

          {/* Clean Name & Role Headline */}
          <div className="space-y-1.5">
            <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-neutral-900 dark:text-white">
              Taufik <span className="text-blue-600 dark:text-blue-400">Ediansyah</span>
            </h1>
          </div>

          {/* Architectural Precision Track (Zero Neon, Clean Solid Royal Blue) */}
          <div className="w-48 sm:w-60 space-y-2 pt-2">
            <div className="relative w-full h-[2px] rounded-full overflow-hidden bg-neutral-200/80 dark:bg-white/[0.08]">
              <div
                className="h-full bg-blue-600 dark:bg-blue-500 rounded-full transition-all duration-75"
                style={{ width: `${progress}%` }}
              />
            </div>

            {/* Status & Tabular Numbers */}
            <div className="flex items-center justify-between text-[10px] font-mono text-neutral-400 dark:text-neutral-500">
              <span className="tracking-widest uppercase">{status}</span>
              <span className="font-semibold tabular-nums text-neutral-700 dark:text-neutral-300">
                {progress.toString().padStart(2, '0')}%
              </span>
            </div>
          </div>

        </div>
      </motion.div>
    </div>
  );
};

export default LoadingScreen;