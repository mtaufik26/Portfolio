import { 
  SiHtml5, SiCss, SiJavascript, SiTypescript, SiReact, 
  SiNextdotjs, SiTailwindcss, SiBootstrap, SiPhp, SiLaravel, 
  SiMysql, SiPostgresql, SiGit, SiGithub
} from 'react-icons/si';
import { FiCode, FiLayout, FiCheckCircle, FiUsers } from 'react-icons/fi';

export const personalProfile = {
  education: {
    institution: 'SMK Wikrama Bogor',
    major: 'Software and Game Development',
    period: 'Class of 2025',
  },
  specialization: 'Front-End Web Development',
  focusAreas: 'React.js · Tailwind CSS · REST API Integration',
  location: 'Bogor, Indonesia',
};

export const strengths = [
  { 
    id: '01',
    title: 'Component Architecture', 
    desc: 'Building maintainable web interfaces with reusable React components, structured code, and clear naming conventions.',
    icon: FiCode,
  },
  { 
    id: '02',
    title: 'Responsive & Adaptive UI', 
    desc: 'Crafting mobile-first, fluid interfaces with Tailwind CSS and modern styling that scale seamlessly across all devices.',
    icon: FiLayout,
  },
  { 
    id: '03',
    title: 'REST API Integration', 
    desc: 'Bridging frontend and backend systems with structured REST APIs to enable smooth, secure, and optimized data exchange.',
    icon: FiCheckCircle,
  },
  { 
    id: '04',
    title: 'Teamwork & Adaptability', 
    desc: 'Working effectively in collaborative teams, quick to learn emerging technologies, and committed to user satisfaction.',
    icon: FiUsers,
  },
];

export const techStack = [
  // Frontend
  { name: 'React', category: 'Frontend', icon: SiReact },
  { name: 'TypeScript', category: 'Frontend', icon: SiTypescript },
  { name: 'Next.js', category: 'Frontend', icon: SiNextdotjs },
  { name: 'JavaScript', category: 'Frontend', icon: SiJavascript },
  { name: 'Tailwind', category: 'Frontend', icon: SiTailwindcss },
  { name: 'HTML5', category: 'Frontend', icon: SiHtml5 },
  { name: 'CSS3', category: 'Frontend', icon: SiCss },
  { name: 'Bootstrap', category: 'Frontend', icon: SiBootstrap },
  // Backend & Database
  { name: 'PHP', category: 'Backend', icon: SiPhp },
  { name: 'Laravel', category: 'Backend', icon: SiLaravel },
  { name: 'MySQL', category: 'Backend', icon: SiMysql },
  { name: 'PostgreSQL', category: 'Backend', icon: SiPostgresql },
  // Tools & Workflow
  { name: 'Git', category: 'Tools', icon: SiGit },
  { name: 'GitHub', category: 'Tools', icon: SiGithub }
];

export const techCategories = ['All', 'Frontend', 'Backend', 'Tools'];