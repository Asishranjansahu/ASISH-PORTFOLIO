import React, { useState, useEffect, useRef } from 'react';
import { Search, Terminal, User, FolderGit2, Mail, FileText, ArrowRight, Command } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const CommandPalette = ({ isOpen, onClose, navigateTo }) => {
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef(null);

  const commands = [
    { id: 'about', label: 'About Me', icon: User, action: () => navigateTo('about-me'), shortcut: 'G + A' },
    { id: 'projects', label: 'Projects', icon: FolderGit2, action: () => navigateTo('projects'), shortcut: 'G + P' },
    { id: 'contact', label: 'Contact', icon: Mail, action: () => navigateTo('contact'), shortcut: 'G + C' },
    { id: 'resume', label: 'View Resume', icon: FileText, action: () => window.open('/resume.pdf', '_blank'), shortcut: 'R' },
    { id: 'terminal', label: 'Open Terminal', icon: Terminal, action: () => navigateTo('terminal'), shortcut: 'T' },
  ];

  const filteredCommands = commands.filter(cmd => 
    cmd.label.toLowerCase().includes(query.toLowerCase()) || 
    cmd.id.includes(query.toLowerCase())
  );

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
      setQuery('');
      setSelectedIndex(0);
    }
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isOpen) return;

      if (e.key === 'ArrowDown') {
        e.preventDefault();
        setSelectedIndex(prev => (prev + 1) % filteredCommands.length);
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        setSelectedIndex(prev => (prev - 1 + filteredCommands.length) % filteredCommands.length);
      } else if (e.key === 'Enter') {
        e.preventDefault();
        if (filteredCommands[selectedIndex]) {
          filteredCommands[selectedIndex].action();
          onClose();
        }
      } else if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, filteredCommands, selectedIndex, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-start justify-center pt-[20vh] px-4">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={onClose}
          />
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            className="relative w-full max-w-2xl bg-[#0f1012] border border-white/10 rounded-xl shadow-2xl overflow-hidden"
          >
            <div className="flex items-center gap-3 px-4 py-3 border-b border-white/10">
              <Search className="w-5 h-5 text-slate-500" />
              <input 
                ref={inputRef}
                type="text" 
                placeholder="Type a command or search..."
                className="flex-1 bg-transparent text-white placeholder:text-slate-600 focus:outline-none text-lg font-mono"
                value={query}
                onChange={(e) => {
                  setQuery(e.target.value);
                  setSelectedIndex(0);
                }}
              />
              <div className="flex items-center gap-1">
                <span className="text-xs font-mono text-slate-500 bg-white/5 px-2 py-1 rounded">ESC</span>
              </div>
            </div>

            <div className="py-2 max-h-[60vh] overflow-y-auto">
              {filteredCommands.length > 0 ? (
                filteredCommands.map((cmd, index) => (
                  <button
                    key={cmd.id}
                    className={`w-full flex items-center justify-between px-4 py-3 transition-colors ${
                      index === selectedIndex ? 'bg-cyan-500/10 border-l-2 border-cyan-500' : 'border-l-2 border-transparent hover:bg-white/5'
                    }`}
                    onClick={() => {
                      cmd.action();
                      onClose();
                    }}
                    onMouseEnter={() => setSelectedIndex(index)}
                  >
                    <div className="flex items-center gap-3">
                      <cmd.icon className={`w-5 h-5 ${index === selectedIndex ? 'text-cyan-400' : 'text-slate-400'}`} />
                      <span className={`font-mono ${index === selectedIndex ? 'text-white' : 'text-slate-300'}`}>
                        {cmd.label}
                      </span>
                    </div>
                    {cmd.shortcut && (
                      <span className="text-xs font-mono text-slate-500 bg-white/5 px-2 py-1 rounded">
                        {cmd.shortcut}
                      </span>
                    )}
                  </button>
                ))
              ) : (
                <div className="px-4 py-8 text-center text-slate-500 font-mono">
                  No commands found.
                </div>
              )}
            </div>

            <div className="px-4 py-2 bg-black/20 border-t border-white/5 flex items-center justify-between text-xs text-slate-600 font-mono">
              <div className="flex gap-4">
                <span>↑↓ to navigate</span>
                <span>↵ to select</span>
              </div>
              <span>PRO TIP: Press 'G' then key</span>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default CommandPalette;