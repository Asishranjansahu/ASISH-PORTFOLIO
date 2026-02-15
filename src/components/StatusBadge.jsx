import React from 'react';
import { Calendar } from 'lucide-react';
import { motion } from 'framer-motion';

const StatusBadge = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      className="flex items-center gap-3 bg-black/40 backdrop-blur-md border border-white/10 rounded-full py-1.5 px-4 hover:border-green-500/30 transition-colors group cursor-default"
    >
      <div className="flex items-center gap-2">
        <span className="relative flex h-2.5 w-2.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
        </span>
        <span className="text-xs font-bold text-green-400 uppercase tracking-wider hidden xl:block">
          Open to Internships & Full-Time Opportunities
        </span>
        <span className="text-xs font-bold text-green-400 uppercase tracking-wider xl:hidden">
          Open to Work
        </span>
      </div>

      <div className="w-px h-3 bg-white/10"></div>

      <a 
        href="#contact"
        className="flex items-center gap-1.5 text-xs font-medium text-slate-400 hover:text-white transition-colors cursor-pointer"
      >
        <Calendar className="w-3.5 h-3.5" />
        <span>Book Call</span>
      </a>
    </motion.div>
  );
};

export default StatusBadge;
