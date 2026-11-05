import { useState, useRef, useCallback, useEffect } from 'react';

/**
 * Custom hook to manage the horizontal project slider with snap scrolling, drag support, and active index tracking.
 * Calculates exact child DOM offsets to eliminate gap-misalignment bugs and snap-physics fighting.
 * @param {number} totalProjects - Total count of projects
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
  const isProgrammaticScroll = useRef(false);
  const scrollTimeout = useRef(null);

  // Update active index based on actual child element positions
  const handleScroll = useCallback(() => {
    if (isProgrammaticScroll.current) return;
    const container = sliderRef.current;
    if (!container || !container.children.length) return;

    if (rafId.current) cancelAnimationFrame(rafId.current);
    rafId.current = requestAnimationFrame(() => {
      if (!container) return;
      const viewportCenter = container.scrollLeft + container.clientWidth / 2;
      let closestIndex = 0;
      let minDistance = Infinity;

      const children = container.children;
      for (let i = 0; i < children.length; i++) {
        const child = children[i];
        const childCenter = child.offsetLeft + child.clientWidth / 2;
        const distance = Math.abs(viewportCenter - childCenter);
        if (distance < minDistance) {
          minDistance = distance;
          closestIndex = i;
        }
      }

      const clampedIndex = Math.max(0, Math.min(closestIndex, totalProjects - 1));
      setCurrentIndex((prev) => (prev === clampedIndex ? prev : clampedIndex));
    });
  }, [totalProjects]);

  // Scroll to specific index smoothly using exact DOM child offsetLeft
  const scrollToIndex = useCallback((index) => {
    const container = sliderRef.current;
    if (!container) return;

    const clampedIndex = Math.max(0, Math.min(index, totalProjects - 1));
    const targetChild = container.children[clampedIndex];
    if (!targetChild) return;

    isProgrammaticScroll.current = true;
    if (scrollTimeout.current) clearTimeout(scrollTimeout.current);

    // Temporarily disable CSS snap-type during smooth animation to prevent jitter/fighting
    container.style.scrollSnapType = 'none';

    container.scrollTo({
      left: targetChild.offsetLeft,
      behavior: 'smooth',
    });
    setCurrentIndex(clampedIndex);

    // Restore snap physics immediately after the smooth transition finishes
    scrollTimeout.current = setTimeout(() => {
      if (container) {
        container.style.scrollSnapType = '';
      }
      isProgrammaticScroll.current = false;
    }, 450);
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
      return () => {
        container.removeEventListener('scroll', handleScroll);
        if (rafId.current) cancelAnimationFrame(rafId.current);
        if (scrollTimeout.current) clearTimeout(scrollTimeout.current);
      };
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
