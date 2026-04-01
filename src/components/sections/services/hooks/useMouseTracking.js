import { useRef, useState } from 'react';
import { useMotionValue, useSpring, useMotionTemplate } from 'framer-motion';
import { calculateMousePosition, mouseSpringConfig } from '../utils/mouseUtils';

/**
 * Custom hook untuk efek mouse tracking dengan radial gradient
 * @returns {Object} Ref, event handlers, dan motion template untuk gradient
 */
export const useMouseTracking = () => {
  const cardRef = useRef(null);
  const [_, setMousePosition] = useState({ x: 0, y: 0 });
  
  const mouseX = useMotionValue(50);
  const mouseY = useMotionValue(50);
  
  const springX = useSpring(mouseX, mouseSpringConfig);
  const springY = useSpring(mouseY, mouseSpringConfig);
  
  const radialGradient = useMotionTemplate`
    radial-gradient(circle at ${springX}% ${springY}%, 
      rgba(99,102,241,0.08) 0%,
      rgba(139,92,246,0.04) 50%,
      transparent 80%
    )
  `;
  
  const handleMouseMove = (e) => {
    const position = calculateMousePosition(e, cardRef.current);
    mouseX.set(position.x);
    mouseY.set(position.y);
    setMousePosition(position);
  };
  
  const handleMouseLeave = () => {
    mouseX.set(50);
    mouseY.set(50);
  };
  
  return {
    cardRef,
    handleMouseMove,
    handleMouseLeave,
    radialGradient,
  };
};