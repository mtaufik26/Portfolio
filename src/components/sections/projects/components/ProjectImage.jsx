import { useImageError } from '../hooks/useImageError';

export const ProjectImage = ({ src, alt, title }) => {
  const { currentSrc, showError, handleError } = useImageError(src);

  return (
    <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 flex items-center justify-center relative overflow-hidden">
      {/* Overlay gradient pada hover */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/0 via-transparent to-transparent group-hover:from-black/5 group-hover:via-black/2 group-hover:to-black/0 transition-all duration-500 z-10 pointer-events-none" />
      
      {/* Highlight atas gambar */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-blue-500/0 to-transparent group-hover:via-blue-500/30 transition-all duration-500 z-10" />
      
      {/* Main Image */}
      {currentSrc && (
        <img
          src={currentSrc}
          alt={alt}
          className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110 group-hover:brightness-110"
          onError={handleError}
        />
      )}
      
      {/* Fallback jika gambar error */}
      {showError && (
        <div className="absolute inset-0 flex flex-col items-center justify-center text-gray-500 dark:text-gray-400 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900">
          <div className="relative">
            <svg className="w-12 h-12 mb-2" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                clipRule="evenodd"
              />
            </svg>
            <div className="absolute inset-0 bg-blue-500/10 rounded-full blur-md" />
          </div>
          <span className="text-sm font-medium mt-2">{title}</span>
        </div>
      )}
    </div>
  );
};