import React from 'react';

const Skills = () => {
  const skills = [
    'JavaScript', 'TypeScript', 'HTML5', 'CSS3', 'React.js', 'Angular.js', 'Vue.js',
    'Java (17, 11, 8)', 'Spring Boot', 'Node.js', 'Express.js', 'C#', 'Python',
    'MySQL', 'PostgreSQL', 'MongoDB', 'Oracle', 'MS SQL Server',
    'AWS', 'Azure', 'Docker', 'Kubernetes', 'Jenkins', 'Git',
    'JUnit', 'Jest', 'Selenium', 'REST APIs', 'Microservices'
  ];

  return (
    <section id="skills" className="py-16 bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-white mb-12 text-center font-poppins">
          Technical Expertise
        </h2>
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-wrap gap-4 justify-center">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="px-4 py-2 bg-gray-800 text-purple-300 rounded-full hover:bg-purple-700 hover:text-white transition-colors cursor-default"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills; 