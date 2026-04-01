import { motion } from 'framer-motion';
import { techVariants } from '../constants/aboutVariants';

export const TechChip = ({ tech, index, hasAnimated }) => {
  const Icon = tech.icon;
  
  return (
    <motion.div
      custom={index}
      initial="hidden"
      animate={hasAnimated ? "visible" : "hidden"}
      variants={techVariants}
      whileHover={{ y: -2 }}
      transition={{ duration: 0.2 }}
      className="group relative"
    >
      <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white dark:bg-gray-800/40 border border-gray-200/60 dark:border-gray-700/50 hover:border-gray-300 dark:hover:border-gray-600 transition-all duration-200 cursor-default">
        <Icon className="w-3.5 h-3.5 text-gray-700 dark:text-gray-400 group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-colors" />
        <span className="text-xs font-medium text-gray-600 dark:text-gray-300">
          {tech.name}
        </span>
      </div>
    </motion.div>
  );
};