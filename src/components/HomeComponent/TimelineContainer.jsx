/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect, useRef } from 'react';

const TimelineContainer = ({ children }) => {
  const gradientLineRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const updateGradient = () => {
      if (!gradientLineRef.current || !containerRef.current) return;

      const containerRect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Calculate how much of the container is visible
      const visibleHeight = Math.max(0, windowHeight - containerRect.top);
      
      // Gradually grow the height of the gradient line
      let newHeight = Math.min(visibleHeight, windowHeight * 0.5);

      // Apply the new height
      gradientLineRef.current.style.height = `${newHeight}px`;
    };

    window.addEventListener('scroll', updateGradient);
    updateGradient(); // Initial call

    return () => window.removeEventListener('scroll', updateGradient);
  }, []);

  return (
    <div ref={containerRef} className="relative flex flex-col gap-16 justify-start items-center mt-6 md:mt-8 w-full">
      {/* Base gray line */}
      <div
        className="absolute top-2 w-[2px] h-full"
        style={{
          background: 'linear-gradient(to bottom, #2c2c2c 0%, #2c2c2c 97%, transparent 100%)',
        }}
      />
      
      {/* Moving gradient line */}
      {/* <div
        ref={gradientLineRef}
        className="absolute w-[2px] transition-all duration-300"
        style={{
          height: '0px', // Starts at 0px and grows
          background: 'linear-gradient(to bottom, #CAFE48 0%, #57467B 100%)',
        }}
      /> */}
      
      {children}
    </div>
  );
};

export default TimelineContainer;
