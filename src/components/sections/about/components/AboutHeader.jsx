import { motion } from 'framer-motion';
import { SectionBadge } from '../../../ui/SectionBadge';
import { itemVariants } from '../constants/aboutVariants';

export const AboutHeader = () => {
  return (
    <motion.div variants={itemVariants} className="space-y-3 sm:space-y-4">
      {/* Eyebrow Label */}
      <div>
        <SectionBadge>About · Background & Engineering Focus</SectionBadge>
      </div>

      {/* Main Heading */}
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-neutral-900 dark:text-white leading-[1.15]">
        Crafting responsive, user-friendly web interfaces with clean code.
      </h2>
    </motion.div>
  );
};