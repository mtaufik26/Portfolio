import { motion } from 'framer-motion';

export const ProjectTechTags = ({ techStack }) => {
  return (
    <div className="mb-6">
      <p className="text-xs font-medium text-gray-500 dark:text-gray-500 mb-2 group-hover:text-gray-600 dark:group-hover:text-gray-400 transition-colors duration-300">
        Built with
      </p>
      <div className="flex flex-wrap gap-2">
        {techStack.map((tech, idx) => (
          <span
            key={idx}
            className="group inline-flex items-center gap-2 px-3 py-1.5 rounded-xl text-xs sm:text-sm font-semibold bg-white/90 dark:bg-[#0D0D10]/90 backdrop-blur-sm text-neutral-800 dark:text-neutral-200 border border-neutral-200/90 dark:border-white/[0.08] shadow-[0_1px_3px_rgba(0,0,0,0.02)] hover:border-neutral-300 dark:hover:border-white/20 hover:bg-neutral-50/80 dark:hover:bg-white/[0.04] transition-colors duration-200 select-none cursor-default"
          >
            <span className="group-hover:text-neutral-900 dark:group-hover:text-white transition-colors">{tech}</span>
          </span>
        ))}
      </div>
    </div>
  );
};  