export const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

export const itemVariants = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

export const backgroundBlobVariants = {
  left: {
    animate: {
      x: [0, 40, 0],
      y: [0, -30, 0],
      transition: { duration: 25, repeat: Infinity, ease: 'easeInOut' },
    },
  },
  right: {
    animate: {
      x: [0, -50, 0],
      y: [0, 40, 0],
      transition: { duration: 30, repeat: Infinity, ease: 'easeInOut', delay: 1 },
    },
  },
};

export const statusMessageVariants = {
  initial: { opacity: 0, y: -10 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -10 },
};

export const buttonVariants = {
  hover: { y: -2, scale: 1.02, transition: { duration: 0.2 } },
  tap: { scale: 0.98, transition: { duration: 0.1 } },
};