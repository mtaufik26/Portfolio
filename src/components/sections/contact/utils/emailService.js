import emailjs from '@emailjs/browser';
import { getEmailConfig } from '../constants/emailConfig';
import { sanitizeInput } from './validation';

/**
 * Simple rate limiter to prevent spam submissions
 * Max 3 submissions per 5 minutes
 */
const RATE_LIMIT_WINDOW_MS = 5 * 60 * 1000; // 5 minutes
const RATE_LIMIT_MAX = 3;
const submissionTimestamps = [];

const isRateLimited = () => {
  const now = Date.now();
  // Remove timestamps outside the window
  while (submissionTimestamps.length > 0 && submissionTimestamps[0] < now - RATE_LIMIT_WINDOW_MS) {
    submissionTimestamps.shift();
  }
  return submissionTimestamps.length >= RATE_LIMIT_MAX;
};

const recordSubmission = () => {
  submissionTimestamps.push(Date.now());
};

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
 * Sanitizes all user inputs to prevent XSS via email templates
 * @param {Object} formData - { name, email, message }
 * @returns {Object} templateParams
 */
export const mapToTemplateParams = (formData) => {
  return {
    user_name: sanitizeInput(formData.name),
    user_email: sanitizeInput(formData.email),
    message: sanitizeInput(formData.message),
    date: formatEmailDate(),
  };
};

/**
 * Send email via EmailJS
 * @param {Object} formData - Form data dari user
 * @returns {Promise<Object>} Result dari EmailJS
 * @throws {Error} Jika kredensial tidak valid, rate limited, atau pengiriman gagal
 */
export const sendContactEmail = async (formData) => {
  // Rate limiting check
  if (isRateLimited()) {
    throw new Error('Too many submissions. Please wait a few minutes before trying again.');
  }

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

  // Record successful submission for rate limiting
  recordSubmission();

  return result;
};