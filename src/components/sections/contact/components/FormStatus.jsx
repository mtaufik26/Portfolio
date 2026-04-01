import { motion, AnimatePresence } from 'framer-motion';
import { statusMessageVariants } from '../constants/contactVariants';

export const FormStatus = ({ success, error }) => {
  return (
    <>
      <AnimatePresence>
        {success && (
          <motion.div
            {...statusMessageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="mb-6 p-4 bg-green-50/80 dark:bg-green-900/20 border border-green-200/60 dark:border-green-800/60 rounded-xl"
          >
            <div className="flex items-center gap-3">
              <svg className="w-5 h-5 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <p className="text-green-700 dark:text-green-300 text-sm">
                Message sent successfully! I'll get back to you soon.
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {error && (
          <motion.div
            {...statusMessageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="mb-6 p-4 bg-red-50/80 dark:bg-red-900/20 border border-red-200/60 dark:border-red-800/60 rounded-xl"
          >
            <div className="flex items-center gap-3">
              <svg className="w-5 h-5 text-red-600 dark:text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <p className="text-red-700 dark:text-red-300 text-sm">
                {error}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};