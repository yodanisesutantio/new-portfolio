/* eslint-disable no-unused-vars */
import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="h-[calc(100vh-theme(spacing.16))] py-6 px-32 flex flex-col flex-grow gap-5 items-center justify-center">
      <h1
        className={`text-4xl font-mclaren font-bold text-[#fffbfc] text-center leading-snug transform transition-all duration-700 ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-16 opacity-0"
        }`}
      >
        Recent Projects
      </h1>

      <div className="flex-1 w-full min-h-0 flex flex-col gap-2 items-center justify-center">
        {/* Kemudi */}
        <div className="flex flex-col gap-2 items-end justify-start w-1/4 h-full bg-[url('/img/uid.jpeg')] bg-center cursor-pointer rounded">

        </div>
      </div>
    </section>
  );
};

export default Projects;
