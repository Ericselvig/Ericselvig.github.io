import React from 'react';

const About = () => {
  return (
    <section id="about" className="section-about py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
          About Me
        </h2>
        <div className="text-center">
          <p className="text-lg text-gray-600 leading-relaxed mb-6">
            I am a passionate Smart Contract Developer and Security Researcher with expertise in building secure and efficient blockchain solutions. 
            My focus is on creating robust decentralized applications that leverage the power of blockchain technology.
          </p>
          <p className="text-lg text-gray-600 leading-relaxed">
            With a strong background in blockchain development and security research, I specialize in developing secure smart contracts, 
            conducting security audits, and implementing best practices for decentralized applications. I am committed to advancing 
            blockchain technology while ensuring the highest standards of security and efficiency.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About; 