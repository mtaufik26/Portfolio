import { motion } from 'framer-motion';
import { itemVariants } from '../constants/aboutVariants';
import { strengths } from '../constants/aboutData';
import { StrengthCard } from './StrengthCard';

export const StrengthsSection = ({ hasAnimated }) => {
  return (
    <motion.div variants={itemVariants} className="space-y-6">
      <div className="flex items-center gap-2">
        <div className="w-1 h-5 bg-gradient-to-b from-blue-500 to-blue-900 rounded-full" />
        <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
          What I Bring
        </h3>
      </div>

      <div className="space-y-4">
        {strengths.map((item, idx) => (
          <StrengthCard 
            key={item.title} 
            item={item} 
            index={idx} 
            hasAnimated={hasAnimated} 
          />
        ))}
      </div>
    </motion.div>
  );
};