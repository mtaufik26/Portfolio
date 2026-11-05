import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiX, FiExternalLink, FiGithub, FiCheckCircle } from 'react-icons/fi';
import { getTechIcon } from '../utils/projectIcons';
import { transitions } from '../../../../utils/motion';

/**
 * ProjectDetailModal provides a deep-dive inspection view for a single project
 * directly inside the archive experience.
 */
export const ProjectDetailModal = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        e.stopPropagation();
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!project) return null;

  const hasLiveDemo = project.demo && project.liveUrl && project.liveUrl !== '#';
  const hasGithub = project.githubUrl && project.githubUrl !== '#';

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: transitions.duration.fast, ease: transitions.smoothEase }}
      className="fixed inset-0 z-[10000] flex items-center justify-center p-4 sm:p-6 bg-black/75 backdrop-blur-xs"
      role="dialog"
      aria-modal="true"
      aria-label={`Details for ${project.title}`}
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.96, y: 16 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.96, y: 16 }}
        transition={{ duration: transitions.duration.fast, ease: transitions.smoothEase }}
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-3xl
          bg-white dark:bg-[#0D0D11]
          border border-neutral-200/90 dark:border-white/10
          shadow-2xl flex flex-col hide-scrollbar"
      >
        {/* Header Bar */}
        <div className="sticky top-0 z-20 px-6 py-4 bg-white dark:bg-[#0D0D11] border-b border-neutral-200/80 dark:border-white/[0.08] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400">
              Project Dossier
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-neutral-100 hover:bg-neutral-200 dark:bg-white/[0.06] dark:hover:bg-white/[0.1] text-neutral-600 dark:text-neutral-300 transition-colors cursor-pointer"
            aria-label="Close Details"
          >
            <FiX className="w-4 h-4" />
          </button>
        </div>

          {/* Media Preview Frame */}
          <div className="relative w-full bg-neutral-100 dark:bg-neutral-950 p-4 sm:p-6 flex items-center justify-center border-b border-neutral-200/80 dark:border-white/[0.08] shrink-0">
            <div className="relative w-full max-w-xl rounded-xl sm:rounded-2xl overflow-hidden border border-neutral-200/80 dark:border-white/10 shadow-lg bg-white dark:bg-black/60">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-auto max-h-[320px] sm:max-h-[400px] object-contain mx-auto block"
                loading="eager"
              />
            </div>
          </div>

          {/* Body Content */}
          <div className="p-6 sm:p-8 space-y-6">
            <div>
              <h3 className="text-2xl font-bold text-neutral-900 dark:text-white tracking-tight mb-2">
                {project.title}
              </h3>
              <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400 leading-relaxed">
                {project.description}
              </p>
            </div>

            {/* Engineering Deliverables */}
            {project.highlights && project.highlights.length > 0 && (
              <div className="space-y-3">
                <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-neutral-600 dark:text-neutral-400">
                  Key Engineering Deliverables
                </h4>
                <div className="grid grid-cols-1 gap-2.5">
                  {project.highlights.map((highlight) => (
                    <div
                      key={highlight}
                      className="flex items-start gap-3 p-3 rounded-xl bg-neutral-50 dark:bg-white/[0.03] border border-neutral-200/70 dark:border-white/[0.04]"
                    >
                      <FiCheckCircle className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-sm font-medium text-neutral-800 dark:text-neutral-200">
                        {highlight}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Tech Stack Foundation */}
            <div className="space-y-3">
              <h4 className="text-xs font-mono font-semibold uppercase tracking-wider text-neutral-600 dark:text-neutral-400">
                Stack Foundation
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((techItem) => {
                  const TechIcon = getTechIcon(techItem);
                  return (
                    <span
                      key={techItem}
                      className="group inline-flex items-center gap-2 px-3 py-1.5 rounded-xl
                        bg-white dark:bg-[#0D0D10]
                        text-neutral-800 dark:text-neutral-200
                        border border-neutral-200/90 dark:border-white/[0.08]
                        shadow-[0_1px_3px_rgba(0,0,0,0.02)]
                        hover:border-neutral-300 dark:hover:border-white/20
                        hover:bg-neutral-50/80 dark:hover:bg-white/[0.04]
                        text-xs sm:text-sm font-semibold transition-colors duration-200 select-none cursor-default"
                    >
                      {TechIcon && (
                        <TechIcon
                          className="w-4 h-4 text-neutral-500 dark:text-neutral-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors shrink-0"
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

            {/* Footer Action Links */}
            <div className={`pt-4 border-t border-neutral-200/80 dark:border-white/[0.08] flex flex-wrap items-center ${hasLiveDemo ? 'justify-between' : 'justify-end'} gap-3`}>
              {hasLiveDemo && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl
                    bg-blue-600 hover:bg-blue-500 text-white font-medium text-sm
                    shadow-xs hover:shadow-sm transition-all duration-200 cursor-pointer"
                >
                  <span>Open Live Demo</span>
                  <FiExternalLink className="w-4 h-4" />
                </a>
              )}

              {hasGithub && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl
                    bg-neutral-100 hover:bg-neutral-200 dark:bg-white/[0.06] dark:hover:bg-white/[0.1]
                    text-neutral-800 dark:text-neutral-200 border border-neutral-200/80 dark:border-white/10
                    text-xs sm:text-sm font-medium transition-colors cursor-pointer"
                >
                  <FiGithub className="w-4 h-4" />
                  <span>View Repository</span>
                </a>
              )}
            </div>
          </div>
        </motion.div>
      </motion.div>
  );
};
