import { useState, useEffect } from 'react';

/**
 * Custom hook untuk mengelola state animasi section About
 * @param {boolean} inView - Status visibility dari useInView
 */
export const useAboutAnimation = (inView) => {
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (inView && !hasAnimated) {
      setHasAnimated(true);
    }
  }, [inView, hasAnimated]);

  return { hasAnimated };
};