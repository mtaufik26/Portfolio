import { motion, AnimatePresence } from 'framer-motion';
import { statusMessageVariants } from '../constants/contactVariants';
import { FiCheckCircle, FiAlertTriangle } from 'react-icons/fi';

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
            className="mb-5 p-4 bg-emerald-500/10 border border-emerald-500/30 rounded-2xl flex items-start gap-3"
          >
            <FiCheckCircle className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
            <div>
              <h4 className="text-xs sm:text-sm font-bold text-emerald-700 dark:text-emerald-300">
                Message Sent Successfully!
              </h4>
              <p className="text-xs text-emerald-600 dark:text-emerald-400 mt-0.5 leading-relaxed">
                Thank you for reaching out. I will review your message and respond within 24 hours.
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
            className="mb-5 p-4 bg-red-500/10 border border-red-500/30 rounded-2xl flex items-start gap-3"
          >
            <FiAlertTriangle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
            <div>
              <h4 className="text-xs sm:text-sm font-bold text-red-700 dark:text-red-300">
                Delivery Failed
              </h4>
              <p className="text-xs text-red-600 dark:text-red-400 mt-0.5 leading-relaxed">
                {error}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};