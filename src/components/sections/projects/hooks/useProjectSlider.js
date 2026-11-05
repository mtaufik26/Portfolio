import { useState, useRef, useCallback, useEffect } from 'react';

/**
 * Custom hook to manage the horizontal project slider.
 * Uses IntersectionObserver for ZERO-CPU scroll tracking (no forced reflows during touch swipes).
 * Uses native scrollIntoView for buttery-smooth snap-aligned programmatic navigation.
 *
 * @param {number} totalProjects - Total count of projects
 * @returns {Object}
 */
export const useProjectSlider = (totalProjects) => {
  const sliderRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Drag state for desktop mouse drag
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);
  const sliderOffsetLeft = useRef(0);
  const rafId = useRef(null);

  // IntersectionObserver to track visible card effortlessly without reading offsetLeft on every scroll frame
  useEffect(() => {
    const container = sliderRef.current;
    if (!container) return;

    const cards = container.querySelectorAll('[data-project-index]');
    if (!cards.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = Number(entry.target.getAttribute('data-project-index'));
            if (!Number.isNaN(idx)) {
              setCurrentIndex(idx);
            }
          }
        });
      },
      {
        root: container,
        threshold: 0.6, // Active when at least 60% of card is in view
      }
    );

    cards.forEach((card) => observer.observe(card));

    return () => {
      observer.disconnect();
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, [totalProjects]);

  // Scroll to specific index smoothly using native scrollIntoView matching snap-center
  const scrollToIndex = useCallback((index) => {
    const container = sliderRef.current;
    if (!container) return;

    const clampedIndex = Math.max(0, Math.min(index, totalProjects - 1));
    const targetChild = container.querySelector(`[data-project-index="${clampedIndex}"]`);

    if (targetChild) {
      targetChild.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'center',
      });
      setCurrentIndex(clampedIndex);
    }
  }, [totalProjects]);

  const handlePrev = useCallback(() => {
    scrollToIndex(currentIndex - 1);
  }, [currentIndex, scrollToIndex]);

  const handleNext = useCallback(() => {
    scrollToIndex(currentIndex + 1);
  }, [currentIndex, scrollToIndex]);

  // Desktop Mouse Drag handlers
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
    }
  }, []);

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
