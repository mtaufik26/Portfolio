import { useState } from 'react';
import { FiLayers, FiBox, FiCpu, FiGrid } from 'react-icons/fi';

export const ArchitectureVisualizer = () => {
  const [activeNode, setActiveNode] = useState('tree');

  return (
    <div className="w-full my-5 p-3.5 sm:p-4 rounded-xl bg-neutral-50/80 dark:bg-white/[0.02] border border-neutral-200/80 dark:border-white/[0.06] text-xs">
      {/* Top Architecture Label */}
      <div className="flex items-center justify-between pb-3 mb-3 border-b border-neutral-200/60 dark:border-white/[0.06]">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-blue-600 dark:bg-blue-400" aria-hidden="true" />
          <span className="font-mono text-[11px] font-semibold text-neutral-700 dark:text-neutral-300 uppercase tracking-wider">
            Component Hierarchy Blueprint
          </span>
        </div>
        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400 border border-blue-200/60 dark:border-blue-800/40">
          Decoupled
        </span>
      </div>

      {/* Visual Component Tree Blocks */}
      <div className="space-y-2">
        {/* Tier 1: Root Shell */}
        <div 
          onMouseEnter={() => setActiveNode('shell')}
          onMouseLeave={() => setActiveNode('tree')}
          className={`p-2.5 rounded-lg border transition-all duration-200 flex items-center justify-between cursor-default ${
            activeNode === 'shell'
              ? 'bg-blue-50/70 dark:bg-blue-950/30 border-blue-500/40 shadow-sm'
              : 'bg-white/90 dark:bg-white/[0.03] border-neutral-200/70 dark:border-white/[0.06]'
          }`}
        >
          <div className="flex items-center gap-2.5">
            <FiLayers className={`w-3.5 h-3.5 transition-colors ${activeNode === 'shell' ? 'text-blue-600 dark:text-blue-400' : 'text-neutral-500'}`} />
            <span className="font-semibold text-neutral-800 dark:text-neutral-200">
              App Shell & Context Providers
            </span>
          </div>
          <span className="font-mono text-[10px] text-neutral-400 dark:text-neutral-500">
            Layout · Theme · Modals
          </span>
        </div>

        {/* Tier 2: 2 Column Sub-Branch */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          <div 
            onMouseEnter={() => setActiveNode('views')}
            onMouseLeave={() => setActiveNode('tree')}
            className={`p-2.5 rounded-lg border transition-all duration-200 cursor-default ${
              activeNode === 'views'
                ? 'bg-blue-50/70 dark:bg-blue-950/30 border-blue-500/40 shadow-sm'
                : 'bg-white/90 dark:bg-white/[0.03] border-neutral-200/70 dark:border-white/[0.06]'
            }`}
          >
            <div className="flex items-center gap-2 mb-1">
              <FiGrid className={`w-3.5 h-3.5 transition-colors ${activeNode === 'views' ? 'text-blue-600 dark:text-blue-400' : 'text-neutral-500'}`} />
              <span className="font-semibold text-neutral-800 dark:text-neutral-200">
                Feature Sections
              </span>
            </div>
            <p className="text-[11px] text-neutral-500 dark:text-neutral-400 leading-tight">
              Hero, Projects, Archive & Contact
            </p>
          </div>

          <div 
            onMouseEnter={() => setActiveNode('design')}
            onMouseLeave={() => setActiveNode('tree')}
            className={`p-2.5 rounded-lg border transition-all duration-200 cursor-default ${
              activeNode === 'design'
                ? 'bg-blue-50/70 dark:bg-blue-950/30 border-blue-500/40 shadow-sm'
                : 'bg-white/90 dark:bg-white/[0.03] border-neutral-200/70 dark:border-white/[0.06]'
            }`}
          >
            <div className="flex items-center gap-2 mb-1">
              <FiBox className={`w-3.5 h-3.5 transition-colors ${activeNode === 'design' ? 'text-blue-600 dark:text-blue-400' : 'text-neutral-500'}`} />
              <span className="font-semibold text-neutral-800 dark:text-neutral-200">
                Design System UI
              </span>
            </div>
            <p className="text-[11px] text-neutral-500 dark:text-neutral-400 leading-tight">
              Tokens, Cards, Badges & Action Docks
            </p>
          </div>
        </div>

        {/* Tier 3: Reactive State Hooks */}
        <div 
          onMouseEnter={() => setActiveNode('hooks')}
          onMouseLeave={() => setActiveNode('tree')}
          className={`p-2.5 rounded-lg border transition-all duration-200 flex items-center justify-between cursor-default ${
            activeNode === 'hooks'
              ? 'bg-blue-50/70 dark:bg-blue-950/30 border-blue-500/40 shadow-sm'
              : 'bg-white/90 dark:bg-white/[0.03] border-neutral-200/70 dark:border-white/[0.06]'
          }`}
        >
          <div className="flex items-center gap-2.5">
            <FiCpu className={`w-3.5 h-3.5 transition-colors ${activeNode === 'hooks' ? 'text-blue-600 dark:text-blue-400' : 'text-neutral-500'}`} />
            <span className="font-semibold text-neutral-800 dark:text-neutral-200">
              Custom Hooks & Component State
            </span>
          </div>
          <span className="font-mono text-[10px] text-neutral-400 dark:text-neutral-500">
            Scrollspy · Form · Modals
          </span>
        </div>
      </div>
    </div>
  );
};
