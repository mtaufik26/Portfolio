import { motion } from 'framer-motion';
import { itemVariants } from '../constants/aboutVariants';
import { AboutHeader } from './AboutHeader';
import { AboutDescription } from './AboutDescription';
import { TechStackSection } from './TechStackSection';

export const AboutLeftColumn = ({ hasAnimated }) => {
  return (
    <div className="space-y-10">
      <motion.div variants={itemVariants} className="space-y-4">
        <AboutHeader />
        <AboutDescription />
      </motion.div>

      <TechStackSection hasAnimated={hasAnimated} />
    </div>
  );
};