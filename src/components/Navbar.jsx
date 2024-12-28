import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center px-32 py-6 border-b border-[#fffbfc]/10">
        <div className="flex items-center">
            <Link to="/">
                <img src="/img/yodanisesutantio.png" alt="Yodanis E. Sutantio | Home" className="h-10" />
            </Link>
        </div>

        <ul className="flex space-x-12">
            <li>
                <Link to="/about" className="font-nunito text-[#fffbfc]/40">About</Link>
            </li>
            <li>
                <Link to="/socials" className="font-nunito text-[#fffbfc]/40">Socials</Link>
            </li>
            <li>
                <Link to="/resume" className="font-nunito text-[#fffbfc]/40">Resume</Link>
            </li>
        </ul>
    </nav>
  )
}

export default Navbar
