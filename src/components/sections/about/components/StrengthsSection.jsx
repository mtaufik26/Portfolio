import { motion } from 'framer-motion';
import { itemVariants } from '../constants/aboutVariants';
import { strengths } from '../constants/aboutData';
import { StrengthCard } from './StrengthCard';

export const StrengthsSection = () => {
  return (
    <motion.div variants={itemVariants} className="space-y-6 pt-4 sm:pt-6">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 pb-2">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-blue-600 dark:bg-blue-400" aria-hidden="true" />
            <h3 className="text-sm font-bold text-neutral-900 dark:text-white uppercase tracking-wider">
              Engineering Disciplines
            </h3>
          </div>
          <p className="text-xl sm:text-2xl font-bold text-neutral-900 dark:text-white tracking-tight">
            How I Approach Frontend Development
          </p>
        </div>
        <p className="text-xs sm:text-sm text-neutral-500 dark:text-neutral-400 max-w-sm">
          Core standards and development practices guiding every line of code.
        </p>
      </div>

      {/* 4-Column Grid Matrix */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
        {strengths.map((item, idx) => (
          <StrengthCard 
            key={item.title} 
            item={item} 
            index={idx} 
          />
        ))}
      </div>
    </motion.div>
  );
};