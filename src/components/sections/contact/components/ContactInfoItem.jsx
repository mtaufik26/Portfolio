import { motion } from 'framer-motion';

export const ContactInfoItem = ({ info }) => {
  return (
    <motion.div
      className="group flex items-start gap-4 p-4 rounded-2xl bg-white/90 dark:bg-[#0E0E10]/90 backdrop-blur-md border border-neutral-200/80 dark:border-white/[0.08] hover:border-neutral-300 dark:hover:border-white/20 shadow-[0_2px_12px_rgba(0,0,0,0.03)] dark:shadow-[0_4px_20px_rgba(0,0,0,0.4)] hover:shadow-[0_6px_24px_rgba(0,0,0,0.06)] dark:hover:shadow-[0_6px_28px_rgba(0,0,0,0.6)] transition-all duration-300"
      whileHover={{ x: 4 }}
    >
      <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-neutral-100 dark:bg-white/[0.06] flex items-center justify-center text-neutral-700 dark:text-neutral-300 border border-neutral-200/80 dark:border-white/[0.08] group-hover:border-neutral-300 dark:group-hover:border-white/20 group-hover:text-neutral-900 dark:group-hover:text-white group-hover:bg-neutral-100 dark:group-hover:bg-white/[0.06] transition-all duration-300">
        {info.icon}
      </div>
      <div>
        <p className="text-sm font-medium text-neutral-500 dark:text-neutral-400 mb-0.5">
          {info.title}
        </p>
        {info.link ? (
        <a
          href={info.link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block text-base font-semibold text-neutral-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
        >
          {info.value}
        </a>
        ) : (
          <p className="text-base font-semibold text-neutral-900 dark:text-white">
            {info.value}
          </p>
        )}
      </div>
    </motion.div>
  );
};