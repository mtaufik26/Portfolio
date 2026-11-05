import { motion } from 'framer-motion';
import { transitions } from '../../../../utils/motion';

export const chipVariants = {
  hidden: { 
    opacity: 0, 
    y: 8,
    scale: 0.96,
  },
  visible: { 
    opacity: 1, 
    y: 0,
    scale: 1,
    transition: { 
      duration: 0.24, 
      ease: transitions.smoothEase 
    } 
  },
  exit: { 
    opacity: 0, 
    y: -4,
    scale: 0.96,
    transition: { 
      duration: 0.12, 
      ease: transitions.smoothEase 
    } 
  },
};

export const TechChip = ({ tech }) => {
  const Icon = tech.icon;
  
  return (
    <motion.div
      variants={chipVariants}
      whileHover={{ y: -2 }}
      transition={{ duration: 0.15, ease: transitions.smoothEase }}
      className="group"
    >
      <div className="flex items-center gap-2.5 px-3.5 py-2 rounded-xl bg-white/90 dark:bg-[#0D0D10]/90 backdrop-blur-sm border border-neutral-200/90 dark:border-white/[0.08] shadow-[0_1px_3px_rgba(0,0,0,0.02)] hover:border-neutral-300 dark:hover:border-white/20 hover:bg-neutral-50/80 dark:hover:bg-white/[0.04] transition-colors duration-200 cursor-default select-none">
        <Icon className="w-4 h-4 text-neutral-500 dark:text-neutral-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors" aria-hidden="true" />
        <span className="text-xs sm:text-sm font-semibold text-neutral-800 dark:text-neutral-200 group-hover:text-neutral-900 dark:group-hover:text-white transition-colors">
          {tech.name}
        </span>
      </div>
    </motion.div>
  );
};