import { motion } from 'framer-motion';
import { buttonVariants } from '../constants/contactVariants';

export const SocialLink = ({ social }) => {
  return (
    <motion.a
      href={social.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group w-10 h-10 rounded-lg bg-neutral-100 dark:bg-white/[0.06] border border-neutral-200/80 dark:border-white/[0.08] hover:border-blue-500/30 dark:hover:border-blue-500/30 hover:bg-neutral-200/70 dark:hover:bg-white/[0.1] flex items-center justify-center transition-all duration-200 shadow-sm"
      variants={buttonVariants}
      whileHover="hover"
      whileTap="tap"
      aria-label={social.name}
    >
      <span className="text-neutral-600 dark:text-neutral-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200">
        {social.icon}
      </span>
    </motion.a>
  );
};