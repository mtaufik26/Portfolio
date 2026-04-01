export const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

export const firstItemVariants = {
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

export const additionalItemVariants = {
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

export const cardHoverVariants = {
  hover: {
    y: -4,
    scale: 1.02,
    boxShadow: '0 20px 25px -5px rgba(0,0,0,0.1), 0 10px 10px -5px rgba(0,0,0,0.06)',
    transition: {
      duration: 0.25,
      ease: 'easeOut',
    },
  },
  tap: { scale: 0.98 },
};

export const backgroundBlobVariants = {
  left: {
    animate: {
      x: [0, 10, 0],
      y: [0, -10, 0],
      transition: { duration: 24, repeat: Infinity, ease: 'easeInOut' },
    },
  },
  right: {
    animate: {
      x: [0, -15, 0],
      y: [0, 15, 0],
      transition: { duration: 28, repeat: Infinity, ease: 'easeInOut', delay: 1 },
    },
  },
};

export const toggleButtonVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { delay: 0.5 } },
};