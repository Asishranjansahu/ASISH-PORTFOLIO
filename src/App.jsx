import React, { useEffect, useState, useRef } from 'react';
import { Github, Linkedin, Mail, ExternalLink, Code2, Cpu, GraduationCap, Briefcase, Award, Cloud, Database, Cog, CircuitBoard, Image, Server, Globe, GitPullRequest, Shapes, HardDrive, Boxes, Workflow, Lightbulb, Users, RefreshCw, MessageCircle, MapPin, Send, User, FileText, FolderGit2, Terminal, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import GlitchText from './components/GlitchText';
import TypewriterText from './components/TypewriterText';
import Navbar from './components/Navbar';
import TerminalComponent from './components/Terminal';
import CommandPalette from './components/CommandPalette';
import EngineeringProcess from './components/EngineeringProcess';
import ProfileCard from './components/ProfileCard';
import SecretDevHQ from './components/SecretDevHQ';

import GithubStats from './components/GithubStats';
import HireMe from './components/HireMe';
import Background3D from './components/Background3D';
import WhoAmI from './components/WhoAmI';

const FEATURED_PROJECTS = [
  {
    title: "Thread Sense",
    tech: "NLP • React • Firebase",
    desc: "AI discussion analysis platform (NLP + Semantic Search) that intelligently clusters and summarizes community conversations.",
    color: "emerald",
    image: "/projects/thread-sense.svg",
    live: "https://thread-sense.vercel.app",
    github: "https://github.com/Asishranjansahu/thread-sense",
    badge: "AI Project"
  },
  {
    title: "Smart Campus",
    tech: "IoT • Flutter • Firebase",
    desc: "IoT-driven campus automation (Flutter + Firebase) that eliminates manual tracking via real-time sensor networks.",
    color: "cyan",
    image: "https://placehold.co/1200x800/0f172a/ffffff?text=Smart+Campus",
    live: "https://smart-campus-automation-system.vercel.app/",
    github: "https://github.com/Asishranjansahu/smart-campus",
    badge: "Production Ready"
  },
  {
    title: "Stock Trading Platform",
    tech: "React • Chart.js",
    desc: "Real-time trading dashboard simulating order execution and live stock visualization using React and Chart.js.",
    color: "indigo",
    image: "https://images.unsplash.com/photo-1611974765270-ca1258634369?q=80&w=2064&auto=format&fit=crop",
    live: "https://zerodha-clone-demo.vercel.app",
    github: "https://github.com/Asishranjansahu/zerodha-clone",
    badge: "Featured"
  }
];

const OTHER_PROJECTS = [
  {
    title: "Dev Connect",
    tech: "MERN • Socket.IO",
    desc: "Real-time collaboration suite (MERN + Socket.io) enabling instant messaging and shared workspaces for developers.",
    color: "purple",
    image: "https://placehold.co/1200x800/0f172a/ffffff?text=Dev+Connect",
    live: "https://dev-connect-live.onrender.com",
    github: "https://github.com/Asishranjansahu/dev-connect"
  },
  {
    title: "Mindscape",
    tech: "React • Node.js • MongoDB",
    desc: "Smart study planner (React + Node.js) that optimizes learning schedules to boost academic productivity. (Live Demo Available)",
    color: "emerald",
    image: "https://placehold.co/1200x800/0f172a/ffffff?text=Mindscape",
    live: "https://daily-study-planner-wine.vercel.app/",
    github: "https://github.com/Asishranjansahu/Daily-Study-Planner.git"
  },
  {
    title: "Task Master",
    tech: "JS • LocalStorage",
    desc: "Offline-first task manager (JS + LocalStorage) delivering zero-latency performance and persistent data reliability.",
    color: "pink",
    image: "https://placehold.co/1200x800/0f172a/ffffff?text=Task+Master",
    live: "https://asishranjansahu.github.io/task-master",
    github: "https://github.com/Asishranjansahu/task-master"
  },
  {
    title: "Portfolio",
    tech: "React • Vite • Tailwind",
    desc: "High-performance personal brand platform (React + Three.js) featuring immersive 3D visuals and 99+ Lighthouse performance scores.",
    color: "sky",
    image: "https://images.unsplash.com/photo-1545665277-5937489579f2?q=80&w=2070&auto=format&fit=crop",
    live: "https://asishranjansahu.vercel.app",
    github: "https://github.com/Asishranjansahu/ASISH-PORTFOLIO"
  }
];

const PROJECTS = [...FEATURED_PROJECTS, ...OTHER_PROJECTS];

function App() {
  const scrollRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let animationFrameId;
    
    const scroll = () => {
      if (!isPaused && scrollContainer) {
        scrollContainer.scrollLeft += 0.5;
        // Check if we've scrolled past the first half
        if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 2) {
          scrollContainer.scrollLeft = 0;
        }
      }
      animationFrameId = requestAnimationFrame(scroll);
    };

    animationFrameId = requestAnimationFrame(scroll);

    return () => cancelAnimationFrame(animationFrameId);
  }, [isPaused]);
  const [matrixMode, setMatrixMode] = useState(false);
  const [konamiIndex, setKonamiIndex] = useState(0);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isSecretOpen, setIsSecretOpen] = useState(false);

  const konamiCode = [
    'ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown',
    'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight',
    'b', 'a'
  ];

  useEffect(() => {
    const handleKeyDown = (e) => {
      // Normalize key to lowercase for robustness (e.g. 'b' vs 'B')
      const key = e.key.toLowerCase();
      // Map Arrow keys to match our array if needed, but standardizing on standard key names
      // 'arrowup', 'arrowdown', 'arrowleft', 'arrowright', 'b', 'a'
      
      const targetKey = konamiCode[konamiIndex].toLowerCase();
      
      if (key === targetKey) {
        const nextIndex = konamiIndex + 1;
        setKonamiIndex(nextIndex);
        if (nextIndex === konamiCode.length) {
          setIsSecretOpen(true);
          setKonamiIndex(0);
          console.log("Konami Code Activated! Secret unlocked.");
        }
      } else {
        // Only reset if it's NOT a modifier key (Shift/Ctrl/Alt) which might be pressed accidentally
        if (!['shift', 'control', 'alt', 'meta'].includes(key)) {
             setKonamiIndex(0);
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [konamiIndex]);

  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };


  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const [show3D, setShow3D] = useState(false);

  // Keyboard Shortcuts & Power User Features
  const [isCommandPaletteOpen, setIsCommandPaletteOpen] = useState(false);
  const [isTerminalOpen, setIsTerminalOpen] = useState(false);
  const [lastKey, setLastKey] = useState(null);

  useEffect(() => {
    const handleKeyDown = (e) => {
      // Don't trigger if user is typing in an input
      const isInput = ['INPUT', 'TEXTAREA'].includes(document.activeElement.tagName);
      if (isInput) return;

      // Toggle Command Palette with '/'
      if (e.key === '/' && !isTerminalOpen) {
        e.preventDefault();
        setIsCommandPaletteOpen(prev => !prev);
        return;
      }

      // Toggle Terminal with 't' or 'T'
      if (e.key.toLowerCase() === 't' && !isCommandPaletteOpen) {
        e.preventDefault();
        setIsTerminalOpen(prev => !prev);
        return;
      }

      // G Chord Logic
      if (e.key.toLowerCase() === 'g') {
        setLastKey('g');
        // Reset chord after 1 second
        setTimeout(() => setLastKey(null), 1000);
        return;
      }

      if (lastKey === 'g') {
        if (e.key.toLowerCase() === 'p') {
           const projects = document.getElementById('projects');
           if(projects) projects.scrollIntoView({ behavior: 'smooth' });
           setLastKey(null);
        } else if (e.key.toLowerCase() === 'c') {
           const contact = document.getElementById('contact');
           if(contact) contact.scrollIntoView({ behavior: 'smooth' });
           setLastKey(null);
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lastKey, isCommandPaletteOpen, isTerminalOpen]);

  const navigateTo = (sectionId) => {
    if (sectionId === 'terminal') {
      setIsTerminalOpen(true);
      return;
    }
    const section = document.getElementById(sectionId);
    if (section) section.scrollIntoView({ behavior: 'smooth' });
  };


  useEffect(() => {
    const prefersReducedMotion = typeof window !== "undefined" && window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!prefersReducedMotion) {
      const t = setTimeout(() => setShow3D(true), 600);
      return () => clearTimeout(t);
    }
  }, []);

  const getTechIcon = (tech) => {
    const mainTech = tech.split('•')[0].trim().toLowerCase();
    const icons = {
      react: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
      iot: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/arduino/arduino-original.svg',
      mern: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
      js: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
      flutter: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg',
      node: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
      firebase: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg'
    };
    return icons[mainTech] || 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg';
  };

  const getColorClass = (color, type) => {
    const colors = {
      cyan: {
        text: 'text-cyan-400',
        bg: 'bg-cyan-400',
        border: 'border-cyan-500/30',
        hoverBorder: 'hover:border-cyan-500/50',
        hoverShadow: 'hover:shadow-cyan-500/10',
        hoverText: 'group-hover:text-cyan-400',
        linkText: 'text-cyan-500 hover:text-cyan-400',
        linkBg: 'bg-cyan-500/10 group-hover/link:bg-cyan-500/20'
      },
      purple: {
        text: 'text-purple-400',
        bg: 'bg-purple-400',
        border: 'border-purple-500/30',
        hoverBorder: 'hover:border-purple-500/50',
        hoverShadow: 'hover:shadow-purple-500/10',
        hoverText: 'group-hover:text-purple-400',
        linkText: 'text-purple-500 hover:text-purple-400',
        linkBg: 'bg-purple-500/10 group-hover/link:bg-purple-500/20'
      },
      pink: {
        text: 'text-pink-400',
        bg: 'bg-pink-400',
        border: 'border-pink-500/30',
        hoverBorder: 'hover:border-pink-500/50',
        hoverShadow: 'hover:shadow-pink-500/10',
        hoverText: 'group-hover:text-pink-400',
        linkText: 'text-pink-500 hover:text-pink-400',
        linkBg: 'bg-pink-500/10 group-hover/link:bg-pink-500/20'
      },
      emerald: {
        text: 'text-emerald-400',
        bg: 'bg-emerald-400',
        border: 'border-emerald-500/30',
        hoverBorder: 'hover:border-emerald-500/50',
        hoverShadow: 'hover:shadow-emerald-500/10',
        hoverText: 'group-hover:text-emerald-400',
        linkText: 'text-emerald-500 hover:text-emerald-400',
        linkBg: 'bg-emerald-500/10 group-hover/link:bg-emerald-500/20'
      },
      sky: {
        text: 'text-sky-400',
        bg: 'bg-sky-400',
        border: 'border-sky-500/30',
        hoverBorder: 'hover:border-sky-500/50',
        hoverShadow: 'hover:shadow-sky-500/10',
        hoverText: 'group-hover:text-sky-400',
        linkText: 'text-sky-500 hover:text-sky-400',
        linkBg: 'bg-sky-500/10 group-hover/link:bg-sky-500/20'
      },
      indigo: {
        text: 'text-indigo-400',
        bg: 'bg-indigo-400',
        border: 'border-indigo-500/30',
        hoverBorder: 'hover:border-indigo-500/50',
        hoverShadow: 'hover:shadow-indigo-500/10',
        hoverText: 'group-hover:text-indigo-400',
        linkText: 'text-indigo-500 hover:text-indigo-400',
        linkBg: 'bg-indigo-500/10 group-hover/link:bg-indigo-500/20'
      }
    };
    return colors[color]?.[type] || colors.cyan[type];
  };

  return (
    <div className={`relative min-h-screen bg-black transition-colors duration-700 overflow-x-hidden ${
      matrixMode 
        ? 'font-mono text-green-500 selection:bg-green-500/30' 
        : 'text-slate-100 font-sans selection:bg-cyan-500/30'
    }`}>
      {matrixMode && (
        <div className="fixed inset-0 pointer-events-none z-[60] bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_2px,3px_100%] animate-scanline mix-blend-overlay opacity-20"></div>
      )}
      
      <Navbar onOpenProfile={() => setIsProfileOpen(true)} />
      {show3D && !matrixMode && <Background3D />}

      <AnimatePresence>
        {isProfileOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] flex items-center justify-center bg-black/80 backdrop-blur-md p-4"
            onClick={() => setIsProfileOpen(false)}
          >
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative"
            >
              <button 
                onClick={() => setIsProfileOpen(false)}
                className="absolute -top-12 right-0 md:-right-12 text-white/50 hover:text-white transition-colors"
              >
                <X className="w-8 h-8" />
              </button>
              <ProfileCard />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* Overlay Pattern - Optimized for performance */}
      <div className="fixed inset-0 z-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] pointer-events-none"></div>

      <main className="relative z-10">
        {/* Hero Section */}
        <section id="about" className="min-h-screen flex items-center justify-center px-6 relative pt-32">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              className="order-2 lg:order-1 space-y-8"
            >
              
              <div className="space-y-6">
                <motion.h1 variants={fadeInUp} className="font-display text-4xl md:text-6xl font-bold leading-none tracking-tighter text-white">
                  Asish Ranjan Sahu
                </motion.h1>

                <motion.div variants={fadeInUp} className="space-y-4">
                  <h2 className="text-xl md:text-2xl text-slate-300 font-light leading-relaxed">
                    Full Stack Developer <span className="text-cyan-500 mx-2">|</span> Building AI-Powered & Scalable Web Applications
                  </h2>
                  
                  <p className="text-lg md:text-xl text-slate-400 font-mono">
                    React • Node.js • MongoDB • AI Integrations
                  </p>
                </motion.div>
              </div>

              <motion.div variants={fadeInUp} className="flex flex-wrap gap-4 pt-4">
                <a href="#projects" className="group relative px-6 py-3 bg-white text-black font-display font-bold tracking-wider uppercase overflow-hidden rounded-sm hover:scale-105 transition-transform">
                  <span className="relative z-10 group-hover:text-white transition-colors duration-300">View Projects</span>
                  <div className="absolute inset-0 bg-cyan-600 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 ease-out"></div>
                </a>
                
                <a 
                  href="/resume.pdf" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  download
                  className="group px-6 py-3 border border-cyan-500/50 font-display font-bold tracking-wider uppercase hover:bg-cyan-500/10 transition-all flex items-center gap-2 text-cyan-400 rounded-sm hover:scale-105"
                >
                  <FileText className="w-4 h-4" />
                  Download Resume
                </a>

                <a 
                  href="https://github.com/Asishranjansahu" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="group p-3 border border-white/20 hover:bg-white/10 transition-all rounded-sm hover:scale-110 flex items-center justify-center"
                  aria-label="GitHub"
                >
                  <Github className="w-5 h-5 text-slate-300 group-hover:text-white" />
                </a>

                <a 
                  href="https://linkedin.com/in/asishranjansahu" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="group p-3 border border-white/20 hover:bg-white/10 transition-all rounded-sm hover:scale-110 flex items-center justify-center"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5 text-slate-300 group-hover:text-white" />
                </a>
              </motion.div>

              <motion.div variants={fadeInUp} className="flex items-center gap-3 text-slate-400 text-sm font-mono pt-2">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                Built scalable apps used in real-world scenarios
              </motion.div>

              <motion.div variants={fadeInUp} className="border-t border-white/10 pt-8 mt-8">
                <h3 className="text-sm font-bold text-white uppercase tracking-widest mb-4 flex items-center gap-2">
                  <span className="w-8 h-[1px] bg-cyan-500"></span>
                  Currently Working On
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-slate-400 text-sm hover:text-cyan-400 transition-colors">
                    <CircuitBoard className="w-4 h-4 text-cyan-500" />
                    <span>AI-powered discussion intelligence (Thread Sense)</span>
                  </div>
                  <div className="flex items-center gap-3 text-slate-400 text-sm hover:text-cyan-400 transition-colors">
                    <Server className="w-4 h-4 text-purple-500" />
                    <span>Learning Next.js Server Actions</span>
                  </div>
                  <div className="flex items-center gap-3 text-slate-400 text-sm hover:text-cyan-400 transition-colors">
                    <Database className="w-4 h-4 text-emerald-500" />
                    <span>Improving scalable backend architecture</span>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.5, ease: "circOut" }}
              className="order-1 lg:order-2 flex justify-center lg:justify-end relative"
            >
              <div className="relative w-64 h-64 md:w-[500px] md:h-[500px]">
                <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500 to-purple-600 rounded-full blur-[100px] opacity-20 animate-pulse-slow"></div>
                <div className="relative w-full h-full rounded-full overflow-hidden border-2 border-white/10 box-glow group">
                  <img 
                    src="/profile.jpeg" 
                    onError={(e) => {
                      e.target.onerror = null; 
                      e.target.src = "https://ui-avatars.com/api/?name=Asish+Ranjan+Sahu&background=0D8ABC&color=fff&size=512";
                    }}
                    alt="Asish Ranjan Sahu" 
                    className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60"></div>
                </div>

                {/* Floating Skills */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -top-4 -right-4 w-16 h-16 bg-black/80 border border-cyan-500/20 rounded-xl flex items-center justify-center backdrop-blur-md shadow-lg shadow-cyan-500/10 opacity-80 hover:opacity-100 transition-opacity"
                >
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" className="w-8 h-8 animate-spin-slow opacity-90" />
                </motion.div>

                <motion.div
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  className="absolute top-1/2 -right-12 w-14 h-14 bg-black/80 border border-purple-500/20 rounded-xl flex items-center justify-center backdrop-blur-md shadow-lg shadow-purple-500/10 opacity-80 hover:opacity-100 transition-opacity"
                >
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt="Node" className="w-7 h-7 opacity-90" />
                </motion.div>

                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                  className="absolute -bottom-8 right-10 w-12 h-12 bg-black/80 border border-yellow-500/20 rounded-xl flex items-center justify-center backdrop-blur-md shadow-lg shadow-yellow-500/10 opacity-80 hover:opacity-100 transition-opacity"
                >
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JS" className="w-6 h-6 rounded opacity-90" />
                </motion.div>

                <motion.div
                  animate={{ x: [0, 8, 0] }}
                  transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                  className="absolute -left-8 top-1/3 w-14 h-14 bg-black/80 border border-red-500/20 rounded-xl flex items-center justify-center backdrop-blur-md shadow-lg shadow-red-500/10 opacity-80 hover:opacity-100 transition-opacity"
                >
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" alt="Java" className="w-7 h-7 opacity-90" />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* About Me Section - WhoAmI */}
        <WhoAmI />

        {/* Education & Experience Grid */}
        <section id="education" className="py-32 px-6 scroll-mt-20">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-16">
              {/* Education Column */}
              <div>
                <motion.h3 
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  className="font-display text-3xl font-bold mb-12 flex items-center gap-4 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-white"
                >
                  <GraduationCap className="w-8 h-8 text-cyan-400" />
                  EDUCATION
                </motion.h3>
                
                <div className="relative border-l-2 border-cyan-500/30 ml-3 md:ml-6 space-y-12 pl-8 md:pl-12 py-4">
                  {[
                    { title: "NIST University", degree: "M.Tech in CSE — Focus: Distributed Systems & Web Engineering", year: "Pursuing", color: "cyan", bgClass: "bg-cyan-500/10", textClass: "text-cyan-400", borderClass: "border-cyan-500/20" },
                    { title: "VIGNAN INSTITUTE OF TECHNOLOGY AND MANAGEMENT", degree: "B.Tech in CSE — CGPA: 7.74", year: "2021-2025", color: "purple", bgClass: "bg-purple-500/10", textClass: "text-purple-400", borderClass: "border-purple-500/20" }
                  ].map((item, i) => (
                    <motion.div 
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.2 }}
                      className="relative"
                    >
                      {/* Timeline Icon */}
                      <span className="absolute -left-5 md:-left-[73px] top-0 flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-full bg-black border border-cyan-500 text-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.3)] z-10">
                       <GraduationCap className="w-5 h-5 md:w-6 md:h-6" />
                    </span>

                      {/* Content Card */}
                      <div className="holo-card p-8 group relative hover:-translate-y-1 transition-transform duration-300">
                        <div className="flex justify-between items-start">
                          <div>
                            <h4 className="font-display text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">{item.title}</h4>
                            <p className="text-slate-400 mt-2 font-mono text-sm">{item.degree}</p>
                          </div>
                          <span className={`px-3 py-1 rounded-full text-xs font-bold ${item.bgClass} ${item.textClass} border ${item.borderClass}`}>
                            {item.year}
                          </span>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Experience Column */}
              <div id="experience" className="scroll-mt-24">
                <motion.h3 
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  className="font-display text-3xl font-bold mb-12 flex items-center gap-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-white"
                >
                  <Briefcase className="w-8 h-8 text-purple-400" />
                  EXPERIENCE
                </motion.h3>

                <div className="relative border-l-2 border-purple-500/30 ml-3 md:ml-6 space-y-12 pl-8 md:pl-12 py-4">
                  <motion.div 
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    className="relative"
                  >
                    {/* Timeline Icon */}
                    <span className="absolute -left-5 md:-left-[73px] top-0 flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-full bg-black border border-purple-500 text-purple-400 shadow-[0_0_10px_rgba(168,85,247,0.3)] z-10">
                       <Briefcase className="w-5 h-5 md:w-6 md:h-6" />
                    </span>

                    {/* Content Card */}
                    <div className="holo-card p-8 relative overflow-visible group hover:-translate-y-1 transition-transform duration-300">
                      <div className="mb-6">
                        <h4 className="font-display text-2xl font-bold text-white mb-2">Full Stack Web Developer</h4>
                        <div className="space-y-2">
                            <div className="flex items-center gap-3 font-mono text-sm">
                                <span className="text-purple-400 font-bold">Innovixion Tech</span>
                                <span className="text-slate-600">|</span>
                                <span className="text-slate-400">Nov - Dec 2023</span>
                            </div>
                            <p className="text-cyan-400/90 font-mono text-xs tracking-wide">
                                React.js • Node.js • MongoDB • REST APIs • Vercel
                            </p>
                        </div>
                      </div>
                      <div className="text-slate-400 leading-relaxed border-l-2 border-white/10 pl-4 space-y-2 max-w-2xl">
                        <div className="flex items-start gap-2">
                          <span className="text-purple-400 mt-1.5">▹</span>
                          <p>Engineered responsive dashboards using <span className="text-white">React.js & Node.js</span>, reducing manual data entry by 40%.</p>
                        </div>
                        <div className="flex items-start gap-2">
                          <span className="text-purple-400 mt-1.5">▹</span>
                          <p>Optimized frontend performance, improving page load speeds by <span className="text-white">35%</span> through code splitting and lazy loading.</p>
                        </div>
                        <div className="flex items-start gap-2">
                          <span className="text-purple-400 mt-1.5">▹</span>
                          <p>Deployed scalable applications on <span className="text-white">Vercel</span> with automated CI/CD pipelines, ensuring 99.9% uptime.</p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-32 px-6 bg-black/50 scroll-mt-20">
          <div className="max-w-7xl mx-auto">
            <motion.h3 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="font-display text-4xl md:text-6xl font-bold mb-12 text-center"
            >
              FEATURED <span className="text-stroke-cyan text-transparent">PROJECTS</span>
            </motion.h3>

            {/* Featured Projects Grid - Top Row */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
              {FEATURED_PROJECTS.map((project, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className={`group relative bg-zinc-900/50 backdrop-blur-sm border rounded-xl overflow-hidden flex flex-col transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl ${getColorClass(project.color, 'border')} ${getColorClass(project.color, 'hoverBorder')} ${getColorClass(project.color, 'hoverShadow')}`}
                >
                  {/* Badge */}
                  {project.badge && (
                    <div className="absolute top-0 right-0 z-20">
                      <div className={`px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white ${
                        project.badge === 'AI Project' ? 'bg-emerald-500' :
                        project.badge === 'Production Ready' ? 'bg-cyan-500' :
                        'bg-indigo-500'
                      } rounded-bl-xl shadow-lg`}>
                        {project.badge}
                      </div>
                    </div>
                  )}

                  {/* Image Section */}
                  <a 
                    href={project.live}
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="block h-48 relative overflow-hidden group-hover:h-52 transition-all duration-500 cursor-pointer"
                  >
                    <img 
                      src={project.image} 
                      alt={project.title}
                      loading="lazy" 
                      onError={(e) => {
                        e.currentTarget.onerror = null;
                        e.currentTarget.src = "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop";
                      }}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-transparent to-transparent opacity-90 pointer-events-none" />
                    
                    {/* Tech Logo */}
                    <div className="absolute bottom-4 left-4 w-12 h-12 rounded-xl bg-black/60 backdrop-blur-md border border-white/10 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <img 
                        src={getTechIcon(project.tech.split('•')[0])} 
                        alt="Tech Logo" 
                        className="w-7 h-7 object-contain"
                      />
                    </div>
                  </a>

                  {/* Content Section */}
                  <div className="p-6 flex-1 flex flex-col relative">
                    <div className="flex items-center gap-2 mb-3">
                      <span className={`w-1.5 h-1.5 rounded-full animate-pulse ${getColorClass(project.color, 'bg')}`} />
                      <span className={`text-xs font-mono font-bold uppercase tracking-wider ${getColorClass(project.color, 'text')}`}>
                        {project.tech}
                      </span>
                    </div>

                    <a href={project.live} target="_blank" rel="noopener noreferrer" className="block group/title">
                      <h4 className={`font-display text-xl font-bold text-white mb-3 leading-tight transition-colors ${getColorClass(project.color, 'hoverText')}`}>
                        {project.title}
                      </h4>
                    </a>
                    
                    <p className="text-slate-400 text-sm leading-relaxed mb-6 flex-1">
                      {project.desc}
                    </p>

                    {/* Action Links */}
                    <div className="flex items-center justify-between pt-4 border-t border-white/5 mt-auto">
                      <a 
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-xs font-bold text-slate-500 hover:text-white transition-colors group/link"
                      >
                        <div className="p-2 rounded-lg bg-white/5 group-hover/link:bg-white/10 transition-colors">
                          <Github className="w-4 h-4" />
                        </div>
                        Source Code
                      </a>
                      <a 
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex items-center gap-2 text-xs font-bold transition-colors group/link ${getColorClass(project.color, 'linkText')}`}
                      >
                        Live Demo
                        <ExternalLink className="w-4 h-4 group-hover/link:translate-x-0.5 transition-transform" />
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Other Projects Section */}
            <motion.h4 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="font-display text-2xl font-bold text-slate-500 mb-8 text-center uppercase tracking-widest"
            >
              Other Projects
            </motion.h4>
            
            <div className="relative border-l-2 border-cyan-500/30 ml-3 md:ml-6 pl-8 md:pl-12 py-4">
              {/* Timeline Icon */}
              <span className="absolute -left-5 md:-left-[73px] top-0 flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-full bg-black border border-cyan-500 text-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.3)] z-10">
                <FolderGit2 className="w-5 h-5 md:w-6 md:h-6" />
              </span>

              <div 
                ref={scrollRef}
                className="flex overflow-x-auto pb-8 gap-6 hide-scrollbar"
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
                onTouchStart={() => setIsPaused(true)}
                onTouchEnd={() => setIsPaused(false)}
              >
                {OTHER_PROJECTS.map((project, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.1 }}
                    className={`group relative flex-none w-[280px] bg-zinc-900/50 backdrop-blur-sm border rounded-xl overflow-hidden flex flex-col transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${getColorClass(project.color, 'border')} ${getColorClass(project.color, 'hoverBorder')} ${getColorClass(project.color, 'hoverShadow')}`}
                  >
                    {/* Image Section */}
                    <a 
                      href={project.live}
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="block h-32 relative overflow-hidden group-hover:h-36 transition-all duration-500 cursor-pointer"
                    >
                      <img 
                        src={project.image} 
                        alt={project.title}
                        loading="lazy" 
                        onError={(e) => {
                          e.currentTarget.onerror = null;
                          e.currentTarget.src = "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop";
                        }}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 to-transparent opacity-80 pointer-events-none" />
                      
                      {/* Floating Logo Badge */}
                      <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/60 backdrop-blur-md border border-white/10 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                        <img 
                          src={getTechIcon(project.tech.split('•')[0])} 
                          alt="Tech Logo" 
                          className="w-4 h-4 object-contain"
                        />
                      </div>
                    </a>

                    {/* Content Section */}
                    <div className="p-4 flex-1 flex flex-col relative">
                      <div className="flex items-center gap-2 mb-2">
                        <span className={`w-1.5 h-1.5 rounded-full animate-pulse ${getColorClass(project.color, 'bg')}`} />
                        <span className={`text-[10px] font-mono font-bold uppercase tracking-wider ${getColorClass(project.color, 'text')}`}>
                          {project.tech}
                        </span>
                      </div>

                      <a href={project.live} target="_blank" rel="noopener noreferrer" className="block group/title">
                        <h4 className={`font-display text-base font-bold text-white mb-1 leading-tight transition-colors ${getColorClass(project.color, 'hoverText')}`}>
                          {project.title}
                        </h4>
                      </a>
                      
                      <p className="text-slate-400 text-xs leading-relaxed line-clamp-2 mb-3 flex-1">
                        {project.desc}
                      </p>

                      {/* Action Links */}
                      <div className="flex items-center justify-between pt-3 border-t border-white/5 mt-auto">
                        <a 
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-[10px] font-bold text-slate-500 hover:text-white transition-colors group/link"
                        >
                          <div className="p-1 rounded-full bg-white/5 group-hover/link:bg-white/10 transition-colors">
                            <Github className="w-3 h-3" />
                          </div>
                          Code
                        </a>
                        <a 
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`flex items-center gap-1.5 text-[10px] font-bold transition-colors group/link ${getColorClass(project.color, 'linkText')}`}
                        >
                          Live Demo
                          <ExternalLink className="w-3 h-3 group-hover/link:translate-x-0.5 transition-transform" />
                        </a>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-24 bg-[#0f1012] relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-6">
            <motion.h3 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="font-display text-4xl md:text-6xl font-bold mb-20 text-center text-white"
            >
              TECHNICAL <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">SKILLS</span>
            </motion.h3>

            <div className="space-y-20">
              {/* Frontend */}
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}>
                <div className="flex items-center gap-4 mb-8">
                  <div className="h-px bg-gradient-to-r from-transparent to-slate-800 flex-1" />
                  <span className="text-cyan-400 font-mono tracking-[0.2em] uppercase text-sm font-bold">Frontend Development</span>
                  <div className="h-px bg-gradient-to-l from-transparent to-slate-800 flex-1" />
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
                  {[
                    { label: 'React.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
                    { label: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
                    { label: 'HTML5', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
                    { label: 'CSS3', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
                    { label: 'Tailwind CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg' },
                    { label: 'Bootstrap', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg' }
                  ].map((item, i) => (
                    <div key={i} className="group relative bg-zinc-900/50 hover:bg-zinc-900 rounded-xl p-6 flex flex-col items-center justify-center gap-4 border border-zinc-800 hover:border-cyan-500/50 transition-all duration-300 hover:-translate-y-1">
                      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 rounded-xl transition-opacity" />
                      <img src={item.icon} alt={item.label} className="w-12 h-12 object-contain transition-all duration-300 group-hover:scale-110" />
                      <span className="font-mono text-sm text-slate-400 group-hover:text-cyan-400 transition-colors">{item.label}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Backend */}
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}>
                <div className="flex items-center gap-4 mb-8">
                  <div className="h-px bg-gradient-to-r from-transparent to-slate-800 flex-1" />
                  <span className="text-purple-400 font-mono tracking-[0.2em] uppercase text-sm font-bold">Backend Development</span>
                  <div className="h-px bg-gradient-to-l from-transparent to-slate-800 flex-1" />
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
                  {[
                    { label: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
                    { label: 'Express.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg' },
                    { label: 'Java', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' }
                  ].map((item, i) => (
                    <div key={i} className="group relative bg-zinc-900/50 hover:bg-zinc-900 rounded-xl p-6 flex flex-col items-center justify-center gap-4 border border-zinc-800 hover:border-purple-500/50 transition-all duration-300 hover:-translate-y-1">
                      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 rounded-xl transition-opacity" />
                      <img src={item.icon} alt={item.label} className="w-12 h-12 object-contain transition-all duration-300 group-hover:scale-110" />
                      <span className="font-mono text-sm text-slate-400 group-hover:text-purple-400 transition-colors">{item.label}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Database */}
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}>
                <div className="flex items-center gap-4 mb-8">
                  <div className="h-px bg-gradient-to-r from-transparent to-slate-800 flex-1" />
                  <span className="text-emerald-400 font-mono tracking-[0.2em] uppercase text-sm font-bold">Database</span>
                  <div className="h-px bg-gradient-to-l from-transparent to-slate-800 flex-1" />
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
                  {[
                    { label: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
                    { label: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' }
                  ].map((item, i) => (
                    <div key={i} className="group relative bg-zinc-900/50 hover:bg-zinc-900 rounded-xl p-6 flex flex-col items-center justify-center gap-4 border border-zinc-800 hover:border-emerald-500/50 transition-all duration-300 hover:-translate-y-1">
                      <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 rounded-xl transition-opacity" />
                      <img src={item.icon} alt={item.label} className="w-12 h-12 object-contain transition-all duration-300 group-hover:scale-110" />
                      <span className="font-mono text-sm text-slate-400 group-hover:text-emerald-400 transition-colors">{item.label}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Tools & DevOps */}
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}>
                <div className="flex items-center gap-4 mb-8">
                  <div className="h-px bg-gradient-to-r from-transparent to-slate-800 flex-1" />
                  <span className="text-orange-400 font-mono tracking-[0.2em] uppercase text-sm font-bold">Tools & DevOps</span>
                  <div className="h-px bg-gradient-to-l from-transparent to-slate-800 flex-1" />
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
                  {[
                    { label: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
                    { label: 'AWS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg' },
                    { label: 'Postman', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg' },
                    { label: 'VS Code', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg' },
                    { label: 'npm', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg' }
                  ].map((item, i) => (
                    <div key={i} className="group relative bg-zinc-900/50 hover:bg-zinc-900 rounded-xl p-6 flex flex-col items-center justify-center gap-4 border border-zinc-800 hover:border-orange-500/50 transition-all duration-300 hover:-translate-y-1">
                      <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-transparent opacity-0 group-hover:opacity-100 rounded-xl transition-opacity" />
                      <img src={item.icon} alt={item.label} className="w-12 h-12 object-contain transition-all duration-300 group-hover:scale-110" />
                      <span className="font-mono text-sm text-slate-400 group-hover:text-orange-400 transition-colors">{item.label}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Core Competencies */}
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}>
                <div className="flex items-center gap-4 mb-8">
                  <div className="h-px bg-gradient-to-r from-transparent to-slate-800 flex-1" />
                  <span className="text-pink-400 font-mono tracking-[0.2em] uppercase text-sm font-bold">Core Concepts</span>
                  <div className="h-px bg-gradient-to-l from-transparent to-slate-800 flex-1" />
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
                  {[
                    { label: 'DSA', icon: Workflow },
                    { label: 'OOPS', icon: Shapes },
                    { label: 'REST APIs', icon: Server },
                    { label: 'Full Stack', icon: Code2 },
                    { label: 'Microservices', icon: Boxes }
                  ].map((item, i) => (
                    <div key={i} className="group relative bg-zinc-900/50 hover:bg-zinc-900 rounded-xl p-6 flex flex-col items-center justify-center gap-4 border border-zinc-800 hover:border-pink-500/50 transition-all duration-300 hover:-translate-y-1">
                      <div className="absolute inset-0 bg-gradient-to-br from-pink-500/5 to-transparent opacity-0 group-hover:opacity-100 rounded-xl transition-opacity" />
                      <item.icon className="w-10 h-10 text-pink-400 transition-colors duration-300" />
                      <span className="font-mono text-sm text-slate-400 group-hover:text-pink-400 transition-colors text-center">{item.label}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Engineering Process Section */}
        <EngineeringProcess />

        {/* GitHub Stats Section */}
        <GithubStats />

        <section id="achievements" className="py-32 px-6 bg-black/60 scroll-mt-20">
          <div className="max-w-7xl mx-auto">
            <motion.h3 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="font-display text-4xl md:text-6xl font-bold mb-12 text-white flex items-center gap-3"
            >
              <Award className="w-8 h-8 text-cyan-400" /> Achievements
            </motion.h3>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { title: "Hackathon Finalist", desc: "Built a smart campus solution in 24 hours.", color: "cyan" },
                { title: "Top Performer", desc: "Consistently shipped production features on schedule.", color: "purple" },
                { title: "AWS Cloud", desc: "Deployed scalable apps via EC2 & S3.", color: "pink" }
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="holo-card p-8 group"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <Award className={`w-6 h-6 text-${item.color}-400`} />
                    <h4 className="font-display text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">{item.title}</h4>
                  </div>
                  <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <HireMe />
        <section id="contact" className="py-32 px-6 relative overflow-hidden scroll-mt-20">
          <div className="absolute inset-0 bg-gradient-to-t from-cyan-900/10 to-transparent pointer-events-none"></div>
          
          <div className="max-w-7xl mx-auto relative z-10">
            <motion.h3 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="font-display text-4xl md:text-6xl font-bold mb-20 text-center"
            >
              GET IN <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">TOUCH</span>
            </motion.h3>

            <div className="grid md:grid-cols-2 gap-12 items-start">
              {/* Contact Info */}
              <motion.div 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="space-y-8"
              >
                <div className="holo-card p-8 space-y-6">
                  <h4 className="font-display text-2xl font-bold text-white mb-6">Contact Information</h4>
                  
                  <a href="mailto:asishranjansahu2003@gmail.com" className="flex items-center gap-4 text-slate-400 hover:text-cyan-400 transition-colors group">
                    <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-cyan-500/20 transition-colors">
                      <Mail className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-sm font-mono text-slate-500">Email</p>
                      <p className="text-lg font-bold">asishranjansahu2003@gmail.com</p>
                    </div>
                  </a>

                  <div className="flex items-center gap-4 text-slate-400 group">
                    <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="text-sm font-mono text-slate-500">Location</p>
                      <p className="text-lg font-bold">Odisha, India</p>
                    </div>
                  </div>

                  <div className="pt-8 border-t border-white/10 flex gap-4">
                    <a href="https://linkedin.com/in/asish-ranjan-sahu" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-white/5 hover:bg-[#0077b5] hover:text-white transition-all duration-300">
                      <Linkedin className="w-6 h-6" />
                    </a>
                    <a href="https://github.com/Asishranjansahu" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-white/5 hover:bg-[#333] hover:text-white transition-all duration-300">
                      <Github className="w-6 h-6" />
                    </a>
                    <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-white/5 hover:bg-cyan-600 hover:text-white transition-all duration-300" title="Download Resume">
                      <FileText className="w-6 h-6" />
                    </a>
                  </div>
                </div>
              </motion.div>

              {/* Contact Form */}
              <motion.div 
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="holo-card p-8"
              >
                <form 
                  onSubmit={(e) => {
                    e.preventDefault();
                    const formData = new FormData(e.target);
                    const subject = `Portfolio Inquiry from ${formData.get('name')}`;
                    const body = formData.get('message');
                    window.location.href = `mailto:asishranjansahu2003@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
                  }}
                  className="space-y-6"
                >
                  <div className="space-y-2">
                    <label className="text-sm font-mono text-cyan-400">YOUR NAME</label>
                    <div className="relative">
                      <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
                      <input 
                        type="text" 
                        name="name"
                        required
                        className="w-full bg-black/50 border border-white/10 rounded-lg py-3 pl-12 pr-4 text-white focus:border-cyan-500 focus:outline-none focus:ring-1 focus:ring-cyan-500/50 transition-all"
                        placeholder="John Doe"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-mono text-cyan-400">YOUR MESSAGE</label>
                    <textarea 
                      name="message"
                      required
                      rows="4"
                      className="w-full bg-black/50 border border-white/10 rounded-lg p-4 text-white focus:border-cyan-500 focus:outline-none focus:ring-1 focus:ring-cyan-500/50 transition-all"
                      placeholder="Tell me about your project..."
                    ></textarea>
                  </div>

                  <button 
                    type="submit"
                    className="w-full py-4 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-lg font-bold tracking-widest uppercase hover:from-cyan-500 hover:to-blue-500 transition-all flex items-center justify-center gap-2 group"
                  >
                    Send Message
                    <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </form>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-8 border-t border-white/10 bg-black/80 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="font-mono text-xs text-slate-500">
              © {new Date().getFullYear()} Asish Ranjan Sahu
            </p>
            <p className="font-mono text-xs text-cyan-500/70 flex items-center gap-2">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
              SYSTEM ONLINE
            </p>
          </div>
        </footer>
      </main>

      <CommandPalette 
        isOpen={isCommandPaletteOpen} 
        onClose={() => setIsCommandPaletteOpen(false)}
        navigateTo={navigateTo}
      />
      
      <AnimatePresence>
        {isSecretOpen && (
          <SecretDevHQ onClose={() => setIsSecretOpen(false)} />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isTerminalOpen && (
          <TerminalComponent 
            onClose={() => setIsTerminalOpen(false)} 
            onUnlockSecret={() => {
              setIsSecretOpen(true);
              setIsTerminalOpen(false);
            }}
          />
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
