import ChatBotImage from '../../../../assets/img/Project/ChatBot.webp';
import RestoPosImage from '../../../../assets/img/Project/RestoPos.webp';
import LivingSpaceImage from '../../../../assets/img/Project/LivingSpace.webp';
import AgentAIStackImage from '../../../../assets/img/Project/AgentAIStack.webp';
import PrimePropertyImage from '../../../../assets/img/Project/PrimeProperty.webp';
import SwiftCargoImage from '../../../../assets/img/Project/SwiftCargo.webp';
import HumanCodeImage from '../../../../assets/img/Project/HumanCode.webp';
import TodoListImage from '../../../../assets/img/Project/TodoList.webp';
import AttendanceImage from '../../../../assets/img/Project/Absensi.webp';
import WebStoreImage from '../../../../assets/img/Project/WebStore.webp';
import KasirImage from '../../../../assets/img/Project/Kasir.webp';
import Portfolio2Image from '../../../../assets/img/Project/Portofolio2_Showcase.webp';

export const projects = [
  {
    id: 'chatbot-ai',
    title: 'ChatBot AI',
    description: 'An intelligent multimodal AI assistant built with Node.js, Express, and Google Gemini API, designed for conversational help, persona customization, and multimedia analysis across documents, photos, audio, and video.',
    highlights: [
      'Document & PDF Summarization',
      'Photo & Image Analysis',
      'Multimodal File Uploads (Documents, Photos, Audio, Video)',
      'Chat History Management with Search & Markdown Export',
      'Multiple AI Persona Modes'
    ],
    tech: ['Node.js', 'Express', 'Google Gemini API', 'JavaScript', 'Tailwind CSS', 'HTML5'],
    image: ChatBotImage,
    demo: true,
    liveUrl: 'https://ai-chatbot-persona-assistant.vercel.app/',
    githubUrl: 'https://github.com/mtaufik26/ai-chatbot.git',
  },
  {
    id: 'resto-pos',
    title: 'RestoPOS',
    description: 'A modern restaurant Point-of-Sale (POS) and workspace management system designed to streamline cashier workflows, order fulfillment, table tracking, and operational cash flows.',
    highlights: [
      'Point-of-Sale Terminal with Multi-Payment Checkout',
      'Visual Floor Plan & Live Table Occupancy Tracking',
      'Order Lifecycle Management with Kitchen Ticket Escalation',
      'Shift Cash Drawer Tracking & Live Activity Stream',
      'Dynamic Sales Reports & Hourly Revenue Analytics'
    ],
    tech: ['React', 'TypeScript', 'Tailwind CSS', 'Zustand', 'Framer Motion', 'Radix UI'],
    image: RestoPosImage,
    demo: false,
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    id: 'living-space',
    title: 'Living Space',
    description: 'An architectural atelier and interior design platform designed to showcase luxury residential portfolios, spatial disciplines, and bespoke spatial craftsmanship.',
    highlights: [
      'Interactive Architectural Portfolio & Bento Grid',
      'Categorized Project Filtering with Detail Modals',
      'Spatial Capabilities & Discipline Showcases',
      'Fluid Scroll-Spy Navigation with Framer Motion'
    ],
    tech: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Radix UI'],
    image: LivingSpaceImage,
    demo: true,
    liveUrl: 'https://living-space-peach.vercel.app',
    githubUrl: 'https://github.com/mtaufik26/living-space',
  },
  {
    id: 'agentstack',
    title: 'AI Agents Platform',
    description: 'A modern SaaS landing page and platform for deploying specialized AI agents that collaborate across departments to automate business workflows.',
    highlights: [
      'Interactive Command Center Terminal',
      'Specialized Agent Marketplace Directory',
      'Multi-Agent Neural Collaboration Showcase',
      'Tiered Subscription Pricing Calculator',
      'Interactive FAQ & Social Proof Testimonials'
    ],
    tech: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Radix UI'],
    image: AgentAIStackImage,
    demo: true,
    liveUrl: 'https://agentstack.vercel.app/',
    githubUrl: 'https://github.com/mtaufik26/agentstack.git',
  },
  {
    id: 'prime-property',
    title: 'Prime Property',
    description: 'A luxury real estate platform designed to showcase architecturally significant homes, private villas, and premium penthouses with an interactive property discovery experience.',
    highlights: [
      'Curated Architectural Residences Catalog',
      'Interactive Property Detail Modal & Specifications',
      'Multi-Category Filtering & Dynamic Search',
      'Favorites Bookmarking & Advisory Inquiry Workflow',
    ],
    tech: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Radix UI'],
    image: PrimePropertyImage,
    demo: true,
    liveUrl: 'https://mtaufik26.github.io/prime-property/',
    githubUrl: 'https://github.com/mtaufik26/prime-property',
  },
  {
    id: 'swiftcargo-express',
    title: 'SwiftCargo Express',
    description: 'A modern logistics and freight forwarding company profile website designed to showcase multimodal cargo solutions, transportation corridors, and enterprise supply chain services.',
    highlights: [
      'Interactive Freight Manifest & Live Tracking Preview',
      'Multimodal Cargo & Logistics Services Showcase',
      'Economic Corridor & Route Network Information',
      'Interactive Freight Quote & Contact Inquiry Form',
    ],
    tech: ['Next.js', 'React', 'Tailwind CSS', 'Framer Motion', 'Lucide React'],
    image: SwiftCargoImage,
    demo: true,
    liveUrl: 'https://swiftcargo-express.vercel.app',
    githubUrl: 'https://github.com/mtaufik26/swiftcargo-express',
  },
  {
    id: 'human-code',
    title: 'Human Code - Web Studio',
    description: 'A web agency platform showcasing service packages, portfolio works, and clear workflows to help businesses find the right web development solutions.',
    highlights: [
      'Service & Pricing Catalog',
      'Project Workflow & Benefit Details',
      'Curated Portfolio Showcase',
      'Direct WhatsApp Consultation',
      'Fully Responsive Layout'
    ],
    tech: ['React', 'Tailwind CSS', 'Framer Motion', 'Vite', 'React Router'],
    image: HumanCodeImage,
    demo: false,
    liveUrl: '#',
    githubUrl: 'https://github.com/mtaufik26/Jasa-Website',
  },
    {
    id: 'webstore',
    title: 'WebStore — Top-Up & PPOB Service',
    description: 'A digital top-up platform for various needs, ranging from popular games (Mobile Legends, Free Fire, Valorant) and mobile credit/data packages (Telkomsel, Indosat) to digital wallet balances (DANA, GoPay). It features a wide range of payment methods, a promotional voucher system, and real-time order tracking.',
    highlights: [
    'Multi-Category Catalog: Games, Mobile Credit/Data, & Digital Wallet Balances',
    'Payment Methods via QRIS, Virtual Accounts, & Retail Outlets',
    'Dynamic Promotional Voucher System & Instant Discount Calculation',
    'Real-Time Order Tracking & Printable Transaction Receipts'
    ],
    tech: ['React', 'Tailwind CSS', 'Vite', 'Lucide React'],
    image: WebStoreImage,
    demo: false,
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    id: 'todo-list',
    title: 'Todo List',
    description: 'A task management website designed to help employees organize daily activities and work agendas.',
    highlights: ['Task Lifecycle & State Management', 'Interactive Status Filtering', 'Responsive Productivity UI'],
    tech: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Shadcn UI'],
    image: TodoListImage,
    demo: true,
    liveUrl: 'https://todo-app-kz.vercel.app/',
    githubUrl: 'https://github.com/mtaufik26/TodoApp.git',
  },
  {
    id: 'attendance-admin',
    title: 'Attendance Admin',
    description: 'An attendance management website designed to monitor employee presence and attendance records.',
    highlights: ['Employee Presence Tracking', 'Data Grid & Reporting Views', 'Strict TypeScript Contracts'],
    tech: ['React', 'TypeScript', 'Tailwind CSS', 'Shadcn UI'],
    image: AttendanceImage,
    demo: false,
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    id: 'admin-kasir',
    title: 'Cashier Admin',
    description: 'A management website designed to monitor store or minimarket income, expenses, and transactions.',
    highlights: ['Transaction Ledger Views', 'Stock & Sales Tracking', 'Structured Reporting Tables'],
    tech: ['Laravel', 'Bootstrap', 'SQL'],
    image: KasirImage,
    demo: false,
    liveUrl: '#',
    githubUrl: 'https://github.com/mtaufik26/UKK-Taufik.git',
  },
];















  // {
  //   id: ,
  //   title: ,
  //   description: ,
  //   highlights:,
  //   tech: ,
  //   image: ,
  //   demo: (true, false),
  //   liveUrl: ,
  //   githubUrl: ,
  // }


export const INITIAL_DISPLAY_COUNT = 4;
