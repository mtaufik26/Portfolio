import { FiAward, FiCalendar, FiArrowUpRight, FiCheck } from 'react-icons/fi';

export const CertificateContent = ({ title, issuer, date, credential, onViewClick }) => {
  return (
    <div className="p-5 flex flex-col justify-between flex-1">
      <div>
        {/* Title */}
        <h3 
          onClick={onViewClick}
          className="font-bold text-base sm:text-lg text-neutral-900 dark:text-white mb-2.5 line-clamp-1 group-hover/card:text-blue-600 dark:group-hover/card:text-blue-400 transition-colors cursor-pointer"
        >
          {title}
        </h3>
        
        {/* Metadata Details */}
        <div className="space-y-1.5 mb-4 text-xs sm:text-sm">
          <div className="flex items-center gap-2 text-neutral-600 dark:text-neutral-400">
            <FiAward className="w-3.5 h-3.5 text-blue-500 shrink-0" />
            <span className="font-medium truncate">{issuer}</span>
          </div>
          
          <div className="flex items-center gap-2 text-neutral-500 dark:text-neutral-400">
            <FiCalendar className="w-3.5 h-3.5 text-neutral-400 dark:text-neutral-500 shrink-0" />
            <span>{date}</span>
          </div>
        </div>
      </div>
      
      {/* Verification ID Footer */}
      <div className="pt-3 border-t border-neutral-200/80 dark:border-white/[0.08] flex items-center justify-between gap-2">
        <div className="flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
          <span className="text-[11px] font-mono px-2 py-0.5 rounded-md bg-neutral-100 dark:bg-white/[0.06] text-neutral-600 dark:text-neutral-400 border border-neutral-200/60 dark:border-white/[0.06] truncate max-w-[170px]">
            {credential}
          </span>
        </div>

        <button
          onClick={onViewClick}
          className="inline-flex items-center gap-1 text-xs font-semibold text-neutral-500 hover:text-blue-600 dark:text-neutral-400 dark:hover:text-blue-400 transition-colors p-1 rounded-md cursor-pointer"
          aria-label={`View certificate details for ${title}`}
        >
          <span>View</span>
          <FiArrowUpRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
};