'use client';

import React from 'react';
import { useEffect, useRef } from 'react';
import Link from 'next/link';

interface Project {
  title: string;
  description: string;
  githubUrl: string;
  demoUrl: string;
  emoji: string;
  tech: string;
}

const projects: Project[] = [
  {
    title: "Liquidity Oracle",
    description: "Uniswap's UHI Cohort 4 EigenLayer & Uniswap Foundation Track Winner. A Rust-based solution for liquidity management.",
    githubUrl: "https://github.com/Suryansh-23/liquidity-oracle",
    demoUrl: "#",
    emoji: "💧",
    tech: "Rust"
  },
  {
    title: "KairoSwap",
    description: "A DeFi solution using Uniswap v4 hooks for Just-In-Time (JIT) liquidity provisioning, reducing slippage for large trades while enabling smaller LPs to participate.",
    githubUrl: "https://github.com/Ericselvig/KairoSwap",
    demoUrl: "#",
    emoji: "🔄",
    tech: "Solidity"
  },
  {
    title: "Load Balancer Proxy",
    description: "A smart contract solution for load balancing in blockchain networks.",
    githubUrl: "https://github.com/Ericselvig/Load-balancer-proxy",
    demoUrl: "#",
    emoji: "⚖️",
    tech: "Solidity"
  }
];

const Projects = () => {
  const observerRef = useRef<IntersectionObserver | null>(null);
  const projectsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    const projects = document.querySelectorAll('.project-card');
    projects.forEach((project) => {
      observerRef.current?.observe(project);
    });

    return () => {
      observerRef.current?.disconnect();
    };
  }, []);

  return (
    <section id="projects" className="section-projects py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-12">Projects</h2>
        <div ref={projectsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="project-card bg-white rounded-lg shadow-lg p-6 transform transition-all duration-500 opacity-0 translate-y-4 hover:scale-105 hover:-rotate-2 hover:shadow-2xl cursor-pointer border-2 border-transparent hover:border-blue-400"
              style={{ transition: 'transform 0.3s cubic-bezier(.25,.8,.25,1), box-shadow 0.3s, border 0.3s' }}
            >
              <div className="flex items-center mb-2">
                <span className="text-2xl mr-2" aria-label="emoji" role="img">{project.emoji}</span>
                <h3 className="text-xl font-semibold">{project.title}</h3>
              </div>
              <span className="inline-block mb-4 px-3 py-1 text-xs font-bold rounded-full bg-gradient-to-r from-blue-400 to-purple-400 text-white shadow-md animate-pulse">{project.tech}</span>
              <p className="text-gray-600 mb-6">{project.description}</p>
              <div className="flex space-x-4">
                <Link
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 transition-colors"
                >
                  GitHub
                </Link>
                {project.demoUrl !== "#" && (
                  <Link
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-600 hover:text-green-800 transition-colors"
                  >
                    Demo
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects; 