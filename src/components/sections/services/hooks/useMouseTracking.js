import { useRef, useCallback } from 'react';
import { useMotionValue } from 'framer-motion';
import { calculateMousePosition } from '../utils/mouseUtils';

/**
 * Custom hook untuk efek mouse tracking.
 * Hanya menggunakan MotionValue (tidak useState) agar tidak memicu
 * re-render React pada setiap event mousemove.
 * @returns {Object} Ref, event handlers
 */
export const useMouseTracking = () => {
  const cardRef = useRef(null);
  const mouseX = useMotionValue(50);
  const mouseY = useMotionValue(50);

  const handleMouseMove = useCallback((e) => {
    const position = calculateMousePosition(e, cardRef.current);
    mouseX.set(position.x);
    mouseY.set(position.y);
  }, [mouseX, mouseY]);

  const handleMouseLeave = useCallback(() => {
    mouseX.set(50);
    mouseY.set(50);
  }, [mouseX, mouseY]);

  return {
    cardRef,
    handleMouseMove,
    handleMouseLeave,
    radialGradient: 'none',
  };
};