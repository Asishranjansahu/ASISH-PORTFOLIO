# 👨‍💻 Asish Ranjan Sahu — Engineering Portfolio

> **High-Performance Personal Portfolio & Software Engineering Showcase**

[![React](https://img.shields.io/badge/React-18.2.0-61DAFB?style=flat-square&logo=react&logoColor=black)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-4.4.5-646CFF?style=flat-square&logo=vite&logoColor=white)](https://vitejs.dev/)
[![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-3.3.3-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-10.x-0055FF?style=flat-square&logo=framer&logoColor=white)](https://www.framer.com/motion/)
[![Vercel](https://img.shields.io/badge/Deployed_on-Vercel-000000?style=flat-square&logo=vercel&logoColor=white)](https://vercel.com/)
[![License](https://img.shields.io/badge/License-MIT-blue?style=flat-square)](LICENSE)

---

## 📌 Executive Summary

This repository contains the source code for the personal developer portfolio of **Asish Ranjan Sahu**. Built as a reactive single-page application (SPA), the system is engineered around three core tenets:

- **Deterministic 60 FPS UX:** Hardware-accelerated transitions and physics-based gesture tracking powered by **Framer Motion**.
- **Sub-Second Page Loads:** Zero layout shifts, tree-shaken asset bundles, and static asset distribution via the **Vercel Edge Network**.
- **Engineered Modularity:** Decoupled data contracts, atomic component hierarchy, and strict separation between layout, animation, and ingestion layers.

---

## 🚀 Core Features

- **Fluid Micro-Interactions:** Smooth scroll physics, staggered entrance animations, and magnetic UI components.
- **Dynamic Project Showcase:** Filterable repository cards with live preview hyperlinks, repository links, and tech badges.
- **Interactive Tech Stack Matrix:** Visual breakdown of front-end, back-end, database, and DevOps proficiencies.
- **Serverless Contact Ingestion:** Real-time form validation with client-side anti-spam and direct email dispatching.
- **Lighthouse 100/100 Focused:** Zero render-blocking scripts, responsive WebP image pipelines, and optimized critical CSS.
- **Universal Responsiveness:** Mobile-first responsive design matching desktop, tablet, and mobile standards.

---

## 🛠️ Technology Stack

| Domain | Technology / Library | Purpose |
| :--- | :--- | :--- |
| **Core Framework** | React 18.2.0 | Declarative UI, hooks, and component lifecycle |
| **Bundling & Build** | Vite 4.4.5 (ESBuild) | Fast Hot Module Replacement (HMR) & Rollup bundling |
| **Styling** | Tailwind CSS 3.3.3 | Utility-first JIT CSS compilation & design tokens |
| **Animations** | Framer Motion 10.x | Spring physics, layout animations & scroll triggers |
| **Iconography** | Lucide React | Tree-shakable SVG icons |
| **Form Gateway** | EmailJS / REST API | Serverless contact form handling |
| **Hosting & CI/CD** | Vercel | Automatic deployments & global edge CDN distribution |

---

## 📂 Project Structure

```
ASISH-PORTFOLIO/
├── public/                # Static distribution assets & favicon
├── src/
│   ├── assets/            # Compressed graphics, SVGs, and resume PDF
│   ├── components/        # Modular UI components
│   │   ├── Navbar.jsx     # Header navigation with scroll spy
│   │   ├── Hero.jsx       # Hero banner with dynamic typing effect
│   │   ├── About.jsx      # Engineering background & philosophy
│   │   ├── Skills.jsx     # Technical skill matrices
│   │   ├── Projects.jsx   # Project cards & repository showcase
│   │   ├── Experience.jsx # Career & education timeline
│   │   ├── Contact.jsx    # Functional contact form with status alerts
│   │   └── Footer.jsx     # Social links & copyright metadata
│   ├── data/              # Decoupled static data files
│   │   ├── projects.json  # Project manifests and links
│   │   └── skills.json    # Skill taxonomy and icons
│   ├── App.jsx            # Main application layout
│   ├── main.jsx           # React DOM root hydration
│   └── index.css          # Tailwind CSS global styles
├── vite.config.js         # Vite bundler configuration
├── tailwind.config.js     # Tailwind CSS theme & tokens
└── package.json           # Dependencies and scripts
```

---

## 🚦 Quick Start & Local Development

### Prerequisites
- **Node.js**: `v18.x` or higher
- **npm**: `v9.x` or higher

### 1. Clone the Repository
```bash
git clone git@github.com:Asishranjansahu/ASISH-PORTFOLIO.git
cd ASISH-PORTFOLIO
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Setup Environment Variables
Create a `.env` file in the root folder:
```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

### 4. Run Locally
```bash
npm run dev
```
Open **`http://localhost:5173`** in your browser.

---

## ⚙️ Available Scripts

| Command | Description |
| :--- | :--- |
| `npm run dev` | Starts the Vite local development server with live reload. |
| `npm run build` | Compiles optimized production assets into the `dist/` directory. |
| `npm run preview` | Runs a local server to test the production build. |
| `npm run lint` | Checks code formatting and syntax consistency. |

---

## 🚀 Production Build & Deployment

### Build the Project
```bash
npm run build
```

### Deploy to Vercel
Deploy with zero configuration using the Vercel CLI:
```bash
npm install -g vercel
vercel
```

---

## 📄 License

This project is licensed under the **MIT License**. See the [LICENSE](LICENSE) file for details.

---

## 👨‍💻 Maintainer & Contact

**Asish Ranjan Sahu**  
*Full Stack Software Engineer*

- **GitHub:** [@Asishranjansahu](https://github.com/Asishranjansahu)
- **Repository:** [ASISH-PORTFOLIO](https://github.com/Asishranjansahu/ASISH-PORTFOLIO)
```
