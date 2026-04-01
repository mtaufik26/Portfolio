import { motion } from 'framer-motion';
import { buttonVariants } from '../constants/contactVariants';

export const SubmitButton = ({ isSubmitting }) => {
  return (
    <motion.button
      type="submit"
      disabled={isSubmitting}
      className="w-full py-3.5 rounded-xl font-semibold text-white bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/30 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
      variants={buttonVariants}
      whileHover="hover"
      whileTap="tap"
    >
      {isSubmitting ? (
        <span className="flex items-center justify-center gap-2">
          <svg className="w-5 h-5 animate-spin" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
          </svg>
          Sending...
        </span>
      ) : (
        'Send Message'
      )}
    </motion.button>
  );
};