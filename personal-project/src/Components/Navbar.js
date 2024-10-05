import React, { useState } from 'react';
import { Link } from 'react-scroll'; // Import the Link component
import logo from '../assets/portfolio-logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-slate-900 py-4 px-12">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo or Branding */}
        <img src={logo} alt="Portfolio Logo" className="w-12 h-12" />

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          <Link to="aboutme" smooth={true} duration={500} className="text-gray-300 hover:text-white">About</Link>
          <Link to="education" smooth={true} duration={500} className="text-gray-300 hover:text-white">Education</Link>
          <Link to="projects" smooth={true} duration={500} className="text-gray-300 hover:text-white">Projects</Link>
          <Link to="contactme" smooth={true} duration={500} className="text-gray-300 hover:text-white">Contact</Link>
        </div>

        {/* Hamburger Menu Icon (visible on small screens) */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-gray-300 hover:text-white focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <Link to="aboutme" smooth={true} duration={500} className="block text-gray-300 hover:text-white px-4 py-2">About</Link>
          <Link to="education" smooth={true} duration={500} className="block text-gray-300 hover:text-white px-4 py-2">Education</Link>
          <Link to="projects" smooth={true} duration={500} className="block text-gray-300 hover:text-white px-4 py-2">Projects</Link>
          <Link to="contactme" smooth={true} duration={500} className="block text-gray-300 hover:text-white px-4 py-2">Contact</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
