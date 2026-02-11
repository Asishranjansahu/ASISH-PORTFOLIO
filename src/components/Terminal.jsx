import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal as TerminalIcon, X, Maximize2, Minus } from 'lucide-react';

const Terminal = ({ onClose }) => {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState([
    { type: 'system', content: 'Welcome to AsishOS v1.0.0' },
    { type: 'system', content: 'Type "help" for available commands.' },
  ]);
  const inputRef = useRef(null);
  const bottomRef = useRef(null);

  const commands = {
    help: () => [
      { type: 'info', content: 'Available commands:' },
      { type: 'success', content: '  about    - Who am I?' },
      { type: 'success', content: '  projects - View my work' },
      { type: 'success', content: '  skills   - Technical stack' },
      { type: 'success', content: '  blog     - Latest updates' },
      { type: 'success', content: '  contact  - Get in touch' },
      { type: 'success', content: '  clear    - Clear terminal' },
      { type: 'success', content: '  exit     - Close terminal' },
    ],
    about: () => [
      { type: 'info', content: 'Asish Ranjan Sahu | Full Stack Developer' },
      { type: 'text', content: 'Passionate about building scalable web applications and interactive experiences.' },
      { type: 'text', content: 'Currently learning: Next.js, Three.js, System Design.' },
    ],
    projects: () => [
      { type: 'info', content: 'Featured Projects:' },
      { type: 'text', content: '1. Portfolio (This site) - React, Tailwind, Framer Motion' },
      { type: 'text', content: '2. E-commerce Platform - MERN Stack' },
      { type: 'text', content: '3. Task Manager - Next.js, TypeScript' },
      { type: 'warning', content: 'Type "open <number>" to view details (simulated).' },
    ],
    skills: () => [
      { type: 'info', content: 'Frontend: React, Next.js, Tailwind, Three.js' },
      { type: 'info', content: 'Backend: Node.js, Express, MongoDB, PostgreSQL' },
      { type: 'info', content: 'Tools: Git, Docker, AWS, Linux' },
    ],
    blog: () => [
      { type: 'info', content: 'Latest Dev Logs:' },
      { type: 'text', content: '2025-02-12: Added Konami Code support. Try it! (Up, Up, Down...)' },
      { type: 'text', content: '2025-02-10: Optimized 3D background performance.' },
      { type: 'text', content: '2025-02-01: Built this terminal because GUIs are overrated.' },
    ],
    contact: () => [
      { type: 'info', content: 'Email: contact@asish.dev' },
      { type: 'info', content: 'GitHub: github.com/Asishranjansahu' },
      { type: 'info', content: 'LinkedIn: linkedin.com/in/asishranjansahu' },
    ],
    clear: () => [],
    exit: () => {
      onClose();
      return [];
    },
  };

  const handleCommand = (e) => {
    if (e.key === 'Enter') {
      const cmd = input.trim().toLowerCase();
      let newOutput = [...output, { type: 'command', content: `> ${input}` }];

      if (commands[cmd]) {
        if (cmd === 'clear') {
          newOutput = [];
        } else {
          const result = commands[cmd]();
          if (result) newOutput = [...newOutput, ...result];
        }
      } else if (cmd !== '') {
        newOutput.push({ type: 'error', content: `Command not found: ${cmd}. Type "help".` });
      }

      setOutput(newOutput);
      setInput('');
    }
  };

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [output]);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.9, y: 20 }}
      drag
      dragConstraints={{ left: -100, right: 100, top: -100, bottom: 100 }}
      className="fixed inset-0 md:inset-auto md:top-20 md:right-20 z-50 w-full md:w-[600px] h-[400px] md:h-[500px] bg-black/90 border border-green-500/30 rounded-lg shadow-[0_0_30px_rgba(0,255,0,0.2)] backdrop-blur-md overflow-hidden flex flex-col font-mono text-sm md:text-base"
    >
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-2 bg-green-500/10 border-b border-green-500/30 cursor-move">
        <div className="flex items-center gap-2 text-green-400">
          <TerminalIcon className="w-4 h-4" />
          <span className="font-bold">guest@asish.dev:~</span>
        </div>
        <div className="flex items-center gap-2">
          <button className="p-1 hover:bg-green-500/20 rounded text-green-400"><Minus className="w-3 h-3" /></button>
          <button className="p-1 hover:bg-green-500/20 rounded text-green-400"><Maximize2 className="w-3 h-3" /></button>
          <button onClick={onClose} className="p-1 hover:bg-red-500/20 rounded text-red-400"><X className="w-3 h-3" /></button>
        </div>
      </div>

      {/* Body */}
      <div 
        className="flex-1 p-4 overflow-y-auto custom-scrollbar"
        onClick={() => inputRef.current?.focus()}
      >
        {output.map((line, i) => (
          <div key={i} className={`mb-1 ${
            line.type === 'command' ? 'text-white' :
            line.type === 'error' ? 'text-red-400' :
            line.type === 'success' ? 'text-green-400' :
            line.type === 'warning' ? 'text-yellow-400' :
            'text-slate-300'
          }`}>
            {line.content}
          </div>
        ))}
        <div className="flex items-center gap-2 text-green-400 mt-2">
          <span>$</span>
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleCommand}
            className="bg-transparent border-none outline-none flex-1 text-white caret-green-400"
            autoFocus
          />
        </div>
        <div ref={bottomRef} />
      </div>
    </motion.div>
  );
};

export default Terminal;
