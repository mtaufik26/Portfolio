import { memo } from 'react';
import { motion } from 'framer-motion';
import { itemVariants, cardVariants } from '../constants/certificateVariants';
import { CertificateImage } from './CertificateImage';
import { CertificateContent } from './CertificateContent';

const CertificateCardComponent = ({ certificate, inView, onImageClick }) => {
  return (
    <motion.div
      className="flex-shrink-0 w-[310px] sm:w-[335px]"
      variants={itemVariants}
    >
      <motion.div
        className="group/card relative h-full bg-white/80 dark:bg-[#0D0D11]/90 backdrop-blur-md rounded-2xl
          border border-neutral-200/80 dark:border-white/[0.08]
          hover:border-neutral-300 dark:hover:border-white/20
          overflow-hidden shadow-[0_2px_16px_rgba(0,0,0,0.03)] dark:shadow-[0_4px_24px_rgba(0,0,0,0.5)]
          hover:shadow-[0_12px_36px_rgba(0,0,0,0.08)] dark:hover:shadow-[0_12px_36px_rgba(0,0,0,0.8)]
          transition-[border-color,box-shadow] duration-300 flex flex-col justify-between"
        variants={cardVariants}
        whileHover="hover"
      >

        {/* Image / Certificate Slate */}
        <CertificateImage 
          src={certificate.image}
          alt={`${certificate.title} certificate`}
          title={certificate.title}
          issuer={certificate.issuer}
          credential={certificate.credential}
          onClick={() => onImageClick?.(certificate)}
        />

        {/* Content */}
        <CertificateContent 
          title={certificate.title}
          issuer={certificate.issuer}
          date={certificate.date}
          credential={certificate.credential}
          onViewClick={() => onImageClick?.(certificate)}
        />
      </motion.div>
    </motion.div>
  );
};

export const CertificateCard = memo(CertificateCardComponent);