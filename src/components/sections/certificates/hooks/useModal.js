import { useState, useEffect, useMemo } from 'react';

/**
 * Custom hook untuk mengelola modal state dengan accessibility features
 * @returns {Object} modal state, handlers, dan props untuk rendering
 */
export const useModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedCert, setSelectedCert] = useState(null);

  // Close on Escape key
  useEffect(() => {
    if (!isModalOpen) return;
    
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') handleClose();
    };
    
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isModalOpen]);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isModalOpen]);

  const handleOpen = (cert) => {
    setSelectedCert(cert);
    setSelectedImage(cert.image);
    setIsModalOpen(true);
  };

  const handleClose = () => {
    setIsModalOpen(false);
    // Delay clearing data to allow exit animation
    setTimeout(() => {
      setSelectedImage(null);
      setSelectedCert(null);
    }, 200);
  };

  // Memoize modal props untuk mencegah unnecessary re-renders
  const modalProps = useMemo(() => ({
    isOpen: isModalOpen,
    onClose: handleClose,
    selectedImage,
    selectedCert,
  }), [isModalOpen, selectedImage, selectedCert]);

  return {
    isOpen: isModalOpen,
    handleOpen,
    handleClose,
    modalProps,
  };
};