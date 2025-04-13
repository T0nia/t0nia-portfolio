import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa'; // for Hamburger and Close icons

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-black text-white px-6 md:px-16 lg:px-24">
      <div className="py-4 flex justify-between items-center relative">
        {/* Logo */}
        <div className="text-2xl font-bold">t0nia</div>

        {/* Hamburger icon (mobile only) */}
        <div className="md:hidden z-50" onClick={toggleMenu}>
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </div>

        {/* Nav Links */}
        <div className={`absolute top-16 left-0 w-full bg-black text-center md:static md:flex md:items-center md:space-x-6 ${isOpen ? 'block' : 'hidden'} md:block`}>
          <a href="#home" onClick={() => setIsOpen(false)} className="block py-2 hover:text-gray-400">Home</a>
          <a href="#about" onClick={() => setIsOpen(false)} className="block py-2 hover:text-gray-400">About</a>
          <a href="#service" onClick={() => setIsOpen(false)} className="block py-2 hover:text-gray-400">Services</a>
          <a href="#project" onClick={() => setIsOpen(false)} className="block py-2 hover:text-gray-400">Projects</a>
          <a href="#contact" onClick={() => setIsOpen(false)} className="block py-2 hover:text-gray-400">Contact</a>
        </div>

        {/* Get in touch button (desktop only) */}
        <a
          href="https://www.linkedin.com/in/anthonia-edokah-487179309/"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-gradient-to-r from-gray-400 to-green-500 text-white hidden md:inline transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full"
        >
          Get in touch
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
