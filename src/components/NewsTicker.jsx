import React from 'react';
import { motion } from 'framer-motion';
import { Megaphone, Zap, Code2, Rocket } from 'lucide-react';

const NewsTicker = () => {
  const newsItems = [
    "🔥 AVAILABLE FOR HIRE: Ready to build your next billion-dollar idea!",
    "🚀 EXPERTISE: MERN Stack, IoT Solutions, Real-time Apps, & 3D Web Experiences.",
    "💡 I CAN BUILD: E-commerce Platforms, Social Networks, SaaS Dashboards, AI Agents, & More!",
    "⚡ LATEST UPDATE: Smart Campus Automation System is now LIVE.",
    "🛠️ STATUS: Open for freelance projects and full-time roles."
  ];

  // Duplicate items to ensure seamless scrolling
  const tickerContent = [...newsItems, ...newsItems, ...newsItems];

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-black/90 border-t border-cyan-500/30 backdrop-blur-md h-10 flex items-center overflow-hidden">
      {/* Label */}
      <div className="bg-cyan-600 text-white font-bold h-full px-4 flex items-center gap-2 text-xs uppercase shrink-0 z-10 shadow-[4px_0_15px_rgba(0,0,0,0.5)]">
        <Megaphone className="w-4 h-4 animate-pulse" />
        <span className="hidden md:inline">Live Updates</span>
      </div>

      {/* Scrolling Content */}
      <div className="flex-1 overflow-hidden relative flex items-center h-full">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            duration: 30,
            ease: "linear",
          }}
          className="flex items-center gap-12 whitespace-nowrap absolute"
        >
          {tickerContent.map((item, index) => (
            <div key={index} className="flex items-center gap-2 text-sm font-mono text-cyan-100/90">
              <span className="text-cyan-500">•</span>
              {item}
            </div>
          ))}
        </motion.div>
      </div>

      {/* Decorative End (Optional) */}
      <div className="bg-gradient-to-l from-black via-black/50 to-transparent w-12 h-full absolute right-0 z-10 pointer-events-none"></div>
    </div>
  );
};

export default NewsTicker;
