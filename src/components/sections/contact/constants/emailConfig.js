/**
 * EmailJS Configuration
 * Mengambil kredensial dari environment variables dengan fallback
 */
export const getEmailConfig = () => {
  const SERVICE_ID = import.meta.env?.VITE_EMAILJS_SERVICE_ID || process.env?.REACT_APP_EMAILJS_SERVICE_ID;
  const TEMPLATE_ID = import.meta.env?.VITE_EMAILJS_TEMPLATE_ID || process.env?.REACT_APP_EMAILJS_TEMPLATE_ID;
  const PUBLIC_KEY = import.meta.env?.VITE_EMAILJS_PUBLIC_KEY || process.env?.REACT_APP_EMAILJS_PUBLIC_KEY;

  return { SERVICE_ID, TEMPLATE_ID, PUBLIC_KEY };
};

/**
 * Validasi kredensial EmailJS (hanya di development)
 */
export const validateEmailConfig = (config) => {
  const isDev = import.meta.env?.DEV || process.env?.NODE_ENV === 'development';
  
  if (isDev) {
    const { SERVICE_ID, TEMPLATE_ID, PUBLIC_KEY } = config;
    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
      console.warn('⚠️ EmailJS credentials not found. Check your .env file!');
      return false;
    }
  }
  return true;
};