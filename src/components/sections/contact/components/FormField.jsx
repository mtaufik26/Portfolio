export const FormField = ({ 
  label, 
  name, 
  type = 'text', 
  value, 
  onChange, 
  onFocus, 
  onBlur,
  placeholder, 
  error, 
  isTextarea = false,
  focusedField 
}) => {
  const isFocused = focusedField === name;
  const hasError = !!error;
  
  const baseClasses = `w-full px-4 py-3 rounded-xl border bg-white/80 dark:bg-gray-900/40 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 outline-none transition-all duration-300 focus:ring-2`;
  const errorClasses = hasError 
    ? 'border-red-400 focus:border-red-500 focus:ring-red-500' 
    : 'border-gray-300/60 dark:border-gray-700/60 focus:border-blue-500 focus:ring-blue-500';
  const focusClasses = isFocused ? 'transform scale-[1.01]' : '';

  const commonProps = {
    name,
    value,
    onChange,
    onFocus: () => onFocus?.(name),
    onBlur,
    placeholder,
    className: `${baseClasses} ${errorClasses}`,
  };

  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
        {label}
      </label>
      <div className={`relative transition-all duration-300 ${focusClasses}`}>
        {isTextarea ? (
          <textarea
            rows="4"
            {...commonProps}
            className={`${commonProps.className} resize-none`}
          />
        ) : (
          <input type={type} {...commonProps} />
        )}
        
        {error && (
          <p className="mt-1 text-xs text-red-500">{error}</p>
        )}
      </div>
    </div>
  );
};