import { motion } from 'framer-motion';
import { itemVariants } from '../constants/aboutVariants';

export const AboutDescription = () => {
  return (
    <motion.div variants={itemVariants} className="space-y-5">
      <p className="text-base text-gray-600 dark:text-gray-400 leading-relaxed">
        I graduated from <span className="font-semibold text-gray-800 dark:text-white">SMK Wikrama Bogor</span>, with a major in Software and Game Development, and I have a strong interest in Frontend Development. I have experience creating responsive and user-friendly interfaces using HTML, CSS, JavaScript, and React.js.
      </p>

      <p className="text-base text-gray-600 dark:text-gray-400 leading-relaxed">
        I am communicative, disciplined, and responsible, with a strong commitment to delivering quality work and meeting targets. I always value integrity, professionalism, and teamwork in every project I work on.
        
      </p>
    </motion.div>
  );
};