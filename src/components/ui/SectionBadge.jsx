/**
 * Unified Section Eyebrow Badge.
 * Shared across all sections for design system consistency.
 */
export const SectionBadge = ({ children, className = '' }) => {
  return (
    <div
      className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-neutral-100/90 dark:bg-white/[0.05] border border-neutral-200/90 dark:border-white/[0.08] text-xs font-semibold text-neutral-800 dark:text-neutral-200 tracking-wide select-none ${className}`}
    >
      <span className="w-2 h-2 rounded-full bg-blue-600 dark:bg-blue-400" aria-hidden="true" />
      <span>{children}</span>
    </div>
  );
};

export default SectionBadge;
