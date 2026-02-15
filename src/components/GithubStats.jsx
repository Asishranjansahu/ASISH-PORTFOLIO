import React from 'react';
import { GitHubCalendar } from 'react-github-calendar';

import { motion } from 'framer-motion';
import { Github, Star, GitCommit, GitPullRequest, ExternalLink } from 'lucide-react';

const GithubStats = () => {
  return (
    <section id="github-stats" className="py-24 px-6 bg-black/30 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h3 className="font-display text-4xl md:text-5xl font-bold mb-6 flex items-center justify-center gap-3">
            <Github className="w-10 h-10 text-white" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-200 to-slate-500">
              Code Activity
            </span>
          </h3>
          <p className="text-slate-400 font-mono max-w-2xl mx-auto mb-8">
            My contributions to the open-source world. Consistent shipping is my love language.
          </p>
          
          <a 
            href="https://github.com/Asishranjansahu" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-white/5 border border-white/10 rounded-full text-white font-bold hover:bg-white/10 hover:border-white/20 transition-all group"
          >
            View GitHub Activity
            <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16 justify-items-center">
          <motion.img 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            src="https://github-readme-stats.vercel.app/api?username=Asishranjansahu&show_icons=true&theme=dark&hide_border=true&bg_color=0d1117"
            alt="GitHub Stats"
            className="w-full max-w-md"
          />
          <motion.img 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            src="https://github-readme-stats.vercel.app/api/top-langs/?username=Asishranjansahu&layout=compact&theme=dark&hide_border=true&bg_color=0d1117"
            alt="Top Languages"
            className="w-full max-w-md"
          />
        </div>

        {/* Heatmap */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="holo-card p-8 flex justify-center items-center overflow-x-auto"
        >
          <div className="min-w-[800px]">
            <GitHubCalendar 
              username="Asishranjansahu" 
              colorScheme="dark"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default GithubStats;
