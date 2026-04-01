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

export const cardVariants = {
  hover: {
    y: -6,
    transition: { duration: 0.3, ease: 'easeOut' },
  },
  image: {
    initial: { scale: 1 },
    hover: { scale: 1.08, transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] } },
  },
};

export const modalVariants = {
  overlay: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 },
  },
  content: {
    hidden: { opacity: 0, scale: 0.95, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.25, ease: [0.25, 0.1, 0.25, 1] },
    },
    exit: {
      opacity: 0,
      scale: 0.95,
      y: 20,
      transition: { duration: 0.2 },
    },
  },
};

export const arrowVariants = {
  initial: { opacity: 0, x: -10 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -10 },
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