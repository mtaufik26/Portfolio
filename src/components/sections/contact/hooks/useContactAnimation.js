import { useInView } from 'react-intersection-observer';

/**
 * Custom hook untuk setup animasi section Contact
 * @returns {Object} ref, inView status
 */
export const useContactAnimation = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.15,
  });

  return { ref, inView };
};