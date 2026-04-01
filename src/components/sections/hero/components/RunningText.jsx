import { motion } from 'framer-motion';

const techList = [
  'React',
  'TypeScript',
  'Tailwind CSS',
  'Next.js',
  'Clean Code',
  'Responsive Design',
  'UI/UX',
];

export const RunningText = () => {
  return (
    <div className="relative h-8 mt-3 overflow-hidden">
      <motion.div
        className="absolute whitespace-nowrap text-sm text-gray-500 dark:text-gray-400"
        animate={{
          x: ['0%', '-50%'],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: 'linear',
        }}
      >
        <span className="inline-flex gap-6">
          {techList.map((tech, i) => (
            <span
              key={`first-${i}`}
              className="inline-flex items-center gap-2"
            >
              <span className="w-1 h-1 rounded-full bg-blue-400" />
              {tech}
            </span>
          ))}
        </span>

        <span className="inline-flex gap-6 ml-6">
          {techList.map((tech, i) => (
            <span
              key={`second-${i}`}
              className="inline-flex items-center gap-2"
            >
              <span className="w-1 h-1 rounded-full bg-blue-400" />
              {tech}
            </span>
          ))}
        </span>
      </motion.div>
    </div>
  );
};