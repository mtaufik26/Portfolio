/**
 * Menghitung posisi mouse relatif terhadap elemen dalam persen
 * @param {MouseEvent} e - Event mouse
 * @param {HTMLElement} element - Elemen target
 * @returns {{ x: number, y: number }} Posisi dalam persen (0-100)
 */
export const calculateMousePosition = (e, element) => {
  if (!element) return { x: 50, y: 50 };
  
  const rect = element.getBoundingClientRect();
  const x = ((e.clientX - rect.left) / rect.width) * 100;
  const y = ((e.clientY - rect.top) / rect.height) * 100;
  
  return { x, y };
};

/**
 * Konfigurasi spring default untuk animasi mouse tracking
 */
export const mouseSpringConfig = {
  stiffness: 300,
  damping: 30,
};