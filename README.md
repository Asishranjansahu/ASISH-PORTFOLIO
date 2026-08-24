# 👨‍💻 Asish Ranjan Sahu — Software Engineer Portfolio

> **A premium, high-performance portfolio showcasing engineering skills, selected projects, and professional experience**

<p align="center">
  <a href="https://react.dev/">
    <img src="https://img.shields.io/badge/React-18.2.0-61DAFB?style=for-the-badge&logo=react&logoColor=black" alt="React" />
  </a>
  <a href="https://vitejs.dev/">
    <img src="https://img.shields.io/badge/Vite-4.4.5-646CFF?style=for-the-badge&logo=vite&logoColor=white" alt="Vite" />
  </a>
  <a href="https://tailwindcss.com/">
    <img src="https://img.shields.io/badge/Tailwind_CSS-3.3.3-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS" />
  </a>
  <a href="https://www.framer.com/motion/">
    <img src="https://img.shields.io/badge/Framer_Motion-10.x-0055FF?style=for-the-badge&logo=framer&logoColor=white" alt="Framer Motion" />
  </a>
  <a href="https://vercel.com/">
    <img src="https://img.shields.io/badge/Deployed_on-Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white" alt="Vercel" />
  </a>
  <a href="LICENSE">
    <img src="https://img.shields.io/badge/License-MIT-blue?style=for-the-badge" alt="MIT License" />
  </a>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Status-Active-success?style=flat-square" alt="Status" />
  <img src="https://img.shields.io/badge/Type-Portfolio-blueviolet?style=flat-square" alt="Type" />
  <img src="https://img.shields.io/badge/Focus-Frontend%20%26%20UI%2FUX-informational?style=flat-square" alt="Focus" />
  <img src="https://img.shields.io/badge/Responsive-Yes-brightgreen?style=flat-square" alt="Responsive" />
</p>

---

## 📊 Portfolio Metrics

<p align="center">
  <img src="https://img.shields.io/badge/Projects-Featured%20Work-111827?style=for-the-badge&logo=github&logoColor=white" alt="Projects" />
  <img src="https://img.shields.io/badge/Architecture-Component%20Based-111827?style=for-the-badge&logo=react&logoColor=61DAFB" alt="Architecture" />
  <img src="https://img.shields.io/badge/UI-Modern%20%2B%20Responsive-111827?style=for-the-badge&logo=tailwindcss&logoColor=38B2AC" alt="UI" />
  <img src="https://img.shields.io/badge/Performance-Optimized-111827?style=for-the-badge&logo=lighthouse&logoColor=white" alt="Performance" />
</p>

---

## 📌 Overview

This repository contains the source code for my personal developer portfolio, designed to present my professional profile, technical expertise, and selected software engineering projects in a polished and structured format.

The application is built with a strong focus on:

- **Professional Presentation:** Clear sections for background, skills, projects, and contact.
- **Performance:** Fast loading, optimized assets, and smooth transitions.
- **Maintainability:** Modular structure with reusable components and clean separation of concerns.
- **Responsiveness:** Mobile-first layout that adapts across all screen sizes.

---

## ✨ Highlights

- **Premium Hero Section:** Strong first impression with modern layout and motion.
- **About & Experience Sections:** Concise professional summary and engineering journey.
- **Skills Showcase:** Structured display of front-end, back-end, and tooling expertise.
- **Project Gallery:** Featured work with links, descriptions, and technology stack.
- **Contact Integration:** Easy way for recruiters, collaborators, and clients to connect.
- **Modern UI/UX:** Elegant design system with subtle animations and visual consistency.

---

## 🛠️ Technology Stack

| Domain | Technology / Library | Purpose |
| :--- | :--- | :--- |
| **Core Framework** | React 18.2.0 | Declarative UI and reusable components |
| **Bundling & Build** | Vite 4.4.5 | Fast dev server and optimized production builds |
| **Styling** | Tailwind CSS 3.3.3 | Utility-first responsive styling |
| **Animations** | Framer Motion 10.x | Smooth transitions and interactive motion |
| **Iconography** | Lucide React | Lightweight and scalable icons |
| **Contact Handling** | EmailJS / API Integration | Serverless contact form communication |
| **Deployment** | Vercel | Continuous deployment and hosting |

---

## 📁 Project Structure

```bash
ASISH-PORTFOLIO/
├── public/                # Static assets and favicon
├── src/
│   ├── assets/            # Images, resume, and media files
│   ├── components/        # Reusable UI components
│   │   ├── Navbar.jsx     # Navigation bar
│   │   ├── Hero.jsx       # Landing section
│   │   ├── About.jsx      # Professional summary
│   │   ├── Skills.jsx     # Technical skills section
│   │   ├── Projects.jsx   # Project showcase
│   │   ├── Experience.jsx # Career timeline
│   │   ├── Contact.jsx    # Contact form
│   │   └── Footer.jsx     # Footer and links
│   ├── data/              # Static JSON data
│   ├── App.jsx            # Main application layout
│   ├── main.jsx           # React entry point
│   └── index.css          # Global styles
├── vite.config.js         # Vite configuration
├── tailwind.config.js     # Tailwind theme setup
└── package.json           # Scripts and dependencies
```

---

## 🚀 Getting Started

### Prerequisites
- **Node.js**: `v18.x` or higher
- **npm**: `v9.x` or higher

### Clone the Repository
```bash
git clone git@github.com:Asishranjansahu/ASISH-PORTFOLIO.git
cd ASISH-PORTFOLIO
```

### Install Dependencies
```bash
npm install
```

### Configure Environment Variables
Create a `.env` file in the project root if your contact form uses EmailJS or an API:
```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

### Run Locally
```bash
npm run dev
```

Open **http://localhost:5173** in your browser.

---

## ⚙️ Available Scripts

| Command | Description |
| :--- | :--- |
| `npm run dev` | Start local development server |
| `npm run build` | Generate optimized production build |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run linting and code quality checks |

---

## 📈 Professional Focus

This portfolio is intended to demonstrate:

- Strong front-end engineering fundamentals
- Clean component-based architecture
- Attention to UI/UX detail
- Performance optimization practices
- Production-ready deployment workflows
- Maintainable, reusable code structure

---

## 🚀 Deployment

This portfolio is deployed using **Vercel** for fast global delivery and simple CI/CD workflows.

### Build for Production
```bash
npm run build
```

### Deploy
```bash
npm install -g vercel
vercel
```

---

## 📄 License

This project is licensed under the **MIT License**. See the [LICENSE](LICENSE) file for details.

---

## 👨‍💻 Maintainer

**Asish Ranjan Sahu**  
*Software Engineer*

- **GitHub:** [@Asishranjansahu](https://github.com/Asishranjansahu)
- **Repository:** [ASISH-PORTFOLIO](https://github.com/Asishranjansahu/ASISH-PORTFOLIO)
