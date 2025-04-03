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
    <section id="contact" className="pt-16">
      <div className="container mx-auto px-4">
        <h2 className="section-title">Let's Connect!</h2>
        <div className="mt-8 max-w-2xl mx-auto">
          <div className="card p-6 hover:shadow-lg transition-shadow duration-300">
            <div className="space-y-4">
              {contactLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-primary hover:text-secondary transition-colors"
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