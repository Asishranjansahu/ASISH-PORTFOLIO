# 📦 REPOSITORY 2: `ASISH-PORTFOLIO`
📄 **File:** `README.md` *(Paste this inside your Portfolio repo)*

```markdown
<div align="center">

# 👨‍💻 Asish Ranjan Sahu — Developer Portfolio

### High-Performance, Interactive Personal Portfolio & Software Engineering Showcase

[![React](https://img.shields.io/badge/React-v18.2.0-61DAFB?style=flat-square&logo=react&logoColor=black)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-v4.4.5-646CFF?style=flat-square&logo=vite&logoColor=white)](https://vitejs.dev/)
[![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-v3.3.3-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-v10.x-black?style=flat-square&logo=framer&logoColor=white)](https://www.framer.com/motion/)
[![Vercel](https://img.shields.io/badge/Deployed_on-Vercel-000000?style=flat-square&logo=vercel&logoColor=white)](https://vercel.com/)
[![License](https://img.shields.io/badge/License-MIT-blue?style=flat-square)](LICENSE)
[![PRs Welcome](https://img.shields.io/badge/PRs-Welcome-brightgreen?style=flat-square)](https://github.com/Asishranjansahu/ASISH-PORTFOLIO/pulls)

<p align="center">
  <a href="#-core-features">Features</a> •
  <a href="#-architecture--component-flow">Architecture</a> •
  <a href="#-tech-stack">Tech Stack</a> •
  <a href="#-getting-started">Quick Start</a> •
  <a href="#-configuration">Configuration</a>
</p>

</div>

---

## 📌 Overview

This repository contains the source code for the personal developer portfolio of **Asish Ranjan Sahu**. Engineered with a focus on **60fps micro-interactions**, **accessibility (a11y)**, and **sub-second page loads**, this portfolio showcases full-stack software engineering projects, system design proficiencies, interactive skill matrices, and dynamic contact ingestion workflows.

---

## 🏗️ Architecture & Component Flow

```mermaid
flowchart TB
    subgraph PresentationLayer ["UI & Interaction Layer (React 18 + Vite)"]
        Hero["Hero & Dynamic Bio Section"]
        Projects["Featured Project Showcase & Filter Engine"]
        Skills["Interactive Tech Stack Matrix"]
        Experience["Interactive Career & Education Timeline"]
        ContactForm["Contact Form (Controlled Inputs + Validation)"]
    end

    subgraph EngineLayer ["Core Animation & State Systems"]
        MotionEngine["Framer Motion (Viewport Triggers & Parallax)"]
        ThemeEngine["Theme Provider (Dark / Light Mode Context)"]
        IconEngine["Lucide React Icon Library"]
    end

    subgraph ServiceLayer ["External APIs & Delivery"]
        EmailService["Contact API (EmailJS / Resend Gateway)"]
        CDN["Vercel Edge Network (Global CDN Assets)"]
    end

    PresentationLayer --> MotionEngine
    PresentationLayer --> ThemeEngine
    ContactForm --> EmailService
    PresentationLayer -.-> CDN
✨ Core Features
Fluid 60 FPS Micro-Interactions: Smooth scroll physics, staggered entrance animations, and magnetic UI components powered by Framer Motion.
Dynamic Project Showcase: Filterable repository cards with live preview hyperlinks, GitHub repo links, architecture highlights, and tech badges.
Interactive Tech Stack Matrix: Visual breakdown of front-end, back-end, database, and DevOps competencies.
Serverless Contact Delivery: Real-time form validation with client-side anti-spam and direct email dispatching.
Lighthouse 100/100 Focused: Zero render-blocking scripts, responsive WebP image pipelines, and optimized critical CSS.
Universal Responsiveness: Mobile-first responsive design matching desktop, tablet, and mobile viewport standards.
🛠️ Tech Stack
code
Text
├── Framework & Build
│   ├── Core Library:         React 18 (Hooks, Suspense)
│   ├── Build Tool:           Vite (Lightning Fast HMR & ESBuild)
│   └── Routing:              React Router DOM / Single-Page Smooth Scroll
│
├── Styling & Animation
│   ├── CSS Framework:        Tailwind CSS (JIT Engine)
│   ├── Animation Library:    Framer Motion
│   ├── Iconography:          Lucide React
│   └── Typography:           Inter / JetBrains Mono
│
└── Infrastructure & Deployment
    ├── Hosting:              Vercel Edge Network
    ├── Form Handling:        EmailJS / Web3Forms
    └── Version Control:      Git / GitHub Actions
📂 Repository Structure
code
Text
ASISH-PORTFOLIO/
├── src/
│   ├── assets/              # Compressed static media, SVGs, and resume PDF
│   ├── components/          # Modular UI components
│   │   ├── Navbar.jsx       # Sticky glassmorphism header with active link spy
│   │   ├── Hero.jsx         # Intro banner with dynamic typing effect
│   │   ├── About.jsx        # Engineering background & philosophy
│   │   ├── Skills.jsx       # Categorized skill pills and proficiency badges
│   │   ├── Projects.jsx     # Featured production and open-source projects
│   │   ├── Experience.jsx   # Professional journey timeline
│   │   ├── Contact.jsx      # Functional contact form with status toasts
│   │   └── Footer.jsx       # Social links and copyright metadata
│   ├── data/                # Decoupled project and timeline data sources
│   │   ├── projects.json    # Project manifests (titles, links, tags)
│   │   └── skills.json      # Categorized skill taxonomy
│   ├── App.jsx              # Main view aggregator & layout wrapper
│   ├── main.jsx             # DOM hydration root
│   └── index.css            # Tailwind directives and custom animation keyframes
├── public/                  # Public assets, favicon, and robots.txt
├── vite.config.js           # Vite build and alias configuration
├── tailwind.config.js       # Design system tokens, colors, and shadows
└── package.json             # Project dependencies and script declarations
🚦 Getting Started
Prerequisites
Node.js: v18.x or v20.x LTS
npm: v9.x+ (or yarn / pnpm)
1. Clone the Repository
code
Bash
git clone git@github.com:Asishranjansahu/ASISH-PORTFOLIO.git
cd ASISH-PORTFOLIO
2. Install Dependencies
code
Bash
npm install
3. Configure Environment Variables
Create a .env file in the project root:
code
Bash
cp .env.example .env
Populate your credentials:
code
Env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
4. Run Locally
code
Bash
npm run dev
Open http://localhost:5173 in your browser.
⚙️ Available Scripts
Command	Action
npm run dev	Starts Vite local development server with Hot Module Replacement (HMR).
npm run build	Compiles optimized static assets into the dist/ directory.
npm run preview	Spawns a local web server to preview production build artifacts.
npm run lint	Runs ESLint to verify code cleanliness and consistency.
🚀 Production Build & Deployment
Compile Static Assets
code
Bash
npm run build
Deploy to Vercel
code
Bash
npm install -g vercel
vercel
📄 License
This repository is licensed under the MIT License. See the LICENSE file for more information.
👨‍💻 Author & Connect
Asish Ranjan Sahu
Full Stack Software Engineer
GitHub: @Asishranjansahu
LinkedIn: Asish Ranjan Sahu
Repository: ASISH-PORTFOLIO
code
Code
---

### 🚀 Commands to Save & Push to GitHub

Once you paste the files, run these commands inside each project folder to push:

```bash
# Push Smart Campus README
git add README.md
git commit -m "docs: update professional enterprise README"
git push origin main

# Push Portfolio README
git add README.md
git commit -m "docs: update engineering portfolio README"
git push origin main
