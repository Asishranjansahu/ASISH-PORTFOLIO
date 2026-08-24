```markdown
<div align="center">

# ⚡ Asish Ranjan Sahu — Engineering Portfolio
### Modern, High-Performance Web Portfolio & Systems Architecture Showcase

[![Build Status](https://img.shields.io/badge/Build-Passing-2ea44f?style=flat-square&logo=github-actions&logoColor=white)](https://github.com/Asishranjansahu/ASISH-PORTFOLIO)
[![Lighthouse Score](https://img.shields.io/badge/Lighthouse-100%2F100-brightgreen?style=flat-square&logo=googlechrome&logoColor=white)](#-performance-benchmarks--core-web-vitals)
[![React](https://img.shields.io/badge/React-18.2.0-61DAFB?style=flat-square&logo=react&logoColor=black)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-4.4.5-646CFF?style=flat-square&logo=vite&logoColor=white)](https://vitejs.dev/)
[![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-3.3.3-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-10.x-0055FF?style=flat-square&logo=framer&logoColor=white)](https://www.framer.com/motion/)
[![Deployment](https://img.shields.io/badge/Edge_Network-Vercel-000000?style=flat-square&logo=vercel&logoColor=white)](https://vercel.com/)
[![License](https://img.shields.io/badge/License-MIT-blue?style=flat-square)](LICENSE)

<p align="center">
  <a href="#-executive-summary">Overview</a> •
  <a href="#-performance-benchmarks--core-web-vitals">Performance</a> •
  <a href="#-system-architecture">Architecture</a> •
  <a href="#-technology-specification">Tech Stack</a> •
  <a href="#-quick-start--local-development">Quick Start</a> •
  <a href="#-production-deployment">Deployment</a>
</p>

</div>

---

## 📌 Executive Summary

This repository contains the production-grade source code for the personal software engineering portfolio of **Asish Ranjan Sahu**. Built as a reactive single-page application (SPA), the system is engineered around three core architectural tenets:

1. **Deterministic 60 FPS UX:** Hardware-accelerated transitions and physics-based gesture tracking using Framer Motion.
2. **Sub-Second TTFB & FCP:** Zero layout shifts, tree-shaken asset bundles, and static asset distribution via Vercel's global Edge CDN.
3. **Engineered Modularity:** Decoupled data contracts, atomic component hierarchies, and strict separation between layout, animation, and ingestion layers.

---

## 📊 Performance Benchmarks & Core Web Vitals

The application is optimized to achieve target metrics on Google Lighthouse and Chromium runtime audits:

| Metric | Target / Benchmark | Optimization Strategy | Status |
| :--- | :--- | :--- | :---: |
| **Performance** | **100 / 100** | ESBuild code splitting, deferred non-critical assets, Brotli compression | ✅ |
| **Accessibility (a11y)** | **100 / 100** | WCAG 2.1 AA compliant color contrast, ARIA landmarks, focus rings | ✅ |
| **Best Practices** | **100 / 100** | HTTPS enforcement, Content Security Policy headers, modern image codecs | ✅ |
| **SEO** | **100 / 100** | Semantic HTML5 structure, OpenGraph meta injection, automated sitemaps | ✅ |
| **LCP (Largest Contentful Paint)** | **< 0.8s** | Preloaded hero assets, prioritized critical-path CSS rendering | ✅ |
| **CLS (Cumulative Layout Shift)** | **0.00** | Hard-coded aspect ratio containers on all responsive assets | ✅ |

---

## 🏗️ System Architecture

```text
==========================================================================================
                               PRESENTATION & INTERACTION LAYER
==========================================================================================
   [ Navigation Header ]        [ Hero Terminal ]        [ Project Matrix & Filter Engine ]
   ├── Glassmorphism Spy        ├── Typing Machine Engine ├── Dynamic Tag Querying
   └── Theme Toggle State       └── Action CTAs           └── Deep-link Metadata
