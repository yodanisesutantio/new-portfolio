import React from "react";
import { Link, useLocation } from "react-router-dom";

const Projects = () => {
  return (
    <section className="py-12 px-32 flex flex-col flex-grow items-center justify-center">
      <h1 className="text-4xl font-mclaren font-bold text-[#fffbfc] text-center leading-snug">
        Recent Projects
      </h1>
      <p className="mt-2 w-96 font-nunito font-light text-base text-[#fffbfc]/75 text-center leading-tight">
        I've done varying works across my educational years, below is my most
        proud of.
      </p>

      <div className="flex flex-col w-full my-8 px-32">
        <Link
          to="/projects"
          className="flex flex-row w-full justify-between py-6 pl-1 pr-0.5 border-b border-[#fffbfc]"
        >
          <div className="w-[27rem] flex flex-col items-start gap-2">
            <h2 className="text-2xl font-mclaren font-semibold text-[#fffbfc] leading-snug">
              Project Name 1
            </h2>
            <p className="font-nunito font-light text-base text-[#fffbfc]/75 leading-tight">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
          <div className="flex flex-col items-end gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-8 h-8"
              width="1em"
              height="1em"
              viewBox="0 0 24 24"
            >
              <path
                fill="none"
                stroke="#fffbfc"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1"
                d="m6.5 17.5l11-11m0 0h-9m9 0v9"
              ></path>
            </svg>
            <p className="font-nunito font-light pr-1 text-base text-[#fffbfc]/75 leading-tight">
              2024
            </p>
          </div>
        </Link>

        <Link
          to="/projects"
          className="flex flex-row w-full justify-between py-6 pl-1 pr-0.5 border-b border-[#fffbfc]"
        >
          <div className="w-[27rem] flex flex-col items-start gap-2">
            <h2 className="text-2xl font-mclaren font-semibold text-[#fffbfc] leading-snug">
              Project Name 1
            </h2>
            <p className="font-nunito font-light text-base text-[#fffbfc]/75 leading-tight">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
          <div className="flex flex-col items-end gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-8 h-8"
              width="1em"
              height="1em"
              viewBox="0 0 24 24"
            >
              <path
                fill="none"
                stroke="#fffbfc"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1"
                d="m6.5 17.5l11-11m0 0h-9m9 0v9"
              ></path>
            </svg>
            <p className="font-nunito font-light pr-1 text-base text-[#fffbfc]/75 leading-tight">
              2024
            </p>
          </div>
        </Link>

        <Link
          to="/projects"
          className="flex flex-row w-full justify-between py-6 pl-1 pr-0.5 border-b border-[#fffbfc]"
        >
          <div className="w-[27rem] flex flex-col items-start gap-2">
            <h2 className="text-2xl font-mclaren font-semibold text-[#fffbfc] leading-snug">
              Project Name 1
            </h2>
            <p className="font-nunito font-light text-base text-[#fffbfc]/75 leading-tight">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
          <div className="flex flex-col items-end gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-8 h-8"
              width="1em"
              height="1em"
              viewBox="0 0 24 24"
            >
              <path
                fill="none"
                stroke="#fffbfc"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1"
                d="m6.5 17.5l11-11m0 0h-9m9 0v9"
              ></path>
            </svg>
            <p className="font-nunito font-light pr-1 text-base text-[#fffbfc]/75 leading-tight">
              2024
            </p>
          </div>
        </Link>

        <Link
          to="/projects"
          className="flex flex-row w-full justify-between py-6 pl-1 pr-0.5 border-b border-[#fffbfc]"
        >
          <div className="w-[27rem] flex flex-col items-start gap-2">
            <h2 className="text-2xl font-mclaren font-semibold text-[#fffbfc] leading-snug">
              Project Name 1
            </h2>
            <p className="font-nunito font-light text-base text-[#fffbfc]/75 leading-tight">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
          <div className="flex flex-col items-end gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-8 h-8"
              width="1em"
              height="1em"
              viewBox="0 0 24 24"
            >
              <path
                fill="none"
                stroke="#fffbfc"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1"
                d="m6.5 17.5l11-11m0 0h-9m9 0v9"
              ></path>
            </svg>
            <p className="font-nunito font-light pr-1 text-base text-[#fffbfc]/75 leading-tight">
              2024
            </p>
          </div>
        </Link>
      </div>
    </section>
  );
};

export default Projects;
