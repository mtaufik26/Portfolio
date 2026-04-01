import { useInView } from 'react-intersection-observer';

/**
 * Custom hook untuk setup animasi section Projects
 * @returns {Object} ref, inView status
 */
export const useProjectsAnimation = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return { ref, inView };
};