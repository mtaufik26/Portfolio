import { motion } from 'framer-motion';

export const ContactInfoItem = ({ info }) => {
  return (
    <motion.div
      className="group flex items-start gap-4 p-4 rounded-xl bg-white/40 dark:bg-gray-800/20 backdrop-blur-sm border border-gray-200/40 dark:border-gray-700/30 hover:border-blue-400/50 dark:hover:border-blue-800/50 transition-all duration-300"
      whileHover={{ x: 4 }}
    >
      <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-gradient-to-br from-gray-500/10 to-gray-800/10 flex items-center justify-center text-gray-600 dark:text-gray-400 group-hover:text-blue-500 border border-blue-200/30 dark:border-gray-400/20 group-hover:border-blue-500/40 dark:group-hover:border-blue-500/50 transition-transform duration-300">
        {info.icon}
      </div>
      <div>
        <p className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-0.5">
          {info.title}
        </p>
        {info.link ? (
        <a
          href={info.link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block text-base font-semibold text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
        >
          {info.value}
        </a>
        ) : (
          <p className="text-base font-semibold text-gray-900 dark:text-white">
            {info.value}
          </p>
        )}
      </div>
    </motion.div>
  );
};