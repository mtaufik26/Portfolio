import { motion } from 'framer-motion';
import { useImageError } from '../hooks/useImageError';
import { cardVariants } from '../constants/certificateVariants';

export const CertificateImage = ({ src, alt, title, onClick }) => {
  const { currentSrc, showError, handleError } = useImageError(src);

  return (
    <div
      className="relative aspect-[4/3] overflow-hidden cursor-pointer bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900"
      onClick={onClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onClick?.();
        }
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-500 z-10" />
      
      {currentSrc && (
        <motion.img
          src={currentSrc}
          alt={alt}
          className="w-full h-full object-cover transition-transform duration-700 group-hover/card:scale-110"
          {...cardVariants.image}
          initial="initial"
          whileHover="hover"
          onError={handleError}
        />
      )}
      
      {/* Fallback placeholder */}
      {showError && (
        <div className="absolute inset-0 hidden flex-col items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900">
          <div className="relative mb-3">
            <svg className="w-14 h-14 text-blue-500/10 dark:text-blue-400/20 drop-shadow-sm" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812z" clipRule="evenodd" />
            </svg>
            <svg className="absolute inset-0 m-auto w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
            </svg>
            <div className="absolute inset-0 rounded-full bg-blue-500/20 blur-md" />
          </div>
          <span className="text-sm font-medium text-gray-600 dark:text-gray-300 text-center px-4">
            {title}
          </span>
        </div>
      )}
      
      {/* Overlay on hover */}
      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover/card:opacity-100 transition-opacity duration-500 z-20 pointer-events-none">
        <div className="px-4 py-2 rounded-lg bg-black/60 backdrop-blur-md text-white text-sm font-medium flex items-center gap-2">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          View Certificate
        </div>
      </div>
    </div>
  );
};