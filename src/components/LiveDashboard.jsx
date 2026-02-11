import React, { useState, useEffect } from 'react';
import { Code2, BookOpen, Coffee, Zap, RefreshCw, Terminal, Cpu, Globe } from 'lucide-react';
import { motion } from 'framer-motion';

const LiveDashboard = () => {
  const [time, setTime] = useState(new Date());
  const [leetcodeCount, setLeetcodeCount] = useState(245);
  
  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  // Simulate "live" updates occasionally
  useEffect(() => {
    const interval = setInterval(() => {
      if (Math.random() > 0.7) {
        setLeetcodeCount(prev => prev + 1);
      }
    }, 30000); // Check every 30s
    return () => clearInterval(interval);
  }, []);

  const stats = [
    { label: 'LeetCode Solved', value: leetcodeCount, icon: Code2, color: 'text-yellow-500' },
    { label: 'Blog Posts', value: '12', icon: BookOpen, color: 'text-purple-500' },
    { label: 'Last Deployed', value: '2h ago', icon: Zap, color: 'text-cyan-500' },
  ];

  const status = [
    { label: 'Learning', value: 'Next.js Server Actions', icon: Terminal },
    { label: 'Reading', value: 'Clean Code', icon: BookOpen },
    { label: 'Building', value: 'Portfolio v2', icon: Cpu },
    { label: 'Mood', value: 'Caffeinated ☕', icon: Coffee },
  ];

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5 }}
      className="w-full max-w-4xl mx-auto mt-12 bg-zinc-900/50 backdrop-blur-md border border-white/10 rounded-xl overflow-hidden"
    >
      {/* Header */}
      <div className="flex items-center justify-between px-6 py-3 border-b border-white/10 bg-black/20">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          <span className="text-xs font-mono font-bold text-green-400 tracking-wider uppercase">SYSTEM ONLINE</span>
        </div>
        <div className="flex items-center gap-4 text-xs font-mono text-slate-500">
          <span className="flex items-center gap-1">
            <Globe className="w-3 h-3" /> US-EAST-1
          </span>
          <span>{time.toLocaleTimeString()}</span>
        </div>
      </div>

      <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-white/10">
        {/* Stats Column */}
        <div className="p-6 space-y-6">
          <div className="grid grid-cols-3 gap-4">
            {stats.map((stat, i) => (
              <div key={i} className="text-center space-y-2">
                <div className={`mx-auto w-10 h-10 rounded-full bg-white/5 flex items-center justify-center ${stat.color}`}>
                  <stat.icon className="w-5 h-5" />
                </div>
                <div className="font-display font-bold text-xl text-white">{stat.value}</div>
                <div className="text-[10px] font-mono uppercase text-slate-500 tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Status Column */}
        <div className="p-6">
          <div className="space-y-4">
            {status.map((item, i) => (
              <div key={i} className="flex items-center justify-between group">
                <div className="flex items-center gap-3">
                  <item.icon className="w-4 h-4 text-slate-500 group-hover:text-cyan-400 transition-colors" />
                  <span className="text-sm font-mono text-slate-400">{item.label}:</span>
                </div>
                <span className="text-sm font-bold text-white group-hover:text-cyan-400 transition-colors">{item.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default LiveDashboard;