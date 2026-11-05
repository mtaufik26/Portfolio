import { motion } from 'framer-motion';
import { photoVariants } from '../constants/heroVariants';

export const HeroPhoto = ({ 
  photoSrc, 
  altText = 'Taufik Ediansyah - Frontend Developer',
}) => {
  return (
    <div className="w-full lg:w-5/12 flex justify-center order-1 lg:order-2">
      <motion.div 
        className="relative w-full max-w-[280px] sm:max-w-[340px] md:max-w-[380px] lg:max-w-[400px]"
        variants={photoVariants}
      >
        {/* Master Photo Card — Unified with AboutProfileCard and ProjectCard tokens */}
        <div className="relative p-4 sm:p-5 rounded-2xl sm:rounded-3xl bg-white/90 dark:bg-[#0D0D10]/95 backdrop-blur-md border border-neutral-200/90 dark:border-white/[0.08] shadow-[0_8px_30px_rgba(0,0,0,0.04)] dark:shadow-[0_16px_40px_rgba(0,0,0,0.6)]">
          {/* Card Header matching AboutProfileCard */}
          <div className="flex items-center justify-between pb-3 sm:pb-3.5 mb-3 sm:mb-3.5 border-b border-neutral-100 dark:border-white/[0.06]">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-blue-600 dark:bg-blue-400" aria-hidden="true" />
              <h3 className="text-xs sm:text-sm font-bold text-neutral-900 dark:text-white uppercase tracking-wider">
                Engineering Focus
              </h3>
            </div>
            <span className="text-[11px] font-mono font-medium px-2 py-0.5 rounded-md bg-neutral-100 dark:bg-white/[0.05] text-neutral-600 dark:text-neutral-400">
              React · Tailwind
            </span>
          </div>

          {/* Photo Inner Container */}
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-xl sm:rounded-2xl bg-neutral-100 dark:bg-neutral-900 border border-neutral-200/60 dark:border-white/[0.06]">
            <img
              src={photoSrc}
              alt={altText}
              loading="eager"
              className="w-full h-full object-cover object-top transition-transform duration-500 hover:scale-[1.02]"
            />
            {/* Subtle inner shadow overlay */}
            <div 
              className="absolute inset-0 rounded-xl sm:rounded-2xl ring-1 ring-inset ring-black/5 dark:ring-white/10 pointer-events-none" 
              aria-hidden="true"
            />
          </div>

          {/* Card Footer matching AboutProfileCard */}
          <div className="mt-3 sm:mt-3.5 pt-3 sm:pt-3.5 border-t border-neutral-100 dark:border-white/[0.06] flex items-center justify-between text-xs">
            <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 font-medium">
              <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block" aria-hidden="true" />
              <span className="text-xs tracking-tight">Available for Work</span>
            </div>
            <span className="text-[11px] font-mono text-neutral-500 dark:text-neutral-400">
              Bogor, ID
            </span>
          </div>
        </div>
      </motion.div>
    </div>
  );
};