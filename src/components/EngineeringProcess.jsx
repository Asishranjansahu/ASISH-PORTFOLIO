import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Bug, GitMerge, Rocket, Search, Code, CheckCircle, PenTool, Layout, Terminal, Globe, Database, Zap } from 'lucide-react';

const EngineeringProcess = () => {
  const workflowSteps = [
    { icon: Brain, label: 'Plan', color: 'text-purple-400', border: 'border-purple-500/30', bg: 'bg-purple-500/10' },
    { icon: Layout, label: 'Design', color: 'text-cyan-400', border: 'border-cyan-500/30', bg: 'bg-cyan-500/10' },
    { icon: Code, label: 'Code', color: 'text-green-400', border: 'border-green-500/30', bg: 'bg-green-500/10' },
    { icon: Bug, label: 'Test', color: 'text-red-400', border: 'border-red-500/30', bg: 'bg-red-500/10' },
    { icon: Rocket, label: 'Ship', color: 'text-yellow-400', border: 'border-yellow-500/30', bg: 'bg-yellow-500/10' },
  ];

  const bugFixing = [
    { icon: Search, title: "Isolate", desc: "Reproduce issue in controlled environment." },
    { icon: Terminal, title: "Diagnose", desc: "Analyze logs, stack traces, and state." },
    { icon: PenTool, title: "Resolve", desc: "Implement fix and refactor." },
    { icon: CheckCircle, title: "Verify", desc: "Run regression tests." }
  ];

  return (
    <section id="how-i-think" className="py-32 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.h3 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="font-display text-4xl md:text-6xl font-bold mb-20 text-center flex items-center justify-center gap-4"
        >
          <Brain className="w-12 h-12 text-cyan-400" />
          <span className="text-white">ENGINEERING</span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">WORKFLOW</span>
        </motion.h3>

        {/* Workflow Diagram */}
        <div className="mb-24">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="flex flex-wrap justify-center items-center gap-4 md:gap-8 relative"
          >
            {/* Connecting Line */}
            <div className="absolute top-1/2 left-10 right-10 h-0.5 bg-gradient-to-r from-purple-500/20 via-cyan-500/20 to-yellow-500/20 -z-10 hidden md:block"></div>

            {workflowSteps.map((step, i) => (
              <React.Fragment key={i}>
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="relative group"
                >
                  <div className={`w-24 h-24 md:w-32 md:h-32 rounded-2xl ${step.bg} ${step.border} border backdrop-blur-sm flex flex-col items-center justify-center gap-2 hover:-translate-y-2 transition-transform duration-300 shadow-[0_0_15px_rgba(0,0,0,0.2)]`}>
                    <step.icon className={`w-8 h-8 md:w-10 md:h-10 ${step.color}`} />
                    <span className="font-mono text-xs md:text-sm font-bold text-slate-300 uppercase tracking-wider">{step.label}</span>
                  </div>
                  {/* Arrow for mobile */}
                  {i < workflowSteps.length - 1 && (
                    <div className="md:hidden w-full flex justify-center py-2 text-slate-600">
                      ↓
                    </div>
                  )}
                </motion.div>
                {i < workflowSteps.length - 1 && (
                  <motion.div 
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ delay: i * 0.1 + 0.05 }}
                    className="hidden md:block text-slate-600"
                  >
                    →
                  </motion.div>
                )}
              </React.Fragment>
            ))}
          </motion.div>
        </div>

        {/* System Design Flow - NEW */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mb-24 bg-zinc-900/30 border border-white/5 rounded-3xl p-8 md:p-12 relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-grid-white opacity-[0.02] [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] pointer-events-none" />
          
          <div className="text-center mb-12">
            <h4 className="font-display text-2xl font-bold text-white mb-3">System Architecture Thinking</h4>
            <p className="text-slate-400 font-mono text-sm">How I structure scalable applications</p>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-4 md:gap-6 relative z-10">
            {[
              { label: "Client", icon: Layout, color: "text-blue-400" },
              { label: "API Gateway", icon: Globe, color: "text-purple-400" },
              { label: "Auth", icon: CheckCircle, color: "text-green-400" },
              { label: "Database", icon: Database, color: "text-yellow-400" },
              { label: "Cache", icon: Zap, color: "text-red-400" },
              { label: "Deployment", icon: Rocket, color: "text-cyan-400" }
            ].map((node, i, arr) => (
              <React.Fragment key={i}>
                <div className="flex flex-col items-center gap-3">
                  <div className="w-16 h-16 rounded-xl bg-black/50 border border-white/10 flex items-center justify-center shadow-lg hover:border-cyan-500/50 transition-colors">
                    <node.icon className={`w-6 h-6 ${node.color}`} />
                  </div>
                  <span className="font-mono text-xs font-bold text-slate-400">{node.label}</span>
                </div>
                {i < arr.length - 1 && (
                  <div className="text-slate-600">
                    <span className="hidden md:block">→</span>
                    <span className="block md:hidden">↓</span>
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Bug Hunter Protocol */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="holo-card p-8 group"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-full bg-red-500/10 border border-red-500/30 flex items-center justify-center">
                <Bug className="w-6 h-6 text-red-400" />
              </div>
              <h4 className="font-display text-2xl font-bold text-white">Debugging Protocol</h4>
            </div>
            
            <div className="space-y-6">
              {bugFixing.map((step, i) => (
                <div key={i} className="flex items-start gap-4">
                  <step.icon className="w-5 h-5 text-slate-500 mt-1" />
                  <div>
                    <h5 className="font-bold text-slate-200">{step.title}</h5>
                    <p className="text-sm text-slate-400 leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Project Planning */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="holo-card p-8 group"
          >
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-full bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center">
                <GitMerge className="w-6 h-6 text-cyan-400" />
              </div>
              <h4 className="font-display text-2xl font-bold text-white">Project Architecture</h4>
            </div>

            <div className="space-y-6 font-mono text-sm">
              <div className="p-4 bg-black/40 rounded-lg border border-white/5">
                <p className="text-purple-400 mb-2">// 1. Requirement Analysis</p>
                <p className="text-slate-400">Define core features and constraints.</p>
              </div>
              <div className="p-4 bg-black/40 rounded-lg border border-white/5">
                <p className="text-cyan-400 mb-2">// 2. System Design</p>
                <p className="text-slate-400">Schema, APIs, and state strategy.</p>
              </div>
              <div className="p-4 bg-black/40 rounded-lg border border-white/5">
                <p className="text-green-400 mb-2">// 3. Implementation</p>
                <p className="text-slate-400">MVP first. Clean, modular code.</p>
              </div>
              <div className="pt-2 border-t border-white/5">
                 <p className="text-xs text-slate-500 italic">Applied this workflow while building Thread Sense and Smart Campus Automation systems.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default EngineeringProcess;