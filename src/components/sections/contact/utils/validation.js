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
  }

  // Email validation
  if (!formData.email?.trim()) {
    errors.email = 'Email is required';
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
    errors.email = 'Invalid email format';
  }

  // Message validation
  if (!formData.message?.trim()) {
    errors.message = 'Message is required';
  } else if (formData.message.trim().length < 10) {
    errors.message = 'Message must be at least 10 characters';
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