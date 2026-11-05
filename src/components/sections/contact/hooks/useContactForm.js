// src/components/sections/contact/hooks/useContactForm.js
import { useState } from 'react';
// ✅ Import utility function yang sudah Anda buat
import { sendContactEmail } from '../utils/emailService';
import { sanitizeInput } from '../utils/validation';
import { useFormField } from './useFormField';

export const useContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const [focusedField, setFocusedField] = useState(null);
  // Honeypot field — invisible to real users, filled by bots
  const [honeypot, setHoneypot] = useState('');

  const nameField = useFormField('', (val) => {
    if (!val?.trim()) return 'Name is required';
    if (val.trim().length < 2) return 'Name must be at least 2 characters';
    return null;
  });

  const emailField = useFormField('', (val) => {
    if (!val?.trim()) return 'Email is required';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val)) {
      return 'Invalid email format';
    }
    return null;
  });

  const messageField = useFormField('', (val) => {
    if (!val?.trim()) return 'Message is required';
    if (val.trim().length < 10) {
      return 'Message must be at least 10 characters';
    }
    return null;
  });

  const fields = {
    name: nameField,
    email: emailField,
    message: messageField,
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (fields[name]) {
      fields[name].setValue(value);
    }
  };

  const handleFocus = (fieldName) => {
    setFocusedField(fieldName);
    if (fields[fieldName]) {
      fields[fieldName].setIsFocused(true);
    }
  };

  const handleBlur = (e) => {
    const { name } = e.target;
    setFocusedField(null);
    if (fields[name]) {
      fields[name].setIsFocused(false);
      fields[name].validate();
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validasi semua field
    const isValid =
      nameField.validate() &&
      emailField.validate() &&
      messageField.validate();

    if (!isValid) return;

    // Honeypot check — silently reject bot submissions
    if (honeypot) {
      // Simulate success to avoid tipping off the bot
      setSubmitSuccess(true);
      nameField.reset();
      emailField.reset();
      messageField.reset();
      return;
    }

    try {
      setIsSubmitting(true);
      setSubmitError('');
      setSubmitSuccess(false);

      // ✅ PANGGIL UTILITY FUNCTION (bukan emailjs.send langsung)
      // formData harus match dengan yang diharapkan sendContactEmail
      // Sanitize inputs before submission as defense-in-depth
      const formData = {
        name: sanitizeInput(nameField.value),
        email: sanitizeInput(emailField.value),
        message: sanitizeInput(messageField.value),
      };

      await sendContactEmail(formData);

      // Sukses: reset form & tampilkan pesan
      setSubmitSuccess(true);
      nameField.reset();
      emailField.reset();
      messageField.reset();

    } catch (error) {
      // ❌ Gagal: tampilkan error yang informatif (don't leak internal details)
      const safeMessage = error.message?.includes('Too many submissions')
        ? error.message
        : 'Failed to send message. Please try again.';
      if (import.meta.env?.DEV) {
        console.error('❌ Form submission error:', error);
      }
      setSubmitError(safeMessage);
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    formData: {
      name: nameField.value,
      email: emailField.value,
      message: messageField.value,
    },
    errors: {
      name: nameField.error,
      email: emailField.error,
      message: messageField.error,
      submit: submitError,
    },
    focusedField,
    isSubmitting,
    submitSuccess,
    honeypot,
    setHoneypot,
    handleChange,
    handleFocus,
    handleBlur,
    handleSubmit,
  };
};