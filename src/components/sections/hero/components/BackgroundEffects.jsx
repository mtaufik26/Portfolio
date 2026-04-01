import { motion } from 'framer-motion';
import { backgroundBlobVariants } from '../constants/heroVariants';

export const BackgroundEffects = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <motion.div
        className="absolute top-1/4 -left-16 sm:-left-20 w-72 sm:w-96 h-72 sm:h-96 bg-gradient-to-r from-blue-500/5 to-transparent rounded-full blur-3xl"
        {...backgroundBlobVariants.left}
      />
      <motion.div
        className="absolute bottom-1/4 -right-16 sm:-right-20 w-72 sm:w-96 h-72 sm:h-96 bg-gradient-to-l from-purple-500/5 to-transparent rounded-full blur-3xl"
        {...backgroundBlobVariants.right}
      />
    </div>
  );
};