/**
 * Get initial dark mode preference
 * Priority: localStorage > system default (true/dark)
 */
export const getInitialDarkMode = () => {
  const saved = localStorage.getItem('darkMode');
  if (saved !== null) return JSON.parse(saved);
  return true; // Default: Dark Mode
};