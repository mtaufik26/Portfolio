import { motion } from 'framer-motion';
import { containerVariants } from '../constants/certificateVariants';
import { NavigationArrows } from './NavigationArrows';
import { CertificateCard } from './CertificateCard';
import { certificates } from '../constants/certificatesData';

export const ScrollContainer = ({ inView, onImageClick, scrollHandlers, showArrows, onScroll }) => {
  return (
    <motion.div className="relative group" variants={containerVariants}>
      {/* Navigation Arrows */}
      <NavigationArrows 
        showLeft={showArrows.showLeft}
        showRight={showArrows.showRight}
        onPrev={() => onScroll?.(-1)}
        onNext={() => onScroll?.(1)}
      />

      {/* Cards Container */}
      <div
        ref={scrollHandlers.containerRef}
        className="flex gap-6 pb-8 pt-4 overflow-x-auto hide-scrollbar px-2 cursor-grab"
        {...scrollHandlers.events}
      >
        {certificates.map((cert, idx) => (
          <CertificateCard 
            key={cert.id} 
            certificate={cert}
            index={idx}
            inView={inView}
            onImageClick={() => onImageClick?.(idx)}
          />
        ))}
      </div>
    </motion.div>
  );
};