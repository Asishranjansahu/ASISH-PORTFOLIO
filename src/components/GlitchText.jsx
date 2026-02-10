import React from 'react';
import { motion } from 'framer-motion';

const GlitchText = ({ text, className = "" }) => {
  return (
    <div className={`relative inline-block group ${className}`}>
      <span className="relative z-10">{text}</span>
      <span className="absolute top-0 left-0 -z-10 w-full h-full text-blue-500 opacity-0 group-hover:opacity-70 animate-glitch-1 clip-path-polygon-1">
        {text}
      </span>
      <span className="absolute top-0 left-0 -z-10 w-full h-full text-red-500 opacity-0 group-hover:opacity-70 animate-glitch-2 clip-path-polygon-2">
        {text}
      </span>
    </div>
  );
};

export default GlitchText;
