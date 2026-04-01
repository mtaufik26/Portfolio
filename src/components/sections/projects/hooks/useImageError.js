import { useState } from 'react';

/**
 * Custom hook untuk handle error loading gambar dengan fallback
 * @param {string} src - URL gambar utama
 * @returns {Object} currentSrc, showError, handleError
 */
export const useImageError = (src) => {
  const [showError, setShowError] = useState(false);

  const handleError = (e) => {
    setShowError(true);
    if (e?.target?.style) {
      e.target.style.display = 'none';
    }
  };

  return {
    currentSrc: showError ? null : src,
    showError,
    handleError,
  };
};