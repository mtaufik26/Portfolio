/**
 * EmailJS Configuration
 * Mengambil kredensial dari environment variables (Vite)
 */
export const getEmailConfig = () => {
  const SERVICE_ID = import.meta.env?.VITE_EMAILJS_SERVICE_ID;
  const TEMPLATE_ID = import.meta.env?.VITE_EMAILJS_TEMPLATE_ID;
  const PUBLIC_KEY = import.meta.env?.VITE_EMAILJS_PUBLIC_KEY;

  return { SERVICE_ID, TEMPLATE_ID, PUBLIC_KEY };
};

/**
 * Validasi kredensial EmailJS (hanya di development)
 */
export const validateEmailConfig = (config) => {
  const isDev = import.meta.env?.DEV;
  
  if (isDev) {
    const { SERVICE_ID, TEMPLATE_ID, PUBLIC_KEY } = config;
    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
      console.warn('⚠️ EmailJS credentials not found. Check your .env file!');
      return false;
    }
  }
  return true;
};