
import React from "react";
import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  const handleSubscribe = (e) => {
    e.preventDefault(); 
    // my subscription logic will be here when I am ready
  
  };

  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <div className="flex flex-col md:flex-row md:space-x-12 items-center mb-4">
          <div className="flex-1 mb-4 md:mb-0">
            <h3 className="text-2xl font-bold mb-2">Tonia</h3>
            <p className="text-gray-400">
              Frontend Engineer, specializing in the development of modern and responsive web applications.
            </p>
          </div>
          <div className="flex-1 w-full">
            <form onSubmit={handleSubscribe} className="flex items-center justify-center">
              <input
                type="email"
                placeholder="Your email"
                className="w-full p-2 rounded-l-lg bg-gray-800 border border-gray-600 
                focus:outline-none focus:border-green-400"
              />
              <button
                type="submit" 
                className="bg-gradient-to-r from-gray-400 to-green-500 text-white px-4 
                py-2 rounded-r-lg"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div
          className="border-t border-gray-600 pt-4 flex flex-col md:flex-row 
          justify-between items-center"
        >
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} T0nia. All rights reserved.
          </p>
          <div className="flex space-x-4 my-4 md:my-0">
            <a href="javascript:void(0)" className="text-gray-400 hover:text-white">
              <FaFacebook />
            </a>
            <a href="javascript:void(0)" className="text-gray-400 hover:text-white">
              <FaTwitter />
            </a>
            <a href="javascript:void(0)" className="text-gray-400 hover:text-white">
              <FaLinkedin />
            </a>
            <a href="https://github.com/T0nia" target="_blank" className="text-gray-400 hover:text-white">
              <FaGithub />
            </a>
          </div>
          <div className="flex space-x-4">
            <a href="javascript:void(0)" className="text-gray-400 hover:text-white">
              Privacy
            </a>
            <a href="javascript:void(0)" className="text-gray-400 hover:text-white">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
