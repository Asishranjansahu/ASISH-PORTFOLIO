import React from 'react';
import { motion } from 'framer-motion';
import { Quote, User } from 'lucide-react';

const testimonials = [
  {
    text: "Great problem-solving skills and clean code structure. Asish consistently delivers high-quality solutions.",
    author: "Team Hackathon Lead",
    role: "Smart India Hackathon"
  },
  {
    text: "Impressive ability to integrate complex AI features into user-friendly web interfaces.",
    author: "Project Mentor",
    role: "Senior Developer"
  }
];

const Testimonials = () => {
  return (
    <section className="py-20 relative z-10">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h3 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-4xl font-bold text-center mb-16"
        >
          <span className="text-white">WHAT OTHERS</span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 ml-3">SAY</span>
        </motion.h3>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="relative p-8 rounded-2xl bg-gradient-to-br from-zinc-900/80 to-black border border-white/10 hover:border-cyan-500/30 transition-all duration-300 group hover:-translate-y-1"
            >
              <Quote className="w-8 h-8 text-cyan-500/20 absolute top-6 right-6 group-hover:text-cyan-500/40 transition-colors" />
              
              <p className="text-slate-300 italic mb-6 leading-relaxed relative z-10">
                "{item.text}"
              </p>
              
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-500 to-purple-600 flex items-center justify-center text-white font-bold">
                  <User className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-white font-bold text-sm">{item.author}</h4>
                  <p className="text-cyan-400 text-xs font-mono">{item.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
