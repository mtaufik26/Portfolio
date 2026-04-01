import { motion } from 'framer-motion';

export const ServiceIcon = ({ Icon, isHovered }) => {
  return (
    <div className="relative mb-7">
      {/* Glow effect behind icon */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-500" />
      
      {/* Icon container */}
      <div className="relative inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br from-gray-500/10 to-gray-800/10 dark:from-gray-400/10 dark:to-gray-700/10 border border-blue-200/30 dark:border-gray-400/20 group-hover:border-blue-500/40 dark:group-hover:border-blue-400/40 transition-all duration-300">
        <Icon className={`w-6 h-6 text-gray-700 group-hover:text-blue-500 dark:text-gray-400 transition-transform duration-300 ${isHovered ? 'scale-110' : ''}`} />
      </div>
    </div>
  );
};