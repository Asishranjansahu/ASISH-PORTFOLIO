import React, { useState, useEffect } from 'react';
import { Code2, Menu, X, FolderGit2, GraduationCap, Briefcase, Award, Mail, User, Cpu, Brain, Github } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About Me', href: '#about-me', icon: User },
    { name: 'Skills', href: '#skills', icon: Cpu },
    { name: 'Process', href: '#how-i-think', icon: Brain },
    { name: 'Projects', href: '#projects', icon: FolderGit2 },
    { name: 'Education', href: '#education', icon: GraduationCap },
    { name: 'Experience', href: '#experience', icon: Briefcase },
    { name: 'Achievements', href: '#achievements', icon: Award },
    { name: 'Activity', href: '#github-stats', icon: Github },
    { name: 'Contact', href: '#contact', icon: Mail },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${scrolled ? 'bg-black/80 backdrop-blur-md border-b border-white/10 py-4' : 'bg-gradient-to-b from-black/80 to-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="relative">
            <div className="absolute inset-0 bg-cyan-500 blur-lg opacity-20 group-hover:opacity-40 transition-opacity"></div>
            <div className="relative border border-white/10 p-2 rounded-lg bg-black/50 hover:border-cyan-500/50 transition-colors">
              <Code2 className="w-8 h-8 text-cyan-400" />
            </div>
          </div>
          <span className="font-display font-bold text-xl tracking-tight text-white group-hover:text-cyan-400 transition-colors">
            Asish<span className="text-cyan-400">.dev</span>
          </span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="group relative p-2"
              title={link.name}
            >
              <div className="absolute inset-0 bg-cyan-500/20 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300"></div>
              <link.icon className="w-6 h-6 text-slate-400 group-hover:text-cyan-400 transition-colors relative z-10" />
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute top-full left-0 right-0 bg-black/95 backdrop-blur-xl border-b border-white/10 p-6 md:hidden"
            >
              <div className="flex flex-col gap-6">
                {navLinks.map((link) => (
                  <a 
                    key={link.name} 
                    href={link.href} 
                    className="text-lg font-display font-bold uppercase tracking-widest text-slate-400 hover:text-cyan-400 flex items-center gap-4"
                    onClick={() => setIsOpen(false)}
                  >
                    <link.icon className="w-5 h-5 text-cyan-400" />
                    {link.name}
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;