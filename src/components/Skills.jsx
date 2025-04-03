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
    <section id="skills" className="py-16 bg-[#1a1f2e]">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-center mb-12">Technical Expertise</h2>
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-wrap gap-4 justify-center">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="px-4 py-2 bg-[#151923] text-gray-300 rounded-full border border-purple-500/10 hover:border-purple-500 hover:text-white transition-all duration-300 cursor-default"
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