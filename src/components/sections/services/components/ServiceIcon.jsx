export const ServiceIcon = ({ Icon }) => {
  return (
    <div className="w-12 h-12 rounded-xl bg-neutral-100/90 dark:bg-white/[0.05] border border-neutral-200/90 dark:border-white/[0.08] flex items-center justify-center text-neutral-800 dark:text-neutral-200 group-hover:text-neutral-900 dark:group-hover:text-white group-hover:border-neutral-300 dark:group-hover:border-white/20 group-hover:bg-neutral-100 dark:group-hover:bg-white/[0.08] transition-all duration-300 shadow-sm">
      <Icon className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" aria-hidden="true" />
    </div>
  );
};