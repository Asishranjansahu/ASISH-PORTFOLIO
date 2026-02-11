import React from 'react';
import GitHubCalendar from 'react-github-calendar';
import { motion } from 'framer-motion';
import { Github, Star, GitCommit, GitPullRequest } from 'lucide-react';

const GithubStats = () => {
  return (
    <section className="py-24 px-6 bg-black/30 relative">
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
          <p className="text-slate-400 font-mono max-w-2xl mx-auto">
            My contributions to the open-source world. Consistent shipping is my love language.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {[
            { label: 'Total Commits', value: '500+', icon: GitCommit, color: 'text-cyan-400' },
            { label: 'Pull Requests', value: '50+', icon: GitPullRequest, color: 'text-purple-400' },
            { label: 'Repositories', value: '25+', icon: Github, color: 'text-pink-400' },
            { label: 'Stars Earned', value: '100+', icon: Star, color: 'text-yellow-400' },
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              className="bg-zinc-900/50 border border-zinc-800 p-6 rounded-2xl text-center hover:border-cyan-500/30 transition-colors"
            >
              <stat.icon className={`w-8 h-8 ${stat.color} mx-auto mb-4`} />
              <div className="text-3xl font-bold text-white mb-1 font-display">{stat.value}</div>
              <div className="text-sm text-slate-500 font-mono uppercase tracking-wider">{stat.label}</div>
            </motion.div>
          ))}
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
              blockSize={14}
              blockMargin={4}
              fontSize={14}
              theme={{
                dark: ['#161b22', '#0e4429', '#006d32', '#26a641', '#39d353'],
              }}
              style={{
                color: '#94a3b8',
              }}
              renderBlock={(block, activity) => (
                <div title={`${activity.count} activities on ${activity.date}`} className="w-full h-full hover:opacity-80 transition-opacity">
                  {block}
                </div>
              )}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default GithubStats;
