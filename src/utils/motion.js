export const transitions = {
  // Editorial deceleration curve — crisp launch, organic deceleration, gentle settling
  smoothEase: [0.16, 1, 0.3, 1],
  editorialEase: [0.16, 1, 0.3, 1],
  snappyEase: [0.22, 1, 0.36, 1],
  springEase: [0.34, 1.2, 0.64, 1],
  duration: {
    instant: 0.15,
    fast: 0.28,
    normal: 0.55,
    slow: 0.75,
  },
};

export const baseContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.05,
    },
  },
};

export const baseItemVariants = {
  hidden: { y: 16, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: transitions.duration.normal,
      ease: transitions.smoothEase,
    },
  },
};

export const fadeInVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: transitions.duration.normal,
      ease: transitions.smoothEase,
    },
  },
};

export const baseHoverVariants = {
  hover: {
    y: -4,
    transition: {
      duration: transitions.duration.fast,
      ease: transitions.smoothEase,
    },
  },
  tap: { scale: 0.98, transition: { duration: 0.1 } },
};

export const baseBackgroundBlobVariants = {
  left: {
    initial: { opacity: 0, scale: 0.8 },
    animate: {
      opacity: [0.3, 0.5, 0.3],
      scale: [1, 1.05, 1],
      x: [0, 30, 0],
      y: [0, -20, 0],
      transition: { duration: 20, repeat: Infinity, ease: 'easeInOut' },
    },
  },
  right: {
    initial: { opacity: 0, scale: 0.8 },
    animate: {
      opacity: [0.2, 0.4, 0.2],
      scale: [1, 1.05, 1],
      x: [0, -30, 0],
      y: [0, 20, 0],
      transition: { duration: 25, repeat: Infinity, ease: 'easeInOut', delay: 1 },
    },
  },
};
