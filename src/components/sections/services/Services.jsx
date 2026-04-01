import { motion } from 'framer-motion';
import { containerVariants } from './constants/serviceVariants';
import { useServiceAnimation } from './hooks/useServiceAnimation';
import { BackgroundEffects } from './components/BackgroundEffects';
import { ServicesHeader } from './components/ServicesHeader';
import { ServicesGrid } from './components/ServicesGrid';

const Services = () => {
  const { ref, inView } = useServiceAnimation();

  return (
    <motion.section
      ref={ref}
      id="services"
      className="relative py-28 px-4 sm:px-6 lg:px-8 overflow-hidden"
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={containerVariants}
    >
      <BackgroundEffects />

      <div className="max-w-7xl mx-auto">
        <ServicesHeader />
        <ServicesGrid />
      </div>
    </motion.section>
  );
};

export default Services;