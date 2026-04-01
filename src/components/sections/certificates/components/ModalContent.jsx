import { motion } from 'framer-motion';
import { useImageError } from '../hooks/useImageError';
import { modalVariants } from '../constants/certificateVariants';

export const ModalContent = ({ selectedImage, selectedCert }) => {
  const { currentSrc, showError, handleError } = useImageError(selectedImage);

  return (
    <motion.div
      className="relative w-full max-w-5xl"
      variants={modalVariants.content}
      initial="hidden"
      animate="visible"
      exit="exit"
      onClick={(e) => e.stopPropagation()}
    >
      {/* Content Container */}
      <div className="relative rounded-2xl overflow-hidden bg-gray-900 shadow-2xl border border-white/10 min-h-[400px] sm:min-h-[500px] flex flex-col">
        {currentSrc ? (
          /* Mode dengan gambar */
          <>
            <img
              src={currentSrc}
              alt={selectedCert?.title || "Certificate Preview"}
              className="w-full h-auto max-h-[70vh] sm:max-h-[75vh] object-contain"
              loading="eager"
              onError={handleError}
            />
            
            {/* Fallback placeholder (hidden by default) */}
            {showError && (
              <div className="hidden absolute inset-0 flex-col items-center justify-center bg-gradient-to-br from-gray-800 to-gray-900 p-8">
                <div className="w-24 h-24 mb-6 rounded-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center border-2 border-blue-500/30">
                  <svg className="w-12 h-12 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                </div>
                <h3 className="text-white font-bold text-xl text-center mb-2">
                  {selectedCert?.title || 'Certificate'}
                </h3>
                <p className="text-gray-400 text-center mb-1">
                  {selectedCert?.issuer} • {selectedCert?.date}
                </p>
                <p className="text-gray-500 text-sm font-mono">
                  {selectedCert?.credential}
                </p>
              </div>
            )}
          </>
        ) : (
          /* Mode tanpa gambar - placeholder yang rapi */
          <div className="flex-1 flex flex-col items-center justify-center bg-gradient-to-br from-gray-800 to-gray-900 p-8 sm:p-12">
            <div className="w-20 h-20 sm:w-24 sm:h-24 mb-6 rounded-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center border-2 border-blue-500/30">
              <svg className="w-10 h-10 sm:w-12 sm:h-12 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
              </svg>
            </div>
            <h3 className="text-white font-bold text-lg sm:text-xl text-center mb-2">
              {selectedCert?.title || 'Certificate'}
            </h3>
            <p className="text-gray-400 text-center text-sm sm:text-base mb-1">
              {selectedCert?.issuer} • {selectedCert?.date}
            </p>
            {selectedCert?.credential && (
              <p className="text-gray-500 text-xs sm:text-sm font-mono">
                {selectedCert.credential}
              </p>
            )}
          </div>
        )}
        
        {/* Info Overlay - selalu ditampilkan di bottom */}
        {selectedCert && (
          <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 bg-gradient-to-t from-black/95 via-black/80 to-transparent">
            <h3 className="text-white font-bold text-base sm:text-lg mb-1 drop-shadow-lg line-clamp-2">
              {selectedCert.title}
            </h3>
            <p className="text-gray-200 text-sm drop-shadow">
              {selectedCert.issuer} • {selectedCert.date}
            </p>
            {selectedCert.credential && (
              <p className="text-gray-400 text-xs font-mono mt-1">
                {selectedCert.credential}
              </p>
            )}
          </div>
        )}
      </div>
    </motion.div>
  );
};