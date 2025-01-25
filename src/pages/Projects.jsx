/* eslint-disable no-unused-vars */
import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="h-[calc(100vh-theme(spacing.16))] py-6 px-24 flex flex-col flex-grow gap-6 items-center justify-center">
      <h1
        className={`text-4xl font-mclaren font-bold text-[#fffbfc] text-center leading-snug transform transition-all duration-700 ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-16 opacity-0"
        }`}
      >
        Recent Projects
      </h1>

      <div
        className={`flex-1 w-full min-h-0 flex flex-row gap-2 px-20 items-center justify-center transform transition-all duration-700 delay-150 ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-16 opacity-0"
        }`}
      >
        {/* Kemudi */}
        {/* This only covers enough */}
        <a
          href="https://sisenep.com/kemudi2"
          target="_blank"
          rel="noopener noreferrer"
          className="group/item flex flex-col justify-end w-1/4 h-full overflow-hidden bg-[url('/img/kemudi-thumb.png')] bg-center cursor-pointer rounded saturate-0 hover:saturate-100 duration-500 transition-[width] hover:w-4/5 group-hover/item:w-1/5 relative"
          // className="group/item flex flex-col justify-end w-1/4 h-full bg-[url('/img/kemudi-thumb.png')] bg-center overflow-hidden cursor-pointer rounded saturate-0 hover:saturate-100 duration-500 transition-[width] hover:w-4/5 group-hover/item:w-1/5 relative"
        >
          {/* Content */}
          <div className="absolute bottom-0 left-0 right-0 p-4 bg-[#57467B] transition-transform duration-500 transform translate-y-full group-hover/item:translate-y-0">
            <div className="w-full h-full flex flex-col justify-end gap-1">
              <p className="font-mclaren font-light text-base text-[#CAFE48]/85">
                2024, Web Development
              </p>
              <h2 className="font-mclaren font-bold text-2xl text-[#CAFE48]">
                KEMUDI
              </h2>
              <p className="font-nunito font-light text-base text-[#CAFE48]/85">
                A web-based platform transforming driver education by connecting learners with schools through interactive lessons, smart quizzes, and seamless scheduling.
              </p>
            </div>
          </div>
        </a>

        {/* This overlay covers the entire image */}
        {/* <a
          href="https://sisenep.com/kemudi2"
          target="_blank"
          rel="noopener noreferrer"
          className="group/item flex flex-col w-1/4 h-full bg-[url('/img/kemudi-thumb.png')] bg-center overflow-hidden cursor-pointer rounded saturate-0 hover:saturate-100 duration-500 transition-[width] hover:w-4/5 group-hover/item:w-1/5"
        >
          <div className="w-full h-full p-4 group-hover/item:bg-[#010400]/40 group-hover/item:backdrop-blur duration-500">
            <div className="w-full h-full flex flex-col justify-end gap-1 transition-transform duration-500 transform translate-y-[calc(100%-6rem)] group-hover/item:translate-y-0">
              <p className="font-mclaren font-light text-base text-[#fffbfc]/85 opacity-0 transform translate-y-4 group-hover/item:opacity-100 group-hover/item:translate-y-0 transition-all duration-500">
                2024, Web Development
              </p>
              <h2 className="font-mclaren font-semibold text-2xl text-[#fffbfc]">
                KEMUDI
              </h2>
              <p className="font-nunito font-light text-base text-[#fffbfc]/85 opacity-0 transform translate-y-4 group-hover/item:opacity-100 group-hover/item:translate-y-0 transition-all duration-500">
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
          className="group/item flex flex-col justify-end w-1/4 h-full overflow-hidden bg-[url('/img/70rad-thumb.png')] bg-center cursor-pointer rounded saturate-0 hover:saturate-100 duration-500 transition-[width] hover:w-4/5 group-hover/item:w-1/5 relative"
          // className="group/item flex flex-col justify-end w-1/4 h-full bg-[url('/img/70rad-thumb.png')] bg-center overflow-hidden cursor-pointer rounded saturate-0 hover:saturate-100 duration-500 transition-[width] hover:w-4/5 group-hover/item:w-1/5 relative"
        >
          {/* Content */}
          <div className="absolute bottom-0 left-0 right-0 p-4 bg-[#57467B] transition-transform duration-500 transform translate-y-full group-hover/item:translate-y-0">
            <div className="w-full h-full flex flex-col justify-end gap-1">
              <p className="font-mclaren font-light text-base text-[#CAFE48]/85">
                2024, UI Design
              </p>
              <h2 className="font-mclaren font-bold text-2xl text-[#CAFE48]">
                70RAD Design Challenge
              </h2>
              <p className="font-nunito font-light text-base text-[#CAFE48]/85">
                A self-driven design exploration challenging my creative boundaries through daily UI recreations and focused 10-day design projects, documenting my skill progression.
              </p>
            </div>
          </div>
        </a>

        {/* Logo SI */}
        <a
          href="https://bit.ly/logosisfor"
          target="_blank"
          rel="noopener noreferrer"
          className="group/item flex flex-col justify-end w-1/4 h-full overflow-hidden bg-[url('/img/si-logo-thumb.png')] bg-center cursor-pointer rounded saturate-0 hover:saturate-100 duration-500 transition-[width] hover:w-4/5 group-hover/item:w-1/5 relative"
          // className="group/item flex flex-col justify-end w-1/4 h-full bg-[url('/img/si-logo-thumb.png')] bg-center overflow-hidden cursor-pointer rounded saturate-0 hover:saturate-100 duration-500 transition-[width] hover:w-4/5 group-hover/item:w-1/5 relative"
        >
          {/* Content */}
          <div className="absolute bottom-0 left-0 right-0 p-4 bg-[#57467B] transition-transform duration-500 transform translate-y-full group-hover/item:translate-y-0">
            <div className="w-full h-full flex flex-col justify-end gap-1">
              <p className="font-mclaren font-light text-base text-[#CAFE48]/85">
                2023, Logo Design
              </p>
              <h2 className="font-mclaren font-bold text-2xl text-[#CAFE48]">
                Information Systems of ITATS
              </h2>
              <p className="font-nunito font-light text-base text-[#CAFE48]/85">
                Navigating a design challenge with minimal experience, I created a winning logo that became the official emblem for my college department.
              </p>
            </div>
          </div>
        </a>

        {/* Archdaily UX Case Study */}
        <a
          href="https://www.behance.net/gallery/181193573/UX-Case-Study-Archdaily"
          target="_blank"
          rel="noopener noreferrer"
          className="group/item flex flex-col justify-end w-1/4 h-full overflow-hidden bg-[url('/img/uid.jpeg')] bg-center cursor-pointer rounded saturate-0 hover:saturate-100 duration-500 transition-[width] hover:w-4/5 group-hover/item:w-1/5 relative"
          // className="group/item flex flex-col justify-end w-1/4 h-full bg-[url('/img/uid.jpeg')] bg-center overflow-hidden cursor-pointer rounded saturate-0 hover:saturate-100 duration-500 transition-[width] hover:w-4/5 group-hover/item:w-1/5 relative"
        >
          {/* Content */}
          <div className="absolute bottom-0 left-0 right-0 p-4 bg-[#57467B] transition-transform duration-500 transform translate-y-full group-hover/item:translate-y-0">
            <div className="w-full h-full flex flex-col justify-end gap-1">
              <p className="font-mclaren font-light text-base text-[#CAFE48]/85">
                2023, Case Study
              </p>
              <h2 className="font-mclaren font-bold text-2xl text-[#CAFE48]">
                Archdaily UX Case Study
              </h2>
              <p className="font-nunito font-light text-base text-[#CAFE48]/85">
                Crafting a comprehensive UX case study with permission from Archdaily, diving deep into design principles and gaining valuable industry insights.
              </p>
            </div>
          </div>
        </a>
      </div>
    </section>
  );
};

export default Projects;
