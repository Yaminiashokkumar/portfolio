import React from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import heroImage from '../assets/profile.jpg';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-primary/5 to-secondary/5">
      <div className="container mx-auto px-4 text-center">
        <div className="mb-8">
          <img 
            src={heroImage} 
            alt="Yamini Ashokkumar" 
            className="w-48 h-48 rounded-full mx-auto mb-6 shadow-lg border-4 border-secondary/20"
          />
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4 animate-fadeIn">
            Hey, I'm Yamini
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-6 animate-fadeIn delay-200">
            A Developer with a Passion for Software Engineering!
          </p>
          <div className="flex justify-center gap-4">
            <a 
              href="https://www.linkedin.com/in/yamini-ashokkumar/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-2xl text-primary hover:text-secondary transition-colors"
            >
              <FaLinkedin />
            </a>
            <a 
              href="https://github.com/Yaminiashokkumar" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-2xl text-primary hover:text-secondary transition-colors"
            >
              <FaGithub />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 