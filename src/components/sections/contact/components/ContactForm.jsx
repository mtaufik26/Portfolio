import { motion } from 'framer-motion';
import { itemVariants } from '../constants/contactVariants';
import { FormField } from './FormField';
import { FormStatus } from './FormStatus';
import { SubmitButton } from './SubmitButton';

export const ContactForm = ({ form }) => {
  return (
    <motion.div variants={itemVariants}>
      <div className="bg-white/40 dark:bg-gray-800/20 backdrop-blur-xl rounded-2xl border border-gray-200/40 dark:border-gray-700/30 p-6 sm:p-8 shadow-sm">
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
          Send a Message
        </h3>
        <p className="text-gray-600 dark:text-gray-400 mb-6">
          I'll get back to you within 24 hours
        </p>

        {/* Status Messages */}
        <FormStatus success={form.submitSuccess} error={form.errors.submit} />

        {/* Form */}
        <form onSubmit={form.handleSubmit} className="space-y-5">
          <FormField
            label="Full Name"
            name="name"
            value={form.formData.name}
            onChange={form.handleChange}
            onFocus={form.handleFocus}
            onBlur={form.handleBlur}
            placeholder="John Doe"
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
            placeholder="hello@example.com"
            error={form.errors.email}
            focusedField={form.focusedField}
          />

          <FormField
            label="Message"
            name="message"
            value={form.formData.message}
            onChange={form.handleChange}
            onFocus={form.handleFocus}
            onBlur={form.handleBlur}
            placeholder="Tell me about your project..."
            error={form.errors.message}
            focusedField={form.focusedField}
            isTextarea
          />

          <SubmitButton isSubmitting={form.isSubmitting} />
        </form>
      </div>
    </motion.div>
  );
};