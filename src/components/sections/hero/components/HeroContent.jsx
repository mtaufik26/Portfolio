import { motion } from 'framer-motion';
import { 
  SiReact, 
  SiTypescript, 
  SiNextdotjs, 
  SiTailwindcss, 
  SiJavascript 
} from 'react-icons/si';
import { SectionBadge } from '../../../ui/SectionBadge';
import { 
  badgeVariants, 
  headlineVariants, 
  narrativeVariants, 
  techStackVariants 
} from '../constants/heroVariants';
import { CTAButtons } from './CTAButtons';

const CORE_TECHS = [
  { name: 'React', icon: SiReact },
  { name: 'TypeScript', icon: SiTypescript },
  { name: 'Next.js', icon: SiNextdotjs },
  { name: 'Tailwind CSS', icon: SiTailwindcss },
  { name: 'JavaScript', icon: SiJavascript },
];

export const HeroContent = () => {
  return (
    <div className="w-full lg:w-7/12 order-2 lg:order-1 space-y-6 sm:space-y-7">
      <div className="space-y-4">
        
        {/* Editorial Role & Location Eyebrow */}
        <motion.div variants={badgeVariants}>
          <SectionBadge>Front-End Developer · Bogor, Indonesia</SectionBadge>
        </motion.div>

        {/* Semantic H1 & Visual Headline */}
        <motion.div className="space-y-2" variants={headlineVariants}>
          <h1 className="text-3xl sm:text-5xl lg:text-[3.5rem] xl:text-6xl font-extrabold tracking-tight text-neutral-900 dark:text-white leading-[1.12]">
            Taufik <span className="text-blue-600 dark:text-blue-400">Ediansyah</span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl font-semibold text-neutral-700 dark:text-neutral-300 tracking-tight">
            Building responsive, interactive, and user-friendly web interfaces.
          </p>
        </motion.div>

        {/* Narrative Description (Factual & Personal) */}
        <motion.p 
          variants={narrativeVariants}
          className="text-sm sm:text-base md:text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed max-w-xl font-normal"
        >
          Front-End Developer experienced in React.js, Tailwind CSS, and REST API integration. Committed to crafting responsive, high-performance web interfaces with optimal user experiences.
        </motion.p>
      </div>

      {/* Core Tech Stack Strip */}
      <motion.div className="space-y-2.5 pt-1" variants={techStackVariants}>
        <span className="text-[11px] uppercase tracking-wider font-semibold text-neutral-500 dark:text-neutral-400 block">
          Core Technologies
        </span>
        <div className="flex flex-wrap items-center gap-2 sm:gap-2.5">
          {CORE_TECHS.map(({ name, icon: Icon }) => (
            <div
              key={name}
              className="group inline-flex items-center gap-2 px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-xl bg-white/90 dark:bg-[#0D0D10]/90 backdrop-blur-sm border border-neutral-200/90 dark:border-white/[0.08] shadow-[0_1px_3px_rgba(0,0,0,0.02)] text-xs font-semibold text-neutral-800 dark:text-neutral-200 hover:border-neutral-300 dark:hover:border-white/20 hover:bg-neutral-50/80 dark:hover:bg-white/[0.04] transition-all duration-200 cursor-default select-none"
            >
              <Icon className="w-3.5 h-3.5 text-neutral-500 dark:text-neutral-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors" aria-hidden="true" />
              <span>{name}</span>
            </div>
          ))}
        </div>
      </motion.div>

      {/* CTA Actions */}
      <CTAButtons />
    </div>
  );
};