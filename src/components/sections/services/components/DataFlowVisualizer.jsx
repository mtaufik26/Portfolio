import { useState } from 'react';
import { FiArrowRight, FiCheck, FiRefreshCw, FiAlertCircle } from 'react-icons/fi';

export const DataFlowVisualizer = () => {
  const [activeStep, setActiveStep] = useState(1);

  const steps = [
    {
      number: '01',
      title: 'Request Contract',
      detail: 'REST Endpoints (GET / POST) & JSON Validation',
      badge: 'REST / Axios',
    },
    {
      number: '02',
      title: 'Async Lifecycle',
      detail: 'Loading Spinners, Optimistic UI & Error Handlers',
      badge: 'State Handling',
    },
    {
      number: '03',
      title: 'UI Reconciliation',
      detail: 'Cache Update, State Sync & User Feedback',
      badge: 'Predictable State',
    },
  ];

  return (
    <div className="w-full my-5 p-3.5 sm:p-4 rounded-xl bg-neutral-50/80 dark:bg-white/[0.02] border border-neutral-200/80 dark:border-white/[0.06] text-xs">
      {/* Top Label */}
      <div className="flex items-center justify-between pb-3 mb-3 border-b border-neutral-200/60 dark:border-white/[0.06]">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-blue-600 dark:bg-blue-400" aria-hidden="true" />
          <span className="font-mono text-[11px] font-semibold text-neutral-700 dark:text-neutral-300 uppercase tracking-wider">
            RESTful Data Contract & State Lifecycle
          </span>
        </div>
        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 border border-emerald-200/60 dark:border-emerald-800/40">
          Resilient
        </span>
      </div>

      {/* 3-Step Lifecycle Pipeline */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-2.5">
        {steps.map((step, idx) => {
          const isSelected = activeStep === idx;
          return (
            <div
              key={step.number}
              onClick={() => setActiveStep(idx)}
              className={`p-2.5 rounded-lg border transition-all duration-200 cursor-pointer ${
                isSelected
                  ? 'bg-blue-50/70 dark:bg-blue-950/30 border-blue-500/40 shadow-xs'
                  : 'bg-white/90 dark:bg-white/[0.03] border-neutral-200/70 dark:border-white/[0.06] hover:border-neutral-300 dark:hover:border-white/[0.12]'
              }`}
            >
              <div className="flex items-center justify-between mb-1.5">
                <span className={`font-mono text-[10px] font-semibold ${isSelected ? 'text-blue-600 dark:text-blue-400' : 'text-neutral-400'}`}>
                  {step.number}
                </span>
                <span className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-neutral-100 dark:bg-white/[0.05] text-neutral-500 dark:text-neutral-400">
                  {step.badge}
                </span>
              </div>
              <h5 className="font-semibold text-neutral-900 dark:text-white text-[11px] mb-0.5">
                {step.title}
              </h5>
              <p className="text-[10px] text-neutral-500 dark:text-neutral-400 leading-tight">
                {step.detail}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
