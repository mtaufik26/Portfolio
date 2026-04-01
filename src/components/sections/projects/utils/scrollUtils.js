/**
 * Menyimpan posisi scroll saat ini
 * @returns {number} Posisi scroll vertical
 */
export const saveScrollPosition = () => window.scrollY;

/**
 * Restore scroll position dengan smooth behavior
 * @param {number} position - Posisi scroll yang ingin dikembalikan
 * @param {Function} onComplete - Callback setelah scroll selesai (opsional)
 */
export const restoreScrollPosition = (position, onComplete) => {
  if (position === null || position === undefined) return;
  
  window.scrollTo({
    top: position,
    behavior: 'smooth',
  });
  
  if (onComplete) {
    // Estimasi durasi smooth scroll ~500ms
    setTimeout(onComplete, 500);
  }
};