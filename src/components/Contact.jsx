import React from 'react';
import { FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';

const Contact = () => {
  const contactLinks = [
    {
      icon: <FaEnvelope className="text-xl" />,
      text: "yamini.a@protectmymails.com",
      href: "mailto:yamini.a@protectmymails.com"
    },
    {
      icon: <FaLinkedin className="text-xl" />,
      text: "LinkedIn",
      href: "https://www.linkedin.com/in/yamini-ashokkumar/"
    },
    {
      icon: <FaGithub className="text-xl" />,
      text: "GitHub",
      href: "https://github.com/Yaminiashokkumar"
    }
  ];

  return (
    <section id="contact" className="py-16 bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-white mb-8 text-center font-poppins">
          Let's Connect
        </h2>
        <div className="max-w-md mx-auto">
          <div className="bg-gray-800 rounded-lg p-6 shadow-lg">
            <div className="space-y-4">
              {contactLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-purple-300 hover:text-white transition-colors"
                >
                  {link.icon}
                  <span>{link.text}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 