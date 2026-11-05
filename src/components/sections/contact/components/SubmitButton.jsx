import { motion } from 'framer-motion';
import { buttonVariants } from '../constants/contactVariants';
import { FiSend } from 'react-icons/fi';

export const SubmitButton = ({ isSubmitting }) => {
  return (
    <motion.button
      type="submit"
      disabled={isSubmitting}
      className="w-full py-3.5 px-6 rounded-xl font-medium text-xs sm:text-sm text-white
        bg-blue-600 hover:bg-blue-500 active:bg-blue-700
        shadow-xs hover:shadow-sm
        transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed
        flex items-center justify-center gap-2 cursor-pointer"
      variants={buttonVariants}
      whileHover={{ y: isSubmitting ? 0 : -2 }}
      whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
    >
      {isSubmitting ? (
        <span className="flex items-center justify-center gap-2 font-mono">
          <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
          </svg>
          <span>Sending Message...</span>
        </span>
      ) : (
        <>
          <span>Send Message</span>
          <FiSend className="w-4 h-4" />
        </>
      )}
    </motion.button>
  );
};