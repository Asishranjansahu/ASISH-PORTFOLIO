import React from 'react';
import { motion } from 'framer-motion';
import { Quote, Briefcase, Linkedin } from 'lucide-react';

const Testimonials = () => {
  return (
    <section className="py-20 px-6 relative overflow-hidden bg-zinc-900/20">
      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
            Endorsements
          </h2>
          <div className="h-1 w-20 bg-cyan-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-1 gap-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-zinc-900/50 border border-white/5 rounded-2xl p-8 relative hover:border-cyan-500/30 transition-all group"
          >
            <Quote className="absolute top-8 left-8 w-12 h-12 text-cyan-500/10 rotate-180 group-hover:text-cyan-500/20 transition-colors" />
            
            <div className="relative z-10 flex flex-col items-center text-center space-y-6">
              <p className="text-lg text-slate-300 italic leading-relaxed max-w-2xl">
                "Asish showed exceptional dedication during his internship. His ability to quickly grasp complex backend concepts and implement scalable solutions was impressive. He doesn't just write code; he thinks about the entire system architecture."
              </p>
              
              <div className="flex items-center gap-4 border-t border-white/10 pt-6 w-full justify-center">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-cyan-500/20">
                  IT
                </div>
                <div className="text-left">
                  <h4 className="text-white font-bold font-display flex items-center gap-2">
                    Internship Manager
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-[#0077b5] transition-colors">
                      <Linkedin className="w-4 h-4" />
                    </a>
                  </h4>
                  <p className="text-cyan-400 text-sm font-mono flex items-center gap-1">
                    <Briefcase className="w-3 h-3" />
                    Innovixion Tech
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
