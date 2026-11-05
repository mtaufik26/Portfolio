import { memo } from 'react';
import { motion } from 'framer-motion';
import { FiExternalLink, FiGithub, FiInfo, FiArrowUpRight } from 'react-icons/fi';
import { getTechIcon } from '../utils/projectIcons';

/**
 * ArchiveCard provides a compact, balanced, and high-density card
 * specifically tailored for the All Projects archive modal.
 */
const ArchiveCardComponent = ({ project, index, onOpenDetail }) => {
  const formattedIndex = String(index + 1).padStart(2, '0');
  const hasLiveDemo = project.demo && project.liveUrl && project.liveUrl !== '#';
  const hasGithub = project.githubUrl && project.githubUrl !== '#';

  return (
    <motion.article
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 15 }}
      transition={{ duration: 0.2, delay: Math.min(index * 0.03, 0.3) }}
      className="group flex flex-col justify-between rounded-2xl overflow-hidden
        bg-white dark:bg-[#0D0D11]
        border border-neutral-200/90 dark:border-white/[0.08]
        hover:border-neutral-300 dark:hover:border-white/20
        shadow-[0_2px_12px_rgba(0,0,0,0.03)] dark:shadow-[0_4px_20px_rgba(0,0,0,0.4)]
        hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] dark:hover:shadow-[0_8px_30px_rgba(0,0,0,0.7)]
        transition-[border-color,box-shadow] duration-300"
    >
      {/* Top Media & Browser Frame */}
      <div 
        className="relative h-44 sm:h-48 overflow-hidden bg-neutral-100 dark:bg-black/40 border-b border-neutral-200/80 dark:border-white/[0.06] cursor-pointer"
        onClick={() => onOpenDetail(project)}
      >
        {/* Subtle Browser Pill Bar */}
        <div className="absolute top-2.5 inset-x-3 z-10 flex items-center justify-between px-3 py-1 rounded-lg bg-neutral-950/95 dark:bg-black/95 border border-white/10 text-[10px] font-mono text-white shadow-xs">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
            <span className="text-[10px] text-white/90 font-mono font-medium tracking-wide">
              PROJECT {formattedIndex}
            </span>
          </div>
          {hasLiveDemo ? (
            <span className="flex items-center gap-1 text-[9px] font-semibold text-emerald-400 bg-emerald-500/20 px-1.5 py-0.5 rounded border border-emerald-500/30">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              LIVE
            </span>
          ) : (
            <span className="text-[9px] text-neutral-300 bg-white/10 px-1.5 py-0.5 rounded border border-white/10">
              SOURCE
            </span>
          )}
        </div>

        {/* Thumbnail Image */}
        <img
          src={project.image}
          alt={project.title}
          loading="lazy"
          decoding="async"
          width="600"
          height="375"
          className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500 ease-out"
        />

        {/* Quick View Overlay on Hover */}
        <div className="absolute inset-0 bg-blue-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
          <span className="px-3 py-1.5 rounded-full bg-black/80 text-white text-xs font-medium border border-white/20 shadow-lg flex items-center gap-1.5">
            <FiInfo className="w-3.5 h-3.5" />
            View Details
          </span>
        </div>
      </div>

      {/* Card Content */}
      <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
        <div>
          {/* Index & Title */}
          <div className="flex items-start justify-between gap-2 mb-1.5">
            <h3 
              onClick={() => onOpenDetail(project)}
              className="text-base sm:text-lg font-bold text-neutral-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200 cursor-pointer line-clamp-1"
            >
              {project.title}
            </h3>
            <button
              onClick={() => onOpenDetail(project)}
              className="p-1 rounded-md text-neutral-400 hover:text-neutral-900 dark:hover:text-white hover:bg-neutral-100 dark:hover:bg-white/[0.08] transition-colors cursor-pointer"
              title="View Project Details"
              aria-label={`Details for ${project.title}`}
            >
              <FiArrowUpRight className="w-4 h-4" />
            </button>
          </div>

          {/* Description */}
          <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed line-clamp-2 mb-3">
            {project.description}
          </p>

          {/* Highlights Preview */}
          {project.highlights && project.highlights.length > 0 && (
            <div className="mb-3 space-y-1">
              <span className="text-[10px] font-mono font-medium text-neutral-600 dark:text-neutral-400 uppercase tracking-wider block">
                Deliverable
              </span>
              <p className="text-[11px] font-medium text-neutral-700 dark:text-neutral-300 truncate">
                • {project.highlights[0]}
                {project.highlights[1] && ` • ${project.highlights[1]}`}
              </p>
            </div>
          )}

          {/* Tech Stack Chips with Icons */}
          <div className="flex flex-wrap gap-1.5 pt-1">
            {project.tech.map((techItem) => {
              const TechIcon = getTechIcon(techItem);
              return (
                <span
                  key={techItem}
                  className="group inline-flex items-center gap-1.5 px-2.5 py-1 rounded-xl
                    bg-white dark:bg-[#0D0D10]
                    text-neutral-800 dark:text-neutral-200
                    border border-neutral-200/90 dark:border-white/[0.08]
                    shadow-[0_1px_3px_rgba(0,0,0,0.02)]
                    hover:border-neutral-300 dark:hover:border-white/20
                    hover:bg-neutral-50/80 dark:hover:bg-white/[0.04]
                    text-xs font-semibold transition-colors duration-200 select-none cursor-default"
                >
                  {TechIcon && (
                    <TechIcon
                      className="w-3.5 h-3.5 text-neutral-500 dark:text-neutral-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors shrink-0"
                      aria-hidden="true"
                    />
                  )}
                  <span className="group-hover:text-neutral-900 dark:group-hover:text-white transition-colors">
                    {techItem}
                  </span>
                </span>
              );
            })}
          </div>
        </div>

        {/* Card Footer Actions */}
        <div className={`pt-3 border-t border-neutral-200/70 dark:border-white/[0.06] flex items-center ${hasLiveDemo ? 'justify-between' : 'justify-end'} gap-2`}>
          {/* Live Demo */}
          {hasLiveDemo && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg
                bg-blue-600 hover:bg-blue-500 text-white font-medium text-xs
                transition-all duration-200 shadow-xs cursor-pointer"
            >
              <span>Live Demo</span>
              <FiExternalLink className="w-3 h-3" />
            </a>
          )}

          <div className="flex items-center gap-1.5">
            {hasGithub && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg
                  bg-neutral-100 hover:bg-neutral-200 dark:bg-white/[0.06] dark:hover:bg-white/[0.1]
                  text-neutral-800 dark:text-neutral-200 border border-neutral-200/70 dark:border-white/[0.08]
                  text-xs font-medium transition-colors cursor-pointer"
                title="Open GitHub Repository"
                aria-label="GitHub Repository"
              >
                <FiGithub className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Code</span>
              </a>
            )}

            <button
              onClick={() => onOpenDetail(project)}
              className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-lg
                bg-neutral-100 hover:bg-neutral-200 dark:bg-white/[0.06] dark:hover:bg-white/[0.1]
                text-neutral-700 dark:text-neutral-300 border border-neutral-200/70 dark:border-white/[0.08]
                text-xs font-medium transition-colors cursor-pointer"
            >
              <FiInfo className="w-3 h-3" />
              <span>Detail</span>
            </button>
          </div>
        </div>
      </div>
    </motion.article>
  );
};

export const ArchiveCard = memo(ArchiveCardComponent);
