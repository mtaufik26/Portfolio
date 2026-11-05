import { useState } from 'react';
import { motion } from 'framer-motion';
import { itemVariants } from '../constants/contactVariants';
import { FormField } from './FormField';
import { FormStatus } from './FormStatus';
import { SubmitButton } from './SubmitButton';
import { FiShield, FiTag } from 'react-icons/fi';

export const ContactForm = ({ form }) => {
  const [selectedTopic, setSelectedTopic] = useState(null);

  const topics = [
    'Front-End Role',
    'Web Application',
    'React.js Project',
    'Freelance / Contract',
    'General Inquiry',
  ];

  const handleSelectTopic = (topic) => {
    setSelectedTopic(topic);
    // If the message field doesn't already contain this topic tag, prepend or append it gracefully
    const currentMsg = form.formData.message || '';
    if (!currentMsg.includes(`[Topic: ${topic}]`)) {
      const cleanMsg = currentMsg.replace(/^\[Topic:.*?\]\s*/, '');
      const newMsg = `[Topic: ${topic}] ${cleanMsg}`.trim();
      form.handleChange({ target: { name: 'message', value: newMsg } });
    }
  };

  return (
    <motion.div variants={itemVariants} className="w-full">
      <div className="relative rounded-3xl bg-white/90 dark:bg-[#0D0D11]/90 backdrop-blur-md border border-neutral-200/80 dark:border-white/[0.08] shadow-[0_2px_16px_rgba(0,0,0,0.03)] dark:shadow-[0_4px_24px_rgba(0,0,0,0.5)] overflow-hidden">
        {/* Card Header Bar */}
        <div className="px-6 py-4 bg-neutral-50/70 dark:bg-white/[0.02] border-b border-neutral-200/80 dark:border-white/[0.06] flex items-center justify-between select-none">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-blue-500" />
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-neutral-600 dark:text-neutral-400">
              Direct Inquiry
            </span>
          </div>

          <div className="flex items-center gap-1.5 text-neutral-500 dark:text-neutral-400 font-mono text-[11px]">
            <span>Active Response</span>
          </div>
        </div>

        {/* Form Body */}
        <div className="p-6 sm:p-8">
          <div className="mb-6">
            <h3 className="text-xl sm:text-2xl font-extrabold text-neutral-900 dark:text-white tracking-tight mb-1.5">
              Send a Direct Message
            </h3>
            <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400">
              Fill out the form below or choose a topic to start a conversation.
            </p>
          </div>

          {/* Quick Topic Chips */}
          <div className="mb-6">
            <div className="flex items-center gap-1.5 mb-2.5 text-neutral-500 dark:text-neutral-400 text-xs font-mono">
              <FiTag className="w-3.5 h-3.5 text-blue-500" />
              <span>Select Discussion Topic (Optional):</span>
            </div>
            <div className="flex flex-wrap gap-1.5 sm:gap-2">
              {topics.map((topic) => {
                const isSelected = selectedTopic === topic;
                return (
                  <button
                    key={topic}
                    type="button"
                    onClick={() => handleSelectTopic(topic)}
                    className={`px-3 py-2 sm:px-2.5 sm:py-1 rounded-lg text-xs font-medium transition-all cursor-pointer min-h-[36px] sm:min-h-0 inline-flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-blue-500/40 ${
                      isSelected
                        ? 'bg-blue-600 text-white shadow-xs font-semibold'
                        : 'bg-neutral-100 dark:bg-white/[0.04] text-neutral-600 dark:text-neutral-400 hover:bg-neutral-200 dark:hover:bg-white/[0.08] border border-neutral-200/70 dark:border-white/[0.06]'
                    }`}
                  >
                    {topic}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Status Messages */}
          <FormStatus success={form.submitSuccess} error={form.errors.submit} />

          {/* Form Fields */}
          <form onSubmit={form.handleSubmit} className="space-y-4">
            <FormField
              label="Full Name"
              name="name"
              value={form.formData.name}
              onChange={form.handleChange}
              onFocus={form.handleFocus}
              onBlur={form.handleBlur}
              placeholder="e.g. John Doe"
              error={form.errors.name}
              focusedField={form.focusedField}
            />

            <FormField
              label="Email Address"
              name="email"
              type="email"
              value={form.formData.email}
              onChange={form.handleChange}
              onFocus={form.handleFocus}
              onBlur={form.handleBlur}
              placeholder="e.g. john@company.com"
              error={form.errors.email}
              focusedField={form.focusedField}
            />

            <FormField
              label="Your Message"
              name="message"
              value={form.formData.message}
              onChange={form.handleChange}
              onFocus={form.handleFocus}
              onBlur={form.handleBlur}
              placeholder="Describe your project, timeline, or requirements..."
              error={form.errors.message}
              focusedField={form.focusedField}
              isTextarea
            />

            {/* Honeypot anti-spam field — invisible to humans, detected by bots */}
            <div aria-hidden="true" style={{ position: 'absolute', left: '-9999px', height: 0, overflow: 'hidden' }}>
              <label htmlFor="confirm_terms_hp">Leave empty</label>
              <input
                type="text"
                id="confirm_terms_hp"
                name="confirm_terms_hp"
                value={form.honeypot}
                onChange={(e) => form.setHoneypot(e.target.value)}
                tabIndex={-1}
                autoComplete="off"
              />
            </div>

            <div className="pt-2">
              <SubmitButton isSubmitting={form.isSubmitting} />
            </div>

            <p className="text-[11px] text-center text-neutral-400 dark:text-neutral-500 font-mono mt-3">
              Your information is confidential and used exclusively for direct correspondence.
            </p>
          </form>
        </div>
      </div>
    </motion.div>
  );
};