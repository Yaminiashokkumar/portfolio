import React from 'react';
import { FaLinkedin, FaGithub, FaFileAlt } from 'react-icons/fa';
import profileImage from '../assets/profile.jpg';

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-gray-800">
      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col items-center">
          <div className="w-48 h-48 mb-8 relative rounded-full overflow-hidden border-4 border-purple-500 shadow-xl">
            <img 
              src={profileImage} 
              alt="Yamini Ashokkumar"
              className="w-full h-full object-cover"
            />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 text-center font-poppins animate-fadeIn">
            Hey, I'm Yamini
          </h1>
          <p className="text-2xl md:text-3xl text-purple-300 mb-8 text-center font-inter animate-fadeIn delay-200">
            A Developer with a Passion for Software Engineering!
          </p>
          <div className="flex gap-6 mb-8">
            <a 
              href="https://www.linkedin.com/in/yamini-ashokkumar/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-3xl text-white hover:text-purple-400 transition-colors"
            >
              <FaLinkedin />
            </a>
            <a 
              href="https://github.com/Yaminiashokkumar" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-3xl text-white hover:text-purple-400 transition-colors"
            >
              <FaGithub />
            </a>
            <a 
              href="/resume.pdf" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-3 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition-colors font-medium"
            >
              <FaFileAlt />
              Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 