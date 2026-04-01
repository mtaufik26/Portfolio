import { motion } from 'framer-motion';
import { backgroundBlobVariants } from '../constants/contactVariants';

export const BackgroundEffects = () => {
  return (
    <div className="absolute inset-0 pointer-events-none">
      <div className="absolute inset-0 bg-gradient-to-t from-transparent via-gray-50/20 to-transparent dark:via-gray-900/10" />
      
      <motion.div
        className="absolute top-1/3 -left-32 w-96 h-96 rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(59,130,246,0.05) 0%, transparent 70%)',
        }}
        {...backgroundBlobVariants.left}
        animate="animate"
      />
      
      <motion.div
        className="absolute bottom-1/3 -right-32 w-96 h-96 rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(139,92,246,0.05) 0%, transparent 70%)',
        }}
        {...backgroundBlobVariants.right}
        animate="animate"
      />
    </div>
  );
};