import { memo } from 'react';
import { motion } from 'framer-motion';
import ProfilePhoto from '../../../assets/img/Foto_Profil.webp';
import { useInView } from 'react-intersection-observer';
import { containerVariants } from './constants/heroVariants';
import { BackgroundEffects } from './components/BackgroundEffects';
import { HeroContent } from './components/HeroContent';
import { HeroPhoto } from './components/HeroPhoto';

const Hero = ({ isLoaded = true }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const shouldAnimate = isLoaded && inView;

  return (
    <div
      ref={ref}
      className="relative min-h-[calc(100vh-4rem)] md:min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 xl:px-12 py-12 sm:py-16 lg:py-20 overflow-hidden"
    >
      <BackgroundEffects />

      <div className="w-full max-w-7xl mx-auto relative z-10">
        <motion.div
          className="flex flex-col lg:flex-row items-center justify-between gap-10 sm:gap-12 lg:gap-14 xl:gap-16"
          initial="hidden"
          animate={shouldAnimate ? 'visible' : 'hidden'}
          variants={containerVariants}
        >
          <HeroPhoto
            photoSrc={ProfilePhoto}
            altText="Taufik Ediansyah - Frontend Developer"
          />
          <HeroContent />
        </motion.div>
      </div>
    </div>
  );
};

export default memo(Hero);