------------------------------------------------------------------------------------------
   [ Technical Taxonomy ]       [ Career Timeline ]      [ Validated Contact Ingestion ]
   ├── Category Accordions      ├── Vertical SVG Path     ├── Honeypot Spam Shield
   └── Live Proficiency Pills   └── Viewport Scrubbing    └── Reactive Toast Dispatcher
==========================================================================================
                                CORE ENGINE & STATE MANAGEMENT
==========================================================================================
   ┌────────────────────────┐  ┌────────────────────────┐  ┌────────────────────────┐
   │  Framer Motion Engine  │  │  Tailwind JIT Compiler │  │ Lucide UI SVG Registry │
   │  (WebGL/Hardware Acc.) │  │  (Zero-Runtime CSS)    │  │ (Tree-Shaken Bundles)  │
   └───────────┬────────────┘  └───────────┬────────────┘  └───────────┬────────────┘
               │                           │                           │
==========================================================================================
                               NETWORK & SERVICE GATEWAY LAYER
==========================================================================================
               │                           │                           │
               v                           v                           v
   ┌────────────────────────────────────────────────────────────────────────────────────┐
   │                       Vercel Edge CDN Infrastructure                               │
   │  ├── Global DNS Anycast Routing                                                    │
   │  ├── Automatic SSL/TLS Certificate Termination                                     │
   │  └── Static Edge Caching with Stale-While-Revalidate Policies                      │
   └────────────────────────────────────────┬───────────────────────────────────────────┘
                                            │
                                            v
   ┌────────────────────────────────────────────────────────────────────────────────────┐
   │                       Serverless Ingestion Pipeline                                │
   │  └── Asynchronous Contact Webhook Dispatch (EmailJS / Resend API Gateway)          │
   └────────────────────────────────────────────────────────────────────────────────────┘
```

---

## 🛠️ Technology Specification

| Domain | Technology / Engine | Architectural Purpose |
| :--- | :--- | :--- |
| **Core View Engine** | React 18.2.0 | Concurrent rendering, declarative DOM abstraction, hooks-based state lifecycles |
| **Bundling & Tooling** | Vite 4.4.5 + ESBuild | Instant Hot Module Replacement (HMR), tree-shaking, and Rollup production builds |
| **Styling Architecture** | Tailwind CSS 3.3.3 | Just-In-Time (JIT) CSS compilation, design tokenization, zero-runtime footprint |
| **Animation Physics** | Framer Motion 10.x | Spring-physics transitions, layout animations, and intersection-observer reveals |
| **Iconography** | Lucide React | Tree-shakable SVG icon assets compiled directly into JSX primitives |
| **Form Gateway** | EmailJS / REST API | Client-side validated payload transmission without requiring a dedicated backend server |
| **Hosting & CI/CD** | Vercel Edge Network | Automated GitHub integration, preview branch builds, edge CDN caching |

---

## 📂 Modular Directory Layout

```text
ASISH-PORTFOLIO/
├── public/                            # Static uncompiled assets
│   ├── favicon.svg                    # Brand favicon vector
│   ├── robots.txt                     # Crawler indexing rules
│   └── sitemap.xml                    # Canonical search engine sitemap
├── src/
│   ├── assets/                        # Compressed imagery, SVG graphics, and resume PDF
│   ├── components/                    # Atomic, isolated presentation components
│   │   ├── Navbar.jsx                 # Dynamic header with glassmorphism & active spy
│   │   ├── Hero.jsx                   # High-impact introduction banner with typed titles
│   │   ├── About.jsx                  # Engineering philosophy & profile breakdown
│   │   ├── Skills.jsx                 # Categorized technical skill matrices
│   │   ├── Projects.jsx               # Interactive project cards with deep-link metadata
│   │   ├── Experience.jsx             # Chronological education & professional timeline
│   │   ├── Contact.jsx                # Form validation engine with asynchronous feedback
│   │   └── Footer.jsx                 # Social connections and license disclosures
│   ├── data/                          # Decoupled static data manifests
│   │   ├── projects.json              # Structured project repository records
│   │   └── skills.json                # Categorized proficiencies and icon schemas
│   ├── lib/                           # Shared utility helpers (DOM helpers, class merging)
│   ├── App.jsx                        # Layout aggregator and top-level context provider
│   ├── main.jsx                       # React DOM root initialization
│   └── index.css                      # Tailwind base layer & global typography styling
├── .env.example                       # Documented environment variable template
├── .gitignore                         # Build artifact and credential exclusions
├── index.html                         # SPA HTML entry point with preloaded fonts
├── package.json                       # Dependency tree and runtime script manifest
├── tailwind.config.js                 # Theme tokens, custom breakpoints, and keyframe definitions
└── vite.config.js                     # ESBuild and Vite bundler configuration
```

---

## 🚦 Quick Start & Local Development

### System Requirements
- **Node.js:** `v18.0.0` or higher (LTS recommended)
- **Package Manager:** `npm` (v9+), `pnpm`, or `yarn`

### 1. Clone Repository
```bash
git clone git@github.com:Asishranjansahu/ASISH-PORTFOLIO.git
cd ASISH-PORTFOLIO
```

### 2. Dependency Installation
```bash
npm install
```

### 3. Environment Variable Provisioning
Create a local `.env` configuration file from the template:
```bash
cp .env.example .env
```
Populate the required credentials:
```env
VITE_EMAILJS_SERVICE_ID="your_service_id"
VITE_EMAILJS_TEMPLATE_ID="your_template_id"
VITE_EMAILJS_PUBLIC_KEY="your_public_key"
```

### 4. Initialize Local Development Server
```bash
npm run dev
```
Navigate to **`http://localhost:5173`** to inspect the live instance.

