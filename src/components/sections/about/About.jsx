import { memo } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { containerVariants } from './constants/aboutVariants';
import { BackgroundEffects } from './components/BackgroundEffects';
import { AboutHeader } from './components/AboutHeader';
import { AboutDescription } from './components/AboutDescription';
import { AboutProfileCard } from './components/AboutProfileCard';
import { StrengthsSection } from './components/StrengthsSection';
import { TechStackSection } from './components/TechStackSection';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.08,
  });

  return (
    <section
      id="about"
      ref={ref}
      className="relative py-16 sm:py-24 lg:py-28 px-4 sm:px-6 lg:px-8 xl:px-12 overflow-hidden scroll-mt-20 sm:scroll-mt-24"
    >
      <BackgroundEffects />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          className="space-y-14 sm:space-y-18 lg:space-y-20"
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={containerVariants}
        >
          {/* Top Story & Engineering Profile Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            {/* Story & Philosophy (7 Cols) */}
            <div className="lg:col-span-7 space-y-6 sm:space-y-8">
              <AboutHeader />
              <AboutDescription />
            </div>

            {/* Profile Snapshot Card (5 Cols) */}
            <div className="lg:col-span-5">
              <AboutProfileCard />
            </div>
          </div>

          {/* Middle: Engineering Disciplines Matrix (4 Cols Grid) */}
          <StrengthsSection />

          {/* Bottom: Categorized Tech Stack Matrix with Filter Tabs */}
          <TechStackSection />
        </motion.div>
      </div>
    </section>
  );
};

export default memo(About);