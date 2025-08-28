'use client';

import React from 'react';
import { useState, useEffect } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/98 shadow-md' : 'bg-white/95'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl font-bold text-gray-800">
              Portfolio
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              <Link href="#home" className="text-gray-600 hover:text-blue-600 transition-colors">
                Home
              </Link>
              <Link href="#about" className="text-gray-600 hover:text-blue-600 transition-colors">
                About
              </Link>
              <Link href="#projects" className="text-gray-600 hover:text-blue-600 transition-colors">
                Projects
              </Link>
              <Link href="#skills" className="text-gray-600 hover:text-blue-600 transition-colors">
                Skills
              </Link>
              <Link href="#contact" className="text-gray-600 hover:text-blue-600 transition-colors">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 