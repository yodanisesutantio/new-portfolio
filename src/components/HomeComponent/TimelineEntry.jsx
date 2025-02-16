/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect, useRef, useState } from "react";

const TimelineEntry = ({
  date,
  content,
  imageSrc,
  imageAlt,
  additionalContent,
}) => {
    const lineRef = useRef(null);
    const isDateInFuture = () => {
      const entryDate = new Date(date);
      const today = new Date();
      return entryDate > today;
    };
  
    useEffect(() => {
      const updateGradient = () => {
        if (!lineRef.current) return;
        
        const rect = lineRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        const lineHeight = rect.height;
        
        // Calculate the position of the line relative to the viewport
        const scrollProgress = (windowHeight - rect.top) / (windowHeight + lineHeight);
        const clampedProgress = Math.max(0, Math.min(1, scrollProgress));
        
        // Update the gradient position based on scroll
        lineRef.current.style.background = `linear-gradient(
          to bottom,
          #ff0000 ${clampedProgress * 33}%,
          #ff00ff ${clampedProgress * 66}%,
          #0000ff ${clampedProgress * 100}%,
          #2c2c2c ${clampedProgress * 100}%
        )`;
      };
  
      window.addEventListener('scroll', updateGradient);
      updateGradient(); // Initial call
  
      return () => window.removeEventListener('scroll', updateGradient);
    }, []);

  return (
    <div className="relative grid grid-cols-[1fr_2.5rem_1fr] gap-5">
      {/* Date */}
      <div className="flex justify-end items-stretch">
        <h2 className="font-mclaren font-medium xl:text-2xl text-right text-[#fffbfc]">
          {date}
        </h2>
      </div>

      {/* Dot only - no line */}
      <div className="flex justify-center pt-2">
        <div className={`rounded-full w-4 h-4 ${
          isDateInFuture() 
            ? "bg-[#010400] border-2 border-[#fffbfc]" 
            : "bg-[#fffbfc]"
        }`}></div>
      </div>

      {/* Content */}
      <div className="flex flex-col gap-3">
        <p className="font-nunito font-light xl:text-base text-justify text-[#fffbfc] leading-snug pt-[5px] pr-24">
          {content}
        </p>
        <img
          src={imageSrc}
          alt={imageAlt}
          className="pr-24 object-cover object-center h-72"
        />
        {additionalContent && (
          <div className="font-nunito font-light xl:text-base text-justify text-[#fffbfc] leading-snug pt-[5px] pr-24">
            {additionalContent}
          </div>
        )}
      </div>
    </div>
  );
};

export default TimelineEntry;
