import { FiCheckCircle, FiShield, FiZap, FiEye } from 'react-icons/fi';

export const StandardsScorecard = () => {
  const standards = [
    {
      title: 'Performance & Fast Paint',
      metric: 'Code Splitting & Lazy Load',
      detail: 'React Suspense & dynamic imports for zero initial render lag',
      icon: FiZap,
      tag: 'Optimized',
    },
    {
      title: 'Semantic a11y & ARIA',
      metric: 'WCAG Landmarks & Modal Focus',
      detail: 'Keyboard navigation (ESC, tab trapping) & semantic tags',
      icon: FiEye,
      tag: 'Accessible',
    },
    {
      title: 'Cross-Engine Parity',
      metric: 'Chromium · WebKit · Gecko',
      detail: 'Consistent UI verified across Chrome, Safari, & Firefox',
      icon: FiShield,
      tag: 'Verified',
    },
  ];

  return (
    <div className="w-full my-5 p-3.5 sm:p-4 rounded-xl bg-neutral-50/80 dark:bg-white/[0.02] border border-neutral-200/80 dark:border-white/[0.06] text-xs">
      {/* Top Label */}
      <div className="flex items-center justify-between pb-3 mb-3 border-b border-neutral-200/60 dark:border-white/[0.06]">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-blue-600 dark:bg-blue-400" aria-hidden="true" />
          <span className="font-mono text-[11px] font-semibold text-neutral-700 dark:text-neutral-300 uppercase tracking-wider">
            Frontend Quality & Standards
          </span>
        </div>
        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400 border border-blue-200/60 dark:border-blue-800/40">
          Standards-First
        </span>
      </div>

      {/* 3 Benchmarks Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-2.5">
        {standards.map((item) => {
          const Icon = item.icon;
          return (
            <div
              key={item.title}
              className="p-2.5 rounded-lg bg-white/90 dark:bg-white/[0.03] border border-neutral-200/70 dark:border-white/[0.06] transition-all hover:border-neutral-300 dark:hover:border-white/[0.12] cursor-default"
            >
              <div className="flex items-center justify-between mb-1.5">
                <Icon className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
                <span className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 border border-emerald-200/60 dark:border-emerald-800/40 flex items-center gap-1">
                  <FiCheckCircle className="w-2.5 h-2.5" />
                  {item.tag}
                </span>
              </div>
              <h5 className="font-semibold text-neutral-900 dark:text-white text-[11px] mb-0.5">
                {item.title}
              </h5>
              <p className="font-mono text-[10px] text-blue-600 dark:text-blue-400 font-medium mb-0.5">
                {item.metric}
              </p>
              <p className="text-[10px] text-neutral-500 dark:text-neutral-400 leading-tight">
                {item.detail}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
