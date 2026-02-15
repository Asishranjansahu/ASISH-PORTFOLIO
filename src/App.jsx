import React, { useEffect, useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Github, Activity, Linkedin, Mail, ExternalLink, Code2, Cpu, GraduationCap, Briefcase, Award, Cloud, Database, Cog, CircuitBoard, Image, Server, Globe, GitPullRequest, Shapes, HardDrive, Boxes, Workflow, Lightbulb, Users, RefreshCw, MessageCircle, MapPin, Send, User, FileText, FolderGit2, Terminal, X, Star, GitFork, Share2 } from 'lucide-react';
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
import BlogSection from './components/BlogSection';
import HireMe from './components/HireMe';
import ValueProposition from './components/ValueProposition';
import Testimonials from './components/Testimonials';
import Certifications from './components/Certifications';
import Background3D from './components/Background3D';
import WhoAmI from './components/WhoAmI';
import StatsCard from './components/StatsCard';
import CustomCursor from './components/CustomCursor';

const FEATURED_PROJECTS = [
  {
    title: "Thread Sense",
    tech: "NLP • React • Firebase",
    desc: "Built NLP-powered discussion analyzer that clusters conversations and reduces manual browsing time by ~40%.",
    problem: "Online discussions are unstructured, making it impossible to find relevant topics quickly.",
    solution: "Developed an NLP pipeline using BERT embeddings to cluster semantically similar messages.",
    result: "Achieved 92% clustering accuracy and reduced information retrieval time by 40%.",
    architecture: ["React", "FastAPI (Python)", "BERT Model", "Firebase", "Redis Caching"],
    color: "emerald",
    image: "/projects/thread-sense.svg",
    demo: "https://media.giphy.com/media/L1R1TVTh2RhtrSc98z/giphy.gif", // Replace with actual demo GIF
    live: "https://thread-sense.vercel.app",
    github: "https://github.com/Asishranjansahu/thread-sense",
    badge: "AI Project",
    difficulty: "Advanced",
    metric: "92% Accuracy • 50k+ Msgs Analyzed",
    stats: { stars: 12, forks: 4, size: "12MB", lastUpdated: "2d ago" },
    caseStudy: true,
    caseStudyDetails: {
      problem: "Online discussions on platforms like Discord and Reddit are often chaotic and unstructured. Valuable information gets buried under thousands of messages, making it difficult for users to find relevant answers or track specific topics without endless scrolling.",
      solution: "Thread Sense uses a multi-stage NLP pipeline. First, it ingests chat logs and pre-processes text to remove noise. Then, it generates sentence embeddings using a fine-tuned BERT model. These embeddings are clustered using DBSCAN to group semantically similar messages into 'threads'. Finally, a summarization model generates a concise topic title for each cluster.",
      challenges: [
        "Handling slang and code snippets in developer chats.",
        "Optimizing BERT inference latency for real-time processing.",
        "Determining dynamic epsilon values for DBSCAN clustering density."
      ],
      pipeline: [
        "Raw Chat Logs (Discord/Slack)",
        "Preprocessing (Tokenization)",
        "BERT Embeddings",
        "DBSCAN Clustering",
        "Topic Summarization"
      ],
      impact: "Reduced information retrieval time by 40% and improved community engagement by providing structured topic digests."
    }
  },
  {
    title: "Smart Campus",
    tech: "IoT • Flutter • Firebase",
    desc: "IoT-driven campus automation that reduced manual tracking effort by 90% via real-time sensor networks.",
    problem: "Manual tracking of campus resources (lights, attendance) is inefficient and error-prone.",
    solution: "Integrated ESP8266 IoT sensors with a Flutter mobile app for real-time remote monitoring.",
    result: "Eliminated 90% of manual tracking effort and optimized energy consumption.",
    architecture: ["IoT Sensors (ESP8266)", "Flutter Mobile App", "Firebase Realtime DB", "Cloud Functions"],
    color: "cyan",
    image: "https://placehold.co/1200x800/0f172a/ffffff?text=Smart+Campus",
    demo: "https://media.giphy.com/media/26tn33ai01UfQN36K/giphy.gif", // Replace with actual demo GIF
    live: "https://smart-campus-automation-system.vercel.app/",
    github: "https://github.com/Asishranjansahu/smart-campus",
    badge: "Production Ready",
    difficulty: "Advanced",
    metric: "90% Less Manual Work • Real-time Sync",
    stats: { stars: 8, forks: 2, size: "45MB", lastUpdated: "5d ago" },
    caseStudy: true,
    caseStudyDetails: {
      problem: "University campuses struggle with inefficient resource management, leading to wasted energy (lights left on) and time-consuming manual attendance tracking.",
      solution: "A centralized IoT dashboard connected to ESP8266 microcontrollers. It enables remote control of electrical appliances and automates attendance via RFID/biometric sensors, syncing data to a Flutter mobile app in real-time.",
      challenges: [
        "Synchronizing real-time state between hardware (ESP8266) and mobile app (Flutter).",
        "Handling unstable network connectivity in campus environments.",
        "Optimizing power consumption for battery-operated sensor nodes."
      ],
      pipeline: [
        "IoT Sensors (ESP8266)",
        "MQTT / HTTP Requests",
        "Firebase Realtime DB",
        "Cloud Functions",
        "Flutter App UI"
      ],
      architectureImage: "https://placehold.co/1200x800/0f172a/ffffff?text=Smart+Campus+Architecture+Diagram",
      impact: "Reduced energy bills by 15% and cut attendance taking time by 90% across 5 classrooms."
    }
  },
  {
    title: "Stock Trading Platform",
    tech: "React • Chart.js",
    desc: "Real-time trading dashboard simulating order execution with <100ms latency updates using React and Chart.js.",
    problem: "Traders lose money due to delayed data updates and slow order execution interfaces.",
    solution: "Built a high-frequency trading simulation with WebSocket-based real-time state management.",
    result: "Achieved <100ms latency for ticker updates and processed 500+ orders/sec.",
    architecture: ["React", "Redux Toolkit", "Node.js", "Socket.io", "MongoDB Timeseries"],
    color: "indigo",
    image: "https://images.unsplash.com/photo-1611974765270-ca1258634369?q=80&w=2064&auto=format&fit=crop",
    demo: "https://media.giphy.com/media/l0HlJDaeqNUDhhaWg/giphy.gif", // Replace with actual demo GIF
    live: "https://zerodha-clone-demo.vercel.app",
    github: "https://github.com/Asishranjansahu/zerodha-clone",
    badge: "Featured",
    difficulty: "Intermediate",
    metric: "<100ms Latency • 500+ Orders/Sec",
    stats: { stars: 15, forks: 5, size: "8MB", lastUpdated: "1w ago" },
    caseStudy: true,
    caseStudyDetails: {
      problem: "Retail traders suffer from delayed market data and clunky interfaces, resulting in slippage and lost opportunities during high-volatility periods.",
      solution: "A high-performance trading simulation platform mimicking Zerodha. It uses WebSockets for sub-100ms ticker updates and a Node.js matching engine to process buy/sell orders instantly.",
      challenges: [
        "Rendering high-frequency chart updates without React re-render lag.",
        "Ensuring race-condition-free order matching logic.",
        "Scaling WebSocket connections for concurrent users."
      ],
      pipeline: [
        "Market Data Feed (Mock)",
        "Node.js WebSocket Server",
        "Order Matching Engine",
        "MongoDB Persistence",
        "React/Chart.js Frontend"
      ],
      impact: "Simulated 500+ orders/sec with <100ms latency, providing a realistic training ground for 50+ users."
    }
  },
  {
    title: "Dev Connect",
    tech: "MERN • Socket.IO",
    desc: "Real-time collaboration suite (MERN + Socket.io) enabling instant messaging and shared workspaces for developers.",
    problem: "Remote development teams lack a unified platform for real-time code collaboration.",
    solution: "A MERN stack application featuring real-time chat, shared task boards, and collaborative code execution environments.",
    result: "Streamlined team communication and reduced context switching.",
    architecture: ["React", "Redux", "Socket.io", "Node.js", "MongoDB"],
    color: "purple",
    image: "https://placehold.co/1200x800/0f172a/ffffff?text=Dev+Connect",
    demo: "https://media.giphy.com/media/26n7b7PjSOZJwVCeY/giphy.gif",
    live: "https://dev-connect-live.onrender.com",
    github: "https://github.com/Asishranjansahu/dev-connect",
    badge: "Collaboration",
    difficulty: "Intermediate",
    metric: "Real-time • 30% Efficiency",
    stats: { stars: 10, forks: 3, size: "15MB", lastUpdated: "3d ago" },
    caseStudy: true,
    caseStudyDetails: {
      problem: "Remote development teams lack a unified platform for real-time code collaboration and communication, often switching between Slack, Zoom, and VS Code.",
      solution: "A MERN stack application featuring real-time chat, shared task boards, and collaborative code execution environments powered by Socket.io.",
      challenges: [
        "Managing WebSocket state for multiple concurrent rooms.",
        "Ensuring data consistency across distributed clients.",
        "Implementing secure authentication for private workspaces."
      ],
      pipeline: [
        "React Frontend",
        "Redux State Management",
        "Socket.io Real-time Layer",
        "Node.js/Express Backend",
        "MongoDB Atlas"
      ],
      architectureImage: "https://placehold.co/1200x800/0f172a/ffffff?text=Dev+Connect+Architecture+Diagram",
      impact: "Streamlined team communication and reduced context switching by 30%."
    }
  }
];

