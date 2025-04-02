import React from 'react';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaJava, FaReact, FaCloud, FaTools, FaCheckCircle } from 'react-icons/fa';
import { SiDocker } from 'react-icons/si';

const About = () => {
  const stats = [
    { label: 'Years Experience', value: '4+' },
    { label: 'Projects Delivered', value: '15+' },
    { label: 'Technologies', value: '20+' }
  ];

  return (
    <section id="about" className="pt-16">
      <div className="container mx-auto">
        <div className="mb-8">
          <h2 className="section-title">Who am I?</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <p className="text-lg leading-relaxed">
              I am a Software Engineer with 4+ years of experience in Java/J2EE development, specializing in building scalable enterprise applications and microservices. Proficient in backend technologies like Spring Boot, RESTful APIs, and SQL, I also have experience with front-end frameworks like React and Angular. My expertise extends to cloud platforms (AWS, GCP, Azure), automation testing, and CI/CD pipelines, ensuring efficient and high-quality software delivery. Passionate about problem-solving and continuous learning.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="card">
                <h3 className="text-secondary font-bold mb-2">Contact Info</h3>
                <div className="space-y-2">
                  <p className="flex items-center gap-2">
                    <FaEnvelope className="text-secondary" />
                    yamini.a@protectmymails.com
                  </p>
                  <p className="flex items-center gap-2">
                    <FaPhone className="text-secondary" />
                    +1 (405) 785-0343
                  </p>
                  <p className="flex items-center gap-2">
                    <FaMapMarkerAlt className="text-secondary" />
                    MO, USA
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="space-y-4">
            <div className="card p-4">
              <h3 className="text-secondary font-bold mb-4">What I Bring To The Table</h3>
              <div className="grid grid-cols-1 gap-3">
                <div className="flex items-center gap-3">
                  <div className="bg-secondary/10 p-2 rounded-lg">
                    <FaJava className="text-secondary text-xl" />
                  </div>
                  <span>Java/J2EE Development</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-secondary/10 p-2 rounded-lg">
                    <FaReact className="text-secondary text-xl" />
                  </div>
                  <span>Full-Stack Development</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-secondary/10 p-2 rounded-lg">
                    <FaCloud className="text-secondary text-xl" />
                  </div>
                  <span>Cloud Computing</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-secondary/10 p-2 rounded-lg">
                    <SiDocker className="text-secondary text-xl" />
                  </div>
                  <span>Microservices Architecture</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-secondary/10 p-2 rounded-lg">
                    <FaTools className="text-secondary text-xl" />
                  </div>
                  <span>DevOps & CI/CD</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-secondary/10 p-2 rounded-lg">
                    <FaCheckCircle className="text-secondary text-xl" />
                  </div>
                  <span>Testing & Automation</span>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-4">
              {stats.map((stat, index) => (
                <div key={index} className="card p-4 text-center">
                  <div className="text-2xl font-bold text-secondary">{stat.value}</div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 