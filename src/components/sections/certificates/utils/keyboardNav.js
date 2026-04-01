/**
 * Setup keyboard navigation untuk carousel
 * @param {Function} onPrev - Callback untuk scroll ke kiri
 * @param {Function} onNext - Callback untuk scroll ke kanan
 * @param {boolean} isModalOpen - Status modal (jika open, navigation dinonaktifkan)
 * @returns {Function} Cleanup function untuk remove event listener
 */
export const setupKeyboardNavigation = (onPrev, onNext, isModalOpen) => {
  const handleKeyDown = (e) => {
    if (isModalOpen) return;
    
    if (e.key === 'ArrowLeft') {
      e.preventDefault();
      onPrev();
    } else if (e.key === 'ArrowRight') {
      e.preventDefault();
      onNext();
    }
  };

  window.addEventListener('keydown', handleKeyDown);
  return () => window.removeEventListener('keydown', handleKeyDown);
};