import { memo } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaInstagram, FaArrowUp } from 'react-icons/fa';
import { FiMail } from 'react-icons/fi';
import { transitions } from '../../utils/motion';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Projects', href: '#projects' },
    { label: 'Certificates', href: '#certificates' },
    { label: 'Contact', href: '#contact' },
  ];

  const socialLinks = [
    {
      name: 'GitHub',
      href: 'https://github.com/mtaufik26',
      icon: FaGithub,
    },
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/in/muhammad-taufik-ediansyah/',
      icon: FaLinkedin,
    },
    {
      name: 'Instagram',
      href: 'https://instagram.com/ttafi.k',
      icon: FaInstagram,
    },
    {
      name: 'Email',
      href: 'https://mail.google.com/mail/?view=cm&fs=1&to=taufikediansyah@gmail.com',
      icon: FiMail,
    },
  ];

  return (
    <motion.footer
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: transitions.duration.normal, ease: transitions.smoothEase }}
      className="relative mt-20 sm:mt-24 lg:mt-28 border-t border-neutral-200/80 dark:border-white/[0.08] bg-white/80 dark:bg-[#070709]/85 backdrop-blur-md"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 py-12 sm:py-16">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 pb-10 sm:pb-12 border-b border-neutral-200/60 dark:border-white/[0.08]">
          
          {/* Col 1: Identity & Availability (5 Cols) */}
          <div className="md:col-span-5 space-y-3.5">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-blue-600 dark:bg-blue-400" aria-hidden="true" />
              <h3 className="text-base sm:text-lg font-bold text-neutral-900 dark:text-white tracking-tight">
                Taufik Ediansyah
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed max-w-sm font-normal">
              Front-End Developer specializing in React.js, Tailwind CSS, and responsive web development. Committed to clean code and optimal user experiences.
            </p>
            <div className="pt-1">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 dark:text-emerald-400 text-xs font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" aria-hidden="true" />
                <span>Available for Opportunities</span>
              </div>
            </div>
          </div>

          {/* Col 2: Navigation Map (4 Cols) */}
          <div className="md:col-span-4 space-y-3">
            <span className="text-[11px] font-mono font-semibold uppercase tracking-wider text-neutral-600 dark:text-neutral-400 block">
              Navigation
            </span>
            <nav className="grid grid-cols-2 gap-x-4 gap-y-2.5 text-xs sm:text-sm" aria-label="Footer navigation">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-neutral-600 dark:text-neutral-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-150 inline-flex items-center py-0.5 font-medium"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Col 3: Presence & Back to Top (3 Cols) */}
          <div className="md:col-span-3 space-y-3 flex flex-col justify-between">
            <div>
              <span className="text-[11px] font-mono font-semibold uppercase tracking-wider text-neutral-600 dark:text-neutral-400 block mb-3">
                Presence
              </span>
              <div className="flex flex-wrap items-center gap-2">
                {socialLinks.map(({ name, href, icon: Icon }) => (
                  <a
                    key={name}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Open ${name} profile`}
                    className="group p-2.5 rounded-xl border border-neutral-200/90 dark:border-white/10 bg-white/90 dark:bg-[#0D0D10]/95 backdrop-blur-sm text-neutral-700 dark:text-neutral-200 hover:text-neutral-900 dark:hover:text-white hover:border-neutral-300 dark:hover:border-white/20 hover:bg-neutral-50/80 dark:hover:bg-white/[0.06] transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                  >
                    <Icon className="w-4 h-4 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors" aria-hidden="true" />
                  </a>
                ))}
              </div>
            </div>

            {/* Back to top button */}
            <div className="pt-2">
              <button
                type="button"
                onClick={scrollToTop}
                aria-label="Back to top"
                className="group inline-flex items-center gap-2 px-3.5 py-2 rounded-xl border border-neutral-200/90 dark:border-white/10 bg-white/90 dark:bg-[#0D0D10]/95 backdrop-blur-sm text-xs font-semibold text-neutral-700 dark:text-neutral-200 hover:text-neutral-900 dark:hover:text-white hover:border-neutral-300 dark:hover:border-white/20 hover:bg-neutral-50/80 dark:hover:bg-white/[0.06] transition-all duration-200 cursor-pointer shadow-xs focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
              >
                <span>Back to top</span>
                <FaArrowUp className="w-3 h-3 text-neutral-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 group-hover:-translate-y-0.5 transition-all duration-200" aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom copyright and metadata */}
        <div className="pt-6 sm:pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-neutral-500 dark:text-neutral-400 gap-3 text-center sm:text-left">
          <p>© {new Date().getFullYear()} Taufik Ediansyah. Bogor, Indonesia.</p>
          <p className="font-mono text-[11px] text-neutral-400 dark:text-neutral-500">
            Crafted with React · Tailwind CSS · Framer Motion
          </p>
        </div>
      </div>
    </motion.footer>
  );
};

export default memo(Footer);
