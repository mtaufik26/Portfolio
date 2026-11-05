import { motion, AnimatePresence } from 'framer-motion';
import { useImageError } from '../hooks/useImageError';
import { FiAward, FiCalendar, FiCheckCircle, FiShield } from 'react-icons/fi';

export const ModalContent = ({ selectedCert, selectedIndex, totalCount }) => {
  const { currentSrc, showError, handleError } = useImageError(selectedCert?.image);

  if (!selectedCert) return null;

  return (
    <div className="relative w-full max-w-4xl mx-auto" onClick={(e) => e.stopPropagation()}>
      <AnimatePresence mode="popLayout" initial={false}>
        <motion.div
          key={selectedCert.id}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.15, ease: 'easeOut' }}
          className="relative rounded-3xl overflow-hidden bg-white dark:bg-[#0D0D11] border border-neutral-200/90 dark:border-white/10 shadow-2xl flex flex-col"
        >
          {/* Top Header Bar inside Modal */}
          <div className="flex items-center justify-between px-6 py-4 bg-neutral-50/90 dark:bg-black/40 border-b border-neutral-200/80 dark:border-white/[0.08]">
            <div className="flex items-center gap-2.5">
              <span className="w-8 h-8 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-600 dark:text-blue-400 flex items-center justify-center">
                <FiAward className="w-4 h-4" />
              </span>
              <div>
                <span className="text-xs font-mono font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400 block">
                  Course Completion Record
                </span>
                <span className="text-[11px] text-neutral-500 dark:text-neutral-400">
                  {selectedIndex !== null && typeof totalCount === 'number'
                    ? `Item ${selectedIndex + 1} of ${totalCount}`
                    : ''}
                </span>
              </div>
            </div>

            {/* Course Record Tag */}
            <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-600 dark:text-blue-400 text-xs font-semibold">
              <FiCheckCircle className="w-3.5 h-3.5" />
              <span>Verified Record</span>
            </div>
          </div>

          {/* Visual Area */}
          <div className="relative min-h-[260px] sm:min-h-[360px] md:min-h-[400px] bg-neutral-100 dark:bg-neutral-950 flex items-center justify-center p-4 sm:p-6 overflow-hidden">
            {currentSrc && !showError ? (
              <img
                src={currentSrc}
                alt={`${selectedCert.title} - Certificate Issued by ${selectedCert.issuer}`}
                className="w-full h-auto max-h-[62vh] object-contain rounded-xl shadow-md"
                loading="eager"
                onError={handleError}
              />
            ) : (
              /* Clean, Honest Course Record Slate */
              <div className="w-full max-w-xl p-8 sm:p-10 rounded-2xl bg-gradient-to-br from-neutral-900 to-[#111219] border border-neutral-800 text-center relative shadow-inner overflow-hidden">
                <div className="w-14 h-14 sm:w-16 sm:h-16 mx-auto mb-4 rounded-2xl bg-blue-500/10 border border-blue-500/25 flex items-center justify-center text-blue-400 shadow-md">
                  <FiAward className="w-7 h-7 sm:w-8 sm:h-8" />
                </div>

                <span className="text-xs font-mono font-semibold text-neutral-400 uppercase tracking-widest block mb-2">
                  {selectedCert.issuer}
                </span>

                <h3 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white mb-4 tracking-tight px-4">
                  {selectedCert.title}
                </h3>

                <div className="flex flex-wrap items-center justify-center gap-3 text-xs sm:text-sm text-neutral-400 pt-4 border-t border-neutral-800">
                  <span className="flex items-center gap-1.5">
                    <FiCalendar className="w-3.5 h-3.5 text-neutral-400" />
                    <span>{selectedCert.date}</span>
                  </span>
                  <span className="w-1 h-1 rounded-full bg-neutral-700" />
                  <span className="flex items-center gap-1.5 font-mono text-neutral-300">
                    <FiShield className="w-3.5 h-3.5 text-blue-400" />
                    <span>Ref: {selectedCert.credential}</span>
                  </span>
                </div>
              </div>
            )}
          </div>

          {/* Bottom Info Footer */}
          <div className="px-6 py-4 bg-white/95 dark:bg-[#0D0D11]/95 border-t border-neutral-200/80 dark:border-white/[0.08] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
            <div>
              <h4 className="text-sm sm:text-base font-bold text-neutral-900 dark:text-white leading-snug">
                {selectedCert.title}
              </h4>
              <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-0.5">
                Issued by <span className="font-semibold text-neutral-700 dark:text-neutral-300">{selectedCert.issuer}</span> • {selectedCert.date}
              </p>
            </div>

            {selectedCert.credential && (
              <div className="text-xs font-mono text-neutral-600 dark:text-neutral-400 bg-neutral-100 dark:bg-white/[0.06] px-3 py-1.5 rounded-lg border border-neutral-200/70 dark:border-white/[0.06]">
                Course Ref: <span className="font-bold text-neutral-900 dark:text-neutral-200">{selectedCert.credential}</span>
              </div>
            )}
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};