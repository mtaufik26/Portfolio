import { baseContainerVariants, baseItemVariants, baseHoverVariants, baseBackgroundBlobVariants, transitions } from '../../../../utils/motion';

export const containerVariants = baseContainerVariants;

export const itemVariants = baseItemVariants;

export const cardVariants = {
  hover: baseHoverVariants.hover,
  image: {
    initial: { scale: 1 },
    hover: { scale: 1.05, transition: { duration: transitions.duration.normal, ease: transitions.smoothEase } },
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
      transition: { duration: transitions.duration.fast, ease: transitions.smoothEase },
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

export const backgroundBlobVariants = baseBackgroundBlobVariants;