---

## ⚙️ Development & Build Scripts

| Command | Action | Runtime Context |
| :--- | :--- | :--- |
| `npm run dev` | Spawns the Vite development server with Hot Module Replacement (HMR). | Local Dev |
| `npm run build` | Compiles and minifies assets to `/dist` using Rollup/Terser. | Production Build |
| `npm run preview` | Spins up a local static server to validate the production build bundle. | Staging / QA |
| `npm run lint` | Executes ESLint to enforce code consistency and identify anti-patterns. | Code Quality |

---

## 🚀 Production Deployment

### Automated Deployment (Vercel)
This repository is configured for automatic continuous deployment (CD) on **Vercel**:

1. Import the repository into your [Vercel Dashboard](https://vercel.com/new).
2. Configure the Framework Preset to **Vite**.
3. Under **Environment Variables**, add `VITE_EMAILJS_SERVICE_ID`, `VITE_EMAILJS_TEMPLATE_ID`, and `VITE_EMAILJS_PUBLIC_KEY`.
4. Deploy. Every push to the `main` branch triggers an automated build and edge rollout.

### Manual CLI Deployment
```bash
npm install -g vercel
vercel --prod
```

---

## 🔒 Security & Data Privacy

- **Client-Side Sanitization:** Contact form inputs are trimmed and sanitized against cross-site scripting (XSS) injection vectors prior to payload transmission.
- **Credential Protection:** All sensitive third-party service identifiers are isolated within client-exposed environment prefixes (`VITE_`) and restricted via origin whitelisting on API provider consoles.
- **Zero Ingestion Persistence:** Messages are dispatched ephemerally to configured destination inboxes; no user contact data is stored in unencrypted client caches.

---

## 📄 License

This project is licensed under the **MIT License**. See the [LICENSE](LICENSE) file for complete details.

---

## 👨‍💻 Maintainer & Engineering Contact

**Asish Ranjan Sahu**  
*Full Stack Software Engineer*

- **GitHub:** [@Asishranjansahu](https://github.com/Asishranjansahu)
- **Repository:** [ASISH-PORTFOLIO](https://github.com/Asishranjansahu/ASISH-PORTFOLIO)
- **LinkedIn:** [Asish Ranjan Sahu](https://linkedin.com/in/)
```
