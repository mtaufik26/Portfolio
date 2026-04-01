import { motion } from 'framer-motion';
import { backgroundBlobVariants } from '../constants/projectVariants';

export const BackgroundEffects = () => {
  return (
    <div className="absolute inset-0 overflow-hidden -z-10">
      {/* Left gradient blob */}
      <motion.div
        className="absolute top-1/4 -left-20 w-80 h-80 bg-gradient-to-r from-blue-500/4 to-transparent rounded-full blur-3xl"
        {...backgroundBlobVariants.left}
        animate="animate"
      />
      
      {/* Right gradient blob */}
      <motion.div
        className="absolute bottom-1/4 -right-20 w-80 h-80 bg-gradient-to-l from-purple-500/4 to-transparent rounded-full blur-3xl"
        {...backgroundBlobVariants.right}
        animate="animate"
      />
    </div>
  );
};