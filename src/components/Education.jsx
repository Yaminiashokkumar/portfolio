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
    <section id="education" className="py-16 bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-white mb-8 text-center font-poppins">
          My Academic Journey
        </h2>
        <div className="max-w-2xl mx-auto">
          {education.map((edu, index) => (
            <div key={index} className="bg-gray-900 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-start gap-4">
                <FaGraduationCap className="text-3xl text-purple-400 mt-1" />
                <div>
                  <h3 className="text-xl font-bold text-white">{edu.degree}</h3>
                  <p className="text-lg text-purple-300">{edu.school}</p>
                  <p className="text-gray-400">{edu.location}</p>
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