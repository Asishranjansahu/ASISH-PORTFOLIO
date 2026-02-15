import React, { useState, useEffect } from 'react';

const TypewriterText = ({ 
  text, 
  typingSpeed = 100, 
  startDelay = 0,
  showCursor = true,
  className = "" 
}) => {
  const [displayedText, setDisplayedText] = useState('');
  const [started, setStarted] = useState(false);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    const startTimeout = setTimeout(() => {
      setStarted(true);
    }, startDelay);
    return () => clearTimeout(startTimeout);
  }, [startDelay]);

  useEffect(() => {
    if (!started) return;

    let index = 0;
    // Reset text when text prop changes
    setDisplayedText(''); 
    
    const intervalId = setInterval(() => {
      if (index < text.length) {
        setDisplayedText(text.substring(0, index + 1));
        index++;
      } else {
        setIsDone(true);
        clearInterval(intervalId);
      }
    }, typingSpeed);

    return () => clearInterval(intervalId);
  }, [text, typingSpeed, started]);

  return (
    <span className={className}>
      {displayedText}
      {showCursor && !isDone && (
        <span className="inline-block w-[3px] h-[0.8em] bg-cyan-400 ml-1 align-baseline opacity-100"></span>
      )}
    </span>
  );
};

export default TypewriterText;
