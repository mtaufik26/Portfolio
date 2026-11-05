import { motion } from 'framer-motion';
import { SectionBadge } from '../../../ui/SectionBadge';
import { containerVariants, itemVariants } from '../constants/certificateVariants';

export const CertificatesHeader = () => {
  return (
    <motion.div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14" variants={containerVariants}>
      {/* Eyebrow Badge matching Hero/About/Services/Portfolio */}
      <motion.div variants={itemVariants} className="mb-4">
        <SectionBadge>Credentials · Verified Learning</SectionBadge>
      </motion.div>

      {/* Main Title */}
      <motion.h2
        className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-4 tracking-tight text-neutral-900 dark:text-white"
        variants={itemVariants}
      >
        Professional Certificates
      </motion.h2>
      
      {/* Supporting Subtitle */}
      <motion.p
        className="max-w-2xl mx-auto text-base sm:text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed"
        variants={itemVariants}
      >
        Verified credentials from leading platforms and institutions, demonstrating my commitment to continuous learning and engineering fundamentals.
      </motion.p>
    </motion.div>
  );
};