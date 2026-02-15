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
                        ABOUT ME
                    </h2>
                    <div className="flex flex-wrap gap-2 font-mono text-xs text-cyan-500">
                        <span className="border border-cyan-500/30 bg-cyan-500/5 px-3 py-1 hover:bg-cyan-500 hover:text-black transition-colors cursor-default">/ABOUT</span>
                        <a href="#skills" className="border border-cyan-500/30 bg-cyan-500/5 px-3 py-1 hover:bg-cyan-500 hover:text-black transition-colors cursor-pointer">/SKILLS</a>
                        <span className="border border-cyan-500/30 bg-cyan-500/5 px-3 py-1 hover:bg-cyan-500 hover:text-black transition-colors cursor-default">/WORK</span>
                        <a href="#contact" className="bg-yellow-400 text-black px-3 py-1 font-bold hover:bg-yellow-300 transition-colors">HIRE ME</a>
                    </div>
                </div>

                <div className="font-mono text-slate-300 space-y-6">
                    <div className="flex gap-2 text-cyan-400 font-bold">
                        <span>&gt;</span>
                        <span>about.asish</span>
                    </div>
                    
                    <div className="pl-4 border-l-2 border-cyan-500/20 space-y-4">
                        <p className="text-xl leading-relaxed text-slate-300 italic font-light">
                            "I enjoy building systems that solve real-world problems and improve user experience through scalable web technologies."
                        </p>
                        
                        <p className="text-lg text-slate-400">
                            I am an <strong className="text-white">M.Tech (CSE) candidate</strong> and Full Stack Engineer focused on performance, clean architecture, and delivering production-ready applications.
                        </p>

                        <p className="text-lg text-slate-400">
                            Built and deployed multiple <strong className="text-white">full-stack applications</strong> integrating AI and real-time systems.
                        </p>
                    </div>

                    <div className="pl-4 border-l-2 border-cyan-500/20">
                        <h3 className="text-white font-bold mb-2">Specializing in:</h3>
                        <ul className="list-disc list-inside text-slate-400 space-y-1">
                            <li>Full Stack Development</li>
                            <li>AI Integration</li>
                            <li>Scalable Backend Systems</li>
                        </ul>
                    </div>

                    <p className="text-lg text-green-400 font-medium pl-4 border-l-2 border-green-500/20 animate-pulse">
                        Open to internships and engineering roles.
                    </p>
                </div>

                {/* Status Bar */}
                <div className="flex flex-wrap gap-4 pt-6 border-t border-white/10 mt-8">
                    <div className="bg-black border border-white/20 px-4 py-2 flex items-center gap-3 text-xs font-mono text-white hover:border-cyan-500 transition-colors">
                        <MapPin className="w-4 h-4 text-red-500" />
                        LOCATION: INDIA | OPEN TO REMOTE
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
