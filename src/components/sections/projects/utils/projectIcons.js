import { 
  SiReact, 
  SiTailwindcss, 
  SiTypescript, 
  SiNextdotjs, 
  SiBootstrap, 
  SiLaravel, 
  SiJavascript, 
  SiShadcnui,
  SiVite,
  SiFramer
} from 'react-icons/si';
import { FiDatabase, FiCode } from 'react-icons/fi';

/**
 * Maps technology names to their verified icons.
 * Consistent with icons in About -> Technical Stack & Tools.
 * @param {string} name - Technology name
 * @returns {React.ComponentType|null}
 */
export const getTechIcon = (name) => {
  if (!name) return FiCode;

  const normalized = name.toLowerCase().trim();

  switch (normalized) {
    case 'react':
      return SiReact;
    case 'tailwind css':
    case 'tailwind':
      return SiTailwindcss;
    case 'typescript':
      return SiTypescript;
    case 'next.js':
    case 'nextjs':
      return SiNextdotjs;
    case 'bootstrap':
      return SiBootstrap;
    case 'laravel':
      return SiLaravel;
    case 'sql':
      return FiDatabase;
    case 'shadcn ui':
    case 'shadcn':
      return SiShadcnui;
    case 'vite':
      return SiVite;
    case 'framer motion':
    case 'framer-motion':
      return SiFramer;
    case 'particles.js':
    case 'particles':
    case 'tsparticles':
    case 'javascript':
      return SiJavascript;
    default:
      return FiCode;
  }
};
