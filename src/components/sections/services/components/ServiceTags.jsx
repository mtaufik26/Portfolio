export const ServiceTags = ({ tags }) => {
  return (
    <div className="flex flex-wrap items-center gap-2">
      {tags.map((tag) => (
        <span
          key={tag}
          className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-neutral-100/70 dark:bg-white/[0.04] border border-neutral-200/70 dark:border-white/[0.06] text-xs font-mono font-medium text-neutral-600 dark:text-neutral-400 group-hover:border-neutral-300 dark:group-hover:border-white/[0.12] transition-colors cursor-default select-none"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-blue-500/60 dark:bg-blue-400/60" aria-hidden="true" />
          <span>{tag}</span>
        </span>
      ))}
    </div>
  );
};