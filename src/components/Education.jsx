import React from 'react';
import { FaGraduationCap } from 'react-icons/fa';

const Education = () => {
  const education = [
    {
      degree: "Master of Computer Information Systems",
      school: "Northwest Missouri State University",
      location: "Maryville, MO",
      date: "Aug 2023 - Dec 2024"
    }
  ];

  return (
    <section id="education" className="pt-16">
      <div className="container mx-auto px-4">
        <h2 className="section-title">My Academic Journey!</h2>
        <div className="mt-8">
          {education.map((edu, index) => (
            <div key={index} className="card p-6 hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-start gap-4">
                <FaGraduationCap className="text-3xl text-secondary mt-1" />
                <div>
                  <h3 className="text-xl font-bold text-primary">{edu.degree}</h3>
                  <p className="text-lg text-gray-700">{edu.school}</p>
                  <p className="text-gray-600">{edu.location}</p>
                  <p className="text-gray-500 mt-1">{edu.date}</p>
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