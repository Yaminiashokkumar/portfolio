import React from 'react';
import { FaGraduationCap } from 'react-icons/fa';

const Education = () => {
  const education = [
    {
      degree: "Master of Computer Information Systems",
      school: "Northwest Missouri State University",
      location: "Maryville, MO",
      date: "Aug 2023 - Dec 2024"
    },
    {
      degree: "Bachelor in Information Technology",
      school: "Annamacharya Institute of technology and sciences",
      location: "Tirupati, India",
      date: "2016 - 2020"
    }
  ];

  return (
    <section id="education" className="pt-16">
      <div className="container mx-auto">
        <div className="mb-8">
          <h2 className="section-title">My Academic Journey!</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {education.map((edu, index) => (
            <div key={index} className="card hover:shadow-lg transition-shadow duration-300">
              <div className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <FaGraduationCap className="text-2xl text-secondary" />
                  <h3 className="text-xl font-bold text-secondary">{edu.degree}</h3>
                </div>
                <div className="space-y-2">
                  <p className="text-lg font-semibold">{edu.school}</p>
                  <p className="text-textSecondary">{edu.location}</p>
                  <p className="text-textSecondary">{edu.date}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education; 