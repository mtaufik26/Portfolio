import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { containerVariants } from './constants/aboutVariants';
import { useAboutAnimation } from './hooks/useAboutAnimation';
import { BackgroundEffects } from './components/BackgroundEffects';
import { AboutLeftColumn } from './components/AboutLeftColumn';
import { AboutRightColumn } from './components/AboutRightColumn';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.15,
  });

  const { hasAnimated } = useAboutAnimation(inView);

  return (
    <section
      id="about"
      ref={ref}
      className="relative py-28 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      <BackgroundEffects hasAnimated={hasAnimated} />

      <div className="max-w-7xl mx-auto relative">
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20"
          initial="hidden"
          animate={hasAnimated ? 'visible' : 'hidden'}
          variants={containerVariants}
        >
          <AboutLeftColumn hasAnimated={hasAnimated} />
          <AboutRightColumn hasAnimated={hasAnimated} />
        </motion.div>
      </div>
    </section>
  );
};

export default About;