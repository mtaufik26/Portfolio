import { socialLinks } from '../constants/contactData';
import { SocialLink } from './SocialLink';

export const SocialLinks = () => {
  return (
    <div className="pt-4">
      <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-4">
        Connect on Social Media
      </h4>
      <div className="flex flex-wrap gap-3">
        {socialLinks.map((social) => (
          <SocialLink key={social.id} social={social} />
        ))}
      </div>
    </div>
  );
};