import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMonitor, FiTablet, FiSmartphone } from 'react-icons/fi';

export const ResponsiveVisualizer = () => {
  const [activeViewport, setActiveViewport] = useState('desktop');

  const viewports = [
    { id: 'desktop', label: 'Desktop', width: '≥ 1024px', icon: FiMonitor, columns: 3 },
    { id: 'tablet', label: 'Tablet', width: '768px', icon: FiTablet, columns: 2 },
    { id: 'mobile', label: 'Mobile', width: '375px', icon: FiSmartphone, columns: 1 },
  ];

  return (
    <div className="w-full my-5 p-3.5 sm:p-4 rounded-xl bg-neutral-50/80 dark:bg-white/[0.02] border border-neutral-200/80 dark:border-white/[0.06] text-xs">
      {/* Top Viewport Selector Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 pb-3 mb-3 border-b border-neutral-200/60 dark:border-white/[0.06]">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-blue-600 dark:bg-blue-400" aria-hidden="true" />
          <span className="font-mono text-[11px] font-semibold text-neutral-700 dark:text-neutral-300 uppercase tracking-wider">
            Fluid Viewport Adaptation
          </span>
        </div>

        {/* Viewport Tabs */}
        <div className="flex items-center gap-1 p-0.5 rounded-lg bg-neutral-200/60 dark:bg-white/[0.04] border border-neutral-200/80 dark:border-white/[0.06]">
          {viewports.map((vp) => {
            const isActive = activeViewport === vp.id;
            const Icon = vp.icon;
            return (
              <button
                key={vp.id}
                type="button"
                onClick={() => setActiveViewport(vp.id)}
                className={`
                  relative px-2.5 py-1 rounded-md text-[11px] font-medium flex items-center gap-1.5 transition-colors duration-150
                  ${isActive ? 'text-white' : 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white'}
                `}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeViewportPill"
                    className="absolute inset-0 bg-blue-600 rounded-md shadow-xs"
                    transition={{ type: "spring", stiffness: 450, damping: 35 }}
                  />
                )}
                <Icon className="w-3 h-3 relative z-10" />
                <span className="relative z-10">{vp.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Interactive Responsive Wireframe Box */}
      <div className="p-3 rounded-lg bg-white/90 dark:bg-white/[0.03] border border-neutral-200/70 dark:border-white/[0.06] space-y-2.5 transition-all duration-300">
        {/* Wireframe Header Bar */}
        <div className="flex items-center justify-between px-2.5 py-1.5 rounded bg-neutral-100 dark:bg-white/[0.04]">
          <span className="font-mono text-[10px] text-neutral-600 dark:text-neutral-400 font-medium">
            {activeViewport === 'desktop' && 'Desktop Viewport (Multi-Column Grid)'}
            {activeViewport === 'tablet' && 'Tablet Viewport (Fluid 2-Column)'}
            {activeViewport === 'mobile' && 'Mobile Viewport (Single Column Stack)'}
          </span>
          <span className="font-mono text-[10px] text-neutral-400 dark:text-neutral-500">
            {viewports.find((v) => v.id === activeViewport)?.width}
          </span>
        </div>

        {/* Dynamic Grid Wireframe with smooth transition */}
        <div 
          className={`grid gap-2 transition-all duration-300 ${
            activeViewport === 'desktop' ? 'grid-cols-3' : activeViewport === 'tablet' ? 'grid-cols-2' : 'grid-cols-1'
          }`}
        >
          <div className="h-10 rounded bg-blue-50/70 dark:bg-blue-950/30 border border-blue-200/70 dark:border-blue-800/30 flex items-center justify-center text-blue-600 dark:text-blue-400 font-mono text-[10px] font-semibold">
            Section 01
          </div>
          <div className="h-10 rounded bg-neutral-100/90 dark:bg-white/[0.05] border border-neutral-200/70 dark:border-white/[0.06] flex items-center justify-center text-neutral-600 dark:text-neutral-400 font-mono text-[10px]">
            Section 02
          </div>
          {activeViewport !== 'mobile' && (
            <div className={`h-10 rounded bg-neutral-100/90 dark:bg-white/[0.05] border border-neutral-200/70 dark:border-white/[0.06] flex items-center justify-center text-neutral-600 dark:text-neutral-400 font-mono text-[10px] ${activeViewport === 'tablet' ? 'col-span-2' : ''}`}>
              Section 03
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
