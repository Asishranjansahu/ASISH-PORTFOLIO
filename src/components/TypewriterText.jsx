import React, { useState, useEffect } from 'react';

const TypewriterText = ({ 
  texts, 
  typingSpeed = 50, 
  deletingSpeed = 30, 
  pauseTime = 2000, 
  className = "" 
}) => {
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    let timer;
    const i = loopNum % texts.length;
    const fullText = texts[i];

    if (isDeleting) {
      timer = setTimeout(() => {
        setDisplayedText(fullText.substring(0, displayedText.length - 1));
        if (displayedText.length === 0) {
          setIsDeleting(false);
          setLoopNum(loopNum + 1);
        }
      }, deletingSpeed);
    } else {
      timer = setTimeout(() => {
        setDisplayedText(fullText.substring(0, displayedText.length + 1));
        if (displayedText.length === fullText.length) {
          // Pause before deleting
          setTimeout(() => setIsDeleting(true), pauseTime);
        }
      }, typingSpeed);
    }

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, loopNum, texts, typingSpeed, deletingSpeed, pauseTime]);

  return (
    <span className={className}>
      {displayedText}
      <span className="animate-pulse text-cyan-400 font-bold inline-block ml-1">|</span>
    </span>
  );
};

export default TypewriterText;