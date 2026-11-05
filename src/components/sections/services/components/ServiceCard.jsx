import { motion } from 'framer-motion';
import { cardVariants } from '../constants/serviceVariants';
import { transitions } from '../../../../utils/motion';
import { ServiceIcon } from './ServiceIcon';
import { ServiceTags } from './ServiceTags';

export const ServiceCard = ({ service, index }) => {
  const Icon = service.icon;

  return (
    <motion.div
      custom={index}
      variants={cardVariants}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.25, ease: transitions.smoothEase }}
      className="group relative h-full"
    >
      {/* Interactive Card Shell */}
      <div className="relative h-full p-6 sm:p-8 rounded-2xl sm:rounded-3xl bg-white/90 dark:bg-[#0D0D10]/95 backdrop-blur-md border border-neutral-200/90 dark:border-white/[0.08] shadow-[0_4px_20px_rgba(0,0,0,0.03)] dark:shadow-[0_10px_30px_rgba(0,0,0,0.5)] hover:border-neutral-300 dark:hover:border-white/20 hover:shadow-lg dark:hover:shadow-black/70 transition-all duration-300 flex flex-col justify-between overflow-hidden">
        
        {/* Top Section: Header & Content */}
        <div className="relative z-10">
          {/* Card Top Meta Row: Icon + Number Index */}
          <div className="flex items-center justify-between gap-4 mb-6">
            <ServiceIcon Icon={Icon} />

            <span className="font-mono text-xs font-semibold px-2.5 py-1 rounded-md bg-neutral-100/80 dark:bg-white/[0.04] text-neutral-400 dark:text-neutral-500 border border-neutral-200/60 dark:border-white/[0.06] group-hover:text-neutral-900 dark:group-hover:text-white group-hover:border-neutral-300 dark:group-hover:border-white/20 transition-all duration-300">
              {service.number || `0${index + 1}`}
            </span>
          </div>

          {/* Title */}
          <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-neutral-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200 mb-3">
            {service.title}
          </h3>

          {/* Description */}
          <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-400 leading-relaxed font-normal mb-7">
            {service.desc}
          </p>
        </div>

        {/* Bottom Section: Focus Tags */}
        <div className="relative z-10 pt-4 border-t border-neutral-100 dark:border-white/[0.06]">
          <ServiceTags tags={service.tags} />
        </div>
      </div>
    </motion.div>
  );
};