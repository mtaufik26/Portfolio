import { motion } from 'framer-motion';
import { strengthCardVariants } from '../constants/aboutVariants';

export const StrengthCard = ({ item, index }) => {
  const Icon = item.icon;

  return (
    <motion.div
      custom={index}
      variants={strengthCardVariants}
      whileHover={{ y: -3 }}
      transition={{ duration: 0.2 }}
      className="group h-full"
    >
      <div className="h-full p-5 sm:p-6 rounded-2xl bg-white/90 dark:bg-[#0D0D10]/95 backdrop-blur-md border border-neutral-200/90 dark:border-white/[0.08] shadow-[0_4px_20px_rgba(0,0,0,0.03)] dark:shadow-[0_10px_30px_rgba(0,0,0,0.5)] hover:border-neutral-300 dark:hover:border-white/20 hover:shadow-md dark:hover:shadow-black/50 transition-all duration-300 flex flex-col justify-between">
        <div>
          {/* Header Row: Index & Icon */}
          <div className="flex items-center justify-between mb-4">
            <div className="w-10 h-10 rounded-xl bg-neutral-100 dark:bg-white/[0.05] border border-neutral-200/80 dark:border-white/[0.08] flex items-center justify-center text-neutral-800 dark:text-neutral-200 group-hover:text-neutral-900 dark:group-hover:text-white group-hover:border-neutral-300 dark:group-hover:border-white/20 transition-all duration-200">
              <Icon className="w-5 h-5" aria-hidden="true" />
            </div>
            <span className="text-xs font-mono font-semibold text-neutral-400 dark:text-neutral-500 tracking-wider">
              {item.id}
            </span>
          </div>

          {/* Title & Description */}
          <h4 className="text-base sm:text-lg font-bold text-neutral-900 dark:text-white tracking-tight mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
            {item.title}
          </h4>
          <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed font-normal">
            {item.desc}
          </p>
        </div>
      </div>
    </motion.div>
  );
};