const OTHER_PROJECTS = [
  {
    title: "AI Code Assistant",
    tech: "Next.js • OpenAI • Tailwind",
    desc: "Intelligent code completion tool leveraging OpenAI API to suggest optimized code snippets in real-time.",
    color: "pink",
    image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=2070&auto=format&fit=crop",
    live: "#",
    github: "#",
    badge: "Currently Building"
  },
  {
    title: "Mindscape",
    tech: "React • Node.js • MongoDB",
    desc: "Smart study planner (React + Node.js) that optimizes learning schedules to boost academic productivity.",
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
    desc: "High-performance personal brand platform featuring immersive 3D visuals and 99+ Lighthouse performance scores.",
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
  
  // EmailJS State
  const formRef = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState('idle'); // idle, success, error

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // EMAILJS CONFIGURATION
    // 1. Create an account at https://www.emailjs.com/
    // 2. Create a new Email Service (e.g., Gmail) -> Service ID
    // 3. Create a new Email Template -> Template ID
    // 4. Get your Public Key from Account > API Keys
    const SERVICE_ID = 'service_id'; // REPLACE WITH YOUR SERVICE ID
    const TEMPLATE_ID = 'template_id'; // REPLACE WITH YOUR TEMPLATE ID
    const PUBLIC_KEY = 'public_key'; // REPLACE WITH YOUR PUBLIC KEY

    // Fallback if keys are not set (simulated success for demo)
    if (SERVICE_ID === 'service_id') {
      setTimeout(() => {
        // Fallback to mailto
        const formData = new FormData(formRef.current);
        const subject = `Portfolio Inquiry from ${formData.get('name')}`;
        const body = formData.get('message');
        window.location.href = `mailto:asishranjansahu2003@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        
        setIsSubmitting(false);
        setSubmitStatus('success');
        setTimeout(() => setSubmitStatus('idle'), 5000);
      }, 1500);
      return;
    }

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY)
      .then((result) => {
          setSubmitStatus('success');
          setIsSubmitting(false);
          e.target.reset();
          setTimeout(() => setSubmitStatus('idle'), 5000);
      }, (error) => {
          console.log(error.text);
          setSubmitStatus('error');
          setIsSubmitting(false);
          setTimeout(() => setSubmitStatus('idle'), 5000);
      });
  };


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
  const [hoveredProject, setHoveredProject] = useState(null);

  const activeProject = hoveredProject !== null ? FEATURED_PROJECTS[hoveredProject] : null;

  const [activeCaseStudy, setActiveCaseStudy] = useState(null);

  const CaseStudyModal = ({ project, onClose }) => {
    if (!project) return null;
    const details = project.caseStudyDetails || {};
    
    return (
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/90 backdrop-blur-md overflow-y-auto"
        onClick={onClose}
      >
        <motion.div 
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          onClick={e => e.stopPropagation()}
          className="bg-zinc-900 border border-white/10 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto relative"
        >
          <button onClick={onClose} className="absolute top-4 right-4 p-2 bg-black/50 rounded-full hover:bg-white/10 transition-colors z-10">
            <X className="w-6 h-6 text-white" />
          </button>
          
          <div className="relative h-64 md:h-80 w-full">
            <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 to-transparent" />
            <div className="absolute bottom-6 left-6 md:left-10">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-2">{project.title}</h2>
              <p className="text-cyan-400 font-mono text-sm">{project.tech}</p>
            </div>
          </div>

          <div className="p-6 md:p-10 space-y-10">
            {/* Problem & Solution */}
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-white flex items-center gap-2">
                  <span className="w-1 h-6 bg-red-500 rounded-full" />
                  The Problem
                </h3>
                <p className="text-slate-400 leading-relaxed">{details.problem || project.problem}</p>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-white flex items-center gap-2">
                  <span className="w-1 h-6 bg-emerald-500 rounded-full" />
                  The Solution
                </h3>
                <p className="text-slate-400 leading-relaxed">{details.solution || project.solution}</p>
              </div>
            </div>

            {/* Challenges - Only if details exist */}
            {details.challenges && (
               <div className="space-y-4">
                <h3 className="text-xl font-bold text-white flex items-center gap-2">
                  <span className="w-1 h-6 bg-yellow-500 rounded-full" />
                  Technical Challenges
                </h3>
                <ul className="grid md:grid-cols-2 gap-4">
                  {details.challenges.map((challenge, i) => (
                    <li key={i} className="flex items-start gap-3 bg-white/5 p-4 rounded-lg border border-white/5">
                      <span className="text-yellow-500 mt-1">⚠️</span>
                      <p className="text-slate-300 text-sm leading-relaxed">{challenge}</p>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Architecture Diagram */}
            {details.architectureImage && (
              <div className="space-y-6">
                <h3 className="text-xl font-bold text-white flex items-center gap-2">
                  <Share2 className="w-5 h-5 text-pink-400" />
                  System Architecture
                </h3>
                <div className="rounded-xl overflow-hidden border border-white/10 bg-black/50 p-2">
                  <img 
                    src={details.architectureImage} 
                    alt="System Architecture" 
                    className="w-full h-auto rounded-lg hover:scale-[1.02] transition-transform duration-500" 
                  />
                </div>
              </div>
            )}

            {/* Pipeline / Architecture Flow */}
            {details.pipeline && (
              <div className="space-y-6">
                 <h3 className="text-xl font-bold text-white flex items-center gap-2">
                  <Workflow className="w-5 h-5 text-purple-400" />
                  Processing Pipeline
                </h3>
                <div className="flex flex-wrap md:flex-nowrap items-center justify-center gap-4 text-center">
                   {details.pipeline.map((step, i) => (
                     <React.Fragment key={i}>
                       <div className="p-4 rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-300 font-mono text-xs font-bold uppercase tracking-wider min-w-[140px]">
                         {step}
                       </div>
                       {i < details.pipeline.length - 1 && (
                         <div className="text-slate-600">
                           <span className="hidden md:block">→</span>
                           <span className="block md:hidden">↓</span>
                         </div>
                       )}
                     </React.Fragment>
                   ))}
                </div>
              </div>
            )}

            {/* Tech Stack Grid */}
            <div>
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                <Code2 className="w-5 h-5 text-cyan-400" />
                Tech Stack
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {project.architecture.map((tech, i) => (
                  <div key={i} className="p-4 rounded-xl bg-white/5 border border-white/5 text-center hover:bg-white/10 transition-colors">
                    <span className="text-slate-300 text-sm font-medium">{tech}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Key Metrics */}
            <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-2xl p-6 border border-white/10">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <Activity className="w-5 h-5 text-cyan-400" />
                Impact & Performance
              </h3>
              <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
                <div className="text-center md:text-left">
                  <p className="text-3xl font-bold text-white mb-1">{project.metric?.match(/\d+%?/)?.[0] || "10x"}</p>
                  <p className="text-slate-400 text-sm">Efficiency Increase</p>
                </div>
                <div className="h-px w-full md:w-px md:h-12 bg-white/10" />
                <p className="text-lg text-slate-300 italic">"{details.impact || project.metric}"</p>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    );
  };

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
        hoverShadow: 'hover:shadow-[0_0_30px_rgba(6,182,212,0.3)]',
        hoverText: 'group-hover:text-cyan-400',
        linkText: 'text-cyan-500 hover:text-cyan-400',
        linkBg: 'bg-cyan-500/10 group-hover/link:bg-cyan-500/20'
      },
      purple: {
        text: 'text-purple-400',
        bg: 'bg-purple-400',
        border: 'border-purple-500/30',
        hoverBorder: 'hover:border-purple-500/50',
        hoverShadow: 'hover:shadow-[0_0_30px_rgba(168,85,247,0.3)]',
        hoverText: 'group-hover:text-purple-400',
        linkText: 'text-purple-500 hover:text-purple-400',
        linkBg: 'bg-purple-500/10 group-hover/link:bg-purple-500/20'
      },
      pink: {
        text: 'text-pink-400',
        bg: 'bg-pink-400',
        border: 'border-pink-500/30',
        hoverBorder: 'hover:border-pink-500/50',
        hoverShadow: 'hover:shadow-[0_0_30px_rgba(236,72,153,0.3)]',
        hoverText: 'group-hover:text-pink-400',
        linkText: 'text-pink-500 hover:text-pink-400',
        linkBg: 'bg-pink-500/10 group-hover/link:bg-pink-500/20'
      },
      emerald: {
        text: 'text-emerald-400',
        bg: 'bg-emerald-400',
        border: 'border-emerald-500/30',
        hoverBorder: 'hover:border-emerald-500/50',
        hoverShadow: 'hover:shadow-[0_0_30px_rgba(16,185,129,0.3)]',
        hoverText: 'group-hover:text-emerald-400',
        linkText: 'text-emerald-500 hover:text-emerald-400',
        linkBg: 'bg-emerald-500/10 group-hover/link:bg-emerald-500/20'
      },
      sky: {
        text: 'text-sky-400',
        bg: 'bg-sky-400',
        border: 'border-sky-500/30',
        hoverBorder: 'hover:border-sky-500/50',
        hoverShadow: 'hover:shadow-[0_0_30px_rgba(14,165,233,0.3)]',
        hoverText: 'group-hover:text-sky-400',
        linkText: 'text-sky-500 hover:text-sky-400',
        linkBg: 'bg-sky-500/10 group-hover/link:bg-sky-500/20'
      },
      indigo: {
        text: 'text-indigo-400',
        bg: 'bg-indigo-400',
        border: 'border-indigo-500/30',
        hoverBorder: 'hover:border-indigo-500/50',
        hoverShadow: 'hover:shadow-[0_0_30px_rgba(99,102,241,0.3)]',
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
      
      <CustomCursor />
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

      <AnimatePresence>
        {activeCaseStudy && (
          <CaseStudyModal project={activeCaseStudy} onClose={() => setActiveCaseStudy(null)} />
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
                <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold tracking-wider uppercase mb-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                  Available for SWE Roles
                </motion.div>
                <motion.h1 variants={fadeInUp} className="font-display text-4xl md:text-6xl font-bold leading-none tracking-tighter text-white mb-4">
                  <TypewriterText text="Asish Ranjan Sahu" typingSpeed={100} startDelay={500} />
                </motion.h1>

                <motion.div variants={fadeInUp} className="space-y-4">
                  <h2 className="text-xl md:text-2xl text-slate-300 font-light leading-relaxed">
                    Full Stack Developer <span className="text-cyan-500 mx-2">|</span> React • Node.js • AI Integration <span className="text-cyan-500 mx-2">|</span> Building Scalable Web Apps
                  </h2>
                </motion.div>
              </div>

              <motion.div variants={fadeInUp} className="flex flex-wrap gap-4 pt-4">
                <a href="#projects" className="group relative px-6 py-3 bg-white text-black font-display font-bold tracking-wider uppercase overflow-hidden rounded-sm hover:scale-105 transition-transform">
                  <span className="relative z-10 group-hover:text-white transition-colors duration-300">View Projects</span>
                  <div className="absolute inset-0 bg-cyan-600 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 ease-out"></div>
                </a>
                
                <a 
                  href="mailto:asishranjansahu2003@gmail.com" 
                  className="group px-6 py-3 bg-cyan-500 text-black font-display font-bold tracking-wider uppercase hover:bg-cyan-400 transition-all flex items-center gap-2 rounded-sm hover:scale-105 shadow-[0_0_20px_rgba(6,182,212,0.5)] animate-pulse"
                >
                  <Mail className="w-4 h-4" />
                  Open to SWE Roles — Let's Connect
                </a>
                
                <a 
                  href="/resume.pdf" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  download
                  className="group px-6 py-3 bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-display font-bold tracking-wider uppercase hover:from-emerald-400 hover:to-teal-500 transition-all flex items-center gap-2 rounded-sm hover:scale-105 shadow-lg shadow-emerald-500/20"
                >
                  <FileText className="w-4 h-4" />
                  Download Resume
                </a>

                <a 
                  href="https://leetcode.com/u/Asishranjansahu/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="group px-6 py-3 bg-[#282828] text-[#FFA116] font-display font-bold tracking-wider uppercase hover:bg-[#3e3e3e] transition-all flex items-center gap-2 rounded-sm hover:scale-105 border border-[#FFA116]/20"
                >
                  <Code2 className="w-4 h-4" />
                  300+ DSA Problems
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

              <motion.div variants={fadeInUp} className="flex flex-wrap gap-4 md:gap-8 text-sm text-slate-400 font-mono pt-6 w-full border-t border-white/5 mt-8">
                <div className="flex items-center gap-2">
                  <span className="text-white font-bold text-lg">4</span> Projects
                </div>
                <div className="hidden md:block w-1 h-1 rounded-full bg-slate-600"></div>
                <div className="flex items-center gap-2">
                  <span className="text-white font-bold text-lg">275+</span> Users Impacted
                </div>
                <div className="hidden md:block w-1 h-1 rounded-full bg-slate-600"></div>
                <div className="flex items-center gap-2">
                  <span className="text-white font-bold text-lg">3</span> Deployments
                </div>
                <div className="hidden md:block w-1 h-1 rounded-full bg-slate-600"></div>
                <div className="flex items-center gap-2">
                  <span className="text-white font-bold text-lg">99.8%</span> Uptime
                </div>
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

        {/* Stats Card */}
        <StatsCard />

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
                    { title: "VIGNAN INSTITUTE OF TECHNOLOGY AND MANAGEMENT", degree: "B.Tech in CSE — CGPA: 7.74/10", year: "2021-2025", color: "purple", bgClass: "bg-purple-500/10", textClass: "text-purple-400", borderClass: "border-purple-500/20" },
                    { title: "Higher Secondary (+2)", degree: "CHSE Board — Percentage: 66%", year: "2021", color: "pink", bgClass: "bg-pink-500/10", textClass: "text-pink-400", borderClass: "border-pink-500/20" },
                    { title: "Secondary (10th)", degree: "HSC Board — Percentage: 66%", year: "2019", color: "yellow", bgClass: "bg-yellow-500/10", textClass: "text-yellow-400", borderClass: "border-yellow-500/20" }
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

        {/* Value Proposition Section */}
        <ValueProposition />

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

            {/* Tech Summary */}
            <div className="mb-20">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="bg-zinc-900/30 border border-white/5 rounded-2xl p-8 backdrop-blur-sm max-w-4xl mx-auto text-center hover:border-cyan-500/20 transition-colors duration-500"
              >
                <h4 className="text-slate-400 font-mono text-sm uppercase tracking-widest mb-6">Tech Stack Across Projects</h4>
                <div className="flex flex-wrap justify-center gap-3">
                  {['React', 'Next.js', 'Node.js', 'MongoDB', 'Firebase', 'WebSockets', 'NLP', 'Tailwind', 'Framer Motion', 'TypeScript'].map((tech, i) => (
                    <span key={i} className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-slate-300 text-sm font-medium hover:bg-white/10 hover:border-cyan-500/30 hover:text-cyan-400 transition-all cursor-default hover:-translate-y-1">
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Featured Projects Grid - Top Row */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
              {FEATURED_PROJECTS.map((project, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  onMouseEnter={() => setHoveredProject(i)}
                  onMouseLeave={() => setHoveredProject(null)}
                  className={`group relative bg-zinc-900/50 backdrop-blur-sm border rounded-xl overflow-hidden flex flex-col transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl ${getColorClass(project.color, 'border')} ${getColorClass(project.color, 'hoverBorder')} ${getColorClass(project.color, 'hoverShadow')}`}
              >
                {/* Difficulty Badge */}
                {project.difficulty && (
                  <div className={`absolute top-0 left-0 z-20 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white rounded-br-xl shadow-lg ${
                    project.difficulty === 'Advanced' ? 'bg-red-500' :
                    project.difficulty === 'Intermediate' ? 'bg-yellow-500' : 'bg-green-500'
                  }`}>
                    {project.difficulty}
                  </div>
                )}

                {/* Badge */}
                {project.badge && (
                  <div className="absolute top-0 right-0 z-20">
                    <div className={`px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-white ${
                      project.badge === 'AI Project' ? 'bg-emerald-500' :
                      project.badge === 'Production Ready' ? 'bg-cyan-500' :
                      project.badge === 'Currently Building' ? 'bg-pink-500' :
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
                  className="block h-52 relative overflow-hidden group-hover:h-56 transition-all duration-500 cursor-pointer"
                >
                  <img 
                    src={hoveredProject === i && project.demo ? project.demo : project.image} 
                    alt={project.title}
                    loading="lazy" 
                    onError={(e) => {
                      e.currentTarget.onerror = null;
                      e.currentTarget.src = "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop";
                    }}
                    className={`w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 ${project.inProgress ? 'grayscale hover:grayscale-0' : ''}`}
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
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2">
                      <span className={`w-1.5 h-1.5 rounded-full animate-pulse ${getColorClass(project.color, 'bg')}`} />
                      <span className={`text-xs font-mono font-bold uppercase tracking-wider ${getColorClass(project.color, 'text')}`}>
                        {project.tech}
                      </span>
                    </div>
                    {project.difficulty && (
                      <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${
                        project.difficulty === 'Advanced' ? 'text-red-400 border-red-500/30 bg-red-500/10' :
                        project.difficulty === 'Intermediate' ? 'text-yellow-400 border-yellow-500/30 bg-yellow-500/10' :
                        'text-green-400 border-green-500/30 bg-green-500/10'
                      }`}>
                        {project.difficulty}
                      </span>
                    )}
                  </div>

                  <a href={project.live} target="_blank" rel="noopener noreferrer" className="block group/title">
                    <h4 className={`font-display text-xl font-bold text-white mb-3 leading-tight transition-colors ${getColorClass(project.color, 'hoverText')}`}>
                      {project.title}
                    </h4>
                  </a>
                  
                  {/* Problem/Solution Display */}
                  {project.problem ? (
                    <div className="mb-6 space-y-2 text-xs bg-white/5 p-3 rounded-lg border border-white/5 hover:border-white/10 transition-colors">
                      <div className="flex gap-2">
                        <span className="text-red-400 font-bold uppercase w-14 shrink-0">Problem:</span>
                        <p className="text-slate-400 leading-relaxed">{project.problem}</p>
                      </div>
                      <div className="flex gap-2">
                        <span className="text-emerald-400 font-bold uppercase w-14 shrink-0">Solution:</span>
                        <p className="text-slate-300 leading-relaxed">{project.solution}</p>
                      </div>
                      <div className="flex gap-2">
                        <span className="text-purple-400 font-bold uppercase w-14 shrink-0">Result:</span>
                        <p className="text-slate-300 leading-relaxed">{project.result}</p>
                      </div>
                      {/* Impact Metric */}
                      {project.metric && (
                        <div className="mt-3 pt-2 border-t border-white/10 flex items-start gap-2">
                          <Activity className="w-3 h-3 text-cyan-400 mt-0.5 shrink-0" />
                          <p className="text-cyan-400 font-bold">{project.metric}</p>
                        </div>
                      )}
                    </div>
                  ) : (
                    <p className="text-slate-400 text-sm leading-relaxed mb-6 flex-1">
                      {project.desc}
                    </p>
                  )}

                  {/* Architecture Dropdown */}
                  {project.architecture && (
                    <div className="mb-4">
                      <details className="group/details">
                        <summary className="flex items-center gap-2 text-xs font-bold text-slate-500 cursor-pointer hover:text-cyan-400 transition-colors select-none">
                          <Cog className="w-3 h-3 transition-transform duration-300 group-open/details:rotate-90" />
                          Architecture Highlights
                        </summary>
                        <div className="mt-3 pl-3 border-l-2 border-white/10 space-y-1.5">
                          {project.architecture.map((item, idx) => (
                            <div key={idx} className="flex items-center gap-2 text-xs text-slate-400">
                              <span className={`w-1 h-1 rounded-full ${getColorClass(project.color, 'bg')}`} />
                              {item}
                            </div>
                          ))}
                        </div>
                      </details>
                    </div>
                  )}

                  {/* GitHub Stats */}
                  {project.stats && (
                    <div className="flex items-center gap-4 mb-4 pt-4 border-t border-white/5 text-[10px] font-mono text-slate-500">
                      <div className="flex items-center gap-1.5 hover:text-yellow-400 transition-colors" title="Stars">
                        <Star className="w-3 h-3" /> {project.stats.stars}
                      </div>
                      <div className="flex items-center gap-1.5 hover:text-cyan-400 transition-colors" title="Forks">
                        <GitFork className="w-3 h-3" /> {project.stats.forks}
                      </div>
                      <div className="flex items-center gap-1.5 hover:text-purple-400 transition-colors" title="Repo Size">
                        <HardDrive className="w-3 h-3" /> {project.stats.size}
                      </div>
                      {project.stats.lastUpdated && (
                        <div className="flex items-center gap-1.5 hover:text-green-400 transition-colors" title="Last Updated">
                          <RefreshCw className="w-3 h-3" /> {project.stats.lastUpdated}
                        </div>
                      )}
                    </div>
                  )}

                  {/* Action Links */}
                    <div className="flex items-center justify-between pt-2 mt-auto">
                      <a 
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-xs font-bold text-slate-500 hover:text-white transition-colors group/link"
                      >
                        <div className="p-2 rounded-lg bg-white/5 group-hover/link:bg-white/10 transition-colors">
                          <Github className="w-4 h-4" />
                        </div>
                        Source
                      </a>
                      
                      {project.caseStudy ? (
                         <button 
                           onClick={() => setActiveCaseStudy(project)}
                           className="flex items-center gap-2 px-3 py-2 rounded-lg bg-emerald-500/10 text-emerald-400 text-xs font-bold hover:bg-emerald-500/20 transition-colors border border-emerald-500/30"
                         >
                           <FileText className="w-3 h-3" /> Case Study
                         </button>
                      ) : (
                        <a 
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`flex items-center gap-2 text-xs font-bold transition-colors group/link ${getColorClass(project.color, 'linkText')}`}
                        >
                          Live Demo
                          <ExternalLink className="w-4 h-4 group-hover/link:translate-x-0.5 transition-transform" />
                        </a>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Other Projects Section */}
            {OTHER_PROJECTS.length > 0 && (
              <>
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
              </>
            )}
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

            <div className="space-y-24">
              {/* Primary Stack - The Hero Section */}
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}>
                <div className="flex items-center gap-4 mb-10 justify-center">
                  <div className="h-px bg-gradient-to-r from-transparent to-cyan-500 w-24" />
                  <span className="text-cyan-400 font-mono tracking-[0.2em] uppercase text-lg font-bold">Primary Stack</span>
                  <div className="h-px bg-gradient-to-l from-transparent to-cyan-500 w-24" />
                </div>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
                  {[
                    { label: 'React.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', desc: 'Frontend' },
                    { label: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg', desc: 'Backend' },
                    { label: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg', desc: 'Database' },
                    { label: 'REST APIs', icon: Server, isLucide: true, desc: 'Architecture' }
                  ].map((item, i) => (
                    <div key={i} className="group relative bg-zinc-900 rounded-2xl p-8 flex flex-col items-center justify-center gap-4 border border-cyan-500/30 shadow-[0_0_20px_rgba(6,182,212,0.15)] hover:shadow-[0_0_30px_rgba(6,182,212,0.25)] hover:-translate-y-2 transition-all duration-300">
                      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-transparent rounded-2xl opacity-50" />
                      {item.isLucide ? (
                        <item.icon className="w-16 h-16 text-cyan-400 drop-shadow-[0_0_10px_rgba(34,211,238,0.5)]" />
                      ) : (
                        <img src={item.icon} alt={item.label} className="w-16 h-16 object-contain drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]" />
                      )}
                      <div className="text-center relative z-10">
                        <span className="font-display text-xl font-bold text-white block mb-1">{item.label}</span>
                        <span className="font-mono text-xs text-cyan-400 tracking-wider uppercase">{item.desc}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Familiar With - Grid Layout */}
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}>
                <div className="flex items-center gap-4 mb-12">
                  <div className="h-px bg-gradient-to-r from-transparent to-slate-800 flex-1" />
                  <span className="text-slate-500 font-mono tracking-[0.2em] uppercase text-sm font-bold">Familiar With</span>
                  <div className="h-px bg-gradient-to-l from-transparent to-slate-800 flex-1" />
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                  {/* Frontend Group */}
                  <div className="space-y-4">
                    <h4 className="font-display text-lg font-bold text-slate-300 text-center mb-4">Frontend</h4>
                    <div className="grid grid-cols-2 gap-3">
                      {[
                        { label: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
                        { label: 'HTML5', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
                        { label: 'CSS3', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
                        { label: 'Tailwind', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg' },
                        { label: 'Bootstrap', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg' }
                      ].map((item, i) => (
                        <div key={i} className="bg-zinc-900/30 border border-white/5 rounded-lg p-3 flex flex-col items-center gap-2 hover:bg-zinc-800/50 transition-colors">
                          <img src={item.icon} alt={item.label} className="w-8 h-8 object-contain" />
                          <span className="text-xs text-slate-400 font-mono">{item.label}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Backend Group */}
                  <div className="space-y-4">
                    <h4 className="font-display text-lg font-bold text-slate-300 text-center mb-4">Backend</h4>
                    <div className="grid grid-cols-2 gap-3">
                      {[
                        { label: 'Express.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg' },
                        { label: 'Java', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' }
                      ].map((item, i) => (
                        <div key={i} className="bg-zinc-900/30 border border-white/5 rounded-lg p-3 flex flex-col items-center gap-2 hover:bg-zinc-800/50 transition-colors">
                          <img src={item.icon} alt={item.label} className="w-8 h-8 object-contain" />
                          <span className="text-xs text-slate-400 font-mono">{item.label}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Tools & Database */}
                  <div className="space-y-4">
                    <h4 className="font-display text-lg font-bold text-slate-300 text-center mb-4">Tools & DB</h4>
                    <div className="grid grid-cols-2 gap-3">
                      {[
                        { label: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
                        { label: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
                        { label: 'AWS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg' },
                        { label: 'Postman', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg' }
                      ].map((item, i) => (
                        <div key={i} className="bg-zinc-900/30 border border-white/5 rounded-lg p-3 flex flex-col items-center gap-2 hover:bg-zinc-800/50 transition-colors">
                          <img src={item.icon} alt={item.label} className="w-8 h-8 object-contain" />
                          <span className="text-xs text-slate-400 font-mono">{item.label}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Core Concepts */}
                  <div className="space-y-4">
                    <h4 className="font-display text-lg font-bold text-slate-300 text-center mb-4">Concepts</h4>
                    <div className="grid grid-cols-2 gap-3">
                      {[
                        { label: 'DSA', icon: Workflow },
                        { label: 'OOPS', icon: Shapes },
                        { label: 'Full Stack', icon: Code2 },
                        { label: 'Microservices', icon: Boxes }
                      ].map((item, i) => (
                        <div key={i} className="bg-zinc-900/30 border border-white/5 rounded-lg p-3 flex flex-col items-center gap-2 hover:bg-zinc-800/50 transition-colors">
                          <item.icon className="w-8 h-8 text-pink-400" />
                          <span className="text-xs text-slate-400 font-mono text-center">{item.label}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Engineering Process Section */}
        <EngineeringProcess />

        {/* GitHub Stats Section */}
        <GithubStats />

        {/* Testimonials */}
        <Testimonials />

        {/* Certifications Section */}
        <Certifications />

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

        {/* Blog Section */}
        <BlogSection />

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
                    <a href="https://linkedin.com/in/asish-ranjan-sahu" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-white/5 hover:bg-[#0077b5] hover:text-white transition-all duration-300" title="LinkedIn">
                      <Linkedin className="w-6 h-6" />
                    </a>
                    <a href="https://github.com/Asishranjansahu" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-white/5 hover:bg-[#333] hover:text-white transition-all duration-300" title="GitHub">
                      <Github className="w-6 h-6" />
                    </a>
                    <a href="https://leetcode.com/Asishranjansahu" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-white/5 hover:bg-[#FFA116] hover:text-white transition-all duration-300" title="LeetCode">
                      <Code2 className="w-6 h-6" />
                    </a>
                    <a href="https://hackerrank.com/asishranjansahu" target="_blank" rel="noopener noreferrer" className="p-3 rounded-full bg-white/5 hover:bg-[#2EC866] hover:text-white transition-all duration-300" title="HackerRank">
                      <Terminal className="w-6 h-6" />
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
                className="holo-card p-8 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 p-4">
                  <div className="flex items-center gap-2 text-emerald-400 text-xs font-mono bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"/>
                    Responds within 24hrs
                  </div>
                </div>

                <form 
                  ref={formRef}
                  onSubmit={sendEmail}
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
                    disabled={isSubmitting}
                    className="w-full py-4 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-lg font-bold tracking-widest uppercase hover:from-cyan-500 hover:to-blue-500 transition-all flex items-center justify-center gap-2 group disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <RefreshCw className="w-5 h-5 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </button>
                  {submitStatus === 'success' && (
                    <motion.div 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="p-4 bg-emerald-500/10 border border-emerald-500/20 rounded-lg text-emerald-400 text-sm text-center font-mono"
                    >
                      Message sent successfully! I'll get back to you within 24 hours.
                    </motion.div>
                  )}
                  {submitStatus === 'error' && (
                    <motion.div 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="p-4 bg-red-500/10 border border-red-500/20 rounded-lg text-red-400 text-sm text-center font-mono"
                    >
                      Failed to send message. Please try again or email me directly.
                    </motion.div>
                  )}
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
