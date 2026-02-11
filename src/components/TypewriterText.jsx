import React, { useState, useEffect } from 'react';

const TypewriterText = ({ text, typingSpeed = 30, startDelay = 1000, className = "" }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [started, setStarted] = useState(false);
  
  useEffect(() => {
    const startTimeout = setTimeout(() => {
      setStarted(true);
    }, startDelay);
    return () => clearTimeout(startTimeout);
  }, [startDelay]);

  useEffect(() => {
    if (!started) return;

    let index = 0;
    const interval = setInterval(() => {
      if (index <= text.length) {
        setDisplayedText(text.slice(0, index));
        index++;
      } else {
        clearInterval(interval);
      }
    }, typingSpeed);
    
    return () => clearInterval(interval);
  }, [text, typingSpeed, started]);

  return (
    <p className={className}>
      {displayedText}
      <span className="animate-pulse text-cyan-400 font-bold inline-block ml-1">_</span>
    </p>
  );
};

export default TypewriterText;