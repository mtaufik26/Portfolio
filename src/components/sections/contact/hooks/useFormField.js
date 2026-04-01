import { useState, useCallback } from 'react';

/**
 * Custom hook untuk mengelola state individual form field
 * @param {string} initialValue - Nilai awal field
 * @param {Function} validateFn - Fungsi validasi opsional (return string error atau null)
 * @returns {Object} Field state dan handlers
 */
export const useFormField = (initialValue = '', validateFn = null) => {
  const [value, setValue] = useState(initialValue);
  const [error, setError] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const [isTouched, setIsTouched] = useState(false);

  const handleChange = useCallback((e) => {
    const newValue = e?.target?.value ?? e;
    setValue(newValue);

    // Clear error saat user mengetik
    if (error) setError('');
  }, [error]);

  const handleFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  const handleBlur = useCallback(() => {
    setIsFocused(false);
    setIsTouched(true);

    // Validasi saat blur jika ada validateFn
    if (validateFn) {
      const validationError = validateFn(value);

      if (validationError) {
        setError(validationError);
      } else {
        setError('');
      }
    }
  }, [validateFn, value]);

  const reset = useCallback(() => {
    setValue(initialValue);
    setError('');
    setIsFocused(false);
    setIsTouched(false);
  }, [initialValue]);

  const validate = useCallback(() => {
    if (!validateFn) return true;

    const validationError = validateFn(value);

    if (validationError) {
      setError(validationError);
      return false;
    }

    setError('');
    return true;
  }, [validateFn, value]);

  return {
    // State
    value,
    error,
    isFocused,
    isTouched,

    // Handlers
    handleChange,
    handleFocus,
    handleBlur,

    // Actions
    reset,
    validate,

    // Setter tambahan untuk hook lain
    setValue,
    setIsFocused,

    setError: useCallback((msg) => setError(msg), []),
    clearError: useCallback(() => setError(''), []),
  };
};