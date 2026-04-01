import emailjs from '@emailjs/browser';
import { getEmailConfig } from '../constants/emailConfig';

/**
 * Format tanggal untuk template email
 * @returns {string} Formatted date string
 */
export const formatEmailDate = () => {
  return new Date().toLocaleString('id-ID', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  });
};

/**
 * Mapping formData ke template params EmailJS
 * @param {Object} formData - { name, email, message }
 * @returns {Object} templateParams
 */
export const mapToTemplateParams = (formData) => {
  return {
    user_name: formData.name,
    user_email: formData.email,
    message: formData.message,
    date: formatEmailDate(),
  };
};

/**
 * Send email via EmailJS
 * @param {Object} formData - Form data dari user
 * @returns {Promise<Object>} Result dari EmailJS
 * @throws {Error} Jika kredensial tidak valid atau pengiriman gagal
 */
export const sendContactEmail = async (formData) => {
  const config = getEmailConfig();
  
  // Validasi kredensial sebelum kirim
  if (!config.SERVICE_ID || !config.TEMPLATE_ID || !config.PUBLIC_KEY) {
    throw new Error('EmailJS credentials not configured properly');
  }

  const templateParams = mapToTemplateParams(formData);

  const result = await emailjs.send(
    config.SERVICE_ID,
    config.TEMPLATE_ID,
    templateParams,
    config.PUBLIC_KEY
  );

  return result;
};