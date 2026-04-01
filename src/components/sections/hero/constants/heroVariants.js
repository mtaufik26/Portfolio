// Easing smooth yang konsisten untuk seluruh animasi
export const smoothEase = [0.25, 0.46, 0.45, 0.94];

export const containerVariants = {
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

export const itemVariants = {
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

export const photoVariants = {
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

export const floatingBadgeVariants = {
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

export const scrollIndicatorVariants = {
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

export const runningTextVariants = {
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

export const backgroundBlobVariants = {
  left: {
    animate: {
      x: [0, 10, 0],
      y: [0, -10, 0],
      transition: { duration: 20, repeat: Infinity, ease: 'easeInOut' },
    },
  },
  right: {
    animate: {
      x: [0, -15, 0],
      y: [0, 15, 0],
      transition: { duration: 25, repeat: Infinity, ease: 'easeInOut', delay: 0.5 },
    },
  },
};