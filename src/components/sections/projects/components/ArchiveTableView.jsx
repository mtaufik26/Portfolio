import { motion } from 'framer-motion';
import { FiExternalLink, FiGithub, FiInfo } from 'react-icons/fi';
import { getTechIcon } from '../utils/projectIcons';

/**
 * ArchiveTableView provides a high-density, engineer-first directory table
 * for rapid scanning across dozens of projects.
 */
export const ArchiveTableView = ({ projects, onOpenDetail }) => {
  return (
    <div className="w-full overflow-x-auto rounded-2xl border border-neutral-200/90 dark:border-white/[0.08] bg-white dark:bg-[#0D0D11] shadow-xs">
      <table className="w-full text-left border-collapse text-xs sm:text-sm">
        {/* Table Header */}
        <thead>
          <tr className="border-b border-neutral-200/80 dark:border-white/[0.08] bg-neutral-50/75 dark:bg-white/[0.02] text-neutral-500 dark:text-neutral-400 font-mono text-[11px] uppercase tracking-wider select-none">
            <th className="py-3.5 px-4 font-semibold w-14 text-center">#</th>
            <th className="py-3.5 px-4 font-semibold min-w-[200px]">Project</th>
            <th className="py-3.5 px-4 font-semibold hidden md:table-cell min-w-[180px]">Deliverables</th>
            <th className="py-3.5 px-4 font-semibold min-w-[180px]">Built With</th>
            <th className="py-3.5 px-4 font-semibold text-right w-32">Actions</th>
          </tr>
        </thead>

        {/* Table Body */}
        <tbody className="divide-y divide-neutral-200/60 dark:divide-white/[0.04]">
          {projects.map((project, index) => {
            const formattedIndex = String(index + 1).padStart(2, '0');
            const hasLiveDemo = project.demo && project.liveUrl && project.liveUrl !== '#';
            const hasGithub = project.githubUrl && project.githubUrl !== '#';
            const projectTitle = project.title || `Project ${formattedIndex}`;

            return (
              <motion.tr
                key={project.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.15, delay: index * 0.02 }}
                className="group hover:bg-blue-50/40 dark:hover:bg-blue-500/[0.03] transition-colors"
              >
                {/* Index */}
                <td className="py-3.5 px-4 text-center font-mono text-xs text-blue-600 dark:text-blue-400 font-semibold">
                  {formattedIndex}
                </td>

                {/* Project Title & Short Description */}
                <td className="py-3.5 px-4">
                  <div className="flex items-center gap-3">
                    <img 
                      src={project.image} 
                      alt="" 
                      className="w-10 h-10 rounded-lg object-cover border border-neutral-200/60 dark:border-white/10 shrink-0 hidden sm:block" 
                    />
                    <div>
                      <button
                        onClick={() => onOpenDetail(project)}
                        className="font-bold text-neutral-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors text-left cursor-pointer"
                      >
                        {project.title}
                      </button>
                      <p className="text-xs text-neutral-500 dark:text-neutral-400 line-clamp-1 max-w-xs sm:max-w-md">
                        {project.description}
                      </p>
                    </div>
                  </div>
                </td>

                {/* Deliverables / Highlights */}
                <td className="py-3.5 px-4 hidden md:table-cell">
                  {project.highlights && project.highlights.length > 0 ? (
                    <span className="text-xs text-neutral-600 dark:text-neutral-300 font-medium truncate block max-w-xs">
                      {project.highlights[0]}
                    </span>
                  ) : (
                    <span className="text-neutral-400 text-xs">—</span>
                  )}
                </td>

                {/* Tech Stack Chips */}
                <td className="py-3.5 px-4">
                  <div className="flex flex-wrap gap-1.5 max-w-xs">
                    {project.tech.map((techItem, idx) => {
                      const TechIcon = getTechIcon(techItem);
                      return (
                        <span
                          key={idx}
                          className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md
                            bg-neutral-100 dark:bg-white/[0.06]
                            text-neutral-700 dark:text-neutral-300
                            border border-neutral-200/60 dark:border-white/[0.04]
                            text-[11px] font-medium"
                        >
                          <TechIcon className="w-2.5 h-2.5 text-blue-500 shrink-0" />
                          <span>{techItem}</span>
                        </span>
                      );
                    })}
                  </div>
                </td>

                {/* Actions */}
                <td className="py-3.5 px-4 text-right">
                  <div className="flex items-center justify-end gap-1.5">
                    {hasLiveDemo && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-1.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white transition-colors cursor-pointer"
                        title="Open Live Demo"
                        aria-label={`Open live demo for ${projectTitle}`}
                      >
                        <FiExternalLink className="w-3.5 h-3.5" />
                      </a>
                    )}

                    {hasGithub && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-1.5 rounded-lg bg-neutral-100 hover:bg-neutral-200 dark:bg-white/[0.06] dark:hover:bg-white/[0.1] text-neutral-700 dark:text-neutral-300 transition-colors cursor-pointer"
                        title="View GitHub Repository"
                        aria-label={`View GitHub repository for ${projectTitle}`}
                      >
                        <FiGithub className="w-3.5 h-3.5" />
                      </a>
                    )}

                    <button
                      onClick={() => onOpenDetail(project)}
                      className="p-1.5 rounded-lg bg-neutral-100 hover:bg-neutral-200 dark:bg-white/[0.06] dark:hover:bg-white/[0.1] text-neutral-700 dark:text-neutral-300 transition-colors cursor-pointer"
                      title="View Project Details"
                      aria-label={`View project details for ${projectTitle}`}
                    >
                      <FiInfo className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </td>
              </motion.tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};
