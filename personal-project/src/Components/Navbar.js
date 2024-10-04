import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-slate-900 py-4 px-12">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo or Branding */}
        <div className="text-white text-2xl font-bold">
          A
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          <a href="#" className="text-gray-300 hover:text-white">About</a>
          <a href="#" className="text-gray-300 hover:text-white">Projects</a>
          <a href="#" className="text-gray-300 hover:text-white">Technologies</a>
          <a href="#" className="text-gray-300 hover:text-white">Contact</a>
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
          <a href="#" className="block text-gray-300 hover:text-white px-4 py-2">About</a>
          <a href="#" className="block text-gray-300 hover:text-white px-4 py-2">Projects</a>
          <a href="#" className="block text-gray-300 hover:text-white px-4 py-2">Technologies</a>
          <a href="#" className="block text-gray-300 hover:text-white px-4 py-2">Contact</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
