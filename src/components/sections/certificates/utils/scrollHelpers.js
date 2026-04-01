import { CARD_WIDTH, SCROLL_THRESHOLD } from '../constants/certificatesData';

/**
 * Check scroll position untuk menampilkan/menyembunyikan arrow navigation
 * @param {HTMLElement} container - Scroll container element
 * @returns {{ showLeft: boolean, showRight: boolean }}
 */
export const checkScrollPosition = (container) => {
  if (!container) return { showLeft: false, showRight: false };
  
  const { scrollLeft, scrollWidth, clientWidth } = container;
  return {
    showLeft: scrollLeft > SCROLL_THRESHOLD,
    showRight: scrollLeft + clientWidth < scrollWidth - SCROLL_THRESHOLD,
  };
};

/**
 * Handle wheel event untuk horizontal scroll
 * @param {WheelEvent} e - Wheel event
 * @param {HTMLElement} container - Scroll container
 * @returns {boolean} Apakah event ditangani
 */
export const handleWheelScroll = (e, container) => {
  if (!container) return false;

  const containerRect = container.getBoundingClientRect();
  const isInside = e.clientX >= containerRect.left &&
                   e.clientX <= containerRect.right &&
                   e.clientY >= containerRect.top &&
                   e.clientY <= containerRect.bottom;

  if (!isInside) return false;

  e.preventDefault();
  container.scrollLeft += e.deltaY * 0.8;
  return true;
};

/**
 * Scroll ke next/prev card dengan smooth behavior
 * @param {HTMLElement} container - Scroll container
 * @param {number} direction - 1 untuk next, -1 untuk prev
 */
export const scrollToCard = (container, direction) => {
  if (!container) return;
  container.scrollBy({ 
    left: CARD_WIDTH * direction, 
    behavior: 'smooth' 
  });
};