import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, Zap, Server, Code, Layers, Rocket } from 'lucide-react';

const contributions = [
  {
    text: "Build responsive and high-performance web applications using React & Next.js",
    icon: Code,
    color: "text-cyan-400"
  },
  {
    text: "Develop scalable backend APIs with Node.js and MongoDB",
    icon: Server,
    color: "text-green-400"
  },
  {
    text: "Implement authentication, real-time features, and modern UI systems",
    icon: Layers,
    color: "text-purple-400"
  },
  {
    text: "Focus on performance optimization and clean code practices",
    icon: Zap,
    color: "text-yellow-400"
  },
  {
    text: "Quickly learn and adapt to new technologies",
    icon: Rocket,
    color: "text-pink-400"
  }
];

const ValueProposition = () => {
  return (
    <section className="py-20 px-6 relative border-t border-b border-white/5 bg-black/40 backdrop-blur-sm">
      <div className="max-w-4xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-3xl md:text-5xl font-bold text-white mb-6">
            How I Can <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Contribute</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
            I enjoy building fast, scalable web applications and solving real-world problems through clean and efficient code.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-1 gap-4 max-w-3xl mx-auto">
          {contributions.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 hover:border-cyan-500/30 transition-all group"
            >
              <div className={`p-2 rounded-full bg-white/5 ${item.color} group-hover:scale-110 transition-transform`}>
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <p className="text-slate-300 font-medium text-lg group-hover:text-white transition-colors">
                {item.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;
