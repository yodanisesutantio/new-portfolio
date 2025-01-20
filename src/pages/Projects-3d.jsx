/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Link } from "react-router-dom";
import ThreeBox from "../components/ThreeBox";
import Kemudi from "../components/Kemudi";

const Projects = () => {
  return (
    <section className="py-12 px-32 flex flex-col flex-grow gap-5 items-center justify-center">
      <div className="flex flex-col justify-between w-full h-full relative">
        {/* Heading and Navigate to Other Project Wrapper */}
        <div className="flex-shrink-0 w-full grid grid-cols-2 z-20">
          <div className="flex flex-col items-start w-full">
            <p className="text-lg font-nunito font-medium text-[#fffbfc] leading-snug">
              Tech Field
            </p>
            <h1 className="text-4xl font-mclaren font-bold text-[#fffbfc] leading-snug">
              Project Name
            </h1>
          </div>

          <div className="flex flex-col gap-1 items-end">
            <h2 className="text-2xl font-mclaren font-medium text-[#fffbfc] text-right leading-snug">
              Next Up: <br /> Project Name 2
            </h2>

            <div className="w-full flex flex-row gap-6 justify-end">
              <button
                type="button"
                className="flex flex-row gap-1 justify-center items-center text-[#fffbfc] opacity-40 hover:opacity-100 duration-500"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4 flex items-center justify-center"
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
                    d="m12 6l-6 6l6 6m6-12l-6 6l6 6"
                  ></path>
                </svg>
                Previous Project
              </button>

              <button
                type="button"
                className="flex flex-row gap-1 justify-center items-center text-[#fffbfc] opacity-40 hover:opacity-100 duration-500"
              >
                Next Project
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4 flex items-center justify-center"
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
                    d="m12 18l6-6l-6-6M6 18l6-6l-6-6"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* 3d Canvas */}
        <div className="absolute top-0 left-0 row-span-2 w-full h-full flex justify-center items-center gap-3 overflow-visible">
          <Kemudi />
        </div>

        {/* Description and CTA Wrapper */}
        <div className="w-full grid grid-cols-2 z-20 items-end gap-6">
          <div className="w-3/4">
            <p className="text-base font-nunito font-light text-[#fffbfc]/75 leading-snug line-clamp-4">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste
              similique nostrum mollitia perferendis, impedit molestias at, ex,
              repudiandae laborum explicabo officia vero dignissimos repellendus
              voluptatem fugit quisquam corporis et odio!
            </p>
          </div>

          <div className="w-full flex flex-row items-end justify-end">
            <Link
              to="/projects"
              className="h-16 pl-7 pr-5 flex gap-2 items-center justify-center font-nunito font-extrabold text-lg text-[#010400] hover:text-[#CAFE48] bg-[#fffbfc] hover:bg-[#57467B] duration-500"
            >
              Open Project Name
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 flex items-center justify-center"
                width="1em"
                height="1em"
                viewBox="0 0 24 24"
              >
                <path
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m6.5 17.5l11-11m0 0h-9m9 0v9"
                ></path>
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
