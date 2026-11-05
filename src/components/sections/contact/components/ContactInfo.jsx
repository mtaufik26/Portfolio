import { useState } from 'react';
import { motion } from 'framer-motion';
import { itemVariants } from '../constants/contactVariants';
import { 
  FiMail, 
  FiMapPin, 
  FiClock, 
  FiCopy, 
  FiCheck, 
  FiArrowUpRight,
  FiZap
} from 'react-icons/fi';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';

export const ContactInfo = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const emailAddress = 'taufikediansyah@gmail.com';

  const handleCopyEmail = (e) => {
    e.preventDefault();
    navigator.clipboard.writeText(emailAddress);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const socialChannels = [
    {
      name: 'GitHub',
      handle: '@mtaufik26',
      url: 'https://github.com/mtaufik26',
      icon: FaGithub,
      hoverBorder: 'hover:border-neutral-300 dark:hover:border-white/20',
    },
    {
      name: 'LinkedIn',
      handle: 'Muhammad Taufik Ediansyah',
      url: 'https://www.linkedin.com/in/muhammad-taufik-ediansyah/',
      icon: FaLinkedin,
      hoverBorder: 'hover:border-neutral-300 dark:hover:border-white/20',
    },
    {
      name: 'Instagram',
      handle: '@ttafi.k',
      url: 'https://instagram.com/ttafi.k',
      icon: FaInstagram,
      hoverBorder: 'hover:border-neutral-300 dark:hover:border-white/20',
    },
  ];

  return (
    <motion.div variants={itemVariants} className="space-y-6">
      {/* Availability Status Card */}
      <div className="relative p-6 sm:p-7 rounded-3xl bg-white/80 dark:bg-[#0c0d12]/80 backdrop-blur-md border border-neutral-200/80 dark:border-white/[0.08] shadow-[0_2px_16px_rgba(0,0,0,0.03)] dark:shadow-[0_4px_24px_rgba(0,0,0,0.5)] overflow-hidden">

        <div className="flex items-center gap-2 mb-3">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 shrink-0" aria-hidden="true" />
          <span className="text-xs font-mono font-semibold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
            Available For Opportunities
          </span>
        </div>

        <h3 className="text-xl sm:text-2xl font-extrabold text-neutral-900 dark:text-white tracking-tight mb-2">
          Open to New Challenges
        </h3>

        <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed mb-6">
          Currently open for Front-End Developer roles (Full-time, Contract, or Internship) and web projects requiring clean, responsive, and user-friendly interfaces.
        </p>

        {/* Status Metrics Matrix */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4 border-t border-neutral-200/70 dark:border-white/[0.06]">
          <div className="flex items-center gap-2.5 text-xs text-neutral-600 dark:text-neutral-400">
            <FiClock className="w-4 h-4 text-blue-500 shrink-0" />
            <div>
              <span className="block font-semibold text-neutral-900 dark:text-neutral-200">Response Time</span>
              <span className="text-[11px] font-mono text-neutral-500 dark:text-neutral-400">&lt; 24 Hours Guaranteed</span>
            </div>
          </div>

          <div className="flex items-center gap-2.5 text-xs text-neutral-600 dark:text-neutral-400">
            <FiZap className="w-4 h-4 text-amber-500 shrink-0" />
            <div>
              <span className="block font-semibold text-neutral-900 dark:text-neutral-200">Timezone</span>
              <span className="text-[11px] font-mono text-neutral-500 dark:text-neutral-400">WIB · UTC+7 (Remote-Ready)</span>
            </div>
          </div>
        </div>
      </div>

      {/* Direct Contact Methods */}
      <div className="grid grid-cols-1 gap-4">
        {/* Email Direct Channel Card */}
        <div className="group relative p-5 rounded-2xl bg-white/90 dark:bg-[#0D0D11]/90 backdrop-blur-md border border-neutral-200/80 dark:border-white/[0.08] hover:border-neutral-300 dark:hover:border-white/20 transition-all duration-300 shadow-xs overflow-hidden">
          <div className="flex flex-col gap-3.5">
            <div className="flex items-start gap-3.5 min-w-0">
              <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-600 dark:text-blue-400 flex items-center justify-center shrink-0">
                <FiMail className="w-4 h-4" />
              </div>
              <div className="min-w-0 flex-1">
                <span className="text-[11px] font-mono uppercase tracking-wider text-neutral-600 dark:text-neutral-400 block mb-0.5 font-medium">
                  Direct Inquiries
                </span>
                <a
                  href={`https://mail.google.com/mail/?view=cm&fs=1&to=${emailAddress}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-sm sm:text-base text-neutral-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors block truncate"
                  title={emailAddress}
                >
                  {emailAddress}
                </a>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="flex items-center justify-end gap-2 pt-2.5 border-t border-neutral-100 dark:border-white/[0.06]">
              <button
                type="button"
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-neutral-100 dark:bg-white/[0.06] text-neutral-700 dark:text-neutral-300 hover:bg-neutral-200 dark:hover:bg-white/[0.1] border border-neutral-200/70 dark:border-white/[0.08] transition-colors cursor-pointer"
                title="Copy email address"
              >
                {copiedEmail ? (
                  <>
                    <FiCheck className="w-3.5 h-3.5 text-emerald-500" />
                    <span className="text-emerald-600 dark:text-emerald-400">Copied!</span>
                  </>
                ) : (
                  <>
                    <FiCopy className="w-3.5 h-3.5" />
                    <span>Copy</span>
                  </>
                )}
              </button>

              <a
                href={`https://mail.google.com/mail/?view=cm&fs=1&to=${emailAddress}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-medium bg-blue-600 hover:bg-blue-500 text-white transition-colors cursor-pointer shadow-xs"
              >
                <span>Email</span>
                <FiArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>

        {/* Location & Remote Capability Card */}
        <div className="p-5 rounded-2xl bg-white/90 dark:bg-[#0D0D11]/90 backdrop-blur-md border border-neutral-200/80 dark:border-white/[0.08] shadow-xs">
          <div className="flex items-start gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-neutral-100 dark:bg-white/[0.06] border border-neutral-200/80 dark:border-white/[0.08] text-neutral-700 dark:text-neutral-300 flex items-center justify-center shrink-0">
              <FiMapPin className="w-4 h-4 text-blue-500" />
            </div>
            <div>
              <span className="text-[11px] font-mono uppercase tracking-wider text-neutral-600 dark:text-neutral-400 block mb-0.5 font-medium">
                Base Location & Mobility
              </span>
              <p className="font-bold text-sm sm:text-base text-neutral-900 dark:text-white">
                Bogor, West Java, Indonesia
              </p>
              <span className="inline-block mt-1 text-[11px] font-medium text-neutral-500 dark:text-neutral-400">
                Available for Remote, Hybrid, or On-site Opportunities
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Social Network Channels */}
      <div className="pt-2">
        <span className="text-xs font-mono font-semibold uppercase tracking-wider text-neutral-600 dark:text-neutral-400 block mb-3">
          Professional Presence & Profiles
        </span>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {socialChannels.map((channel) => {
            const Icon = channel.icon;
            return (
              <a
                key={channel.name}
                href={channel.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`group p-3.5 rounded-2xl bg-white/90 dark:bg-[#0D0D11]/90 backdrop-blur-md border border-neutral-200/80 dark:border-white/[0.08] ${channel.hoverBorder} hover:shadow-md transition-all duration-300 flex flex-col justify-between cursor-pointer`}
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="w-8 h-8 rounded-xl bg-neutral-100 dark:bg-white/[0.06] flex items-center justify-center text-neutral-700 dark:text-neutral-300 group-hover:text-blue-500 transition-colors">
                    <Icon className="w-4 h-4" />
                  </div>
                  <FiArrowUpRight className="w-4 h-4 text-neutral-400 group-hover:text-neutral-900 dark:group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-neutral-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {channel.name}
                  </h4>
                  <p className="text-[10px] text-neutral-500 dark:text-neutral-400 truncate">
                    {channel.handle}
                  </p>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
};