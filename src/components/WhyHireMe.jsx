import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Zap, Server, Code } from 'lucide-react';

const reasons = [
  {
    icon: Code,
    title: "Production-Ready Code",
    desc: "I don't just follow tutorials. I build robust, maintainable applications with proper error handling and clean architecture.",
    color: "text-cyan-400"
  },
  {
    icon: Server,
    title: "Full Stack Integration",
    desc: "Seamlessly connecting complex frontends with scalable backends. I understand the full lifecycle of a web request.",
    color: "text-purple-400"
  },
  {
    icon: Zap,
    title: "Performance Obsessed",
    desc: "I optimize for Core Web Vitals, server response times, and smooth 60fps interactions.",
    color: "text-yellow-400"
  }
];

const WhyHireMe = () => {
  return (
    <section className="py-24 px-6 relative">
      <div className="max-w-5xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-black/40 backdrop-blur-sm border border-white/10 rounded-3xl p-8 md:p-12 overflow-hidden relative"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/5 rounded-full blur-3xl -mr-32 -mt-32 pointer-events-none" />
          
          <div className="text-center mb-16 relative z-10">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
              Why Hire Me?
            </h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Beyond coding, I bring an engineering mindset to every project.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 relative z-10">
            {reasons.map((reason, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/5 border border-white/5 rounded-2xl p-6 hover:bg-white/10 transition-colors group"
              >
                <div className={`w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-4 ${reason.color} group-hover:scale-110 transition-transform`}>
                  <reason.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{reason.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {reason.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyHireMe;
