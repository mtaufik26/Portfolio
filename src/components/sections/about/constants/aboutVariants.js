// Easing premium yang konsisten
export const premiumEase = [0.25, 0.1, 0.25, 1];
export const bounceEase = [0.34, 1.2, 0.64, 1];

export const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

export const itemVariants = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: premiumEase,
    },
  },
};

export const techVariants = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: (i) => ({
    opacity: 1,
    scale: 1,
    transition: {
      delay: i * 0.03,
      duration: 0.4,
      ease: bounceEase,
    },
  }),
};

export const strengthCardVariants = {
  hidden: { opacity: 0, x: 20 },
  visible: (idx) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: 0.2 + (idx * 0.08),
      duration: 0.5,
      ease: premiumEase,
    },
  }),
};

export const backgroundBlobVariants = {
  left: {
    initial: { opacity: 0, scale: 0.9 },
    animate: { 
      opacity: 0.4, 
      scale: 1,
      transition: { duration: 1.2, ease: "easeOut" }
    }
  },
  right: {
    initial: { opacity: 0, scale: 0.9 },
    animate: { 
      opacity: 0.3, 
      scale: 1,
      transition: { duration: 1.2, delay: 0.2, ease: "easeOut" }
    }
  }
};