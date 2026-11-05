import AIAgentCert from '../../../../assets/img/Sertifikat/Sertifikat-AI-Agent-Programming-Hacktiv8.webp';
import VueJSCert from '../../../../assets/img/Sertifikat/Sertifikat-Frontend-VueJS-WanTeknologi.webp';
import CyberLabsCert from '../../../../assets/img/Sertifikat/Sertifikat-Backend-Javascript-CyberLabs.webp';
import UIUXDaffascriptCert from '../../../../assets/img/Sertifikat/Sertifikat-Seminar-UIUX-Daffascript.webp';
import LifetechMagangCert from '../../../../assets/img/Sertifikat/Sertifikat-Magang-Lifetech.webp';

// Export foto .webp sertifikat
export {
  AIAgentCert,
  VueJSCert,
  CyberLabsCert,
  UIUXDaffascriptCert,
  LifetechMagangCert,
};

export const certificates = [
  {
    id: 'ai-agent-programming',
    title: 'IT - AI Agent for Programming',
    issuer: 'IBM SkillsBuild & Hacktiv8',
    date: '27 October 2026',
    credential: '16097/H8/CSR/ISUE/V/2026',
    image: AIAgentCert,
  },
  {
    id: 'frontend-vuejs',
    title: 'Front-end Development with Vue.js',
    issuer: 'WAN Teknologi & Vue.js',
    date: 'November 2023',
    credential: 'WT-VUEJS-2023',
    image: VueJSCert,
  },
  {
    id: 'backend-javascript-cyberlabs',
    title: 'Backend Development with JavaScript Framework',
    issuer: 'CyberLabs (PT Laskar Teknologi Mulia)',
    date: '10 November 2023',
    credential: '2154/S-CYBERLABS/XI/2023',
    image: CyberLabsCert,
  },
  {
    id: 'uiux-zero-to-hero',
    title: 'Berkarir di UI UX from Zero to Hero',
    issuer: 'Daffascript Agency',
    date: '4 Februari 2025',
    credential: 'DAFFASCRIPT-UIUX-2025',
    image: UIUXDaffascriptCert,
  },
  {
    id: 'magang-lifetech',
    title: 'Program Magang 6 Bulan (Sangat Baik)',
    issuer: 'PT Lifetech Tanpa Batas',
    date: '10 Januari 2025',
    credential: 'LIFETECH-MAGANG-2025',
    image: LifetechMagangCert,
  },
];

export const CARD_WIDTH = 340;
export const SCROLL_THRESHOLD = 20;