/* eslint-disable no-unused-vars */
import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const [isFlipped, setIsFlipped] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    // Function to check screen size
    const checkScreenSize = () => {
      setIsSmallScreen(window.innerWidth < 1280);
    };

    // Initial check
    checkScreenSize();

    // Add resize listener
    window.addEventListener("resize", checkScreenSize);

    // Cleanup
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  useEffect(() => {
    let initialDelay;
    let interval;

    if (isSmallScreen) {
      // Only set up animation if screen is small
      initialDelay = setTimeout(() => {
        setIsFlipped(true);
      }, 1000);

      interval = setInterval(() => {
        setIsFlipped((prev) => !prev);
      }, 4000);
    } else {
      // Reset to front side on large screens
      setIsFlipped(false);
    }

    return () => {
      clearTimeout(initialDelay);
      clearInterval(interval);
    };
  }, [isSmallScreen]);

  return (
    <section className="h-[calc(100vh-(--spacing(16)))] py-4 md:py-6 px-4 sm:px-10 lg:px-32 2xl:px-44 flex flex-col grow gap-6 items-center justify-center">
      {/* Page Header */}
      <h1
        className={`text-2xl md:text-4xl font-mclaren font-bold text-[#fffbfc] text-center leading-snug transform transition-all duration-700 ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-16 opacity-0"
        }`}
      >
        Recent Projects
      </h1>

      <div
        className={`flex-1 w-full min-h-0 grid grid-cols-2 sm:flex sm:flex-row md:grid md:grid-cols-2 xl:flex xl:flex-row gap-2 md:gap-3 xl:gap-2 xl:px-10 items-center justify-center transform transition-all duration-700 delay-150 ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-16 opacity-0"
        }`}
      >
        {/* Kemudi */}
        {/* This only covers enough */}
        {/* <a
          href="https://sisenep.com/kemudi2"
          target="_blank"
          rel="noopener noreferrer"
          className="group/item flex flex-col justify-end w-full xl:w-1/4 h-full overflow-hidden bg-[url('/img/kemudi-thumb.png')] bg-cover xl:bg-auto bg-center cursor-pointer rounded-sm saturate-0 xl:hover:saturate-100 duration-700 xl:transition-[width] xl:hover:w-4/5 xl:group-hover/item:w-1/5 relative"
        > */}
        {/* Content */}
        {/* <div className="absolute bottom-0 left-0 right-0 p-2 xl:p-4 bg-[#57467B] transition-transform duration-700 transform translate-y-full group-hover/item:translate-y-0">
            <div className="w-full h-full flex flex-col justify-end gap-0 xl:gap-1">
              <p className="font-mclaren font-light text-base text-[#CAFE48]/85">
                2024, Web Development
              </p>
              <h2 className="font-mclaren font-bold text-2xl text-[#CAFE48]">
                KEMUDI
              </h2>
              <p className="font-nunito font-light text-base text-[#CAFE48]/85">
                A web-based platform transforming driver education by connecting
                learners with schools through interactive lessons, smart
                quizzes, and seamless scheduling.
              </p>
            </div>
          </div>
        </a> */}

        <div className="relative xl:transition-[width] xl:hover:w-4/5 xl:group-hover/item:w-1/5 w-full xl:w-1/4 h-full perspective-[1000] duration-700">
          <div
            className={`relative w-full h-full transition-transform duration-700 transform-3d ${
              isFlipped ? "rotate-y-180" : ""
            }`}
          >
            {/* Front side */}
            <a className="absolute w-full h-full backface-hidden group/item flex flex-col justify-end bg-[url('/img/kemudi-thumb.png')] bg-cover xl:bg-auto bg-center overflow-hidden rounded-sm saturate-0 xl:hover:saturate-100 duration-700">
              <div className="absolute bottom-0 left-0 right-0 p-2 xl:p-4 bg-[#57467B] transition-transform duration-700 transform translate-y-full group-hover/item:translate-y-0">
                <div className="w-full h-full flex flex-col justify-end gap-0 xl:gap-1">
                  <p className="font-mclaren font-light text-base text-[#CAFE48]/85">
                    2024, Web Development
                  </p>
                  <h2 className="font-mclaren font-bold text-2xl text-[#CAFE48]">
                    KEMUDI
                  </h2>
                  <p className="font-nunito font-light text-base text-[#CAFE48]/85">
                    A web-based platform transforming driver education by
                    connecting learners with schools through interactive
                    lessons, smart quizzes, and seamless scheduling.
                  </p>
                </div>
              </div>
            </a>

            {/* Back side */}
            <div className="absolute w-full h-full backface-hidden rotate-y-180 bg-[#57467B] rounded-sm">
              <div className="w-full h-full flex flex-col justify-center items-center gap-0 xl:gap-1 p-2 xl:p-4">
                <p className="font-mclaren font-light text-base text-[#CAFE48]/85">
                  2024, Web Development
                </p>
                <h2 className="font-mclaren font-bold text-2xl text-[#CAFE48]">
                  KEMUDI
                </h2>
              </div>
            </div>
          </div>
        </div>

        {/* This overlay covers the entire image */}
        {/* <a
          href="https://sisenep.com/kemudi2"
          target="_blank"
          rel="noopener noreferrer"
          className="group/item flex flex-col w-1/4 h-full bg-[url('/img/kemudi-thumb.png')] bg-center overflow-hidden cursor-pointer rounded-sm saturate-0 hover:saturate-100 duration-700 transition-[width] hover:w-4/5 group-hover/item:w-1/5"
        >
          <div className="w-full h-full p-4 group-hover/item:bg-[#010400]/40 group-hover/item:backdrop-blur-sm duration-700">
            <div className="w-full h-full flex flex-col justify-end gap-1 transition-transform duration-700 transform translate-y-[calc(100%-6rem)] group-hover/item:translate-y-0">
              <p className="font-mclaren font-light text-base text-[#fffbfc]/85 opacity-0 transform translate-y-4 group-hover/item:opacity-100 group-hover/item:translate-y-0 transition-all duration-700">
                2024, Web Development
              </p>
              <h2 className="font-mclaren font-semibold text-2xl text-[#fffbfc]">
                KEMUDI
              </h2>
              <p className="font-nunito font-light text-base text-[#fffbfc]/85 opacity-0 transform translate-y-4 group-hover/item:opacity-100 group-hover/item:translate-y-0 transition-all duration-700">
                Your project description goes here. This text will slide up and
                fade in on hover, just like the original effect.
              </p>
            </div>
          </div>
        </a> */}

        {/* 70 RAD */}
        <a
          href="https://www.figma.com/design/aPp4xCfXp8K69D5Y5FH4JQ/RAD-Design-Challenge?node-id=33-2&t=QZrSCGsk6JoTbrxr-1"
          target="_blank"
          rel="noopener noreferrer"
          className="group/item flex flex-col justify-end w-full xl:w-1/4 h-full overflow-hidden bg-[url('/img/70rad-thumb.png')] bg-cover xl:bg-auto bg-center cursor-pointer rounded-sm saturate-0 xl:hover:saturate-100 duration-700 xl:transition-[width] xl:hover:w-4/5 xl:group-hover/item:w-1/5 relative"
        >
          {/* Content */}
          <div className="absolute bottom-0 left-0 right-0 p-4 bg-[#57467B] transition-transform duration-700 transform translate-y-full group-hover/item:translate-y-0">
            <div className="w-full h-full flex flex-col justify-end gap-1">
              <p className="font-mclaren font-light text-base text-[#CAFE48]/85">
                2024, UI Design
              </p>
              <h2 className="font-mclaren font-bold text-2xl text-[#CAFE48]">
                70RAD Design Challenge
              </h2>
              <p className="font-nunito font-light text-base text-[#CAFE48]/85">
                A self-driven design exploration challenging my creative
                boundaries through daily UI recreations and focused 10-day
                design projects, documenting my skill progression.
              </p>
            </div>
          </div>
        </a>

        {/* Logo SI */}
        <a
          href="https://bit.ly/logosisfor"
          target="_blank"
          rel="noopener noreferrer"
          className="group/item flex flex-col justify-end w-full xl:w-1/4 h-full overflow-hidden bg-[url('/img/si-logo-thumb.png')] bg-cover xl:bg-auto bg-center cursor-pointer rounded-sm saturate-0 xl:hover:saturate-100 duration-700 xl:transition-[width] xl:hover:w-4/5 xl:group-hover/item:w-1/5 relative"
        >
          {/* Content */}
          <div className="absolute bottom-0 left-0 right-0 p-4 bg-[#57467B] transition-transform duration-700 transform translate-y-full group-hover/item:translate-y-0">
            <div className="w-full h-full flex flex-col justify-end gap-1">
              <p className="font-mclaren font-light text-base text-[#CAFE48]/85">
                2023, Logo Design
              </p>
              <h2 className="font-mclaren font-bold text-2xl text-[#CAFE48]">
                Information Systems of ITATS
              </h2>
              <p className="font-nunito font-light text-base text-[#CAFE48]/85">
                Navigating a design challenge with minimal experience, I created
                a winning logo that became the official emblem for my college
                department.
              </p>
            </div>
          </div>
        </a>

        {/* Archdaily UX Case Study */}
        <a
          href="https://www.behance.net/gallery/181193573/UX-Case-Study-Archdaily"
          target="_blank"
          rel="noopener noreferrer"
          className="group/item flex flex-col justify-end w-full xl:w-1/4 h-full overflow-hidden bg-[url('/img/archdaily-thumb.png')] bg-cover xl:bg-auto bg-center cursor-pointer rounded-sm saturate-0 xl:hover:saturate-100 duration-700 xl:transition-[width] xl:hover:w-4/5 xl:group-hover/item:w-1/5 relative"
        >
          {/* Content */}
          <div className="absolute bottom-0 left-0 right-0 p-4 bg-[#57467B] transition-transform duration-700 transform translate-y-full group-hover/item:translate-y-0">
            <div className="w-full h-full flex flex-col justify-end gap-1">
              <p className="font-mclaren font-light text-base text-[#CAFE48]/85">
                2023, Case Study
              </p>
              <h2 className="font-mclaren font-bold text-2xl text-[#CAFE48]">
                Archdaily UX Case Study
              </h2>
              <p className="font-nunito font-light text-base text-[#CAFE48]/85">
                Crafting a comprehensive UX case study with permission from
                Archdaily, diving deep into design principles and gaining
                valuable industry insights.
              </p>
            </div>
          </div>
        </a>
      </div>
    </section>
  );
};

export default Projects;
