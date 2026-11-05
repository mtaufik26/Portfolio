import { baseContainerVariants, baseItemVariants, baseBackgroundBlobVariants, transitions } from '../../../../utils/motion';

export const containerVariants = baseContainerVariants;

export const itemVariants = baseItemVariants;

export const backgroundBlobVariants = baseBackgroundBlobVariants;

export const statusMessageVariants = {
  initial: { opacity: 0, y: -10 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -10 },
};

export const buttonVariants = {
  hover: { y: -2, scale: 1.02, transition: { duration: transitions.duration.fast, ease: transitions.smoothEase } },
  tap: { scale: 0.98, transition: { duration: 0.1 } },
};