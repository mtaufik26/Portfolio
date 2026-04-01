import { motion } from 'framer-motion';
import { backgroundBlobVariants } from '../constants/aboutVariants';

export const BackgroundEffects = ({ hasAnimated }) => {
  return (
    <div className="absolute inset-0 pointer-events-none">
      {/* Left gradient blob */}
      <motion.div
        {...backgroundBlobVariants.left}
        animate={hasAnimated ? 'animate' : 'initial'}
        className="absolute top-1/4 left-1/4 w-80 h-80 bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-full blur-3xl"
      />
      
      {/* Right gradient blob */}
      <motion.div
        {...backgroundBlobVariants.right}
        animate={hasAnimated ? 'animate' : 'initial'}
        className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-l from-purple-400/10 to-pink-400/10 rounded-full blur-3xl"
      />
    </div>
  );
};