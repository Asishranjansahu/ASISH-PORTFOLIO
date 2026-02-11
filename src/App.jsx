import React, { useEffect, useState } from 'react';
import { Github, Linkedin, Mail, ExternalLink, Code2, Terminal, Cpu, GraduationCap, Briefcase, Award, Cloud, Database, Cog, CircuitBoard, Image, Server, Globe, GitPullRequest, Shapes, HardDrive, Boxes, Workflow, Lightbulb, Users, RefreshCw, MessageCircle, MapPin, Send, User } from 'lucide-react';
import { motion } from 'framer-motion';
import GlitchText from './components/GlitchText';
import TypewriterText from './components/TypewriterText';

import Background3D from './components/Background3D';

function App() {
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

  useEffect(() => {
    const prefersReducedMotion = typeof window !== "undefined" && window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!prefersReducedMotion) {
      const t = setTimeout(() => setShow3D(true), 600);
      return () => clearTimeout(t);
    }
  }, []);

  return (
    <div className="relative min-h-screen bg-black text-slate-100 font-sans selection:bg-cyan-500/30 overflow-x-hidden">
      {show3D && <Background3D />}
      
      {/* Overlay Pattern */}
      <div className="fixed inset-0 z-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none mix-blend-overlay"></div>

      

      <main className="relative z-10">
        {/* Hero Section */}
        <section id="about" className="min-h-screen flex items-center justify-center px-6 relative">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              className="order-2 lg:order-1 space-y-8"
            >
              <motion.div variants={fadeInUp} className="inline-block px-4 py-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 font-mono text-xs tracking-[0.2em] uppercase box-glow">
                System Online
              </motion.div>
              
              <div className="space-y-2">
                <motion.h2 variants={fadeInUp} className="font-display text-5xl md:text-8xl font-bold leading-none tracking-tighter">
                  <GlitchText text="FUTURE" />
                  <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 text-glow">
                    REALITY
                  </span>
                </motion.h2>
              </div>

              <motion.div variants={fadeInUp} className="text-xl text-slate-400 max-w-xl leading-relaxed border-l-2 border-cyan-500/50 pl-6 min-h-[80px]">
                <TypewriterText 
                  text="I am Asish Ranjan Sahu. A Full Stack Developer engineering the next generation of digital experiences."
                  typingSpeed={40}
                  startDelay={1500}
                />
              </motion.div>

              <motion.div variants={fadeInUp} className="flex gap-6 pt-4">
                <a href="#projects" className="group relative px-8 py-4 bg-white text-black font-display font-bold tracking-widest uppercase overflow-hidden">
                  <span className="relative z-10 group-hover:text-white transition-colors duration-300">View Work</span>
                  <div className="absolute inset-0 bg-cyan-600 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 ease-out"></div>
                </a>
                <a href="#contact" className="group px-8 py-4 border border-white/20 font-display font-bold tracking-widest uppercase hover:bg-white/5 transition-all">
                  Contact
                </a>
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
                
                {/* Floating Elements */}
                <motion.div 
                  animate={{ y: [0, -20, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -right-8 top-20 bg-black/50 backdrop-blur-xl p-4 border border-cyan-500/30 rounded-lg box-glow"
                >
                  <Code2 className="w-8 h-8 text-cyan-400" />
                </motion.div>
                <motion.div 
                  animate={{ y: [0, 20, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  className="absolute -left-8 bottom-40 bg-black/50 backdrop-blur-xl p-4 border border-purple-500/30 rounded-lg box-glow"
                >
                  <Cpu className="w-8 h-8 text-purple-400" />
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Education & Experience Grid */}
        <section id="education" className="py-32 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-16">
              <div>
                <motion.h3 
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  className="font-display text-3xl font-bold mb-12 flex items-center gap-4 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-white"
                >
                  <GraduationCap className="w-8 h-8 text-cyan-400" />
                  EDUCATION
                </motion.h3>
                <div className="space-y-8">
                  {[
                    { title: "NIST University", degree: "M.Tech in CSE", year: "Pursuing", color: "cyan" },
                    { title: "VITAM", degree: "B.Tech in CSE", year: "2021-2025", color: "purple" }
                  ].map((item, i) => (
                    <motion.div 
                      key={i}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.2 }}
                      className="holo-card p-8 group"
                    >
                      <div className="flex justify-between items-start">
                        <div>
                          <h4 className="font-display text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">{item.title}</h4>
                          <p className="text-slate-400 mt-2 font-mono text-sm">{item.degree}</p>
                        </div>
                        <span className={`px-3 py-1 rounded-full text-xs font-bold bg-${item.color}-500/10 text-${item.color}-400 border border-${item.color}-500/20`}>
                          {item.year}
                        </span>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              <div>
                <motion.h3 
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  className="font-display text-3xl font-bold mb-12 flex items-center gap-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-white"
                >
                  <Briefcase className="w-8 h-8 text-purple-400" />
                  EXPERIENCE
                </motion.h3>
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  className="holo-card p-8 relative overflow-visible"
                >
                  <div className="absolute -left-3 top-8 w-6 h-6 bg-purple-500 rounded-full blur-lg"></div>
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
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-32 px-6 bg-black/50">
          <div className="max-w-7xl mx-auto">
            <motion.h3 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="font-display text-4xl md:text-6xl font-bold mb-20 text-center"
            >
              FEATURED <span className="text-stroke-cyan text-transparent">PROJECTS</span>
            </motion.h3>
            
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
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-24 bg-[#0f1012]">
          <div className="max-w-7xl mx-auto px-6">
            <motion.h3 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="font-display text-4xl md:text-6xl font-bold mb-12 text-cyan-400"
            >
              Technical Skills
            </motion.h3>
            <div className="space-y-12">
              <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} className="space-y-4">
                <h4 className="font-display text-xl md:text-2xl font-bold text-white">Programming Languages</h4>
                <div className="flex gap-6 overflow-x-auto scroll-snap-x pb-2">
                  {[
                    { label: 'Java', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
                    { label: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
                    { label: 'HTML', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
                    { label: 'CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' }
                  ].map((item, i) => (
                    <div key={item.label} className="snap-center group min-w-[180px] rounded-2xl p-4 bg-zinc-900/70 border border-zinc-800 hover:border-cyan-500/50 transition-all hover:translate-y-[-3px] hover:shadow-[0_12px_32px_rgba(34,211,238,0.15)]">
                      <div className="flex items-center gap-3">
                        <img src={item.icon} alt={item.label} className="w-8 h-8 object-contain group-hover:scale-110 transition-transform" />
                        <span className="font-mono text-sm text-slate-300 group-hover:text-cyan-400">{item.label}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} className="space-y-4">
                <h4 className="font-display text-xl md:text-2xl font-bold text-white">Frameworks & Libraries</h4>
                <div className="flex gap-6 overflow-x-auto scroll-snap-x pb-2">
                  {[
                    { label: 'React.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
                    { label: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-plain.svg' },
                    { label: 'Bootstrap', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg' },
                    { label: 'Express.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg' }
                  ].map((item, i) => (
                    <div key={item.label} className="snap-center group min-w-[180px] rounded-2xl p-4 bg-zinc-900/70 border border-zinc-800 hover:border-cyan-500/50 transition-all hover:translate-y-[-3px] hover:shadow-[0_12px_32px_rgba(34,211,238,0.15)]">
                      <div className="flex items-center gap-3">
                        <img src={item.icon} alt={item.label} className="w-8 h-8 object-contain group-hover:scale-110 transition-transform" />
                        <span className="font-mono text-sm text-slate-300 group-hover:text-cyan-400">{item.label}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} className="space-y-4">
                <h4 className="font-display text-xl md:text-2xl font-bold text-white">Databases</h4>
                <div className="flex gap-6 overflow-x-auto scroll-snap-x pb-2">
                  {[
                    { label: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
                    { label: 'SQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
                    { label: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' }
                  ].map((item, i) => (
                    <div key={item.label} className="snap-center group min-w-[180px] rounded-2xl p-4 bg-zinc-900/70 border border-zinc-800 hover:border-cyan-500/50 transition-all hover:translate-y-[-3px] hover:shadow-[0_12px_32px_rgba(34,211,238,0.15)]">
                      <div className="flex items-center gap-3">
                        <img src={item.icon} alt={item.label} className="w-8 h-8 object-contain group-hover:scale-110 transition-transform" />
                        <span className="font-mono text-sm text-slate-300 group-hover:text-cyan-400">{item.label}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} className="space-y-4">
                <h4 className="font-display text-xl md:text-2xl font-bold text-white">Developer Tools</h4>
                <div className="flex gap-6 overflow-x-auto scroll-snap-x pb-2">
                  {[
                    { label: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
                    { label: 'VS Code', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg' },
                    { label: 'Postman', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg' },
                    { label: 'npm', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg' }
                  ].map((item, i) => (
                    <div key={item.label} className="snap-center group min-w-[180px] rounded-2xl p-4 bg-zinc-900/70 border border-zinc-800 hover:border-cyan-500/50 transition-all hover:translate-y-[-3px] hover:shadow-[0_12px_32px_rgba(34,211,238,0.15)]">
                      <div className="flex items-center gap-3">
                        <img src={item.icon} alt={item.label} className="w-8 h-8 object-contain group-hover:scale-110 transition-transform" />
                        <span className="font-mono text-sm text-slate-300 group-hover:text-cyan-400">{item.label}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} className="space-y-4">
                <h4 className="font-display text-xl md:text-2xl font-bold text-white">Core Competencies</h4>
                <div className="flex gap-6 overflow-x-auto scroll-snap-x pb-2">
                  {[
                    { label: 'Data Structures & Algorithms', icon: Workflow },
                    { label: 'Full Stack Development', icon: Code2 },
                    { label: 'RESTful APIs', icon: Server },
                    { label: 'Web Development', icon: Globe },
                    { label: 'OOPS', icon: Shapes },
                    { label: 'Code Review', icon: GitPullRequest },
                    { label: 'Data Modeling', icon: Database },
                    { label: 'Caching', icon: HardDrive },
                    { label: 'Microservices fundamentals', icon: Boxes }
                  ].map((item, i) => (
                    <div key={item.label} className="snap-center group min-w-[220px] rounded-2xl p-4 bg-zinc-900/70 border border-zinc-800 hover:border-cyan-500/50 transition-all hover:translate-y-[-3px] hover:shadow-[0_12px_32px_rgba(34,211,238,0.15)]">
                      <div className="flex items-center gap-3">
                        <item.icon className="w-6 h-6 text-cyan-400 group-hover:scale-110 transition-transform" />
                        <span className="font-mono text-sm text-slate-300 group-hover:text-cyan-400">{item.label}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} className="space-y-4">
                <h4 className="font-display text-xl md:text-2xl font-bold text-white">Soft Skills</h4>
                <div className="flex gap-6 overflow-x-auto scroll-snap-x pb-2">
                  {[
                    { label: 'Problem Solving', icon: Lightbulb },
                    { label: 'Team Collaboration', icon: Users },
                    { label: 'Agile Development', icon: RefreshCw },
                    { label: 'Communication', icon: MessageCircle },
                    { label: 'AWS (EC2, S3 Basics)', icon: Cloud }
                  ].map((item, i) => (
                    <div key={item.label} className="snap-center group min-w-[220px] rounded-2xl p-4 bg-zinc-900/70 border border-zinc-800 hover:border-cyan-500/50 transition-all hover:translate-y-[-3px] hover:shadow-[0_12px_32px_rgba(34,211,238,0.15)]">
                      <div className="flex items-center gap-3">
                        <item.icon className="w-6 h-6 text-cyan-400 group-hover:scale-110 transition-transform" />
                        <span className="font-mono text-sm text-slate-300 group-hover:text-cyan-400">{item.label}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <section id="achievements" className="py-32 px-6 bg-black/60">
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
        <section id="contact" className="py-32 px-6 relative overflow-hidden">
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
    </div>
  );
}

export default App;
