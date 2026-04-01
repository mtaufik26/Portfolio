import { useInView } from 'react-intersection-observer';

/**
 * Custom hook untuk setup animasi section Certificates
 * @returns {Object} ref, inView status
 */
export const useCertificatesAnimation = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return { ref, inView };
};