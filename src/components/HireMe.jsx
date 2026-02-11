import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, X, Calculator, Smile } from 'lucide-react';

const HireMe = () => {
  const [requirements, setRequirements] = useState([
    { id: 1, label: 'React / Next.js Expert', checked: false },
    { id: 2, label: 'Backend (Node/Express)', checked: false },
    { id: 3, label: 'Modern UI/UX Design', checked: false },
    { id: 4, label: 'Problem Solver', checked: false },
    { id: 5, label: 'Fast Learner', checked: false },
  ]);

  const toggleReq = (id) => {
    setRequirements(requirements.map(r => 
      r.id === id ? { ...r, checked: !r.checked } : r
    ));
  };

  const checkedCount = requirements.filter(r => r.checked).length;
  const matchPercentage = Math.min(100, checkedCount * 20);

  return (
    <section className="py-24 px-6 relative overflow-hidden">
      <div className="max-w-4xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="holo-card p-8 md:p-12 border-cyan-500/30"
        >
          <div className="text-center mb-12">
            <h3 className="font-display text-3xl md:text-5xl font-bold mb-4 flex items-center justify-center gap-4">
              <Calculator className="w-10 h-10 text-cyan-400" />
              "Hire Me" Calculator
            </h3>
            <p className="text-slate-400 font-mono">Select your requirements to check compatibility</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-4">
              {requirements.map((req) => (
                <motion.button
                  key={req.id}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => toggleReq(req.id)}
                  className={`w-full p-4 rounded-xl border flex items-center justify-between transition-all duration-300 ${
                    req.checked 
                      ? 'bg-cyan-500/20 border-cyan-500 text-white shadow-[0_0_15px_rgba(34,211,238,0.3)]' 
                      : 'bg-black/40 border-white/10 text-slate-400 hover:border-white/30'
                  }`}
                >
                  <span className="font-mono font-bold">{req.label}</span>
                  <div className={`w-6 h-6 rounded-full border flex items-center justify-center ${
                    req.checked ? 'bg-cyan-500 border-cyan-500' : 'border-slate-600'
                  }`}>
                    {req.checked && <Check className="w-4 h-4 text-black" />}
                  </div>
                </motion.button>
              ))}
            </div>

            <div className="text-center bg-black/40 rounded-2xl p-8 border border-white/10">
              <h4 className="text-slate-400 font-mono mb-4 uppercase tracking-widest text-sm">Compatibility Score</h4>
              <div className="relative w-48 h-48 mx-auto mb-6 flex items-center justify-center">
                {/* Circular Progress */}
                <svg className="w-full h-full transform -rotate-90">
                  <circle
                    cx="96"
                    cy="96"
                    r="88"
                    stroke="currentColor"
                    strokeWidth="12"
                    fill="transparent"
                    className="text-slate-800"
                  />
                  <circle
                    cx="96"
                    cy="96"
                    r="88"
                    stroke="currentColor"
                    strokeWidth="12"
                    fill="transparent"
                    strokeDasharray={553}
                    strokeDashoffset={553 - (553 * matchPercentage) / 100}
                    className={`transition-all duration-1000 ease-out ${
                      matchPercentage === 100 ? 'text-green-500' : 'text-cyan-500'
                    }`}
                  />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className={`text-5xl font-bold font-display transition-colors duration-300 ${
                    matchPercentage === 100 ? 'text-green-400' : 'text-white'
                  }`}>
                    {matchPercentage}%
                  </span>
                </div>
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={matchPercentage}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                >
                  {matchPercentage === 100 ? (
                    <div className="space-y-4">
                      <p className="text-green-400 font-bold text-lg flex items-center justify-center gap-2">
                        <Smile className="w-6 h-6" /> Perfect Match!
                      </p>
                      <a href="#contact" className="inline-block px-8 py-3 bg-green-500 text-black font-bold rounded-lg hover:bg-green-400 transition-colors">
                        Let's Talk!
                      </a>
                    </div>
                  ) : matchPercentage > 50 ? (
                    <p className="text-cyan-400 font-bold">Looking good! Select more...</p>
                  ) : (
                    <p className="text-slate-500">What are you looking for?</p>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HireMe;
