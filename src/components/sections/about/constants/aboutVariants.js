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

export const strengthCardVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: (idx = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.04 + (idx * 0.06),
      duration: 0.5,
      ease: transitions.smoothEase,
    },
  }),
};