/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";

const FlippingCard = ({
  backgroundImage,
  title,
  description,
  initialDelay = 1000, // New prop with default value
}) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsSmallScreen(window.innerWidth < 1280);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
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
          setIsFlipped((prev) => !prev);
        }, 7000); // 6s display + 1s transition
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
    <div
      className="relative cursor-pointer w-full h-full perspective-[1000] duration-700"
    >
      <div
        className={`relative w-full h-full transition-transform duration-700 transform-3d ${
          isFlipped ? "rotate-y-180" : ""
        }`}
      >
        {/* Front side */}
        <div
          className="group/item flex flex-col justify-end w-full h-52 xl:h-[22rem] backface-hidden overflow-hidden bg-cover xl:bg-auto bg-center xl:bg-bottom cursor-pointer rounded-sm lg:saturate-0 lg:hover:saturate-100 duration-700 relative"
          style={{
            backgroundImage: `url(${backgroundImage})`,
          }}
        >
          <div className="absolute bottom-0 left-0 right-0 p-4 bg-[#57467B] transition-transform duration-700 transform translate-y-full group-hover/item:translate-y-0">
            <div className="w-full h-full flex flex-col justify-end gap-1">
              <h2 className="font-mclaren font-bold xl:text-2xl text-[#CAFE48]">
                {title}
              </h2>
              <p className="font-nunito font-light xl:text-base text-[#CAFE48]/85">
                {description}
              </p>
            </div>
          </div>
        </div>

        {/* Back side */}
        <div className="absolute top-0 w-full h-52 xl:h-[22rem] backface-hidden rotate-y-180 rounded-sm bg-[#57467B]">
          <div className="w-full h-full flex flex-col justify-center items-center gap-1 p-4">
            <h2 className="font-mclaren font-bold text-lg sm:text-xl md:text-2xl text-[#CAFE48]">
              {title}
            </h2>
            <p className="font-nunito font-light text-sm/snug sm:text-base/snug text-[#CAFE48]/85">
              {description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlippingCard;
