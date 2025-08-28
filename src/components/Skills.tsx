'use client';

import React from 'react';
import { useEffect, useRef } from 'react';

interface Skill {
  name: string;
  level: number;
  category: 'languages' | 'frameworks' | 'tools';
}

const skills: Skill[] = [
  // Languages
  { name: 'Solidity', level: 90, category: 'languages' },
  { name: 'Rust', level: 85, category: 'languages' },
  { name: 'TypeScript', level: 80, category: 'languages' },
  { name: 'JavaScript', level: 85, category: 'languages' },
  
  // Frameworks
  { name: 'Hardhat', level: 90, category: 'frameworks' },
  { name: 'Foundry', level: 85, category: 'frameworks' },
  { name: 'Ethers.js', level: 85, category: 'frameworks' },
  { name: 'Web3.js', level: 80, category: 'frameworks' },
  
  // Tools
  { name: 'Git', level: 90, category: 'tools' },
  { name: 'Docker', level: 75, category: 'tools' },
  { name: 'Slither', level: 85, category: 'tools' },
  { name: 'Mythril', level: 80, category: 'tools' }
];

const Skills = () => {
  const observerRef = useRef<IntersectionObserver | null>(null);
  const skillsRef = useRef<HTMLDivElement>(null);

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

    const skillBars = document.querySelectorAll('.skill-bar');
    skillBars.forEach((bar) => {
      observerRef.current?.observe(bar);
    });

    return () => {
      observerRef.current?.disconnect();
    };
  }, []);

  const categories = {
    languages: 'Programming Languages',
    frameworks: 'Frameworks & Libraries',
    tools: 'Development Tools'
  };

  return (
    <section id="skills" className="section-skills py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-12">Skills</h2>
        <div ref={skillsRef} className="space-y-12">
          {Object.entries(categories).map(([category, title]) => (
            <div key={category} className="space-y-6">
              <h3 className="text-2xl font-semibold mb-6">{title}</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {skills
                  .filter((skill) => skill.category === category)
                  .map((skill, index) => (
                    <div key={index} className="p-4 bg-gray-50 rounded-lg shadow-sm">
                      <span className="font-medium">{skill.name}</span>
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills; 