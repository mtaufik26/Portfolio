import { memo } from 'react';
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
      className="relative py-24 sm:py-28 lg:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden"
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={containerVariants}
    >
      <BackgroundEffects />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <ContactHeader />

        {/* 12-Column Responsive Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          {/* Left Column (5 Cols) - Availability Slate, Direct Contact & Social Channels */}
          <div className="lg:col-span-5">
            <ContactInfo />
          </div>
          
          {/* Right Column (7 Cols) - Architectural Dispatch Form Console */}
          <div className="lg:col-span-7">
            <ContactForm form={form} />
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default memo(Contact);