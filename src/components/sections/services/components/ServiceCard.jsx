import { motion } from 'framer-motion';
import {
  itemVariants,
  cardHoverVariants,
} from '../constants/serviceVariants';
import { useMouseTracking } from '../hooks/useMouseTracking';
import { ServiceIcon } from './ServiceIcon';
import { ServiceTags } from './ServiceTags';

export const ServiceCard = ({ service, index }) => {
  const {
    cardRef,
    handleMouseMove,
    handleMouseLeave,
    radialGradient,
  } = useMouseTracking();

  const Icon = service.icon;

  // Tentukan arah slide berdasarkan index: genap=kiri, ganjil=kanan
  const direction = index % 2 === 0 ? -1 : 1;

  return (
    <motion.div
      key={service.id}
      ref={cardRef}
      custom={index}
      
      // === SCROLL ANIMATION CONFIG ===
      initial="hidden"
      whileInView="visible"
      viewport={{ 
        once: true,        // Animasi hanya sekali saat masuk viewport
        margin: "-100px"   // Trigger lebih awal untuk UX yang smoother
      }}
      variants={{
        hidden: { 
          x: direction * 30,  // Slide dari kiri (-30) atau kanan (+30)
          opacity: 0,
          scale: 0.98,        // Scale subtle untuk depth effect
        },
        visible: {
          x: 0,
          opacity: 1,
          scale: 1,
          transition: {
            duration: 0.5,
            ease: [0.22, 0.61, 0.36, 1], // Premium cubic bezier easing
          },
        },
        hover: cardHoverVariants.hover,
      }}
      
      // Hover interaction tetap aktif
      whileHover="hover"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="group relative"
    >
      {/* Mouse-tracking radial gradient overlay */}
      <motion.div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{ background: radialGradient }}
      />

      {/* Card content */}
      <div className="relative h-full bg-white/95 dark:bg-gray-900/30 backdrop-blur-xl rounded-2xl border border-gray-200/30 dark:border-gray-700/30 p-8 transition-all duration-300 hover:border-blue-500/30 dark:hover:border-blue-400/30 shadow-sm hover:shadow-xl">
        <ServiceIcon Icon={Icon} />

        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 tracking-tight">
          {service.title}
        </h3>

        <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-5">
          {service.desc}
        </p>

        <ServiceTags tags={service.tags} />
      </div>
    </motion.div>
  );
};