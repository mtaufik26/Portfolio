import { useState, useRef, useCallback, useEffect } from 'react';

/**
 * Custom hook to manage the horizontal project slider with snap scrolling, drag support, and active index tracking.
 * @param {number} totalProjects - Total count of projects (8)
 * @returns {Object}
 */
export const useProjectSlider = (totalProjects) => {
  const sliderRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Drag state
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);
  const sliderOffsetLeft = useRef(0);
  const rafId = useRef(null);

  // Update active index based on scroll position
  const handleScroll = useCallback(() => {
    const container = sliderRef.current;
    if (!container) return;

    const width = container.clientWidth;
    if (width > 0) {
      const newIndex = Math.round(container.scrollLeft / width);
      const clampedIndex = Math.max(0, Math.min(newIndex, totalProjects - 1));
      setCurrentIndex((prev) => (prev === clampedIndex ? prev : clampedIndex));
    }
  }, [totalProjects]);

  // Scroll to specific index smoothly
  const scrollToIndex = useCallback((index) => {
    const container = sliderRef.current;
    if (!container) return;

    const clampedIndex = Math.max(0, Math.min(index, totalProjects - 1));
    const targetLeft = clampedIndex * container.clientWidth;

    container.scrollTo({
      left: targetLeft,
      behavior: 'smooth',
    });
    setCurrentIndex(clampedIndex);
  }, [totalProjects]);

  const handlePrev = useCallback(() => {
    scrollToIndex(currentIndex - 1);
  }, [currentIndex, scrollToIndex]);

  const handleNext = useCallback(() => {
    scrollToIndex(currentIndex + 1);
  }, [currentIndex, scrollToIndex]);

  // Mouse Drag handlers
  const handleMouseDown = useCallback((e) => {
    if (!sliderRef.current) return;
    isDragging.current = true;
    sliderOffsetLeft.current = sliderRef.current.offsetLeft;
    startX.current = e.pageX - sliderOffsetLeft.current;
    scrollLeft.current = sliderRef.current.scrollLeft;
    sliderRef.current.style.cursor = 'grabbing';
    sliderRef.current.style.userSelect = 'none';
    sliderRef.current.style.scrollSnapType = 'none';
  }, []);

  const handleMouseMove = useCallback((e) => {
    if (!isDragging.current || !sliderRef.current) return;
    const x = e.pageX - sliderOffsetLeft.current;
    const walk = (x - startX.current) * 1.2;
    if (rafId.current) cancelAnimationFrame(rafId.current);
    rafId.current = requestAnimationFrame(() => {
      if (sliderRef.current && isDragging.current) {
        sliderRef.current.scrollLeft = scrollLeft.current - walk;
      }
    });
  }, []);

  const handleMouseUp = useCallback(() => {
    if (rafId.current) cancelAnimationFrame(rafId.current);
    if (!isDragging.current) return;
    isDragging.current = false;
    if (sliderRef.current) {
      sliderRef.current.style.cursor = 'grab';
      sliderRef.current.style.userSelect = '';
      sliderRef.current.style.scrollSnapType = '';
      // Snap to nearest card after drag release
      handleScroll();
    }
  }, [handleScroll]);

  useEffect(() => {
    const container = sliderRef.current;
    if (container) {
      container.addEventListener('scroll', handleScroll, { passive: true });
      return () => container.removeEventListener('scroll', handleScroll);
    }
  }, [handleScroll]);

  return {
    sliderRef,
    currentIndex,
    scrollToIndex,
    handlePrev,
    handleNext,
    showLeft: currentIndex > 0,
    showRight: currentIndex < totalProjects - 1,
    dragHandlers: {
      onMouseDown: handleMouseDown,
      onMouseMove: handleMouseMove,
      onMouseUp: handleMouseUp,
      onMouseLeave: handleMouseUp,
    },
  };
};
