import { memo } from 'react';
import { motion } from 'framer-motion';
import { cardVariants } from '../constants/projectVariants';
import { ProjectImage } from './ProjectImage';
import { ProjectActions } from './ProjectActions';
import { getTechIcon } from '../utils/projectIcons';

/**
 * Widescreen Architectural Project Slate.
 * Full-width, high-fidelity presentation architecture applied with 100% uniformity to all projects.
 */
const ProjectCardComponent = ({ project, index, inView }) => {
  // Formatted index display e.g. "01", "02", ...
  const formattedIndex = String(index + 1).padStart(2, '0');

  // URL slug derivation for browser frame
  const slug = project.liveUrl && project.liveUrl !== '#'
    ? project.liveUrl.replace(/^https?:\/\//, '').replace(/\/$/, '')
    : project.githubUrl && project.githubUrl !== '#'
      ? `${project.githubUrl.split('/').pop().replace('.git', '')}.repo`
      : `${project.id}.local`;

  // Standardize up to 3 highlights for 100% uniform card height
  const displayHighlights = (project.highlights || []).slice(0, 3);

  return (
    <motion.article
      className="group relative rounded-3xl overflow-hidden w-full h-full flex flex-col shrink-0 snap-center
        bg-white dark:bg-[#0D0D11] sm:bg-white/80 sm:dark:bg-[#0D0D11]/90 sm:backdrop-blur-md
        border border-neutral-200/80 dark:border-white/[0.08]
        hover:border-neutral-300 dark:hover:border-white/20
        shadow-[0_2px_16px_rgba(0,0,0,0.03)] dark:shadow-[0_4px_24px_rgba(0,0,0,0.5)]
        hover:shadow-[0_16px_48px_rgba(0,0,0,0.08)] dark:hover:shadow-[0_16px_48px_rgba(0,0,0,0.8)]
        transition-[border-color,box-shadow] duration-300"
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={cardVariants}
      custom={index}
      whileHover={{ y: -4, transition: { duration: 0.25 } }}
    >
      {/* Widescreen 12-Column Grid with fixed uniform height on desktop */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 relative z-10 w-full flex-1 lg:h-[490px]">
        {/* Left Column: Browser Viewport Preview (7 cols on Desktop) */}
        <div className="lg:col-span-7 h-full flex flex-col justify-center border-b lg:border-b-0 lg:border-r border-neutral-200/80 dark:border-white/[0.08] bg-neutral-900 overflow-hidden">
          <ProjectImage
            src={project.image}
            alt={`${project.title} - Project Preview`}
            title={project.title}
            urlSlug={slug}
            index={index}
          />
        </div>

        {/* Right Column: Engineering Dossier & Actions (5 cols on Desktop) */}
        <div className="lg:col-span-5 p-6 sm:p-7 lg:p-8 flex flex-col justify-between h-full bg-white dark:bg-[#0D0D11] sm:bg-white/50 sm:dark:bg-[#0D0D11]/60">
          <div className="flex flex-col">
            {/* Metadata Header */}
            <div className="flex items-center justify-between gap-3 mb-3 shrink-0">
              <span className="font-mono text-xs font-semibold text-blue-600 dark:text-blue-400 tracking-wider">
                PROJECT // {formattedIndex}
              </span>
            </div>

            {/* Title */}
            <h3 
              className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-neutral-900 dark:text-white tracking-tight mb-2.5 truncate group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200"
              title={project.title}
            >
              {project.title}
            </h3>

            {/* Narrative Description: line-clamp-2 with ellipsis like All Projects Archive */}
            <div className="mb-4">
              <p 
                className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed line-clamp-2 min-h-[2.5rem] sm:min-h-[2.8rem]"
                title={project.description}
              >
                {project.description}
              </p>
            </div>

            {/* Key Deliverables Matrix (Uniform up to 3 items) */}
            {displayHighlights.length > 0 && (
              <div className="space-y-1.5 mb-4">
                <span className="text-[10px] font-mono font-semibold uppercase tracking-wider text-neutral-600 dark:text-neutral-400 block">
                  Engineering Deliverables
                </span>
                <ul className="space-y-1.5">
                  {displayHighlights.map((highlight) => (
                    <li
                      key={highlight}
                      className="flex items-center gap-2 text-xs font-medium text-neutral-700 dark:text-neutral-300"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0" />
                      <span className="truncate" title={highlight}>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Tech Foundation Metadata with Verified Icons */}
            {project.tech && (
              <div className="space-y-1.5 mb-4">
                <span className="text-[10px] font-mono font-semibold uppercase tracking-wider text-neutral-600 dark:text-neutral-400 block">
                  Stack Foundation
                </span>
                <div className="flex flex-wrap gap-1.5 min-h-[2rem] items-center">
                  {project.tech.map((t, idx) => {
                    const Icon = getTechIcon(t);
                    return (
                      <span
                        key={idx}
                        className="group/tech inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-semibold bg-white dark:bg-[#0D0D10] text-neutral-800 dark:text-neutral-200 border border-neutral-200/90 dark:border-white/[0.08] shadow-[0_1px_2px_rgba(0,0,0,0.02)] hover:border-neutral-300 dark:hover:border-white/20 hover:bg-neutral-50/80 dark:hover:bg-white/[0.04] transition-colors duration-200 select-none cursor-default"
                      >
                        {Icon && (
                          <Icon
                            className="w-3.5 h-3.5 text-neutral-500 dark:text-neutral-400 group-hover/tech:text-blue-600 dark:group-hover/tech:text-blue-400 transition-colors shrink-0"
                            aria-hidden="true"
                          />
                        )}
                        <span className="group-hover/tech:text-neutral-900 dark:group-hover:text-white transition-colors">
                          {t}
                        </span>
                      </span>
                    );
                  })}
                </div>
              </div>
            )}
          </div>

          {/* Action Dock */}
          <div className="mt-auto shrink-0">
            <ProjectActions
              hasDemo={project.demo}
              githubUrl={project.githubUrl}
              liveUrl={project.liveUrl}
            />
          </div>
        </div>
      </div>
    </motion.article>
  );
};

export const ProjectCard = memo(ProjectCardComponent);

