import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();
  return (
    <nav className="flex justify-between items-center px-32 py-6 border-b border-[#fffbfc]/10">
        <div className="flex items-center">
            <Link to="/">
                <img src="/img/yodanisesutantio.png" alt="Yodanis E. Sutantio | Home" className="h-10" />
            </Link>
        </div>

        <ul className="flex space-x-12">
            <li>
                <Link to="/about" className={`flex flex-col font-nunito font-semibold ${location.pathname === '/about' ? 'text-[#fffbfc]' : 'text-[#fffbfc]/40'} hover:text-[#fffbfc] duration-500 group`}>
                    About
                    <span className="w-full h-[3px] bg-gradient-to-l from-[#CAFE48] to-[#57467B] transform scale-x-0 transition-transform duration-500 origin-right rounded-full group-hover:scale-x-100"></span>
                </Link>
            </li>
            <li>
                <Link to="/socials" className="flex flex-col font-nunito font-semibold text-[#fffbfc]/40 hover:text-[#fffbfc] duration-500 group">
                    Socials
                    <span className="w-full h-[3px] bg-gradient-to-l from-[#CAFE48] to-[#57467B] transform scale-x-0 transition-transform duration-500 origin-right rounded-full group-hover:scale-x-100"></span>
                </Link>
            </li>
            <li>
                <Link to="/resume" className="flex flex-col font-nunito font-semibold text-[#fffbfc]/40 hover:text-[#fffbfc] duration-500 group">
                    Resume
                    <span className="w-full h-[3px] bg-gradient-to-l from-[#CAFE48] to-[#57467B] transform scale-x-0 transition-transform duration-500 origin-right rounded-full group-hover:scale-x-100"></span>
                </Link>
            </li>
        </ul>
    </nav>
  )
}

export default Navbar
