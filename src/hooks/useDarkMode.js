import { useState, useEffect } from 'react';
import { getInitialDarkMode } from '../utils/darkMode';

/**
 * Custom hook untuk mengelola dark mode dengan persistence
 */
export const useDarkMode = () => {
  const [darkMode, setDarkMode] = useState(getInitialDarkMode);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode);
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
  }, [darkMode]);

  const toggleDarkMode = () => setDarkMode(prev => !prev);

  return { darkMode, toggleDarkMode };
};