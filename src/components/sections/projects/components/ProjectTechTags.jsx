import { motion } from 'framer-motion';

export const ProjectTechTags = ({ techStack }) => {
  return (
    <div className="mb-6">
      <p className="text-xs font-medium text-gray-500 dark:text-gray-500 mb-2 group-hover:text-gray-600 dark:group-hover:text-gray-400 transition-colors duration-300">
        Built with
      </p>
      <div className="flex flex-wrap gap-2">
        {techStack.map((tech, idx) => (
          <motion.span
            key={idx}
            className="px-3 py-1.5 bg-gray-100 dark:bg-gray-700/50 text-xs text-gray-700 dark:text-gray-300 rounded-lg border border-gray-200/50 dark:border-gray-700/50 backdrop-blur-sm cursor-default"
            whileHover={{ 
              scale: 1.05,
              backgroundColor: "rgb(59 130 246 / 0.1)",
              borderColor: "rgb(59 130 246 / 0.3)",
              transition: { duration: 0.2 }
            }}
            transition={{ duration: 0.3 }}
          >
            {tech}
          </motion.span>
        ))}
      </div>
    </div>
  );
};  