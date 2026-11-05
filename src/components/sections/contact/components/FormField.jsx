import { FiUser, FiMail, FiMessageSquare, FiAlertCircle } from 'react-icons/fi';

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
  const errorId = `${name}-error`;

  const IconComponent = name === 'name' ? FiUser : name === 'email' ? FiMail : FiMessageSquare;

  return (
    <div className="space-y-1.5">
      <div className="flex items-center justify-between">
        <label 
          htmlFor={name}
          className="block text-xs font-mono font-medium uppercase tracking-wider text-neutral-600 dark:text-neutral-400"
        >
          {label}
        </label>
        {hasError && (
          <span
            id={errorId}
            role="alert"
            className="flex items-center gap-1 text-[11px] text-red-500 dark:text-red-400 font-medium"
          >
            <FiAlertCircle className="w-3 h-3" />
            {error}
          </span>
        )}
      </div>

      <div className="relative">
        {/* Leading Field Icon */}
        <div className={`absolute left-3.5 ${isTextarea ? 'top-3.5' : 'top-1/2 -translate-y-1/2'} pointer-events-none transition-colors duration-200 ${
          hasError 
            ? 'text-red-400' 
            : isFocused 
              ? 'text-blue-500 dark:text-blue-400' 
              : 'text-neutral-400 dark:text-neutral-500'
        }`}>
          <IconComponent className="w-4 h-4" />
        </div>

        {isTextarea ? (
          <textarea
            id={name}
            name={name}
            value={value}
            onChange={onChange}
            onFocus={() => onFocus?.(name)}
            onBlur={onBlur}
            rows={4}
            maxLength={5000}
            placeholder={placeholder}
            aria-invalid={hasError}
            aria-describedby={hasError ? errorId : undefined}
            className={`w-full pl-10 pr-4 py-3 rounded-xl text-xs sm:text-sm resize-none
              bg-neutral-50/80 dark:bg-white/[0.03]
              border transition-all duration-200 outline-none
              text-neutral-900 dark:text-white placeholder-neutral-400 dark:placeholder-neutral-500
              ${hasError 
                ? 'border-red-400 dark:border-red-500/70 focus:ring-2 focus:ring-red-500/30' 
                : 'border-neutral-200/90 dark:border-white/10 focus:border-blue-500 dark:focus:border-blue-400 focus:ring-2 focus:ring-blue-500/30'
              }`}
          />
        ) : (
          <input
            id={name}
            type={type}
            name={name}
            value={value}
            onChange={onChange}
            onFocus={() => onFocus?.(name)}
            onBlur={onBlur}
            maxLength={name === 'email' ? 254 : 100}
            placeholder={placeholder}
            aria-invalid={hasError}
            aria-describedby={hasError ? errorId : undefined}
            className={`w-full pl-10 pr-4 py-3 rounded-xl text-xs sm:text-sm
              bg-neutral-50/80 dark:bg-white/[0.03]
              border transition-all duration-200 outline-none
              text-neutral-900 dark:text-white placeholder-neutral-400 dark:placeholder-neutral-500
              ${hasError 
                ? 'border-red-400 dark:border-red-500/70 focus:ring-2 focus:ring-red-500/30' 
                : 'border-neutral-200/90 dark:border-white/10 focus:border-blue-500 dark:focus:border-blue-400 focus:ring-2 focus:ring-blue-500/30'
              }`}
          />
        )}
      </div>
    </div>
  );
};