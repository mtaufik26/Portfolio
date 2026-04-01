import { motion } from 'framer-motion';
import { strengthCardVariants } from '../constants/aboutVariants';

export const StrengthCard = ({ item, index, hasAnimated }) => {
  const Icon = item.icon;

  return (
    <motion.div
      custom={index}
      initial="hidden"
      animate={hasAnimated ? "visible" : "hidden"}
      variants={strengthCardVariants}
      whileHover={{ x: 4 }}
      className="group"
    >
      <div className="p-5 rounded-xl bg-white/40 dark:bg-gray-800/20 backdrop-blur-sm border border-gray-200/40 dark:border-gray-700/30 hover:border-blue-200/50 dark:hover:border-blue-800/50 transition-all duration-300">
        <div className="flex items-start gap-4">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br flex items-center justify-center flex-shrink-0">
            <Icon className="w-5 h-5 text-gray-700 dark:text-gray-400 group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-colors" />
          </div>

          <div className="flex-1">
            <h4 className="text-base font-semibold text-gray-800 dark:text-gray-200 mb-1">
              {item.title}
            </h4>
            <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
              {item.desc}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};