<p align="center"><img src="public/projects/thread-sense.svg" alt="Thread Sense Logo" width="120"></p>
# ASISH RANJAN SAHU — Portfolio

A modern, animated portfolio built with React, Vite, Tailwind CSS, and a lightweight 3D starfield background. It features a skills section with brand logos, project cards with images, and contact links.

## Live

- Preview (local): http://localhost:4173/
- Dev: http://localhost:5173/
- Production (after deploy): https://asishranjansahu.com

## Features

- Hero with animated glitch text and 3D starfield background
- Categorized skills with brand logos and hover effects
- Core competencies and soft skills with icons
- Featured projects with cover images and hover overlay
- Contact links with GitHub, LinkedIn, and email

## Tech Stack

- React (UI)  
- Vite (bundler)  
- Tailwind CSS (styling)  
- lucide-react (icons)  
- @react-three/fiber + drei + maath (background)

## Getting Started

1. Install dependencies
   ```bash
   npm install
   ```
2. Start dev server
   ```bash
   npm run dev
   ```
3. Build production
   ```bash
   npm run build
   ```
4. Preview production
   ```bash
   npm run preview
   ```

## Project Structure

```bash
.
├── public/                 # Static assets (images, icons, resume)
├── src/
│   ├── components/         # Reusable UI components
│   │   ├── Background3D.jsx    # Interactive 3D starfield background
│   │   ├── CommandPalette.jsx  # Quick command access interface
│   │   ├── EngineeringProcess.jsx # Engineering approach visualization
│   │   ├── GithubStats.jsx     # GitHub activity integration
│   │   ├── GlitchText.jsx      # Animated glitch text effect
│   │   ├── HireMe.jsx          # Contact/Hire section
│   │   ├── Navbar.jsx          # Navigation bar
│   │   ├── ProfileCard.jsx     # User profile display
│   │   └── ...                 # Other UI components
│   ├── App.jsx             # Main application entry point
│   ├── main.jsx            # React root rendering
│   └── index.css           # Global styles and Tailwind directives
├── index.html              # HTML entry point
├── tailwind.config.js      # Tailwind CSS configuration
├── vite.config.js          # Vite configuration
└── package.json            # Project dependencies and scripts
```

## Deployment

### Vercel (recommended)
- Import repo: https://github.com/Asishranjansahu/ASISH-PORTFOLIO
- Build command: `npm run build`
- Output directory: `dist`
- Domains:
  - Primary: `asishranjansahu.com`
  - DNS: A @ → 76.76.21.21, CNAME www → cname.vercel-dns.com

### GitHub Pages (optional)
- Add to vite.config.js: `base: '/ASISH-PORTFOLIO/'`
- Install: `npm i -D gh-pages`
- Scripts:
  - `"predeploy": "npm run build"`
  - `"deploy": "gh-pages -d dist"`
- Deploy: `npm run deploy`
- Pages: gh-pages branch

## Customize Content

- Edit skills, logos, and percentages in `src/App.jsx`
- Update project images in `src/App.jsx` (use files in `public/` or URLs)
- Adjust theme colors in `src/index.css` and Tailwind config

## Author

- GitHub: https://github.com/Asishranjansahu
- LinkedIn: https://linkedin.com/in/asish-ranjan-sahu
