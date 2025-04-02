import React from 'react';
import { FaCode, FaDatabase, FaTools, FaCloud } from 'react-icons/fa';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: <FaCode className="text-2xl" />,
      skills: [
        "React.js",
        "JavaScript (ES6+)",
        "TypeScript",
        "HTML5",
        "CSS3",
        "Tailwind CSS",
        "Material-UI",
        "Redux",
        "Responsive Design"
      ]
    },
    {
      title: "Backend Development",
      icon: <FaDatabase className="text-2xl" />,
      skills: [
        "Node.js",
        "Express.js",
        "RESTful APIs",
        "MongoDB",
        "SQL",
        "Firebase",
        "Authentication",
        "Authorization"
      ]
    },
    {
      title: "Tools & Practices",
      icon: <FaTools className="text-2xl" />,
      skills: [
        "Git",
        "GitHub",
        "VS Code",
        "npm/yarn",
        "Webpack",
        "Jest",
        "Agile/Scrum",
        "CI/CD"
      ]
    },
    {
      title: "Cloud & DevOps",
      icon: <FaCloud className="text-2xl" />,
      skills: [
        "AWS",
        "Docker",
        "Kubernetes",
        "Jenkins",
        "Microservices",
        "Cloud Architecture",
        "Linux"
      ]
    }
  ];

  return (
    <section id="skills" className="pt-16">
      <div className="container mx-auto">
        <div className="mb-8">
          <h2 className="section-title">Technical Expertise!</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {skillCategories.map((category, index) => (
            <div key={index} className="card hover:shadow-lg transition-shadow duration-300">
              <div className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  {category.icon}
                  <h3 className="text-xl font-bold text-secondary">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="bg-secondary/10 text-secondary px-3 py-1 rounded-md text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills; 