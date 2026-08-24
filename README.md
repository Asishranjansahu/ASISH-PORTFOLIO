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
  <a href="#-live-preview">Live Preview</a> •
  <a href="#-core-features">Features</a> •
  <a href="#-system-architecture">Architecture</a> •
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
    ContactForm -->|Dispatches Payload| EmailService
    PresentationLayer -.->|Hydrated from| CDN
