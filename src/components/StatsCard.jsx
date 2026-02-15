import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Server, Globe, Cpu, Zap, Rocket, Layout, TrendingUp, Activity } from 'lucide-react';

const stats = [
  { icon: Zap, label: "Performance Optimization", color: "text-yellow-400" },
  { icon: Activity, label: "Real-time Systems", color: "text-cyan-400" },
  { icon: Layout, label: "Clean Architecture", color: "text-purple-400" },
  { icon: Cpu, label: "AI + NLP Integration", color: "text-pink-400" },
  { icon: Rocket, label: "Production Deployment", color: "text-emerald-400" }
];

const StatsCard = () => {
  return (
    <div className="w-full max-w-7xl mx-auto px-6 py-12 relative z-10">
      <div className="flex flex-col gap-6">
        {/* Recruiter Scanner Section - Key Strengths */}
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

        {/* Performance Proof Badge */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/10 border border-green-500/30 rounded-full text-green-400 font-mono text-sm font-bold">
            <Zap className="w-4 h-4 fill-current" />
            Lighthouse Score: 98 Performance
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default StatsCard;
