/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear(); // Get the current year

  return (
    <div className="flex justify-between items-center p-2">
      <p className="text-sm font-normal font-nunito text-[#fffbfc]/40">
        © {currentYear} Portfolio by Yodanis E. Sutantio
      </p>

      <ul className="flex space-x-6">
        <li>
          <Link
            to="/about"
            className="flex flex-col font-nunito font-normal text-[#fffbfc]/40 text-sm hover:text-[#fffbfc] duration-500 group"
          >
            About
          </Link>
        </li>
        <li>
          <Link
            to="/projects"
            className="flex flex-col font-nunito font-normal text-[#fffbfc]/40 text-sm hover:text-[#fffbfc] duration-500 group"
          >
            Projects
          </Link>
        </li>
        {/* <li>
          <Link
            to="/socials"
            className="flex flex-col font-nunito font-normal text-[#fffbfc]/40 text-sm hover:text-[#fffbfc] duration-500 group"
          >
            Socials
          </Link>
        </li> */}
        <li>
          <Link
            to="/resume"
            className="flex flex-col font-nunito font-normal text-[#fffbfc]/40 text-sm hover:text-[#fffbfc] duration-500 group"
          >
            Resume
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
