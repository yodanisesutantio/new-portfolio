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
  const entryRef = useRef(null);
  const [isInView, setIsInView] = useState(false);
  const [isPastView, setIsPastView] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (!entryRef.current) return;

      const rect = entryRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;

      // When entry is visible in viewport (fade in)
      const inView =
        rect.top < viewportHeight * 0.7 && rect.bottom > viewportHeight * 0.4;
      setIsInView(inView);

      // Keep opacity-100 when scrolled past
      setIsPastView(rect.top < viewportHeight * 0.4);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Run on mount

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      ref={entryRef}
      className={`relative flex flex-row sm:grid sm:grid-cols-[1fr_2.5rem_1fr] gap-6 sm:gap-5 w-full px-2 sm:px-0 transition-all duration-300 ${
        isPastView
          ? "opacity-100 saturate-100" // If past the top of viewport, keep it full opacity
          : isInView
          ? "opacity-100 saturate-100" // When in view, make it visible
          : "opacity-25 saturate-0" // Otherwise, keep it faded
      }`}
    >
      {/* Date */}
      <div className="hidden sm:flex justify-end items-stretch">
        <h2 className="font-mclaren font-medium text-xl xl:text-2xl text-right text-[#fffbfc]">
          {date}
        </h2>
      </div>

      {/* Dot only - no line */}
      <div className="flex justify-start sm:justify-center pt-2">
        <div
          className={`rounded-full w-4 h-4 ${
            new Date(date) > new Date()
              ? "bg-[#010400] border-2 border-[#fffbfc]"
              : "bg-[#fffbfc]"
          }`}
        ></div>
      </div>

      {/* Content */}
      <div className="flex flex-col gap-2 md:gap-3 w-full pt-[5px] md:pr-24">
        <h2 className="flex sm:hidden font-mclaren font-medium text-xl xl:text-2xl text-left text-[#fffbfc]">
          {date}
        </h2>
        <p className="font-nunito font-light text-sm/snug xl:text-base/snug text-justify text-[#fffbfc]">
          {content}
        </p>
        <img
          src={imageSrc}
          alt={imageAlt}
          className="object-cover object-center my-2 sm:my-0 h-48 md:h-72"
        />
        {additionalContent && (
          <div className="font-nunito font-light text-sm/snug xl:text-base/snug text-justify text-[#fffbfc]">
            {additionalContent}
          </div>
        )}
      </div>
    </div>
  );
};

export default TimelineEntry;
