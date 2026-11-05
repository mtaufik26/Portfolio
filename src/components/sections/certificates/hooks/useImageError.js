import { useState, useEffect } from 'react';

// Cache URLs that failed once to avoid redundant network 404 retries and re-render flashes
const failedImageUrls = new Set();

/**
 * Custom hook untuk handle error loading gambar dengan fallback deklaratif
 * @param {string} src - URL gambar utama
 * @returns {Object} currentSrc, showError, handleError
 */
export const useImageError = (src) => {
  const [showError, setShowError] = useState(() => !src || failedImageUrls.has(src));

  useEffect(() => {
    setShowError(!src || failedImageUrls.has(src));
  }, [src]);

  const handleError = () => {
    if (src) failedImageUrls.add(src);
    setShowError(true);
  };

  return {
    currentSrc: showError ? null : src,
    showError,
    handleError,
  };
};