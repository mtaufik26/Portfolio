import { motion } from 'framer-motion';
import { SectionBadge } from '../../../ui/SectionBadge';
import { headerVariants } from '../constants/projectVariants';

export const ProjectsHeader = () => {
  return (
    <motion.div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14" variants={headerVariants}>
      {/* Eyebrow Badge matching Hero/About/Services */}
      <div className="mb-4">
        <SectionBadge>Portfolio · Selected Works</SectionBadge>
      </div>

      {/* Main Title */}
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-neutral-900 dark:text-white tracking-tight mb-4">
        Featured Projects
      </h2>

      {/* Supporting Subtitle */}
      <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed">
        Production web applications, client solutions, and frontend systems — engineered with modern component architecture, responsive design, and polished interactivity.
      </p>
    </motion.div>
  );
};