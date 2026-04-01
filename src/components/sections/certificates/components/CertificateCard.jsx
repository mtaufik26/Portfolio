import { motion } from 'framer-motion';
import { itemVariants, cardVariants } from '../constants/certificateVariants';
import { CertificateImage } from './CertificateImage';
import { CertificateContent } from './CertificateContent';

export const CertificateCard = ({ certificate, inView, onImageClick }) => {
  return (
    <motion.div
      className="flex-shrink-0 w-[340px]"
      variants={itemVariants}
    >
      <motion.div
        className="group/card relative h-full bg-white/50 dark:bg-gray-900/30 backdrop-blur-xl rounded-2xl border border-gray-200/30 dark:border-gray-700/30 overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500"
        variants={cardVariants}
        whileHover="hover"
      >
        {/* Image Container */}
        <CertificateImage 
          src={certificate.image}
          alt={`${certificate.title} certificate`}
          title={certificate.title}
          onClick={() => onImageClick?.(certificate)}
        />

        {/* Content */}
        <CertificateContent 
          title={certificate.title}
          issuer={certificate.issuer}
          date={certificate.date}
          credential={certificate.credential}
        />
      </motion.div>
    </motion.div>
  );
};