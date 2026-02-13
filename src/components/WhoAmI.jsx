import React from 'react';
import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';

const WhoAmI = () => {
  return (
    <section id="about-me" className="py-32 px-6 relative overflow-hidden">
      <div className="max-w-6xl mx-auto border border-white/10 bg-black/60 backdrop-blur-md p-8 md:p-12 relative">
        {/* Decorative corner markers */}
        <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-cyan-500"></div>
        <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-cyan-500"></div>
        <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-cyan-500"></div>
        <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-cyan-500"></div>

        <div className="grid md:grid-cols-[350px_1fr] gap-12 items-start">
            {/* Image Column */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="relative group"
            >
                <div className="absolute inset-0 bg-cyan-500 translate-x-3 translate-y-3 border border-white/20 transition-transform group-hover:translate-x-2 group-hover:translate-y-2"></div>
                <div className="relative h-[400px] bg-zinc-900 border border-white/20 overflow-hidden">
                    <img 
                        src="/profile.jpeg" 
                        alt="Asish"
                        onError={(e) => {
                          e.target.onerror = null; 
                          e.target.src = "https://ui-avatars.com/api/?name=Asish+Ranjan+Sahu&background=0D8ABC&color=fff&size=512";
                        }}
                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                    />
                    <div className="absolute top-4 left-4 bg-white text-black px-2 py-0.5 font-bold font-mono text-xs tracking-wider">
                        ASISH.exe
                    </div>
                </div>
            </motion.div>

            {/* Text Column */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="space-y-8"
            >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-white/10 pb-6">
                    <h2 className="text-4xl md:text-5xl font-black font-display tracking-tighter text-white">
                        WHO AM I?
                    </h2>
                    <div className="flex flex-wrap gap-2 font-mono text-xs text-cyan-500">
                        <span className="border border-cyan-500/30 bg-cyan-500/5 px-3 py-1 hover:bg-cyan-500 hover:text-black transition-colors cursor-default">/ABOUT</span>
                        <a href="#skills" className="border border-cyan-500/30 bg-cyan-500/5 px-3 py-1 hover:bg-cyan-500 hover:text-black transition-colors cursor-pointer">/SKILLS</a>
                        <span className="border border-cyan-500/30 bg-cyan-500/5 px-3 py-1 hover:bg-cyan-500 hover:text-black transition-colors cursor-default">/WORK</span>
                        <a href="#contact" className="bg-yellow-400 text-black px-3 py-1 font-bold hover:bg-yellow-300 transition-colors">HIRE ME</a>
                    </div>
                </div>

                <p className="text-xl text-slate-300 leading-relaxed font-light">
                    I am Asish. A creative developer who believes the web has become too sanitized. I bring <span className="bg-yellow-400 text-black px-1 font-bold mx-1">personality</span> back to code.
                </p>

                <div className="space-y-4 font-mono text-sm md:text-base text-slate-400">
                    <div className="flex gap-3 items-start group">
                        <span className="text-cyan-500 mt-1 group-hover:translate-x-1 transition-transform">{'>'}</span>
                        <p className="group-hover:text-cyan-400 transition-colors">Specialized in <strong className="text-white">Designing</strong> and <strong className="text-white">Web Development</strong>.</p>
                    </div>
                    <div className="flex gap-3 items-start group">
                        <span className="text-cyan-500 mt-1 group-hover:translate-x-1 transition-transform">{'>'}</span>
                        <p className="group-hover:text-cyan-400 transition-colors">Obsessed with <strong className="text-white">Perfection</strong> and <strong className="text-white">Innovation</strong>.</p>
                    </div>
                    <div className="flex gap-3 items-start group">
                        <span className="text-cyan-500 mt-1 group-hover:translate-x-1 transition-transform">{'>'}</span>
                        <p className="group-hover:text-cyan-400 transition-colors">Fresh talent ready to build <strong className="text-white">Next-Gen</strong> solutions.</p>
                    </div>
                </div>

                {/* Status Bar */}
                <div className="flex flex-wrap gap-4 pt-6 border-t border-white/10 mt-8">
                    <div className="bg-black border border-white/20 px-4 py-2 flex items-center gap-3 text-xs font-mono text-white hover:border-cyan-500 transition-colors">
                        <MapPin className="w-4 h-4 text-red-500" />
                        LOCATION: WORLDWIDE
                    </div>
                    <div className="bg-green-500/10 border border-green-500/50 text-green-400 px-4 py-2 flex items-center gap-3 text-xs font-bold font-mono shadow-[0_0_15px_rgba(34,197,94,0.1)]">
                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                        STATUS: AVAILABLE
                    </div>
                    <div className="ml-auto text-xs font-mono text-slate-600 self-center hidden md:block">
                        /// SYSTEM_OPTIMIZED
                    </div>
                </div>
            </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhoAmI;
