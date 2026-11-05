import { useImageError } from '../hooks/useImageError';
import { FiAward, FiEye } from 'react-icons/fi';

export const CertificateImage = ({ src, alt, title, issuer, credential, onClick }) => {
  const { currentSrc, showError, handleError } = useImageError(src);

  return (
    <div
      className="relative aspect-[16/10] overflow-hidden cursor-pointer bg-neutral-100 dark:bg-[#090a0f] flex items-center justify-center border-b border-neutral-200/80 dark:border-white/[0.06] select-none"
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onClick?.();
        }
      }}
    >
      {currentSrc && !showError ? (
        <>
          {/* Plain img — scale via CSS group-hover (no framer overhead) */}
          <img
            src={currentSrc}
            alt={alt}
            loading="lazy"
            decoding="async"
            className="w-full h-full object-cover transition-transform duration-500 group-hover/card:scale-105"
            onError={handleError}
          />
          {/* Subtle Verified Watermark Tag */}
          <div className="absolute top-2.5 left-3 z-10 flex items-center gap-1.5 px-2 py-0.5 rounded-md bg-neutral-950/90 dark:bg-black/90 border border-white/10 text-[9px] font-mono text-white/90">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
            <span>ACCREDITED</span>
          </div>
        </>
      ) : (
        /* Honest Course Completion Presentation Fallback */
        <div className="w-full h-full p-5 flex flex-col items-center justify-center bg-gradient-to-b from-neutral-50/90 to-neutral-100/90 dark:from-[#111219] dark:to-[#0a0a0f] text-center relative overflow-hidden">
          {/* Central Course Icon */}
          <div className="relative z-10 w-11 h-11 rounded-xl bg-blue-500/10 dark:bg-blue-500/15 border border-blue-500/30 text-blue-600 dark:text-blue-400 flex items-center justify-center shadow-xs mb-2 group-hover/card:scale-110 group-hover/card:border-neutral-300 dark:group-hover/card:border-white/20 transition-all duration-300">
            <FiAward className="w-5 h-5" />
          </div>

          {/* Issuer Eyebrow */}
          <span className="relative z-10 text-[10px] font-mono uppercase tracking-widest text-neutral-400 dark:text-neutral-500 font-semibold mb-1 truncate max-w-[240px]">
            {issuer}
          </span>

          {/* Title */}
          <h4 className="relative z-10 text-xs sm:text-sm font-bold text-neutral-800 dark:text-neutral-200 line-clamp-1 px-3">
            {title}
          </h4>

          {/* Reference Tag */}
          <span className="relative z-10 text-[10px] font-mono text-neutral-400 dark:text-neutral-500 mt-1">
            Ref: {credential}
          </span>
        </div>
      )}

      {/* Hover Inspection Overlay */}
      <div className="absolute inset-0 bg-neutral-950/40 dark:bg-black/60 backdrop-blur-[2px] flex items-center justify-center opacity-0 group-hover/card:opacity-100 transition-opacity duration-300 pointer-events-none">
        <div className="px-3.5 py-1.5 rounded-full bg-neutral-900/90 dark:bg-white text-white dark:text-neutral-900 text-xs font-semibold flex items-center gap-1.5 shadow-lg border border-neutral-700/80 dark:border-white">
          <FiEye className="w-3.5 h-3.5" />
          <span>Preview Certificate</span>
        </div>
      </div>
    </div>
  );
};