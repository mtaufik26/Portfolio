import { motion } from 'framer-motion';
import { itemVariants } from '../constants/aboutVariants';
import { StrengthsSection } from './StrengthsSection';

export const AboutRightColumn = ({ hasAnimated }) => {
  return (
    <motion.div variants={itemVariants} className="space-y-6">
      <StrengthsSection hasAnimated={hasAnimated} />
    </motion.div>
  );
};