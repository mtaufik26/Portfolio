import { transitions } from '../../../../utils/motion';

export const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.09,
      delayChildren: 0.08,
    },
  },
};

export const badgeVariants = {
  hidden: { opacity: 0, y: -8 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.48,
      ease: transitions.smoothEase,
    },
  },
};

export const headlineVariants = {
  hidden: { opacity: 0, y: 22 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.65,
      ease: transitions.smoothEase,
    },
  },
};

export const narrativeVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.58,
      ease: transitions.smoothEase,
    },
  },
};

export const techStackVariants = {
  hidden: { opacity: 0, y: 14 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.52,
      ease: transitions.smoothEase,
      staggerChildren: 0.04,
    },
  },
};

export const itemVariants = {
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

export const photoVariants = {
  hidden: { opacity: 0, scale: 0.93, y: 24 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.75,
      ease: transitions.smoothEase,
      delay: 0.06,
    },
  },
};