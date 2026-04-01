import { motion } from 'framer-motion';

export const ModalControls = ({ onClose }) => {
  return (
    <>
      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-3 right-3 z-[10000] w-10 h-10 sm:w-11 sm:h-11 flex items-center justify-center bg-black/50 hover:bg-black/70 rounded-full backdrop-blur-md border border-white/20 transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-blue-500"
        aria-label="Close modal"
      >
        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      {/* Helper Text */}
      <div className="mt-4 flex justify-center">
        <div className="px-4 py-2 bg-black/60 backdrop-blur-sm rounded-lg border border-white/10">
          <p className="text-xs text-gray-300">
            Press <kbd className="px-1.5 py-0.5 bg-white/10 rounded text-white font-mono text-[10px]">ESC</kbd> or click outside to close
          </p>
        </div>
      </div>
    </>
  );
};