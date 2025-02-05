/* eslint-disable no-unused-vars */
import React from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  // These are for locating in what page is the visitor currently in
  const location = useLocation();

  return (
    <nav className="flex justify-between items-center px-4 sm:px-10 lg:px-32 xl:px-44 py-5 lg:py-6 sticky top-0 w-full bg-[#010400] z-50 border-b border-[#fffbfc]/10">
      <div className="flex items-center shrink-0">
        <Link to="/">
          <img
            src="/img/yodanisesutantio_logomark.png"
            alt="Yodanis E. Sutantio | Home"
            className="h-9 md:h-10 xl:h-12 rounded-lg lg:hover:shadow-xl lg:hover:shadow-[#fffbfc]/15 duration-500"
          />
        </Link>
      </div>

      <ul className="flex space-x-8 sm:space-x-12 lg:space-x-12">
        <li>
          <Link
            to="/about"
            className={`flex flex-col font-nunito font-semibold text-sm md:text-base ${
              location.pathname === "/about"
                ? "text-[#fffbfc]"
                : "text-[#fffbfc]/40"
            } lg:hover:text-[#fffbfc] duration-500 group`}
          >
            About
            <span className="w-full h-[3px] bg-linear-to-l from-[#CAFE48] to-[#57467B] transform scale-x-0 transition-transform duration-500 origin-right rounded-full lg:group-hover:scale-x-100"></span>
          </Link>
        </li>
        <li>
          <Link
            to="/projects"
            className={`flex flex-col font-nunito font-semibold text-sm md:text-base ${
              location.pathname === "/projects"
                ? "text-[#fffbfc]"
                : "text-[#fffbfc]/40"
            } lg:hover:text-[#fffbfc] duration-500 group`}
          >
            Projects
            <span className="w-full h-[3px] bg-linear-to-l from-[#CAFE48] to-[#57467B] transform scale-x-0 transition-transform duration-500 origin-right rounded-full lg:group-hover:scale-x-100"></span>
          </Link>
        </li>
        {/* <li>
          <Link
            to="/socials"
            className={`flex flex-col font-nunito font-semibold ${
              location.pathname === "/socials"
                ? "text-[#fffbfc]"
                : "text-[#fffbfc]/40"
            } hover:text-[#fffbfc] duration-500 group`}
          >
            Socials
            <span className="w-full h-[3px] bg-linear-to-l from-[#CAFE48] to-[#57467B] transform scale-x-0 transition-transform duration-500 origin-right rounded-full group-hover:scale-x-100"></span>
          </Link>
        </li> */}
        <li>
          <Link
            to="/resume"
            className={`flex flex-col font-nunito font-semibold text-sm md:text-base ${
              location.pathname === "/resume"
                ? "text-[#fffbfc]"
                : "text-[#fffbfc]/40"
            } lg:hover:text-[#fffbfc] duration-500 group`}
          >
            Resume
            <span className="w-full h-[3px] bg-linear-to-l from-[#CAFE48] to-[#57467B] transform scale-x-0 transition-transform duration-500 origin-right rounded-full lg:group-hover:scale-x-100"></span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
