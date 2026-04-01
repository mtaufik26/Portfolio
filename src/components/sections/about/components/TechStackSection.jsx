import { motion } from 'framer-motion';
import { itemVariants } from '../constants/aboutVariants';
import { techStack } from '../constants/aboutData';
import { TechChip } from './TechChip';

export const TechStackSection = ({ hasAnimated }) => {
  return (
    <motion.div variants={itemVariants} className="space-y-5">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-1 h-5 bg-gradient-to-b from-blue-500 to-blue-900 rounded-full" />
          <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
            Tech Stack
          </h3>
        </div>
        <span className="text-xs px-2.5 py-0.5 rounded-full bg-gray-100 dark:bg-gray-800/60 text-gray-500 dark:text-gray-400">
          {techStack.length} technologies
        </span>
      </div>

      <div className="flex flex-wrap gap-2">
        {techStack.map((tech, i) => (
          <TechChip 
            key={tech.name} 
            tech={tech} 
            index={i} 
            hasAnimated={hasAnimated} 
          />
        ))}
      </div>
    </motion.div>
  );
};