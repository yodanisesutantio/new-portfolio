/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";

const ScrollToTopButton = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY; // Current vertical scroll position
      const documentHeight = document.documentElement.scrollHeight; // Total page height
      const windowHeight = window.innerHeight; // Viewport height
      const scrollPercentage = (scrollTop / (documentHeight - windowHeight)) * 100;

      // Show button only if scroll is between desired range
      setShowButton(scrollPercentage >= 15 && scrollPercentage <= 92);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll); // Cleanup on unmount
  }, []);

  return (
    showButton && ( // Conditionally render the button
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-12 h-12 p-1.5 cursor-pointer bg-[#fffbfc] rounded-full fixed bottom-6 right-6 duration-500"
        width="1em"
        height="1em"
        viewBox="0 0 48 48"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        <path
          fill="none"
          stroke="#fffbfc"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="4"
          d="M24 6v36M12 18L24 6l12 12"
        ></path>
      </svg>
    )
  );
};

export default ScrollToTopButton;