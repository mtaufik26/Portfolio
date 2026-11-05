import { motion } from 'framer-motion';

/**
 * Navigation control bar with Previous/Next buttons, active counter, and interactive pagination pills.
 * Consistent with the navigation precision of the Certificates section.
 */
export const ProjectNavigationControl = ({ 
  currentIndex, 
  totalProjects, 
  onPrev, 
  onNext, 
  onSelectIndex 
}) => {
  const isFirst = currentIndex === 0;
  const isLast = currentIndex === totalProjects - 1;

  const formattedCurrent = String(currentIndex + 1).padStart(2, '0');
  const formattedTotal = String(totalProjects).padStart(2, '0');

  return (
    <div className="flex flex-col sm:flex-row items-center justify-between gap-4 py-2 px-1 select-none">
      {/* Active Project Counter & Hint */}
      <div className="flex items-center gap-3 text-xs font-mono text-neutral-500 dark:text-neutral-400">
        <span className="font-semibold text-neutral-800 dark:text-neutral-200">
          PROJECT {formattedCurrent} <span className="text-neutral-400 dark:text-neutral-600">/</span> {formattedTotal}
        </span>
      </div>

      {/* Interactive Pagination Dots / Pills */}
      <div className="flex items-center gap-1.5" role="tablist" aria-label="Project Navigation Dots">
        {Array.from({ length: totalProjects }, (_, i) => {
          const isActive = currentIndex === i;
          return (
            <button
              key={i}
              role="tab"
              aria-selected={isActive}
              aria-label={`View project ${i + 1}`}
              onClick={() => onSelectIndex(i)}
              className={`
                h-2 rounded-full transition-all duration-300 cursor-pointer
                ${isActive 
                  ? 'w-7 bg-blue-600 dark:bg-blue-500 shadow-xs' 
                  : 'w-2 bg-neutral-300 dark:bg-neutral-700 hover:bg-neutral-400 dark:hover:bg-neutral-600'}
              `}
            />
          );
        })}
      </div>

      {/* Navigation Buttons (Prev & Next) */}
      <div className="flex items-center gap-2">
        <button
          onClick={onPrev}
          disabled={isFirst}
          className={`
            w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-200
            border border-neutral-200/80 dark:border-white/10
            ${isFirst 
              ? 'opacity-40 cursor-not-allowed bg-neutral-100/50 dark:bg-white/[0.02] text-neutral-400 dark:text-neutral-600' 
              : 'cursor-pointer bg-white dark:bg-[#121218] text-neutral-700 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white hover:border-neutral-400 dark:hover:border-white/20 shadow-xs hover:scale-105 active:scale-95'}
          `}
          aria-label="Previous project"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <button
          onClick={onNext}
          disabled={isLast}
          className={`
            w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-200
            border border-neutral-200/80 dark:border-white/10
            ${isLast 
              ? 'opacity-40 cursor-not-allowed bg-neutral-100/50 dark:bg-white/[0.02] text-neutral-400 dark:text-neutral-600' 
              : 'cursor-pointer bg-white dark:bg-[#121218] text-neutral-700 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white hover:border-neutral-400 dark:hover:border-white/20 shadow-xs hover:scale-105 active:scale-95'}
          `}
          aria-label="Next project"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
};
