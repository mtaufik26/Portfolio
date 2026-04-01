import Portfolio2Image from '../../../../assets/img/Project/Portofolio2.png';
import CWPImage from '../../../../assets/img/Project/CWP.png';
import AttendanceImage from '../../../../assets/img/Project/Absensi.png';
import WebStoreImage from '../../../../assets/img/Project/WebStore.png';
import TodoListImage from '../../../../assets/img/Project/TodoList.png';
import KasirImage from '../../../../assets/img/Project/Kasir.png';
import Portfolio1Image from '../../../../assets/img/Project/Portofolio1.png';
import ApotekImage from '../../../../assets/img/Project/Apotek.png';

export const projects = [
  {
    id: 'personal-portfolio',
    title: 'Personal Portfolio',
    description: 'My latest personal portfolio website created to showcase my skills, projects, and experience with a more modern design and improved user experience.',
    tech: ['React', 'Tailwind CSS', 'Particles.js'],
    image: Portfolio2Image,
    demo: false,
    liveUrl: '#',
    githubUrl: 'https://github.com/mtaufik26/Portfolio.git',
  },
  {
    id: 'canvas-web-partner',
    title: 'Canvas Web Partner',
    description: 'A landing page website created for clients who need website development services or project assistance.',
    tech: ['React', 'Tailwind CSS', 'Shadcn UI'],
    image: CWPImage,
    demo: false,
    liveUrl: '#',
    githubUrl: 'https://github.com/mtaufik26/Jasa-Website.git',
  },
  {
    id: 'attendance-admin',
    title: 'Attendance Admin',
    description: 'An attendance management website designed to monitor employee presence and attendance records.',
    tech: ['React', 'TypeScript', 'Tailwind CSS', 'Shadcn UI'],
    image: AttendanceImage,
    demo: false,
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    id: 'webstore',
    title: 'WebStore',
    description: 'A digital service website created to help users top up games, e-wallets, and other online services.',
    tech: ['React', 'Tailwind CSS'],
    image: WebStoreImage,
    demo: false,
    liveUrl: '#',
    githubUrl: 'https://github.com/mtaufik26/WebStore.git',
  },
  {
    id: 'todo-list',
    title: 'Todo List',
    description: 'A task management website designed to help employees organize daily activities and work agendas.',
    tech: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Shadcn UI'],
    image: TodoListImage,
    demo: true,
    liveUrl: 'https://todo-app-kz.vercel.app/',
    githubUrl: 'https://github.com/mtaufik26/TodoApp.git',
  },
  {
    id: 'admin-kasir',
    title: 'Cashier Admin',
    description: 'A management website designed to monitor store or minimarket income, expenses, and transactions.',
    tech: ['Laravel', 'Bootstrap', 'SQL'],
    image: KasirImage,
    demo: false,
    liveUrl: '#',
    githubUrl: 'https://github.com/mtaufik26/UKK-Taufik.git',
  },
  {
    id: 'old-portfolio',
    title: 'Portfolio Website',
    description: 'A personal portfolio website created to showcase my skills, projects, and experience.',
    tech: ['React', 'Tailwind CSS', 'Particles.js'],
    image: Portfolio1Image,
    demo: false,
    liveUrl: '#',
    githubUrl: 'https://github.com/mtaufik26/portofolio.git',
  },
  {
    id: 'apotek-app',
    title: 'Apotek App',
    description: 'A pharmacy website designed to make medical services more accessible and convenient.',
    tech: ['React', 'Tailwind CSS', 'Laravel', 'SQL'],
    image: ApotekImage,
    demo: false,
    liveUrl: '#',
    githubUrl: 'https://github.com/mtaufik26/Apotek-APP',
  },
];

export const INITIAL_DISPLAY_COUNT = 4;