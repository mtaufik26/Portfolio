import { useRef, useCallback, useEffect } from 'react';
import { checkScrollPosition, handleWheelScroll } from '../utils/scrollHelpers';

/**
 * Custom hook untuk mengelola horizontal scroll container dengan drag & wheel support
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
    const position = checkScrollPosition(scrollContainerRef.current);
    onScrollPositionChange?.(position);
  }, [onScrollPositionChange]);

  const handleWheel = useCallback((e) => {
    handleWheelScroll(e, scrollContainerRef.current);
  }, []);

  const handleMouseDown = useCallback((e) => {
    if (!scrollContainerRef.current) return;
    isDragging.current = true;
    startX.current = e.pageX - scrollContainerRef.current.offsetLeft;
    scrollLeft.current = scrollContainerRef.current.scrollLeft;
    scrollContainerRef.current.style.cursor = 'grabbing';
  }, []);

  const handleMouseMove = useCallback((e) => {
    if (!isDragging.current || !scrollContainerRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollContainerRef.current.offsetLeft;
    const walk = (x - startX.current) * 1.5;
    scrollContainerRef.current.scrollLeft = scrollLeft.current - walk;
  }, []);

  const handleMouseUp = useCallback(() => {
    isDragging.current = false;
    if (scrollContainerRef.current) {
      scrollContainerRef.current.style.cursor = 'grab';
    }
  }, []);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener('scroll', checkPosition);
      checkPosition();
    }
    
    window.addEventListener('wheel', handleWheel, { passive: false });
    
    return () => {
      if (container) {
        container.removeEventListener('scroll', checkPosition);
      }
      window.removeEventListener('wheel', handleWheel);
    };
  }, [handleWheel, checkPosition]);

  return {
    scrollContainerRef,
    handlers: {
      onMouseDown: handleMouseDown,
      onMouseMove: handleMouseMove,
      onMouseUp: handleMouseUp,
      onMouseLeave: handleMouseUp,
    },
    scrollTo: (direction) => {
      const { scrollToCard } = require('../utils/scrollHelpers');
      scrollToCard(scrollContainerRef.current, direction);
    },
  };
};