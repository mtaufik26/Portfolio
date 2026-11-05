# Taufik Ediansyah — Frontend Developer Portfolio

> Building responsive, component-driven web interfaces. Clean code, accessible by design.

[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white&labelColor=20232a)](https://react.dev)
[![Vite](https://img.shields.io/badge/Vite-7-646CFF?logo=vite&logoColor=white&labelColor=1a1a2e)](https://vitejs.dev)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3-38BDF8?logo=tailwindcss&logoColor=white&labelColor=0f172a)](https://tailwindcss.com)
[![Deployed on Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-000?logo=vercel)](https://taufikediansyah.vercel.app)

**Live →** [taufikediansyah.vercel.app](https://taufikediansyah.vercel.app)

---

## Tentang

Portfolio pribadi Taufik Ediansyah — lulusan SMK Wikrama Bogor, jurusan Software & Game Development. Situs ini dirancang sebagai representasi terbaik kemampuan frontend engineering: dari arsitektur komponen hingga detail aksesibilitas dan tipografi.

Bukan sekadar halaman "tentang saya". Setiap section dibangun dengan token desain yang konsisten, animasi yang bermakna, dan perhatian penuh pada pengalaman pengguna.

---

## Sections

| Section | Isi |
|---------|-----|
| **Hero** | Intro, tech stack strip, CTA ke CV dan kontak |
| **About** | Story, profile card, engineering strengths matrix, tech stack matrix dengan filter tab |
| **Services** | 4 spesialisasi: Web Apps, Responsive UI, API Integration, Performance |
| **Projects** | 8 proyek dengan preview, tech tag, modal detail, dan tampilan arsip tabel |
| **Certificates** | Carousel horizontal dengan keyboard navigation dan modal preview |
| **Contact** | Form kontak via EmailJS, link sosial |

---

## Tech Stack

**Core**
- [React 19](https://react.dev) + [Vite 7](https://vitejs.dev)
- [Tailwind CSS 3](https://tailwindcss.com)
- [Framer Motion](https://www.framer-motion.com) — animasi dan transisi
- [Lucide React](https://lucide.dev) + [React Icons](https://react-icons.github.io/react-icons/) — ikon

**Utilitas**
- [react-intersection-observer](https://github.com/thebuilder/react-intersection-observer) — trigger animasi saat scroll
- [react-particles](https://github.com/matteobruni/tsparticles) + [tsparticles](https://github.com/matteobruni/tsparticles) — background partikel
- [@emailjs/browser](https://www.emailjs.com) — kirim form tanpa backend

**Tooling**
- ESLint 9 dengan `eslint-plugin-react-hooks`
- PostCSS + Autoprefixer

---

## Struktur Folder

```
src/
├── assets/          # Gambar, CV, ikon SVG
├── components/
│   ├── layout/      # Navbar, Sidebar, Footer, LoadingScreen, ParticlesBackground
│   ├── sections/    # hero/, about/, services/, projects/, certificates/, contact/
│   └── ui/          # Komponen UI reusable (SectionBadge, ProjectCard, dll.)
├── hooks/           # useDarkMode
├── lib/             # Utility umum
└── utils/           # Helper motion/animasi
public/
├── favicon.png
├── og-image.jpg
├── robots.txt
├── sitemap.xml
└── manifest.json
```

---

## Menjalankan Lokal

```bash
# 1. Clone
git clone https://github.com/mtaufik26/Portfolio.git
cd Portfolio

# 2. Install dependensi
npm install

# 3. Buat file environment
cp .env.example .env
# Isi nilai EmailJS di .env (lihat bagian Environment Variables)

# 4. Jalankan dev server
npm run dev

# 5. Build produksi
npm run build

# 6. Preview build
npm run preview
```

---

## Environment Variables

Salin `.env.example` ke `.env` dan isi:

```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

Daftar akun gratis di [emailjs.com](https://www.emailjs.com) untuk mendapatkan kredensial tersebut.

---

## Deploy ke Vercel

1. Push repo ke GitHub
2. Import di [vercel.com/new](https://vercel.com/new)
3. Tambahkan environment variables di dashboard Vercel (sama seperti `.env`)
4. Deploy — Vercel otomatis mendeteksi Vite

`vercel.json` sudah dikonfigurasi dengan SPA rewrite, cache headers untuk aset statis, dan security headers.

---

## Lisensi

Kode sumber tersedia untuk referensi dan pembelajaran. Jangan deploy ulang situs ini sebagai milik Anda sendiri.

---

*Crafted with React · Tailwind CSS · Framer Motion — Bogor, Indonesia*
