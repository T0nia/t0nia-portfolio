import React from 'react';

const Navbar = () => {
  return (
    <nav className='bg-black text-white px-8 md:px-16 lg:px-24'>
        <div className='container py-2 flex justify-center md:justify-between items-center'>
            <div className='text-2xl font-bold hidden md:inline'>T0nia</div>
            <div className='space-x-6'>
                <a href="#home" className='hover:text-gray-400'>Home</a>
                <a href="#about" className='hover:text-gray-400'>About</a>
                <a href="#service" className='hover:text-gray-400'>Services</a>
                <a href="#project" className='hover:text-gray-400'>Projects</a>
                <a href="#contact" className='hover:text-gray-400'>Contact</a>
            </div>
            
            {/* connect button link */}
            <a 
              href="https://www.linkedin.com/in/anthonia-edokah-487179309/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className='bg-gradient-to-r from-blue-500 to-green-400 text-white hidden md:inline
              transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full'>
              Get in touch
            </a>
        </div>
    </nav>
  )
}

export default Navbar;
