import { useRef, useCallback, useEffect } from 'react';
import { checkScrollPosition, scrollToCard } from '../utils/scrollHelpers';

/**
 * Custom hook untuk mengelola horizontal scroll container dengan drag & scroll support
 * @param {Function} onScrollPositionChange - Callback ketika posisi scroll berubah
 * @returns {Object} ref, event handlers, scroll state
 */
export const useScrollContainer = (onScrollPositionChange) => {
  const scrollContainerRef = useRef(null);
  
  // Drag state
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  const checkPosition = useCallback(() => {
    if (!scrollContainerRef.current) return;
    const { showLeft, showRight } = checkScrollPosition(scrollContainerRef.current);
    onScrollPositionChange?.((prev) => {
      if (prev && prev.showLeft === showLeft && prev.showRight === showRight) {
        return prev;
      }
      return { showLeft, showRight };
    });
  }, [onScrollPositionChange]);

  const handleMouseDown = useCallback((e) => {
    if (!scrollContainerRef.current) return;
    isDragging.current = true;
    startX.current = e.pageX - scrollContainerRef.current.offsetLeft;
    scrollLeft.current = scrollContainerRef.current.scrollLeft;
    scrollContainerRef.current.style.cursor = 'grabbing';
    scrollContainerRef.current.style.userSelect = 'none';
  }, []);

  const handleMouseMove = useCallback((e) => {
    if (!isDragging.current || !scrollContainerRef.current) return;
    const x = e.pageX - scrollContainerRef.current.offsetLeft;
    const walk = (x - startX.current) * 1.4;
    scrollContainerRef.current.scrollLeft = scrollLeft.current - walk;
  }, []);

  const handleMouseUp = useCallback(() => {
    isDragging.current = false;
    if (scrollContainerRef.current) {
      scrollContainerRef.current.style.cursor = 'grab';
      scrollContainerRef.current.style.userSelect = '';
    }
  }, []);

  const handleWheel = useCallback((e) => {
    if (!scrollContainerRef.current) return;
    // Allow horizontal scrolling on container without blocking main thread
    if (Math.abs(e.deltaY) > Math.abs(e.deltaX) && Math.abs(e.deltaY) > 5) {
      scrollContainerRef.current.scrollLeft += e.deltaY * 0.7;
    }
  }, []);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener('scroll', checkPosition, { passive: true });
      checkPosition();
    }
    
    return () => {
      if (container) {
        container.removeEventListener('scroll', checkPosition);
      }
    };
  }, [checkPosition]);

  const scrollTo = useCallback((direction) => {
    if (!scrollContainerRef.current) return;
    scrollToCard(scrollContainerRef.current, direction);
  }, []);

  return {
    scrollContainerRef,
    handlers: {
      onMouseDown: handleMouseDown,
      onMouseMove: handleMouseMove,
      onMouseUp: handleMouseUp,
      onMouseLeave: handleMouseUp,
      onWheel: handleWheel,
    },
    scrollTo,
  };
};