import React, { useState } from 'react';
import { FaLinkedin, FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: "#about", text: "About" },
    { href: "#experience", text: "Experience" },
    { href: "#education", text: "Education" },
    { href: "#projects", text: "Projects" },
    { href: "#skills", text: "Skills" },
    { href: "#contact", text: "Contact" }
  ];

  return (
    <header className="fixed top-0 w-full bg-darkBg/90 backdrop-blur-sm z-50 py-4 border-b border-gray-700/30">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold text-secondary">
            Yamini Ashokkumar
          </h1>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-textPrimary hover:text-secondary"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>

          {/* Desktop navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="nav-link text-textPrimary"
              >
                {link.text}
              </a>
            ))}
            <a
              href="https://www.linkedin.com/in/yamini-ashokkumar/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary hover:text-secondary/80 transition-colors"
            >
              <FaLinkedin size={24} />
            </a>
          </div>
        </div>

        {/* Mobile navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 space-y-4">
            {navLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="block nav-link text-textPrimary"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.text}
              </a>
            ))}
            <a
              href="https://www.linkedin.com/in/yamini-ashokkumar/"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-secondary hover:text-secondary/80 transition-colors"
            >
              <FaLinkedin size={24} />
            </a>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header; 