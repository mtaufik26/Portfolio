import { motion } from 'framer-motion';
import { SectionBadge } from '../../../ui/SectionBadge';
import { itemVariants } from '../constants/contactVariants';

export const ContactHeader = () => {
  return (
    <motion.div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14" variants={itemVariants}>
      {/* Eyebrow Badge matching Hero/About/Services/Portfolio/Credentials */}
      <div className="mb-4">
        <SectionBadge>Contact · Get in Touch</SectionBadge>
      </div>

      {/* Main Title */}
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-neutral-900 dark:text-white tracking-tight mb-4">
        Let's Connect & Collaborate
      </h2>
      
      {/* Supporting Subtitle */}
      <p className="max-w-2xl mx-auto text-base sm:text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed">
        Whether you have a front-end developer opportunity, a web project to build, or want to discuss potential collaborations — my inbox is always open.
      </p>
    </motion.div>
  );
};