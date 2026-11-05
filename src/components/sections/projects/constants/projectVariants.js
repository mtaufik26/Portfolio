import { transitions } from '../../../../utils/motion';

export const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.05,
    },
  },
};

export const headerVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: transitions.duration.normal,
      ease: transitions.smoothEase,
    },
  },
};

export const cardVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: (index = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.04 + Math.min(index, 2) * 0.06,
      duration: transitions.duration.normal,
      ease: transitions.smoothEase,
    },
  }),
};

export const cardHoverVariants = {
  hover: {
    y: -4,
    transition: {
      duration: transitions.duration.fast,
      ease: transitions.smoothEase,
    },
  },
  tap: { scale: 0.99 },
};

export const toggleButtonVariants = {
  initial: { opacity: 0, y: 12 },
  animate: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      duration: transitions.duration.normal, 
      ease: transitions.smoothEase 
    } 
  },
};