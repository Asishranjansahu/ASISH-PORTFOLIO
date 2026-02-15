import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, ArrowRight, Calendar, Clock, Tag } from 'lucide-react';

const BlogSection = () => {
  const posts = [
    {
      title: "How I built an IoT system with 99.8% uptime",
      excerpt: "A deep dive into designing resilient IoT architectures using ESP8266, MQTT, and Cloud Functions to handle intermittent connectivity and ensure data integrity.",
      date: "Feb 15, 2025",
      readTime: "5 min read",
      tags: ["IoT", "System Design", "Cloud Architecture"],
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop",
      link: "https://dev.to/asishranjansahu" // Placeholder pointing to profile
    }
  ];

  return (
    <section id="blog" className="py-24 px-6 bg-black relative">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h3 className="font-display text-4xl md:text-5xl font-bold mb-6 flex items-center justify-center gap-3">
            <BookOpen className="w-10 h-10 text-white" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500">
              Latest Articles
            </span>
          </h3>
          <p className="text-slate-400 font-mono max-w-2xl mx-auto">
            Thoughts on engineering, system design, and the lessons I've learned while building.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
          {posts.map((post, i) => (
            <motion.a
              key={i}
              href={post.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="group bg-zinc-900/50 border border-white/10 rounded-2xl overflow-hidden hover:border-orange-500/50 transition-colors"
            >
              <div className="h-48 overflow-hidden relative">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 to-transparent opacity-60" />
              </div>
              
              <div className="p-6">
                <div className="flex items-center gap-4 text-xs text-slate-500 font-mono mb-4">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {post.date}
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {post.readTime}
                  </div>
                </div>

                <h4 className="text-xl font-bold text-white mb-3 group-hover:text-orange-400 transition-colors line-clamp-2">
                  {post.title}
                </h4>
                
                <p className="text-slate-400 text-sm leading-relaxed mb-6 line-clamp-3">
                  {post.excerpt}
                </p>

                <div className="flex items-center justify-between mt-auto">
                  <div className="flex gap-2">
                    {post.tags.map((tag, idx) => (
                      <span key={idx} className="px-2 py-1 rounded-md bg-white/5 text-[10px] font-bold text-slate-300 border border-white/10">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <ArrowRight className="w-5 h-5 text-slate-500 group-hover:text-orange-400 group-hover:translate-x-1 transition-all" />
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
