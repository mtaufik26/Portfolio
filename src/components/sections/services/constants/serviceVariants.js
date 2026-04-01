// constants/serviceVariants.js

export const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,    // Jeda antar card: cepat tapi tetap terasa berurutan
      delayChildren: 0.05,
    },
  },
};

// Item variants dasar (fallback jika tidak pakai direction)
export const itemVariants = {
  hidden: { 
    y: 20, 
    opacity: 0,
    scale: 0.98,
  },
  visible: {
    y: 0,
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: [0.22, 0.61, 0.36, 1],
    },
  },
};

export const backgroundBlobVariants = {
  left: {
    animate: {
      x: [0, 50, 0],
      y: [0, 30, 0],
      transition: {
        duration: 20,
        repeat: Infinity,
        ease: "linear",
      },
    },
  },
  right: {
    animate: {
      x: [0, -40, 0],
      y: [0, -20, 0],
      transition: {
        duration: 18,
        repeat: Infinity,
        ease: "linear",
      },
    },
  },
};

export const cardHoverVariants = {
  hover: {
    y: -6,
    transition: { 
      duration: 0.25, 
      ease: 'easeOut' 
    },
  },
};