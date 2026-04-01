import { motion } from 'framer-motion';
import { backgroundBlobVariants } from '../constants/serviceVariants';

export const BackgroundEffects = () => {
  return (
    <div className="absolute inset-0 -z-10">
      {/* Left radial blob */}
      <motion.div
        className="absolute top-1/3 -left-1/4 w-[600px] h-[600px] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(99,102,241,0.08) 0%, transparent 70%)',
        }}
        {...backgroundBlobVariants.left}
        animate="animate"
      />
      
      {/* Right radial blob */}
      <motion.div
        className="absolute bottom-1/3 -right-1/4 w-[600px] h-[600px] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(139,92,246,0.08) 0%, transparent 70%)',
        }}
        {...backgroundBlobVariants.right}
        animate="animate"
      />
    </div>
  );
};