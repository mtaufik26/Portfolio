import { motion } from 'framer-motion';
import { buttonVariants } from '../constants/contactVariants';

export const SocialLink = ({ social }) => {
  return (
    <motion.a
      href={social.url}
      target="_blank"
      rel="noopener noreferrer"
      className={`group w-10 h-10 rounded-lg bg-white/40 dark:bg-gray-800/40 border border-gray-200/40 dark:border-gray-700/40 dark:hover:border-blue-700 flex items-center justify-center transition-all duration-300 hover:shadow-md ${social.color}`}
      variants={buttonVariants}
      whileHover="hover"
      whileTap="tap"
      aria-label={social.name}
    >
      <span className="text-gray-600 dark:text-gray-400 group-hover:text-white transition-colors duration-300">
        {social.icon}
      </span>
    </motion.a>
  );
};