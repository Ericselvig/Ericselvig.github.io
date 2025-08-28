'use client';

import React from 'react';
import Link from 'next/link';

const Hero = () => {
  return (
    <section id="home" className="section-hero min-h-screen flex items-center justify-center">
      <div className="text-center px-4">
        <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6">
          Yash Goyal
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 mb-4">
          Smart Contract Developer & Security Researcher
        </p>
        <p className="text-lg text-gray-600 mb-8">
          Building secure and efficient blockchain solutions
        </p>
        <div className="flex justify-center gap-4">
          <Link
            href="#contact"
            className="btn-vibrant"
          >
            Get in Touch
          </Link>
          <a
            href="https://github.com/Ericselvig"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-vibrant"
          >
            View GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero; 