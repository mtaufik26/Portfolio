import { motion } from 'framer-motion';
import { itemVariants } from '../constants/aboutVariants';
import { FiBookOpen, FiCompass, FiMapPin, FiCpu } from 'react-icons/fi';

export const AboutProfileCard = () => {
  const profileItems = [
    {
      label: 'Education',
      value: 'SMK Wikrama Bogor (2022 - 2025)',
      detail: 'Software & Game Dev · Front-End Focus',
      icon: FiBookOpen,
    },
    {
      label: 'Specialization',
      value: 'Front-End Web Development',
      detail: 'React.js · Tailwind CSS · REST API',
      icon: FiCpu,
    },
    {
      label: 'Location',
      value: 'Bogor, Indonesia',
      detail: 'West Java · Remote & On-site Ready',
      icon: FiMapPin,
    },
    {
      label: 'Core Philosophy',
      value: 'User-Centric & Performant UI',
      detail: 'Clean Code · Fast · Reliable',
      icon: FiCompass,
    },
  ];

  return (
    <motion.div variants={itemVariants} className="w-full">
      <div className="relative p-6 sm:p-7 rounded-2xl sm:rounded-3xl bg-white/90 dark:bg-[#0D0D10]/95 backdrop-blur-md border border-neutral-200/90 dark:border-white/[0.08] shadow-[0_8px_30px_rgba(0,0,0,0.04)] dark:shadow-[0_16px_40px_rgba(0,0,0,0.6)]">
        {/* Card Header */}
        <div className="flex flex-col xs:flex-row xs:items-center justify-between gap-2.5 pb-4 sm:pb-5 mb-5 border-b border-neutral-100 dark:border-white/[0.06]">
          <div className="flex items-center gap-2.5">
            <span className="w-2 h-2 rounded-full bg-blue-600 dark:bg-blue-400" aria-hidden="true" />
            <h3 className="text-sm font-bold text-neutral-900 dark:text-white uppercase tracking-wider">
              Engineering Profile
            </h3>
          </div>
          <span className="self-start xs:self-auto text-[11px] font-mono font-medium px-2.5 py-1 rounded-md bg-neutral-100 dark:bg-white/[0.05] text-neutral-600 dark:text-neutral-400">
            Taufik Ediansyah
          </span>
        </div>

        {/* Data Grid */}
        <div className="space-y-4">
          {profileItems.map(({ label, value, detail, icon: Icon }) => (
            <div 
              key={label}
              className="group flex items-start gap-3.5 p-3 rounded-xl bg-neutral-50/70 dark:bg-white/[0.02] border border-neutral-100 dark:border-white/[0.04] hover:border-neutral-300 dark:hover:border-white/20 hover:bg-white dark:hover:bg-white/[0.05] hover:shadow-xs hover:-translate-y-0.5 transition-all duration-200 cursor-default"
            >
              <div className="p-2 rounded-xl bg-white dark:bg-white/[0.05] border border-neutral-200/80 dark:border-white/[0.08] text-neutral-700 dark:text-neutral-300 group-hover:text-neutral-900 dark:group-hover:text-white group-hover:border-neutral-300 dark:group-hover:border-white/20 group-hover:bg-neutral-50 dark:group-hover:bg-white/[0.08] transition-all duration-200 flex-shrink-0 mt-0.5">
                <Icon className="w-4 h-4" aria-hidden="true" />
              </div>
              <div className="min-w-0 flex-1">
                <span className="text-[11px] uppercase tracking-wider font-semibold text-neutral-600 dark:text-neutral-400 block mb-0.5">
                  {label}
                </span>
                <p className="text-sm font-semibold text-neutral-900 dark:text-white truncate group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {value}
                </p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-0.5">
                  {detail}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};
