import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const CustomCursor = () => {
  const [isHovering, setIsHovering] = useState(false);
  
  // Use MotionValues to avoid React re-renders on every mouse move
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth spring animation for the cursor
  const springConfig = { damping: 25, stiffness: 700 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  useEffect(() => {
    // Disable on mobile/touch devices to save performance
    if (typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches) {
      return;
    }

    const mouseMove = (e) => {
      // Update motion values directly without triggering component re-render
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    const handleMouseOver = (e) => {
      if (e.target.tagName === 'A' || e.target.tagName === 'BUTTON' || e.target.closest('a') || e.target.closest('button')) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', mouseMove);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', mouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, [mouseX, mouseY]);

  return (
    <motion.div
      className="fixed top-0 left-0 rounded-full pointer-events-none z-50 hidden md:block backdrop-blur-sm"
      style={{
        x: cursorX,
        y: cursorY,
        translateX: "-50%", // Center the cursor
        translateY: "-50%"
      }}
      animate={{
        width: isHovering ? 64 : 32,
        height: isHovering ? 64 : 32,
        backgroundColor: isHovering ? "rgba(255, 0, 255, 0.3)" : "rgba(0, 243, 255, 0.3)",
        borderColor: isHovering ? "#ff00ff" : "#00f3ff",
        borderWidth: "2px",
        borderStyle: "solid",
        mixBlendMode: isHovering ? "difference" : "normal"
      }}
      transition={{
        width: { duration: 0.2 },
        height: { duration: 0.2 },
        backgroundColor: { duration: 0.2 },
        borderColor: { duration: 0.2 }
      }}
    />
  );
};

export default CustomCursor;
