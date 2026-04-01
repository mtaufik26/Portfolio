// src/hooks/useTypingAnimation.js
import { useState, useEffect } from 'react';

/**
 * Custom hook untuk animasi mengetik dengan multiple texts & loop
 * @param {string[]} texts - Array teks yang akan diketik bergantian
 * @param {boolean} isActive - Apakah animasi harus berjalan (berdasarkan inView)
 * @param {object} options - Konfigurasi kecepatan
 * @returns {object} { displayText, isDeleting, currentIndex }
 */
export const useTypingAnimation = (texts, isActive, options = {}) => {
  const {
    typingSpeed = 120,
    deletingSpeed = 80,
    pauseDuration = 1200,
  } = options;

  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [textIndex, setTextIndex] = useState(0);
  const [loopCount, setLoopCount] = useState(0);
  const [currentSpeed, setCurrentSpeed] = useState(typingSpeed);

  // Normalisasi: jika texts berupa string, konversi ke array
  const textsArray = Array.isArray(texts) ? texts : [texts];
  const currentText = textsArray[textIndex] || '';

  useEffect(() => {
    if (!isActive) return;

    const handleTyping = () => {
      if (!isDeleting) {
        // ── FASE MENGETIK ──
        if (displayText.length < currentText.length) {
          setDisplayText(currentText.substring(0, displayText.length + 1));
          setCurrentSpeed(typingSpeed);
        } else {
          // ── SELESAI MENGETIK: JEDA ──
          setTimeout(() => setIsDeleting(true), pauseDuration);
          return;
        }
      } else {
        // ── FASE MENGHAPUS ──
        if (displayText.length > 0) {
          setDisplayText(currentText.substring(0, displayText.length - 1));
          setCurrentSpeed(deletingSpeed);
        } else {
          // ── SELESAI MENGHAPUS: LANJUT KE TEKS BERIKUTNYA ──
          setIsDeleting(false);
          setTextIndex((prev) => (prev + 1) % textsArray.length);
          setLoopCount((prev) => prev + 1);
        }
      }
    };

    const timer = setTimeout(handleTyping, currentSpeed);
    return () => clearTimeout(timer);
  }, [
    displayText,
    isDeleting,
    textIndex,
    loopCount,
    currentSpeed,
    currentText,
    isActive,
    typingSpeed,
    deletingSpeed,
    pauseDuration,
    textsArray.length,
  ]);

  return { 
    displayText, 
    isDeleting, 
    currentIndex: textIndex,
    totalTexts: textsArray.length 
  };
};