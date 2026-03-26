import React from 'react';
import './header.css';

const Header = () => {
  return (
    /* Increased mobile padding from px-4 to px-6 to prevent edge-touching */
    <div className="hero-text px-6 md:px-10 py-20 md:py-32 text-center md:text-left">
      
      <h1 className="hero-title text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
        We’re Building Your Future
      </h1>

      <p className="hero-subtitle mt-4 text-base md:text-lg max-w-xl mx-auto md:mx-0 text-gray-700">
        Take a step towards the future of construction with Cobuild
      </p>

      <div className="mt-8 ml-10">
        <a
          href="#"
          
          className="hero-button inline-block bg-orange-400 text-white px-10 py-3.5  md:px-12 md:py-4 rounded-md text-sm md:text-base font-semibold hover:bg-orange-500 transition-all shadow-md active:scale-95"
        >
          Get A Quote
        </a>
      </div>

    </div>
  );
};

export default Header;


  