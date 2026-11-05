import { useEffect, useState, memo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { containerVariants, itemVariants } from './constants/certificateVariants';
import { certificates } from './constants/certificatesData';
import { useCertificatesAnimation } from './hooks/useCertificatesAnimation';
import { useScrollContainer } from './hooks/useScrollContainer';
import { useModal } from './hooks/useModal';
import { setupKeyboardNavigation } from './utils/keyboardNav';
import { BackgroundEffects } from './components/BackgroundEffects';
import { CertificatesHeader } from './components/CertificatesHeader';
import { StatsBadge } from './components/StatsBadge';
import { ScrollContainer } from './components/ScrollContainer';
import { CertificateModal } from './components/CertificateModal';

const Certificates = () => {
  const { ref, inView } = useCertificatesAnimation();
  const { modalProps, handleOpen } = useModal();

  // State untuk arrow visibility
  const [showArrows, setShowArrows] = useState({
    showLeft: false,
    showRight: true,
  });

  // Setup scroll container
  const { scrollContainerRef, handlers, scrollTo } =
    useScrollContainer(setShowArrows);

  // Setup keyboard navigation (carousel scroll only when inView and modal closed)
  useEffect(() => {
    if (!inView || modalProps.isOpen) return;
    return setupKeyboardNavigation(
      () => scrollTo(-1),
      () => scrollTo(1),
      modalProps.isOpen
    );
  }, [inView, modalProps.isOpen, scrollTo]);

  return (
    <>
      <motion.section
        ref={ref}
        id="certificates"
        className="relative py-24 sm:py-28 lg:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden"
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        variants={containerVariants}
      >
        <BackgroundEffects />

        <div className="max-w-7xl mx-auto w-full relative">
          <CertificatesHeader />
          <StatsBadge count={certificates.length} />

          <ScrollContainer
            inView={inView}
            onImageClick={handleOpen}
            scrollHandlers={{
              containerRef: scrollContainerRef,
              events: handlers,
            }}
            showArrows={showArrows}
            onScroll={scrollTo}
          />
        </div>
      </motion.section>

      {/* Modal via Portal */}
      <AnimatePresence>
        {modalProps.isOpen && (
          <CertificateModal {...modalProps} />
        )}
      </AnimatePresence>


    </>
  );
};

export default memo(Certificates);