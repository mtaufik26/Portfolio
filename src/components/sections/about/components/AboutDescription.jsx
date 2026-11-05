import { motion } from 'framer-motion';
import { itemVariants } from '../constants/aboutVariants';

export const AboutDescription = () => {
  return (
    <motion.div variants={itemVariants} className="space-y-4 text-neutral-600 dark:text-neutral-400 text-base sm:text-lg leading-relaxed font-normal">
      <p>
        I graduated from <span className="font-semibold text-neutral-900 dark:text-white">SMK Wikrama Bogor</span> majoring in Software and Game Development, with a focus on Front-End Web Development. Through professional experience at <span className="font-semibold text-neutral-900 dark:text-white">PT Lifetech</span>, I developed production web applications using React.js and Tailwind CSS, integrating REST APIs and optimizing UI performance for digital transactions.
      </p>

      <p>
        My development approach centers on reusable component structure, mobile-first responsiveness, and clean data exchange. Accustomed to collaborative teamwork and quick to master modern web technologies, I am committed to building fast, interactive interfaces that deliver reliable and comfortable user experiences.
      </p>
    </motion.div>
  );
};