import { motion, AnimatePresence } from 'framer-motion';
import { createPortal } from 'react-dom';
import { useEffect } from 'react';
import { modalVariants } from '../constants/certificateVariants';
import { ModalContent } from './ModalContent';
import { ModalControls } from './ModalControls';

export const CertificateModal = ({ isOpen, onClose, selectedImage, selectedCert }) => {
  // Close on Escape key (handled by useModal hook, but kept for safety)
  useEffect(() => {
    if (!isOpen) return;
    
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // Prevent body scroll when modal is open (handled by useModal hook)
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const modalContent = (
    <motion.div
      className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-sm"
      variants={modalVariants.overlay}
      initial="hidden"
      animate="visible"
      exit="exit"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Certificate preview modal"
    >
      <ModalContent selectedImage={selectedImage} selectedCert={selectedCert} />
      <ModalControls onClose={onClose} />
    </motion.div>
  );

  // Render modal via Portal to document.body to escape parent stacking contexts
  return createPortal(modalContent, document.body);
};