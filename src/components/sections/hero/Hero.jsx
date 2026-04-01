import { motion } from 'framer-motion';
import ProfilePhoto from '../../../../assets/img/Foto-Profil.jpg';
import { useInView } from 'react-intersection-observer';
import { containerVariants } from './constants/heroVariants';
import { useTypingAnimation } from './hooks/useTypingAnimation';
import { BackgroundEffects } from './components/BackgroundEffects';
import { HeroContent } from './components/HeroContent';
import { HeroPhoto } from './components/HeroPhoto';

// ── CONFIG ──
const TYPING_TEXTS = ['Frontend Developer', 'Web Developer'];
const TYPING_CONFIG = {
  typingSpeed: 120,
  deletingSpeed: 80,
  pauseDuration: 1200,
};

const Hero = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const { displayText } = useTypingAnimation(
    TYPING_TEXTS,  // ✅ Array teks
    inView,
    TYPING_CONFIG
  );

  const contentData = {
    displayName: { first: 'Taufik', last: 'Ediansyah' }, 
    photo: {
      src: ProfilePhoto,
      alt: 'Taufik Ediansyah - Developer Portfolio',
      badge: 'React.js',
    },
  };

  return (
    <motion.div
      ref={ref}
      className="min-h-screen flex items-center px-4 sm:px-6 lg:px-8 xl:px-12 relative overflow-hidden"
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      style={{ perspective: 1000 }}
    >
      <BackgroundEffects />

      <div className="container mx-auto relative z-10">
        <motion.div
          className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12 xl:gap-16"
          variants={containerVariants}
        >
          <HeroContent
            displayName={contentData.displayName}
            displayTypingText={displayText}  // ✅ Akan berganti: Frontend Developer ↔ Web Developer
          />

          <HeroPhoto
            photoSrc={contentData.photo.src}
            altText={contentData.photo.alt}
            badgeText={contentData.photo.badge}
          />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Hero;