import { motion } from 'framer-motion';
import { containerVariants } from './constants/contactVariants';
import { useContactAnimation } from './hooks/useContactAnimation';
import { useContactForm } from './hooks/useContactForm';
import { BackgroundEffects } from './components/BackgroundEffects';
import { ContactHeader } from './components/ContactHeader';
import { ContactInfo } from './components/ContactInfo';
import { ContactForm } from './components/ContactForm';

const Contact = () => {
  const { ref, inView } = useContactAnimation();
  const form = useContactForm();

  return (
    <motion.section
      ref={ref}
      id="contact"
      className="relative py-28 px-4 sm:px-6 lg:px-8 overflow-hidden"
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={containerVariants}
    >
      <BackgroundEffects />

      <div className="max-w-7xl mx-auto w-full relative">
        <ContactHeader />

        {/* Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column - Contact Info */}
          <ContactInfo />
          
          {/* Right Column - Contact Form */}
          <ContactForm form={form} />
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;