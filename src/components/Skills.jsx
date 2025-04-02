import React from 'react';
import { FaCode, FaDatabase, FaTools, FaCloud, FaCogs, FaFlask, FaLayerGroup, FaTasks, FaWrench } from 'react-icons/fa';

const Skills = () => {
  const skillCategories = [
    {
      title: "Front-End",
      icon: <FaCode className="text-2xl" />,
      skills: ["JavaScript", "TypeScript", "HTML5", "CSS3", "AJAX", "JSON", "XML"]
    },
    {
      title: "Back-End",
      icon: <FaCogs className="text-2xl" />,
      skills: ["Java (17, 11, 8)", "SQL", "Node.js", "Express.js", "C#", "C", "Python"]
    },
    {
      title: "Databases",
      icon: <FaDatabase className="text-2xl" />,
      skills: ["MS SQL Server", "Oracle", "MySQL", "Mongo DB", "PostgreSQL", "NoSQL"]
    },
    {
      title: "J2EE Technologies",
      icon: <FaCode className="text-2xl" />,
      skills: ["JSP", "JPA", "JavaBeans", "JDBC"]
    },
    {
      title: "Frameworks",
      icon: <FaLayerGroup className="text-2xl" />,
      skills: ["React.js", "Angular.js", "Vue.js", "Spring Boot", "Bootstrap", "Spring MVC", "jQuery"]
    },
    {
      title: "Testing Tools",
      icon: <FaFlask className="text-2xl" />,
      skills: ["Selenium", "JUnit", "Jest"]
    },
    {
      title: "Cloud Platforms",
      icon: <FaCloud className="text-2xl" />,
      skills: ["AWS (EC2, SNS, RDS, Cloud Watch)", "Google Cloud Platform", "Microsoft Azure (Azure Data Lake, Azure Data Factory, Blob Storage)"]
    },
    {
      title: "CI/CD & DevOps Tools",
      icon: <FaTools className="text-2xl" />,
      skills: ["Jenkins", "Git", "GitHub", "GitLab", "Docker", "Kubernetes", "Swagger UI", "Terraform"]
    },
    {
      title: "Methodologies",
      icon: <FaTasks className="text-2xl" />,
      skills: ["Agile", "Waterfall", "SDLC", "Kanban"]
    },
    {
      title: "Others",
      icon: <FaWrench className="text-2xl" />,
      skills: ["Microservices", "Jira", "Confluence", "IntelliJ IDEA", "Eclipse", "VS Code", "Java Networking", "RESTful API", "Postman API"]
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