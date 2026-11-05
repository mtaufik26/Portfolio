import { useState, useMemo, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FiSearch, FiX, FiGrid, FiList, FiFolder, FiRotateCcw } from 'react-icons/fi';
import { ArchiveCard } from './ArchiveCard';
import { ArchiveTableView } from './ArchiveTableView';
import { ProjectDetailModal } from './ProjectDetailModal';
import { transitions } from '../../../../utils/motion';

/**
 * AllProjectsModal provides a professional, scalable, and high-density
 * project archive experience equipped with instant search, tech stack filtering,
 * and dual grid/table presentation modes.
 */
export const AllProjectsModal = ({ isOpen, onClose, projects }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTech, setSelectedTech] = useState('ALL');
  const [viewMode, setViewMode] = useState('grid'); // 'grid' | 'table'
  const [selectedDetailProject, setSelectedDetailProject] = useState(null);

  // Lock body scroll when modal is open and pause background particles
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      document.body.dataset.modalOpen = 'true';
    } else {
      document.body.style.overflow = '';
      delete document.body.dataset.modalOpen;
      setSearchQuery('');
      setSelectedTech('ALL');
      setSelectedDetailProject(null);
    }
    return () => {
      document.body.style.overflow = '';
      delete document.body.dataset.modalOpen;
    };
  }, [isOpen]);

  // Handle ESC key to close modal (or detail modal first)
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        if (selectedDetailProject) {
          setSelectedDetailProject(null);
        } else {
          onClose();
        }
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, selectedDetailProject, onClose]);

  // Extract unique technology tags with their counts
  const techCategories = useMemo(() => {
    const counts = {};
    projects.forEach((proj) => {
      proj.tech?.forEach((t) => {
        counts[t] = (counts[t] || 0) + 1;
      });
    });

    // Top tech filter tags (sorted by frequency)
    const sorted = Object.keys(counts).sort((a, b) => counts[b] - counts[a]);
    return [
      { name: 'ALL', label: 'All', count: projects.length },
      ...sorted.map((t) => ({ name: t, label: t, count: counts[t] })),
    ];
  }, [projects]);

  // Filter projects based on search query and selected tech
  const filteredProjects = useMemo(() => {
    const q = searchQuery.toLowerCase().trim();

    return projects.filter((project) => {
      // Tech filter check
      const matchesTech =
        selectedTech === 'ALL' ||
        project.tech?.some((t) => t.toLowerCase() === selectedTech.toLowerCase());

      if (!matchesTech) return false;

      // Text query check
      if (!q) return true;

      const titleMatch = project.title?.toLowerCase().includes(q);
      const descMatch = project.description?.toLowerCase().includes(q);
      const highlightsMatch = project.highlights?.some((h) => h.toLowerCase().includes(q));
      const techMatch = project.tech?.some((t) => t.toLowerCase().includes(q));

      return titleMatch || descMatch || highlightsMatch || techMatch;
    });
  }, [projects, searchQuery, selectedTech]);

  const handleResetFilters = () => {
    setSearchQuery('');
    setSelectedTech('ALL');
  };

  if (!isOpen) return null;

  const modalContent = (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: transitions.duration.fast, ease: transitions.smoothEase }}
      className="fixed inset-0 z-[9999] flex flex-col justify-end sm:justify-center items-center p-0 sm:p-4 md:p-6 bg-black/80 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-label="All Projects Directory"
    >
      {/* Backdrop click dismiss */}
      <div 
        className="absolute inset-0 z-0" 
        onClick={onClose} 
        aria-hidden="true" 
      />

      {/* Modal Window Container */}
      <motion.div
        initial={{ opacity: 0, y: 24, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 24, scale: 0.98 }}
        transition={{ duration: transitions.duration.fast, ease: transitions.smoothEase }}
        className="relative z-10 w-full max-w-6xl h-[94vh] sm:h-[90vh] flex flex-col
          bg-white dark:bg-[#0D0D11] rounded-t-3xl sm:rounded-3xl
          border border-neutral-200/90 dark:border-white/10
          shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
          {/* Sticky Header Bar */}
          <header className="sticky top-0 z-30 shrink-0 px-4 sm:px-8 py-3.5 sm:py-4.5
            bg-white dark:bg-[#0D0D11]
            border-b border-neutral-200/80 dark:border-white/[0.08]
            flex items-center justify-between gap-3 select-none"
          >
            <div>
              <div className="flex items-center gap-2 mb-0.5">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-600 dark:bg-blue-400" />
                <span className="text-[10px] sm:text-[11px] font-mono uppercase tracking-wider text-blue-600 dark:text-blue-400 font-semibold">
                  Engineering Directory
                </span>
              </div>
              <h2 className="text-base sm:text-xl font-bold text-neutral-900 dark:text-white flex items-center gap-2">
                <span>All Projects Archive</span>
                <span className="text-xs font-mono font-medium px-2 py-0.5 rounded-md bg-neutral-100 dark:bg-white/[0.08] text-neutral-600 dark:text-neutral-400 border border-neutral-200/60 dark:border-white/[0.06]">
                  {filteredProjects.length} / {projects.length}
                </span>
              </h2>
            </div>

            {/* Action Bar: View Switcher & Close */}
            <div className="flex items-center gap-2 sm:gap-3">
              {/* View Switcher (Desktop/Tablet) */}
              <div className="hidden sm:flex items-center p-1 rounded-xl bg-neutral-100 dark:bg-white/[0.06] border border-neutral-200/70 dark:border-white/[0.08]">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-1.5 rounded-lg text-xs font-medium transition-colors flex items-center gap-1.5 cursor-pointer ${
                    viewMode === 'grid'
                      ? 'bg-white dark:bg-white/15 text-blue-600 dark:text-white shadow-xs'
                      : 'text-neutral-500 hover:text-neutral-900 dark:hover:text-white'
                  }`}
                  title="Grid View"
                  aria-label="Grid View"
                >
                  <FiGrid className="w-3.5 h-3.5" />
                  <span className="text-[11px]">Grid</span>
                </button>
                <button
                  onClick={() => setViewMode('table')}
                  className={`p-1.5 rounded-lg text-xs font-medium transition-colors flex items-center gap-1.5 cursor-pointer ${
                    viewMode === 'table'
                      ? 'bg-white dark:bg-white/15 text-blue-600 dark:text-white shadow-xs'
                      : 'text-neutral-500 hover:text-neutral-900 dark:hover:text-white'
                  }`}
                  title="Table View"
                  aria-label="Table View"
                >
                  <FiList className="w-3.5 h-3.5" />
                  <span className="text-[11px]">Table</span>
                </button>
              </div>

              {/* Close Navigation Action */}
              <button
                onClick={onClose}
                className="inline-flex items-center gap-2 px-3 sm:px-3.5 py-1.5 sm:py-2 rounded-xl
                  bg-neutral-100 hover:bg-neutral-200 dark:bg-white/[0.06] dark:hover:bg-white/[0.1]
                  text-neutral-800 dark:text-neutral-200 border border-neutral-200/80 dark:border-white/10
                  text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer"
                aria-label="Back to Portfolio"
              >
                <span className="hidden sm:inline">Back</span>
                <span className="hidden sm:inline text-[10px] font-mono px-1.5 py-0.5 rounded bg-neutral-200 dark:bg-white/10 text-neutral-500 dark:text-neutral-400">
                  ESC
                </span>
                <FiX className="w-4 h-4" />
              </button>
            </div>
          </header>

          {/* Search & Filter Toolbar */}
          <div className="shrink-0 px-4 sm:px-8 py-2.5 sm:py-3 bg-neutral-50/70 dark:bg-white/[0.02] border-b border-neutral-200/70 dark:border-white/[0.06] flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-2.5 sm:gap-3">
            {/* Search Input */}
            <div className="relative flex-1 max-w-md">
              <FiSearch className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search projects, technologies, or keywords..."
                className="w-full pl-9 pr-9 py-2 rounded-xl text-xs sm:text-sm
                  bg-white dark:bg-white/[0.05]
                  border border-neutral-200 dark:border-white/10
                  focus:border-blue-500 dark:focus:border-blue-400
                  focus:outline-none focus:ring-1 focus:ring-blue-500/30
                  text-neutral-900 dark:text-white placeholder-neutral-400 transition-all"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-neutral-600 dark:hover:text-white cursor-pointer"
                >
                  <FiX className="w-3.5 h-3.5" />
                </button>
              )}
            </div>

            {/* Filter Pills (Horizontally Scrollable) */}
            <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0 hide-scrollbar max-w-full">
              {techCategories.slice(0, 7).map((tech) => {
                const isActive = selectedTech.toLowerCase() === tech.name.toLowerCase();
                return (
                  <button
                    key={tech.name}
                    onClick={() => setSelectedTech(tech.name)}
                    className={`inline-flex items-center gap-1.5 px-3 py-2 sm:py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-all cursor-pointer min-h-[36px] sm:min-h-0 focus:outline-none focus:ring-2 focus:ring-blue-500/40 ${
                      isActive
                        ? 'bg-blue-600 text-white shadow-xs font-semibold'
                        : 'bg-white dark:bg-white/[0.04] text-neutral-600 dark:text-neutral-400 border border-neutral-200/80 dark:border-white/[0.06] hover:bg-neutral-100 dark:hover:bg-white/[0.08]'
                    }`}
                  >
                    <span>{tech.label}</span>
                    <span
                      className={`text-[10px] font-mono px-1 rounded ${
                        isActive
                          ? 'bg-white/20 text-white'
                          : 'bg-neutral-100 dark:bg-white/10 text-neutral-500 dark:text-neutral-400'
                      }`}
                    >
                      {tech.count}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Scrollable Project Directory Content */}
          <div className="flex-1 overflow-y-auto px-4 sm:px-8 py-6 space-y-6 hide-scrollbar">
            {filteredProjects.length === 0 ? (
              /* Empty Search / Filter State */
              <div className="py-16 text-center max-w-md mx-auto">
                <div className="w-12 h-12 rounded-2xl bg-neutral-100 dark:bg-white/[0.06] border border-neutral-200 dark:border-white/10 flex items-center justify-center mx-auto mb-4 text-neutral-400">
                  <FiFolder className="w-6 h-6" />
                </div>
                <h3 className="text-base font-bold text-neutral-900 dark:text-white mb-1.5">
                  No Matching Projects Found
                </h3>
                <p className="text-xs sm:text-sm text-neutral-500 dark:text-neutral-400 mb-5 leading-relaxed">
                  No projects match "{searchQuery}" or the selected technology filter "{selectedTech}".
                </p>
                <button
                  onClick={handleResetFilters}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl
                    bg-neutral-900 dark:bg-white text-white dark:text-neutral-900
                    text-xs font-medium hover:opacity-90 transition-opacity cursor-pointer"
                >
                  <FiRotateCcw className="w-3.5 h-3.5" />
                  <span>Reset Filters & Search</span>
                </button>
              </div>
            ) : viewMode === 'table' ? (
              /* High-Density Archive Table */
              <div className="max-w-5xl mx-auto">
                <ArchiveTableView
                  projects={filteredProjects}
                  onOpenDetail={setSelectedDetailProject}
                />
              </div>
            ) : (
              /* High-Density Visual Grid */
              <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
                {filteredProjects.map((project, index) => (
                  <ArchiveCard
                    key={project.id}
                    project={project}
                    index={index}
                    onOpenDetail={setSelectedDetailProject}
                  />
                ))}
              </div>
            )}

            {/* Catalog Footer Info */}
            <div className="pt-8 pb-4 text-center border-t border-neutral-200/70 dark:border-white/[0.06] max-w-5xl mx-auto">
              <p className="text-xs font-mono text-neutral-400 dark:text-neutral-500 mb-3">
                Showing {filteredProjects.length} of {projects.length} total projects
              </p>
              <button
                onClick={onClose}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl
                  bg-neutral-100 hover:bg-neutral-200 dark:bg-white/[0.06] dark:hover:bg-white/[0.1]
                  text-neutral-700 dark:text-neutral-300 font-medium text-xs
                  transition-colors cursor-pointer"
              >
                <span>Back to Portfolio</span>
              </button>
            </div>
          </div>
        </motion.div>

        {/* Detailed Single Project Lightbox Modal */}
        <AnimatePresence>
          {selectedDetailProject && (
            <ProjectDetailModal
              project={selectedDetailProject}
              onClose={() => setSelectedDetailProject(null)}
            />
          )}
        </AnimatePresence>
      </motion.div>
    );

  return createPortal(modalContent, document.body);
};
