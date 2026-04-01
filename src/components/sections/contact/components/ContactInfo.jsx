import { motion } from 'framer-motion';
import { itemVariants } from '../constants/contactVariants';
import { contactInfo } from '../constants/contactData.jsx';
import { ContactInfoItem } from './ContactInfoItem';
import { SocialLinks } from './SocialLinks';

export const ContactInfo = () => {
  return (
    <motion.div variants={itemVariants} className="space-y-8">
      <div className="space-y-6">
        <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
          Contact Information
        </h3>
        <p className="text-gray-600 dark:text-gray-400">
          Feel free to reach out through any of these channels. I’m always open to discussing new opportunities and projects.
        </p>
      </div>

      {/* Contact Details */}
      <div className="space-y-4">
        {contactInfo.map((info) => (
          <ContactInfoItem key={info.id} info={info} />
        ))}
      </div>

      {/* Social Links */}
      <SocialLinks />
    </motion.div>
  );
};