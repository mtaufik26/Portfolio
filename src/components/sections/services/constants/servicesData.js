import { Globe, Code, Cpu, Smartphone } from 'lucide-react';

export const services = [
  {
    id: 'web-dev',
    icon: Globe,
    title: 'Web Development',
    desc: 'Building modern websites with responsive layouts, clean code, and a smooth user experience.',
    tags: ['React', 'Next.js', 'Tailwind'],
  },
  {
    id: 'frontend',
    icon: Code,
    title: 'Frontend Development',
    desc: 'Creating interactive interfaces with reusable components, responsive design, and attention to detail.',
    tags: ['JavaScript', 'React', 'Responsive'],
  },
  {
    id: 'backend',
    icon: Cpu,
    title: 'API Integration',
    desc: 'Connecting frontend applications with APIs, handling data efficiently, and improving overall functionality.',
    tags: ['REST API', 'JSON', 'Laravel'],
  },
  {
    id: 'responsive',
    icon: Smartphone,
    title: 'Responsive Design',
    desc: 'Ensuring websites work smoothly across desktop, tablet, and mobile devices with a mobile-first approach.',
    tags: ['Mobile-first', 'Cross-browser', 'Optimized'],
  },
];