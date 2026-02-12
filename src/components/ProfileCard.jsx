import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Users, FolderGit2, Github } from 'lucide-react';

const ProfileCard = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="relative group w-full max-w-sm mx-auto"
    >
        <div className="absolute -inset-1 bg-gradient-to-b from-cyan-500/20 to-purple-500/20 rounded-[2.2rem] blur-xl opacity-70 group-hover:opacity-100 transition duration-500" />
        
        {/* Card Container */}
        <div className="relative overflow-hidden rounded-[2rem] bg-[#0a0a0a] border border-white/10 p-5 transition-all duration-300 hover:border-cyan-500/30">
            
            {/* Image Section */}
            <div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden mb-6 group-hover:shadow-[0_0_40px_rgba(6,182,212,0.15)] transition-all duration-500">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10" />
                <img 
                    src="/profile.jpeg" 
                    onError={(e) => {
                      e.target.onerror = null; 
                      e.target.src = "https://ui-avatars.com/api/?name=Asish+Ranjan+Sahu&background=0D8ABC&color=fff&size=512";
                    }}
                    alt="Asish Ranjan Sahu"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                
                {/* Floating Badge (Top Right) */}
                 <a href="#contact" className="absolute top-4 right-4 z-20 bg-black/40 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10 flex items-center gap-2 hover:bg-black/60 hover:border-green-500/50 transition-all cursor-pointer group/badge">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                    </span>
                    <span className="text-[10px] font-bold text-white tracking-widest uppercase group-hover/badge:text-green-400 transition-colors">Hire Me</span>
                </a>
            </div>

            {/* Content Section */}
            <div className="space-y-5 px-1">
                {/* Name & Badge */}
                <div>
                    <div className="flex items-center gap-2 mb-1.5">
                        <h3 className="text-2xl font-display font-bold text-white tracking-tight">Asish Ranjan Sahu</h3>
                        <CheckCircle2 className="w-5 h-5 text-cyan-400 fill-cyan-400/10" />
                    </div>
                    <p className="text-sm text-slate-400 leading-relaxed font-medium">
                        Full Stack Developer focused on building scalable, user-centric digital experiences.
                    </p>
                </div>

                {/* Stats */}
                <div className="flex items-center gap-6">
                    <div className="flex items-center gap-2 group/stat">
                        <div className="p-1.5 rounded-full bg-cyan-500/10 group-hover/stat:bg-cyan-500/20 transition-colors">
                            <Users className="w-3.5 h-3.5 text-cyan-400" />
                        </div>
                        <div className="flex flex-col">
                            <span className="text-sm font-bold text-white leading-none">3</span>
                            <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">Followers</span>
                        </div>
                    </div>
                    <div className="flex items-center gap-2 group/stat">
                        <div className="p-1.5 rounded-full bg-purple-500/10 group-hover/stat:bg-purple-500/20 transition-colors">
                            <FolderGit2 className="w-3.5 h-3.5 text-purple-400" />
                        </div>
                        <div className="flex flex-col">
                            <span className="text-sm font-bold text-white leading-none">6</span>
                            <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">Projects</span>
                        </div>
                    </div>
                </div>

                {/* Action Button */}
                <a 
                    href="https://github.com/Asishranjansahu" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full py-3.5 bg-white text-black rounded-xl font-bold hover:bg-cyan-50 transition-all active:scale-[0.98] group/btn"
                >
                    <Github className="w-4 h-4 transition-transform group-hover/btn:scale-110" />
                    <span>Follow on GitHub</span>
                </a>
            </div>
        </div>
    </motion.div>
  );
};

export default ProfileCard;
