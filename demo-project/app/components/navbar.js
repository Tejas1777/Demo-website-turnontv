import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-black p-4 w-full max-w-8xl mx-auto fixed top-0 z-50">
      <div className="container mx-auto flex justify-between item-center">
        <span className="text-white text-5xl font-bold italic">.TV</span>
        <ul className="flex space-x-12 text-white font-bold text-2xl justify-end">
          <li><a href="#Home" className="hover:text-gray-300 transition duration-200">Home</a></li>
          <li><a href="#stories" className="hover:text-gray-300 transition duration-200">Stories</a></li>
          <li><a href="#about" className="hover:text-gray-300 transition duration-200">About</a></li>
          <li><a href="#faq" className="hover:text-gray-300 transition duration-200">FAQ</a></li>
          <li><a href="#contact" className="hover:text-gray-300 transition duration-200">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
