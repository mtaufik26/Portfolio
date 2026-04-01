import { useInView } from 'react-intersection-observer';

/**
 * Custom hook untuk setup animasi section Services
 * @returns {Object} ref, inView status
 */
export const useServiceAnimation = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.15,
  });

  return { ref, inView };
};