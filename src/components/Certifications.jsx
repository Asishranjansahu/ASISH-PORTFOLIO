import React from 'react';
import { motion } from 'framer-motion';
import { Award, Code2, Globe, Terminal, ExternalLink, Linkedin } from 'lucide-react';

const Certifications = () => {
  const certs = [
    {
      title: "Google Developer Groups",
      issuer: "Google Developers",
      date: "2024",
      image: "https://upload.wikimedia.org/wikipedia/commons/b/b2/Google_Developer_Groups_logo.svg",
      color: "text-blue-500",
      bg: "bg-white",
      border: "border-blue-500/20",
      link: "https://developers.google.com/community/gdg" 
    },
    {
      title: "Java Full Stack",
      issuer: "Udemy / Coursera",
      date: "2023",
      image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
      color: "text-orange-500",
      bg: "bg-white",
      border: "border-orange-500/20",
      link: "#"
    },
    {
      title: "Problem Solving (Intermediate)",
      issuer: "HackerRank",
      date: "2023",
      icon: Terminal,
      color: "text-green-500",
      bg: "bg-green-500/10",
      border: "border-green-500/20",
      link: "https://www.hackerrank.com/certificates/iframe/885694294025"
    },
    {
      title: "Data Structures & Algorithms",
      issuer: "LeetCode",
      date: "Ongoing",
      icon: Code2,
      color: "text-yellow-500",
      bg: "bg-yellow-500/10",
      border: "border-yellow-500/20",
      link: "https://leetcode.com/u/Asishranjansahu/"
    },
    {
      title: "View More Certifications",
      issuer: "LinkedIn",
      date: "Professional Profile",
      icon: Linkedin,
      color: "text-blue-600",
      bg: "bg-blue-600/10",
      border: "border-blue-600/20",
      link: "https://www.linkedin.com/in/asish-ranjan-sahu-15ab1422b/details/certifications/"
    }
  ];

  return (
    <section id="certifications" className="py-20 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-3xl md:text-5xl font-bold text-white mb-6">
            Certifications & <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">Achievements</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Validating skills through industry-recognized certifications and continuous learning.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {certs.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`group relative p-6 rounded-2xl bg-zinc-900/50 border ${cert.border} hover:bg-zinc-900/80 transition-all duration-300`}
            >
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <ExternalLink className="w-5 h-5 text-slate-500 hover:text-white" />
              </div>
              
              <div className={`w-14 h-14 rounded-xl ${cert.bg} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 overflow-hidden`}>
                {cert.image ? (
                  <img src={cert.image} alt={cert.title} className="w-8 h-8 object-contain" />
                ) : (
                  <cert.icon className={`w-8 h-8 ${cert.color}`} />
                )}
              </div>
              
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                {cert.title}
              </h3>
              
              <div className="flex justify-between items-center text-sm">
                <span className="text-slate-400 font-mono">{cert.issuer}</span>
                <span className="text-slate-500 font-mono bg-white/5 px-2 py-1 rounded">{cert.date}</span>
              </div>

              {/* Hover Effect Gradient */}
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${cert.color.replace('text-', 'from-')}/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none`} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
