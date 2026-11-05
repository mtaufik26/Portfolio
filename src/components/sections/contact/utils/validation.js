/**
 * Sanitize input — strip HTML tags to prevent XSS via email templates
 * @param {string} input
 * @returns {string} sanitized string
 */
export const sanitizeInput = (input) => {
  if (typeof input !== 'string') return '';
  return input
    .replace(/<[^>]*>/g, '')  // Strip HTML tags
    .replace(/[<>]/g, '')     // Remove leftover angle brackets
    .trim();
};

/**
 * Validasi form contact
 * @param {Object} formData - { name, email, message }
 * @returns {Object} errors - Object dengan key field dan value pesan error
 */
export const validateContactForm = (formData) => {
  const errors = {};

  // Name validation
  if (!formData.name?.trim()) {
    errors.name = 'Name is required';
  } else if (formData.name.trim().length < 2) {
    errors.name = 'Name must be at least 2 characters';
  } else if (formData.name.trim().length > 100) {
    errors.name = 'Name must be less than 100 characters';
  }

  // Email validation
  if (!formData.email?.trim()) {
    errors.email = 'Email is required';
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
    errors.email = 'Invalid email format';
  } else if (formData.email.trim().length > 254) {
    errors.email = 'Email address is too long';
  }

  // Message validation
  if (!formData.message?.trim()) {
    errors.message = 'Message is required';
  } else if (formData.message.trim().length < 10) {
    errors.message = 'Message must be at least 10 characters';
  } else if (formData.message.trim().length > 5000) {
    errors.message = 'Message must be less than 5000 characters';
  }

  return errors;
};

/**
 * Cek apakah form valid
 * @param {Object} formData 
 * @returns {boolean}
 */
export const isFormValid = (formData) => {
  return Object.keys(validateContactForm(formData)).length === 0;
};