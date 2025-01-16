/* eslint-disable no-unused-vars */
import React from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  // These are for locating in what page is the visitor currently in
  const location = useLocation();

  return (
    <nav className="flex justify-between items-center px-32 py-6 sticky top-0 bg-[#010400] z-50 border-b border-[#fffbfc]/10">
      <div className="flex items-center">
        <Link to="/">
          <img
            src="/img/yodanisesutantio_logomark.png"
            alt="Yodanis E. Sutantio | Home"
            className="h-10 rounded-lg hover:shadow-xl hover:shadow-[#fffbfc]/15 duration-500"
          />
        </Link>
      </div>

      <ul className="flex space-x-12">
        <li>
          <Link
            to="/about"
            className={`flex flex-col font-nunito font-semibold ${
              location.pathname === "/about"
                ? "text-[#fffbfc]"
                : "text-[#fffbfc]/40"
            } hover:text-[#fffbfc] duration-500 group`}
          >
            About
            <span className="w-full h-[3px] bg-gradient-to-l from-[#CAFE48] to-[#57467B] transform scale-x-0 transition-transform duration-500 origin-right rounded-full group-hover:scale-x-100"></span>
          </Link>
        </li>
        <li>
          <Link
            to="/projects"
            className={`flex flex-col font-nunito font-semibold ${
              location.pathname === "/projects"
                ? "text-[#fffbfc]"
                : "text-[#fffbfc]/40"
            } hover:text-[#fffbfc] duration-500 group`}
          >
            Projects
            <span className="w-full h-[3px] bg-gradient-to-l from-[#CAFE48] to-[#57467B] transform scale-x-0 transition-transform duration-500 origin-right rounded-full group-hover:scale-x-100"></span>
          </Link>
        </li>
        <li>
          <Link
            to="/socials"
            className={`flex flex-col font-nunito font-semibold ${
              location.pathname === "/socials"
                ? "text-[#fffbfc]"
                : "text-[#fffbfc]/40"
            } hover:text-[#fffbfc] duration-500 group`}
          >
            Socials
            <span className="w-full h-[3px] bg-gradient-to-l from-[#CAFE48] to-[#57467B] transform scale-x-0 transition-transform duration-500 origin-right rounded-full group-hover:scale-x-100"></span>
          </Link>
        </li>
        <li>
          <Link
            to="/resume"
            className={`flex flex-col font-nunito font-semibold ${
              location.pathname === "/resume"
                ? "text-[#fffbfc]"
                : "text-[#fffbfc]/40"
            } hover:text-[#fffbfc] duration-500 group`}
          >
            Resume
            <span className="w-full h-[3px] bg-gradient-to-l from-[#CAFE48] to-[#57467B] transform scale-x-0 transition-transform duration-500 origin-right rounded-full group-hover:scale-x-100"></span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
