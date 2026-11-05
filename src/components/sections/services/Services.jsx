import { memo } from 'react';
import { motion } from 'framer-motion';
import { containerVariants } from './constants/serviceVariants';
import { useServiceAnimation } from './hooks/useServiceAnimation';
import { BackgroundEffects } from './components/BackgroundEffects';
import { ServicesHeader } from './components/ServicesHeader';
import { ServicesGrid } from './components/ServicesGrid';

const Services = () => {
  const { ref, inView } = useServiceAnimation();

  return (
    <div
      ref={ref}
      className="relative py-16 sm:py-24 lg:py-28 px-4 sm:px-6 lg:px-8 xl:px-12 overflow-hidden scroll-mt-20 sm:scroll-mt-24"
    >
      <BackgroundEffects />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          className="space-y-12 sm:space-y-16"
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={containerVariants}
        >
          <ServicesHeader />
          <ServicesGrid />
        </motion.div>
      </div>
    </div>
  );
};

export default memo(Services);