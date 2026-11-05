import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { FiMail } from 'react-icons/fi';
import CV from '../../../../assets/pdf/CV - Muhammad Taufik Ediansyah.pdf';
import { itemVariants } from '../constants/heroVariants';

export const CTAButtons = () => {
  return (
    <motion.div className="space-y-6 pt-2" variants={itemVariants}>
      {/* Primary & Secondary Action Group */}
      <div className="flex flex-wrap items-center gap-3 sm:gap-4">
        {/* Primary: View Projects */}
        <a
          href="#projects"
          className="group inline-flex items-center justify-center gap-2.5 px-6 py-3 rounded-xl bg-blue-600 hover:bg-blue-500 active:bg-blue-700 text-white font-semibold text-sm sm:text-base shadow-xs hover:shadow-sm transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-[#050505]"
          aria-label="Navigate to projects section"
        >
          <span>Explore Projects</span>
          <svg 
            className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </a>

        {/* Secondary: Download CV */}
        <a
          href={CV}
          download="CV - Taufik Ediansyah.pdf"
          className="group inline-flex items-center justify-center gap-2.5 px-6 py-3 rounded-xl border border-neutral-200/90 dark:border-white/10 bg-white/80 dark:bg-[#0D0D10]/90 backdrop-blur-sm text-neutral-800 dark:text-neutral-200 font-semibold text-sm sm:text-base hover:bg-neutral-50/80 dark:hover:bg-white/[0.04] hover:border-neutral-300 dark:hover:border-white/20 transition-all duration-200 shadow-xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 dark:focus-visible:ring-offset-[#050505]"
          aria-label="Download CV of Taufik Ediansyah"
        >
          <span>Download CV</span>
          <svg 
            className="w-4 h-4 text-neutral-500 dark:text-neutral-400 transition-transform duration-200 group-hover:translate-y-0.5" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
        </a>
      </div>

      {/* Quick Direct Connect Row */}
      <div className="flex items-center gap-3 pt-1">
        <span className="text-xs font-semibold text-neutral-700 dark:text-neutral-300">
          Connect:
        </span>
        <div className="flex items-center gap-2">
          {/* GitHub */}
          <a
            href="https://github.com/mtaufik26"
            target="_blank"
            rel="noopener noreferrer"
            className="group p-2.5 rounded-xl border border-neutral-200/90 dark:border-white/10 bg-white/90 dark:bg-[#0D0D10]/95 backdrop-blur-sm text-neutral-700 dark:text-neutral-200 hover:text-neutral-900 dark:hover:text-white hover:border-neutral-300 dark:hover:border-white/20 hover:bg-neutral-50/80 dark:hover:bg-white/[0.06] transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
            aria-label="View Taufik Ediansyah's GitHub profile"
          >
            <FaGithub className="w-4 h-4 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors" aria-hidden="true" />
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/muhammad-taufik-ediansyah/"
            target="_blank"
            rel="noopener noreferrer"
            className="group p-2.5 rounded-xl border border-neutral-200/90 dark:border-white/10 bg-white/90 dark:bg-[#0D0D10]/95 backdrop-blur-sm text-neutral-700 dark:text-neutral-200 hover:text-neutral-900 dark:hover:text-white hover:border-neutral-300 dark:hover:border-white/20 hover:bg-neutral-50/80 dark:hover:bg-white/[0.06] transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
            aria-label="View Taufik Ediansyah's LinkedIn profile"
          >
            <FaLinkedin className="w-4 h-4 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors" aria-hidden="true" />
          </a>

          {/* Email */}
          <a
            href="mailto:taufikediansyah@gmail.com"
            className="group p-2.5 rounded-xl border border-neutral-200/90 dark:border-white/10 bg-white/90 dark:bg-[#0D0D10]/95 backdrop-blur-sm text-neutral-700 dark:text-neutral-200 hover:text-neutral-900 dark:hover:text-white hover:border-neutral-300 dark:hover:border-white/20 hover:bg-neutral-50/80 dark:hover:bg-white/[0.06] transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
            aria-label="Send email to Taufik Ediansyah"
          >
            <FiMail className="w-4 h-4 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors" aria-hidden="true" />
          </a>
        </div>
      </div>
    </motion.div>
  );
};