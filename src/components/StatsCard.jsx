import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Server, Globe, Cpu, Zap } from 'lucide-react';

const stats = [
  { icon: Code2, label: "10+ Projects Built", color: "text-cyan-400" },
  { icon: Globe, label: "Full Stack Development", color: "text-purple-400" },
  { icon: Server, label: "REST API Design", color: "text-emerald-400" },
  { icon: Zap, label: "Real-time Apps", color: "text-yellow-400" },
  { icon: Cpu, label: "AI Integration", color: "text-pink-400" }
];

const StatsCard = () => {
  return (
    <div className="w-full max-w-7xl mx-auto px-6 py-12 relative z-10">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-8 bg-zinc-900/30 backdrop-blur-sm border border-white/5 rounded-2xl p-6 md:p-8 hover:border-cyan-500/20 transition-colors duration-500"
      >
        {stats.map((stat, index) => (
          <div key={index} className="flex flex-col items-center justify-center gap-3 group">
            <div className={`p-3 rounded-full bg-white/5 group-hover:bg-white/10 transition-colors ${stat.color}`}>
              <stat.icon className="w-6 h-6" />
            </div>
            <span className="font-mono text-xs md:text-sm text-slate-400 font-bold text-center group-hover:text-white transition-colors">
              {stat.label}
            </span>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default StatsCard;
