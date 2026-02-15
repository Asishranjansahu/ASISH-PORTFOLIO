import React from 'react';
import { motion } from 'framer-motion';
import { Quote, User } from 'lucide-react';

const Testimonials = () => {
  return (
    <section className="py-20 px-6 relative overflow-hidden">
      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-zinc-900/30 border border-white/5 rounded-3xl p-8 md:p-12 relative overflow-hidden text-center"
        >
          <div className="absolute top-0 left-0 p-6 opacity-10">
            <Quote className="w-16 h-16 text-cyan-400 rotate-180" />
          </div>
          
          <div className="relative z-10 space-y-8">
            <p className="text-xl md:text-2xl font-light text-slate-200 italic leading-relaxed">
              "Asish demonstrates strong system-level thinking and execution. He doesn't just write code; he builds scalable solutions."
            </p>
            
            <div className="flex items-center justify-center gap-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-500 to-purple-500 flex items-center justify-center text-white font-bold text-lg">
                <User className="w-6 h-6" />
              </div>
              <div className="text-left">
                <h4 className="text-white font-bold font-display">University Professor</h4>
                <p className="text-cyan-400 text-sm font-mono">Computer Science Dept.</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
