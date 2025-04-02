import React from 'react';
import { FaEnvelope, FaGithub } from 'react-icons/fa';

const Contact = () => {
  const contactLinks = [
    {
      icon: <FaEnvelope className="text-2xl" />,
      label: "Email",
      href: "mailto:yamini.a@protectmymails.com",
      text: "yamini.a@protectmymails.com"
    },
    {
      icon: <FaGithub className="text-2xl" />,
      label: "GitHub",
      href: "https://github.com/Yaminiashokkumar",
      text: "Yaminiashokkumar"
    }
  ];

  return (
    <section id="contact" className="pt-16 pb-20">
      <div className="container mx-auto">
        <div className="mb-8">
          <h2 className="section-title">Let's Connect!</h2>
        </div>
        <div className="max-w-2xl mx-auto">
          <p className="text-center text-textSecondary mb-8">
            I'm always interested in hearing about new opportunities and connecting with fellow developers.
            Feel free to reach out through any of the following channels:
          </p>
          <div className="grid gap-6">
            {contactLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="card hover:shadow-lg transition-shadow duration-300"
              >
                <div className="p-6 flex items-center gap-4">
                  <div className="text-secondary">{link.icon}</div>
                  <div>
                    <h3 className="font-bold text-secondary">{link.label}</h3>
                    <p className="text-textSecondary">{link.text}</p>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 