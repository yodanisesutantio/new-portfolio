/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';

const FlippingCard = ({ 
  backgroundImage,
  year,
  category,
  title,
  description,
  initialDelay = 1000, // New prop with default value
  accentColor = '#CAFE48',
  backgroundColor = '#57467B',
  href='#'
}) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsSmallScreen(window.innerWidth < 1280);
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  useEffect(() => {
    let initialDelayTimer;
    let interval;

    if (isSmallScreen) {
      // Initial flip with custom delay
      initialDelayTimer = setTimeout(() => {
        setIsFlipped(true);
        
        // Start the regular interval after the first flip
        interval = setInterval(() => {
          setIsFlipped(prev => !prev);
        }, 4000); // 3s display + 1s transition
      }, initialDelay);
    } else {
      setIsFlipped(false);
    }

    return () => {
      clearTimeout(initialDelayTimer);
      clearInterval(interval);
    };
  }, [isSmallScreen, initialDelay]);

  return (
    <a href={href} className="relative cursor-pointer xl:transition-[width] xl:hover:w-4/5 xl:group-hover/item:w-1/5 w-full xl:w-1/4 h-full perspective-[1000] duration-700">
      <div
        className={`relative w-full h-full transition-transform duration-700 transform-3d ${
          isFlipped ? 'rotate-y-180' : ''
        }`}
      >
        {/* Front side */}
        <div
          className="absolute w-full h-full backface-hidden group/item flex flex-col justify-end   bg-center overflow-hidden rounded-sm xl:saturate-0 xl:hover:saturate-100 duration-700"
          style={{ 
            backgroundImage: `url(${backgroundImage})`,
          }}
        >
          <div 
            className="absolute bottom-0 left-0 right-0 p-2 xl:p-4 transition-transform duration-700 transform translate-y-full xl:group-hover/item:translate-y-0"
            style={{ backgroundColor }}
          >
            <div className="w-full h-full flex flex-col justify-end gap-0 xl:gap-1 2xl:gap-2">
              <p className="font-mclaren font-light text-base 2xl:text-lg" style={{ color: `${accentColor}` }}>
                {year}, {category}
              </p>
              <h2 className="font-mclaren font-bold text-2xl 2xl:text-3xl" style={{ color: accentColor }}>
                {title}
              </h2>
              <p className="font-nunito font-light text-base 2xl:text-lg" style={{ color: `${accentColor}` }}>
                {description}
              </p>
            </div>
          </div>
        </div>

        {/* Back side */}
        <div 
          className="absolute w-full h-full backface-hidden rotate-y-180 rounded-sm"
          style={{ backgroundColor: backgroundColor }}
        >
          <div className="w-full h-full flex flex-col justify-center items-center gap-0 xl:gap-1 p-4">
            <p className="font-mclaren font-light text-center text-xs sm:text-sm md:text-base" style={{ color: `${accentColor}` }}>
              {year}, {category}
            </p>
            <h2 className="font-mclaren font-bold text-center text-lg sm:text-xl md:text-2xl" style={{ color: accentColor }}>
              {title}
            </h2>
          </div>
        </div>
      </div>
    </a>
  );
};

export default FlippingCard;