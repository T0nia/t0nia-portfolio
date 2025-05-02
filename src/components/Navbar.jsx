import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-black text-white px-8 md:px-16 lg:px-24">
      <div className="container py-4 flex items-center justify-between relative">
        {/* Logo */}
        <div className="text-3xl font-bold">t0nia</div>

        {/* Centered Nav Links */}
        <div className="hidden md:flex space-x-6 absolute left-1/2 transform -translate-x-1/2">
          <a href="#home" className="hover:text-gray-400">Home</a>
          <a href="#about" className="hover:text-gray-400">About</a>
          <a href="#service" className="hover:text-gray-400">Services</a>
          <a href="#project" className="hover:text-gray-400">Projects</a>
          <a href="#contact" className="hover:text-gray-400">Contact</a>
        </div>

        {/* Get in touch button */}
        <div className="hidden md:block">
          <a
            href="www.linkedin.com/in/anthonia-elohor-b5275735a"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-gray-400 to-green-500 text-white transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full"
          >
            Get in touch
          </a>
        </div>

        {/* Hamburger Icon */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden flex flex-col items-start space-y-4 px-8 pb-4">
          <a href="#home" className="hover:text-gray-400">Home</a>
          <a href="#about" className="hover:text-gray-400">About</a>
          <a href="#service" className="hover:text-gray-400">Services</a>
          <a href="#project" className="hover:text-gray-400">Projects</a>
          <a href="#contact" className="hover:text-gray-400">Contact</a>
          <a
            href="www.linkedin.com/in/anthonia-elohor-b5275735a"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-gray-400 to-green-500 text-white transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full"
          >
            Get in touch
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
