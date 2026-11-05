import { motion } from 'framer-motion';
import { SectionBadge } from '../../../ui/SectionBadge';
import { itemVariants } from '../constants/serviceVariants';

export const ServicesHeader = () => {
  return (
    <motion.div variants={itemVariants} className="text-center max-w-3xl mx-auto space-y-4 mb-10 sm:mb-14">
      {/* Eyebrow Badge — Aligned with Hero & About design language */}
      <div>
        <SectionBadge>Specialization · Core Capabilities</SectionBadge>
      </div>

      {/* Main Heading */}
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-neutral-900 dark:text-white leading-[1.15]">
        Front-End Engineering Focus
      </h2>

      {/* Subtitle / Description */}
      <p className="max-w-2xl mx-auto text-sm sm:text-base md:text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed font-normal">
        Core capabilities honed through production experience, hands-on web projects, and modern frontend standards.
      </p>
    </motion.div>
  );
};