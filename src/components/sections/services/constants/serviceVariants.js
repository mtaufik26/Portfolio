import { transitions } from '../../../../utils/motion';

export const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.09,
      delayChildren: 0.04,
    },
  },
};

export const itemVariants = {
  hidden: { opacity: 0, y: 18 },
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
  hidden: { opacity: 0, y: 20 },
  visible: (index = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.04 + index * 0.07,
      duration: 0.55,
      ease: transitions.smoothEase,
    },
  }),
};