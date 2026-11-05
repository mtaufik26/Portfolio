import { motion } from 'framer-motion';
import { cardVariants } from '../constants/serviceVariants';
import { transitions } from '../../../../utils/motion';
import { ArchitectureVisualizer } from './ArchitectureVisualizer';
import { ResponsiveVisualizer } from './ResponsiveVisualizer';
import { DataFlowVisualizer } from './DataFlowVisualizer';
import { StandardsScorecard } from './StandardsScorecard';

export const SpecializationCard = ({ service, index, colSpan = 'col-span-1' }) => {
  const Icon = service.icon;

  const renderVisualizer = () => {
    switch (service.visualType) {
      case 'architecture':
        return <ArchitectureVisualizer />;
      case 'responsive':
        return <ResponsiveVisualizer />;
      case 'dataflow':
        return <DataFlowVisualizer />;
      case 'standards':
        return <StandardsScorecard />;
      default:
        return null;
    }
  };

  return (
    <motion.div
      custom={index}
      variants={cardVariants}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.25, ease: transitions.smoothEase }}
      className={`group relative h-full ${colSpan}`}
    >
      {/* Interactive Card Shell */}
      <div className="relative h-full p-6 sm:p-8 rounded-2xl sm:rounded-3xl bg-white/90 dark:bg-[#0D0D11]/95 backdrop-blur-md border border-neutral-200/90 dark:border-white/[0.08] shadow-[0_4px_20px_rgba(0,0,0,0.03)] dark:shadow-[0_10px_30px_rgba(0,0,0,0.5)] hover:border-neutral-300 dark:hover:border-white/20 hover:shadow-lg dark:hover:shadow-black/70 transition-all duration-300 flex flex-col justify-between overflow-hidden">
        
        {/* Top & Middle Section */}
        <div className="relative z-10 flex-1">
          {/* Header Row: Discipline + Index Badge */}
          <div className="flex items-center justify-between gap-3 mb-5">
            <div className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-xl bg-neutral-100/90 dark:bg-white/[0.05] border border-neutral-200/90 dark:border-white/[0.08] flex items-center justify-center text-neutral-800 dark:text-neutral-200 group-hover:text-neutral-900 dark:group-hover:text-white group-hover:border-neutral-300 dark:group-hover:border-white/20 group-hover:bg-neutral-100 dark:group-hover:bg-white/[0.08] transition-all duration-300 shadow-xs">
                <Icon className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" aria-hidden="true" />
              </div>
              <span className="text-xs font-semibold text-neutral-700 dark:text-neutral-300 tracking-tight">
                {service.discipline}
              </span>
            </div>

            <span className="font-mono text-xs font-semibold px-2.5 py-1 rounded-md bg-neutral-100/80 dark:bg-white/[0.04] text-neutral-400 dark:text-neutral-500 border border-neutral-200/60 dark:border-white/[0.06] group-hover:text-neutral-900 dark:group-hover:text-white group-hover:border-neutral-300 dark:group-hover:border-white/20 transition-all duration-300">
              {service.number}
            </span>
          </div>

          {/* Title & Description */}
          <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-neutral-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200 mb-2.5">
            {service.title}
          </h3>

          <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400 leading-relaxed font-normal">
            {service.desc}
          </p>

          {/* Bespoke Engineering Visualizer */}
          {renderVisualizer()}
        </div>

        {/* Bottom Section: Core Engineering Practices (NO Tech Stack Duplication) */}
        <div className="relative z-10 pt-4 mt-2 border-t border-neutral-100 dark:border-white/[0.06]">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5">
            <span className="text-[11px] font-mono uppercase tracking-wider text-neutral-600 dark:text-neutral-400 font-semibold">
              Execution Focus
            </span>
            <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
              {service.practices.map((practice) => (
                <span
                  key={practice}
                  className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-neutral-100/70 dark:bg-white/[0.03] border border-neutral-200/70 dark:border-white/[0.06] text-[11px] font-mono font-medium text-neutral-600 dark:text-neutral-300 group-hover:border-neutral-300 dark:group-hover:border-white/[0.12] transition-colors cursor-default select-none"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500/70 dark:bg-blue-400/70" aria-hidden="true" />
                  <span>{practice}</span>
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
