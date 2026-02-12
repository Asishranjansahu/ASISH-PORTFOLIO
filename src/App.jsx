import React, { useEffect, useState } from 'react';
import { Github, Linkedin, Mail, ExternalLink, Code2, Cpu, GraduationCap, Briefcase, Award, Cloud, Database, Cog, CircuitBoard, Image, Server, Globe, GitPullRequest, Shapes, HardDrive, Boxes, Workflow, Lightbulb, Users, RefreshCw, MessageCircle, MapPin, Send, User, FileText, FolderGit2, Terminal, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import GlitchText from './components/GlitchText';
import TypewriterText from './components/TypewriterText';
import Navbar from './components/Navbar';
import TerminalComponent from './components/Terminal';
import CommandPalette from './components/CommandPalette';
import LiveDashboard from './components/LiveDashboard';
import EngineeringProcess from './components/EngineeringProcess';
import ProfileCard from './components/ProfileCard';
import SecretDevHQ from './components/SecretDevHQ';

import GithubStats from './components/GithubStats';
import HireMe from './components/HireMe';
import Background3D from './components/Background3D';

function App() {
  const [matrixMode, setMatrixMode] = useState(false);
  const [konamiIndex, setKonamiIndex] = useState(0);
  const [isProfileOpen, setIsProfileOpen] = useState(true);
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
              
              <div className="space-y-2">

                <motion.h2 variants={fadeInUp} className="font-display text-5xl md:text-8xl font-bold leading-none tracking-tighter">
                  <GlitchText text="FUTURE" />
                  <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 text-glow">
                    REALITY
                  </span>
                </motion.h2>
              </div>

              <motion.div variants={fadeInUp} className="text-xl text-slate-400 max-w-xl leading-relaxed border-l-2 border-cyan-500/50 pl-6">
                I am Asish Ranjan Sahu. A Full Stack Developer engineering the next generation of digital experiences.
              </motion.div>

              <motion.div variants={fadeInUp} className="flex flex-wrap gap-6 pt-4">
                <a href="#projects" className="group relative px-8 py-4 bg-white text-black font-display font-bold tracking-widest uppercase overflow-hidden">
                  <span className="relative z-10 group-hover:text-white transition-colors duration-300">View Work</span>
                  <div className="absolute inset-0 bg-cyan-600 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 ease-out"></div>
                </a>
                <a href="#contact" className="group px-8 py-4 border border-white/20 font-display font-bold tracking-widest uppercase hover:bg-white/5 transition-all">
                  Contact
                </a>
                <a 
                  href="/resume.pdf" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="group px-8 py-4 border border-cyan-500/30 font-display font-bold tracking-widest uppercase hover:bg-cyan-500/10 transition-all flex items-center gap-2 text-cyan-400"
                >
                  <FileText className="w-5 h-5" />
                  Resume
                </a>
              </motion.div>
              
              <motion.div variants={fadeInUp}>
                <LiveDashboard />
              </motion.div>

            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.5, ease: "circOut" }}
              className="order-1 lg:order-2 flex justify-center lg:justify-end relative"
            >
              <div className="relative w-80 h-80 md:w-[500px] md:h-[500px]">
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
                  animate={{ y: [0, -20, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -top-4 -right-4 w-16 h-16 bg-black/80 border border-cyan-500/30 rounded-xl flex items-center justify-center backdrop-blur-md shadow-lg shadow-cyan-500/20"
                >
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" className="w-8 h-8 animate-spin-slow" />
                </motion.div>

                <motion.div
                  animate={{ y: [0, 20, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  className="absolute top-1/2 -right-12 w-14 h-14 bg-black/80 border border-purple-500/30 rounded-xl flex items-center justify-center backdrop-blur-md shadow-lg shadow-purple-500/20"
                >
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt="Node" className="w-7 h-7" />
                </motion.div>

                <motion.div
                  animate={{ y: [0, -15, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                  className="absolute -bottom-8 right-10 w-12 h-12 bg-black/80 border border-yellow-500/30 rounded-xl flex items-center justify-center backdrop-blur-md shadow-lg shadow-yellow-500/20"
                >
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JS" className="w-6 h-6 rounded" />
                </motion.div>

                <motion.div
                  animate={{ x: [0, 15, 0] }}
                  transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                  className="absolute -left-8 top-1/3 w-14 h-14 bg-black/80 border border-blue-500/30 rounded-xl flex items-center justify-center backdrop-blur-md shadow-lg shadow-blue-500/20"
                >
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" alt="Python" className="w-7 h-7" />
                </motion.div>

                <motion.div
                  animate={{ x: [0, -15, 0] }}
                  transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
                  className="absolute bottom-1/4 -left-6 w-12 h-12 bg-black/80 border border-red-500/30 rounded-xl flex items-center justify-center backdrop-blur-md shadow-lg shadow-red-500/20"
                >
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" alt="Java" className="w-6 h-6" />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* About Me Section */}
        <section id="about-me" className="py-32 px-6 scroll-mt-20 relative">
          <div className="max-w-7xl mx-auto">
            <motion.h3 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="font-display text-3xl font-bold mb-16 flex items-center gap-4 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500"
            >
              <User className="w-8 h-8 text-cyan-400" />
              ABOUT ME
            </motion.h3>

            <div className="grid md:grid-cols-2 gap-16 items-start">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="space-y-6 text-slate-400 leading-relaxed text-lg"
              >
                <p>
                  I am a passionate <span className="text-cyan-400 font-bold">Full Stack Developer</span> with a deep love for building scalable web applications and exploring emerging technologies. My journey in tech is driven by a curiosity to understand how things work under the hood and a desire to create impactful digital solutions.
                </p>
                <p>
                  With a strong foundation in <span className="text-purple-400 font-bold">Computer Science</span>, I specialize in the MERN stack and have experience working with modern frameworks and cloud technologies. When I'm not coding, you can find me exploring new tech trends, contributing to open source, or solving complex algorithmic problems.
                </p>
                
                <div className="pt-8 grid grid-cols-2 gap-4">
                  <div className="p-4 border border-cyan-500/20 bg-cyan-500/5 rounded-lg">
                    <h4 className="text-cyan-400 font-bold mb-2 flex items-center gap-2">
                      <Terminal className="w-4 h-4" /> Frontend
                    </h4>
                    <p className="text-sm">React, Next.js, Tailwind CSS, Framer Motion</p>
                  </div>
                  <div className="p-4 border border-purple-500/20 bg-purple-500/5 rounded-lg">
                    <h4 className="text-purple-400 font-bold mb-2 flex items-center gap-2">
                      <Server className="w-4 h-4" /> Backend
                    </h4>
                    <p className="text-sm">Node.js, Express, MongoDB, PostgreSQL</p>
                  </div>
                  <div className="p-4 border border-pink-500/20 bg-pink-500/5 rounded-lg">
                    <h4 className="text-pink-400 font-bold mb-2 flex items-center gap-2">
                      <Database className="w-4 h-4" /> Database
                    </h4>
                    <p className="text-sm">MongoDB, MySQL, Firebase</p>
                  </div>
                  <div className="p-4 border border-emerald-500/20 bg-emerald-500/5 rounded-lg">
                    <h4 className="text-emerald-400 font-bold mb-2 flex items-center gap-2">
                      <Cloud className="w-4 h-4" /> Tools
                    </h4>
                    <p className="text-sm">Git, Docker, AWS, Vercel</p>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2 }}
                className="relative"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-2xl blur-xl"></div>
                <div className="relative bg-black/50 border border-white/10 rounded-2xl p-8 backdrop-blur-sm">
                  <div className="flex items-center gap-2 mb-6 border-b border-white/10 pb-4">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    <span className="ml-4 text-xs font-mono text-slate-500">developer.js</span>
                  </div>
                  <div className="font-mono text-sm space-y-4">
                    <div>
                      <span className="text-purple-400">const</span> <span className="text-cyan-400">developer</span> <span className="text-white">=</span> <span className="text-yellow-400">{`{`}</span>
                    </div>
                    <div className="pl-4">
                      <span className="text-slate-400">name:</span> <span className="text-green-400">"Asish Ranjan Sahu"</span>,
                    </div>
                    <div className="pl-4">
                      <span className="text-slate-400">role:</span> <span className="text-green-400">"Full Stack Developer"</span>,
                    </div>
                    <div className="pl-4">
                      <span className="text-slate-400">traits:</span> <span className="text-yellow-400">[</span>
                    </div>
                    <div className="pl-8">
                      <span className="text-green-400">"Problem Solver"</span>,
                    </div>
                    <div className="pl-8">
                      <span className="text-green-400">"Continuous Learner"</span>,
                    </div>
                    <div className="pl-8">
                      <span className="text-green-400">"Tech Enthusiast"</span>
                    </div>
                    <div className="pl-4">
                      <span className="text-yellow-400">]</span>,
                    </div>
                    <div className="pl-4">
                      <span className="text-slate-400">hardWorker:</span> <span className="text-purple-400">true</span>,
                    </div>
                    <div className="pl-4">
                      <span className="text-slate-400">quickLearner:</span> <span className="text-purple-400">true</span>
                    </div>
                    <div>
                      <span className="text-yellow-400">{`}`}</span>;
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

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
                    { title: "NIST University", degree: "M.Tech in CSE", year: "Pursuing", color: "cyan", bgClass: "bg-cyan-500/10", textClass: "text-cyan-400", borderClass: "border-cyan-500/20" },
                    { title: "VITAM", degree: "B.Tech in CSE", year: "2021-2025", color: "purple", bgClass: "bg-purple-500/10", textClass: "text-purple-400", borderClass: "border-purple-500/20" }
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
                      <div className="flex justify-between items-start mb-6">
                        <div>
                          <h4 className="font-display text-2xl font-bold text-white">Web Developer</h4>
                          <p className="text-purple-400 font-mono text-sm mt-1">Innovixion Tech</p>
                        </div>
                        <span className="text-xs font-mono text-slate-500">Nov - Dec 2023</span>
                      </div>
                      <p className="text-slate-400 leading-relaxed border-l-2 border-white/10 pl-4">
                        Developed responsive applications implementing CRUD operations. Optimized performance and maintained clean code architecture.
                      </p>
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
              className="font-display text-4xl md:text-6xl font-bold mb-20 text-center"
            >
              FEATURED <span className="text-stroke-cyan text-transparent">PROJECTS</span>
            </motion.h3>
            
            <div className="relative border-l-2 border-cyan-500/30 ml-3 md:ml-6 pl-8 md:pl-12 py-4">
              {/* Timeline Icon */}
              <span className="absolute -left-5 md:-left-[73px] top-0 flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-full bg-black border border-cyan-500 text-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.3)] z-10">
                <FolderGit2 className="w-5 h-5 md:w-6 md:h-6" />
              </span>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  {
                    title: "Smart Campus",
                    tech: "IoT • Flutter • Firebase",
                    desc: "Automated campus management system integrating IoT sensors.",
                    color: "cyan",
                    image: "https://placehold.co/1200x800/0f172a/ffffff?text=Smart+Campus"
                  },
                  {
                    title: "Dev Connect",
                    tech: "MERN • Socket.IO",
                    desc: "Real-time collaboration platform for developers.",
                    color: "purple",
                    image: "https://placehold.co/1200x800/0f172a/ffffff?text=Dev+Connect"
                  },
                  {
                    title: "Task Master",
                    tech: "JS • LocalStorage",
                    desc: "Dynamic task management with persistent storage.",
                    color: "pink",
                    image: "https://placehold.co/1200x800/0f172a/ffffff?text=Task+Master"
                  },
                  {
                    title: "Thread Sense",
                    tech: "React • Tailwind • Firebase",
                    desc: "Social threads app with realtime updates and modern UI.",
                    color: "emerald",
                    image: "/projects/thread-sense.svg"
                  },
                  {
                    title: "Portfolio",
                    tech: "React • Vite • Tailwind",
                    desc: "Personal portfolio with 3D background and animated sections.",
                    color: "sky",
                    image: "https://placehold.co/1200x800/0f172a/ffffff?text=Portfolio"
                  },
                  {
                    title: "ZERODHA CLONE",
                    tech: "React • Chart.js",
                    desc: "Brokerage UI clone with charts and order flow screens.",
                    color: "indigo",
                    image: "https://placehold.co/1200x800/0f172a/ffffff?text=ZERODHA+CLONE"
                  }
                ].map((project, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="holo-card group h-full"
                  >
                    <div className="h-48 relative overflow-hidden">
                      <img 
                        src={project.image} 
                        alt={project.title} 
                        loading="lazy"
                        onError={(e) => {
                          e.currentTarget.onerror = null;
                          e.currentTarget.src = "https://placehold.co/1200x800/0f172a/ffffff?text=Project+Image";
                        }}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" 
                      />
                      <div className={`absolute inset-0 bg-gradient-to-tr from-${project.color}-500/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-90 group-hover:scale-100">
                        <ExternalLink className="w-12 h-12 text-white" />
                      </div>
                    </div>
                    <div className="p-8">
                      <h4 className="font-display text-2xl font-bold mb-2 group-hover:text-cyan-400 transition-colors">{project.title}</h4>
                      <p className="text-xs font-mono text-slate-500 mb-4 uppercase tracking-wider">{project.tech}</p>
                      <p className="text-slate-400 text-sm leading-relaxed mb-6">{project.desc}</p>
                      <div className="flex gap-4">
                        <button className="text-xs font-bold uppercase tracking-widest hover:text-cyan-400 transition-colors flex items-center gap-2">
                          <Github className="w-4 h-4" /> Code
                        </button>
                        <button className="text-xs font-bold uppercase tracking-widest hover:text-purple-400 transition-colors flex items-center gap-2">
                          <ExternalLink className="w-4 h-4" /> Live
                        </button>
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
                { title: "Hackathon Finalist", desc: "Built a feature-rich web app under time constraints.", color: "cyan" },
                { title: "Top Performer", desc: "Recognized for consistent delivery and code quality.", color: "purple" },
                { title: "AWS EC2/S3 Basics", desc: "Hands-on with EC2 instances and S3 storage.", color: "pink" }
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
