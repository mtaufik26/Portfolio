import { useState, useEffect, useCallback, useMemo } from 'react';
import { certificates } from '../constants/certificatesData';

/**
 * Custom hook untuk mengelola state modal sertifikat
 * Mendukung navigasi Prev/Next, touch swipe, keyboard nav (ArrowLeft/ArrowRight/ESC),
 * serta penanganan boundary.
 */
export const useModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(null);

  const totalCount = certificates.length;

  const handleOpen = useCallback((item) => {
    let index = 0;
    if (typeof item === 'number') {
      index = item;
    } else if (item && item.id) {
      const found = certificates.findIndex((c) => c.id === item.id);
      index = found !== -1 ? found : 0;
    }
    setSelectedIndex(index);
    setIsModalOpen(true);
  }, []);

  const handleClose = useCallback(() => {
    setIsModalOpen(false);
    setTimeout(() => {
      setSelectedIndex(null);
    }, 200);
  }, []);

  const handleNext = useCallback(() => {
    setSelectedIndex((prev) => {
      if (prev === null) return 0;
      return prev < certificates.length - 1 ? prev + 1 : 0;
    });
  }, []);

  const handlePrev = useCallback(() => {
    setSelectedIndex((prev) => {
      if (prev === null) return 0;
      return prev > 0 ? prev - 1 : certificates.length - 1;
    });
  }, []);

  // Keyboard navigation saat modal terbuka
  useEffect(() => {
    if (!isModalOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        handleClose();
      } else if (e.key === 'ArrowRight') {
        e.preventDefault();
        handleNext();
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        handlePrev();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isModalOpen, handleClose, handleNext, handlePrev]);

  // Prevent background scroll saat modal terbuka and pause particles
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
      document.body.dataset.modalOpen = 'true';
    } else {
      document.body.style.overflow = '';
      delete document.body.dataset.modalOpen;
    }
    return () => {
      document.body.style.overflow = '';
      delete document.body.dataset.modalOpen;
    };
  }, [isModalOpen]);

  const currentCert = selectedIndex !== null ? certificates[selectedIndex] : null;

  const modalProps = useMemo(() => ({
    isOpen: isModalOpen,
    onClose: handleClose,
    onNext: handleNext,
    onPrev: handlePrev,
    selectedIndex,
    totalCount,
    currentCert,
    isFirst: selectedIndex === 0,
    isLast: selectedIndex === totalCount - 1,
  }), [isModalOpen, handleClose, handleNext, handlePrev, selectedIndex, totalCount, currentCert]);

  return {
    isOpen: isModalOpen,
    handleOpen,
    handleClose,
    handleNext,
    handlePrev,
    selectedIndex,
    currentCert,
    modalProps,
  };
};