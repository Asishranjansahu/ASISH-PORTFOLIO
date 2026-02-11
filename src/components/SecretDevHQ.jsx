import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShieldAlert, Fingerprint, Bug, Zap, Unlock, X, Skull } from 'lucide-react';
import confetti from 'canvas-confetti';

const SecretDevHQ = ({ onClose }) => {
  const [accessGranted, setAccessGranted] = useState(false);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    // Initial Access Sequence
    const timer1 = setTimeout(() => setAccessGranted(true), 1500);
    const timer2 = setTimeout(() => {
        setShowContent(true);
        confetti({
            particleCount: 100,
            spread: 70,
            origin: { y: 0.6 },
            colors: ['#22d3ee', '#a855f7', '#10b981']
        });
    }, 3000);

    return () => {
        clearTimeout(timer1);
        clearTimeout(timer2);
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[300] bg-black font-mono overflow-hidden"
    >
        {/* Background Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,255,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,0,0.03)_1px,transparent_1px)] bg-[size:20px_20px]"></div>
        
        {/* Close Button */}
        <button 
            onClick={onClose}
            className="absolute top-6 right-6 z-50 p-2 text-green-500/50 hover:text-green-400 hover:bg-green-500/10 rounded-full transition-all"
        >
            <X className="w-8 h-8" />
        </button>

        <div className="relative z-10 w-full h-full flex flex-col items-center justify-center p-6">
            <AnimatePresence mode="wait">
                {!accessGranted ? (
                    <motion.div
                        key="scanning"
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 1.1, opacity: 0, filter: "blur(10px)" }}
                        className="text-center space-y-8"
                    >
                        <motion.div 
                            animate={{ rotate: 360 }}
                            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                            className="inline-block"
                        >
                            <Fingerprint className="w-24 h-24 text-red-500" />
                        </motion.div>
                        <h2 className="text-3xl md:text-5xl font-bold text-red-500 tracking-widest animate-pulse">
                            AUTHENTICATING...
                        </h2>
                        <div className="w-64 h-2 bg-red-900/30 rounded-full mx-auto overflow-hidden">
                            <motion.div 
                                initial={{ width: "0%" }}
                                animate={{ width: "100%" }}
                                transition={{ duration: 1.5, ease: "easeInOut" }}
                                className="h-full bg-red-500"
                            />
                        </div>
                    </motion.div>
                ) : (
                    <motion.div
                        key="content"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="max-w-4xl w-full"
                    >
                        {/* Header */}
                        <div className="text-center mb-12">
                            <motion.div
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ type: "spring", bounce: 0.5 }}
                                className="inline-flex items-center gap-4 bg-green-500/10 border border-green-500 text-green-400 px-6 py-2 rounded-full mb-6"
                            >
                                <Unlock className="w-5 h-5" />
                                <span className="font-bold tracking-wider">ACCESS GRANTED: LEVEL 99</span>
                            </motion.div>
                            <h1 className="text-4xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-cyan-400 to-purple-400 mb-4 glitch-text">
                                THE SECRET STASH
                            </h1>
                            <p className="text-slate-400 text-lg">You found the easter egg. You are definitely a dev. 🤓</p>
                        </div>

                        {/* Content Grid */}
                        <div className="grid md:grid-cols-2 gap-8 mb-12">
                            {/* "The Suspect" Card */}
                            <motion.div 
                                initial={{ x: -50, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ delay: 0.2 }}
                                className="bg-black/50 border border-green-500/30 p-8 rounded-xl relative overflow-hidden group"
                            >
                                <div className="absolute top-0 right-0 p-4 opacity-20 group-hover:opacity-40 transition-opacity">
                                    <ShieldAlert className="w-24 h-24 text-green-500" />
                                </div>
                                <h3 className="text-2xl font-bold text-green-400 mb-6 flex items-center gap-3">
                                    <Skull className="w-6 h-6" /> TARGET PROFILE
                                </h3>
                                <ul className="space-y-4 text-slate-300 font-mono">
                                    <li className="flex justify-between border-b border-green-500/20 pb-2">
                                        <span>CODENAME:</span>
                                        <span className="text-white font-bold">"The Full Stack"</span>
                                    </li>
                                    <li className="flex justify-between border-b border-green-500/20 pb-2">
                                        <span>THREAT LEVEL:</span>
                                        <span className="text-red-400 font-bold">EXTREME (High Impact)</span>
                                    </li>
                                    <li className="flex justify-between border-b border-green-500/20 pb-2">
                                        <span>SUPERPOWER:</span>
                                        <span className="text-cyan-400">Turning Caffeine into Code</span>
                                    </li>
                                    <li className="flex justify-between border-b border-green-500/20 pb-2">
                                        <span>WEAKNESS:</span>
                                        <span className="text-yellow-400">Light Mode IDEs</span>
                                    </li>
                                </ul>
                            </motion.div>

                            {/* "Stats" Card */}
                            <motion.div 
                                initial={{ x: 50, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ delay: 0.4 }}
                                className="bg-black/50 border border-purple-500/30 p-8 rounded-xl relative overflow-hidden group"
                            >
                                <div className="absolute top-0 right-0 p-4 opacity-20 group-hover:opacity-40 transition-opacity">
                                    <Zap className="w-24 h-24 text-purple-500" />
                                </div>
                                <h3 className="text-2xl font-bold text-purple-400 mb-6 flex items-center gap-3">
                                    <Bug className="w-6 h-6" /> COMBAT STATS
                                </h3>
                                <div className="grid grid-cols-2 gap-6">
                                    <div className="text-center p-4 bg-purple-500/10 rounded-lg">
                                        <div className="text-3xl font-bold text-white mb-1">∞</div>
                                        <div className="text-xs text-purple-300 uppercase">Bugs Crushed</div>
                                    </div>
                                    <div className="text-center p-4 bg-cyan-500/10 rounded-lg">
                                        <div className="text-3xl font-bold text-white mb-1">10k+</div>
                                        <div className="text-xs text-cyan-300 uppercase">Lines of Code</div>
                                    </div>
                                    <div className="text-center p-4 bg-yellow-500/10 rounded-lg">
                                        <div className="text-3xl font-bold text-white mb-1">99.9%</div>
                                        <div className="text-xs text-yellow-300 uppercase">Uptime</div>
                                    </div>
                                    <div className="text-center p-4 bg-green-500/10 rounded-lg">
                                        <div className="text-3xl font-bold text-white mb-1">100%</div>
                                        <div className="text-xs text-green-300 uppercase">Passion</div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>

                        {/* CTA */}
                        <motion.div 
                            initial={{ y: 50, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.6 }}
                            className="text-center"
                        >
                            <p className="text-slate-400 mb-6">Mission Objective: Recruit this agent before competitors do.</p>
                            <div className="flex justify-center gap-6">
                                <a 
                                    href="mailto:asishranjansahu2003@gmail.com?subject=Secret%20Mission%3A%20Hiring%20You" 
                                    className="px-8 py-4 bg-green-600 hover:bg-green-500 text-black font-bold text-xl rounded-lg shadow-[0_0_20px_rgba(34,197,94,0.4)] hover:shadow-[0_0_40px_rgba(34,197,94,0.6)] transition-all flex items-center gap-3"
                                >
                                    <ShieldAlert className="w-6 h-6" />
                                    INITIATE HIRING PROTOCOL
                                </a>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    </motion.div>
  );
};

export default SecretDevHQ;
