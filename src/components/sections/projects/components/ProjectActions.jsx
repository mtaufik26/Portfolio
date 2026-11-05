import { motion } from 'framer-motion';

/**
 * Action buttons for project links with verified state handling.
 * Uniform treatment across all cards in the portfolio.
 */
export const ProjectActions = ({ hasDemo, githubUrl, liveUrl }) => {
  const isGithubValid = githubUrl && githubUrl !== '#';
  const isDemoValid = hasDemo && liveUrl && liveUrl !== '#';

  return (
    <div className="flex items-center gap-3 pt-4 border-t border-neutral-200/80 dark:border-white/[0.08] mt-auto">
      {/* Live Demo Action */}
      {isDemoValid && (
        <a
          href={liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-medium text-white bg-blue-600 hover:bg-blue-500 shadow-xs hover:shadow-sm transition-all duration-200 group/btn"
        >
          <span>Live Demo</span>
          <svg className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </a>
      )}

      {/* GitHub Repository Action */}
      {isGithubValid && (
        <a
          href={githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-medium text-neutral-800 dark:text-neutral-200 bg-neutral-100/90 dark:bg-white/[0.06] hover:bg-neutral-200 dark:hover:bg-white/[0.1] border border-neutral-200/80 dark:border-white/10 hover:border-neutral-300 dark:hover:border-white/20 transition-all duration-200"
        >
          <svg className="w-3.5 h-3.5 text-neutral-700 dark:text-neutral-300" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
          </svg>
          <span>Source Code</span>
        </a>
      )}

      {/* Internal Project State (When repo is private / not public) */}
      {!isGithubValid && (
        <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-neutral-100/80 dark:bg-white/[0.04] border border-neutral-200/80 dark:border-white/[0.06] text-[11px] font-mono text-neutral-500 dark:text-neutral-400">
          <svg className="w-3.5 h-3.5 text-neutral-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
          </svg>
          <span>Internal Project</span>
        </div>
      )}
    </div>
  );
};