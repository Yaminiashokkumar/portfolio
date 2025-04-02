import React from 'react';
import { FaBriefcase } from 'react-icons/fa';

const Experience = () => {
  const experiences = [
    {
      title: "Software Engineer",
      company: "DXC Technology",
      location: "Remote",
      date: "Jan 2024 - Present",
      description: [
        "Collaborated with product managers, stakeholders and customers to translate enterprise requirements into technical specifications the usage of Agile SDLC methodologies at the same time as handling 5-8 concurrent sprints in Jira, ensuring technical solutions aligned with user needs, improving customer satisfaction by 30%",
        "Developed responsive, cross-browser well suited, and ADA-compliant user interfaces the use of JavaScript, Angular.js, and jQuery, optimizing overall performance with JSON for records serialization, resulting in 10+ UIs with 40% quicker load times.",
        "Developed and optimized scalable, secure RESTful APIs and microservices using Java 11, Spring MVC, and Node.js. Implemented JVM tuning and asynchronous processing to enhance system throughput by 25% and reduce API latency by 30%. Integrated OAuth and JWT for secure authentication, ensuring compliance with industry security standards while designing APIs to handle high-concurrency loads efficiently.",
        "Mapped and maintained PostgreSQL and NoSQL databases managing statistics with general uptime, while implementing JPA for ORM to optimize statistics get admission to, lowering SQL query execution time.",
        "Applied unit and integration testing using Jest and automated UI testing with Selenium, achieving comprehensive test coverage and reducing regression defects by 35% through CI/CD-driven test suites and improving test reliability.",
        "Utilized Swagger UI for API documentation and Postman for testing, lowering on boarding time for brand new builds via 50%, even as leading three cross-functional teams to integrate microservices, effectively resolving merge conflicts through Git/GitHub."
      ]
    },
    {
      title: "Software Developer",
      company: "Sigma Tech Solution",
      location: "India",
      date: "Oct 2020 - Jul 2023",
      description: [
        "Designed and Developed responsive UI's using React, node.js and Tailwind CSS, improving performance by 40% with optimizes reusable components.",
        "Evolved RESTful APIs and microservices using Java 8, Spring MVC, and Express.js, optimizing server-side logic with JDBC to improve throughput and reduce API latency by one forth.",
        "Planned and maintained MySQL, and NoSQL databases handling 2M+ data with total uptime, at the same time as applying JSP and JavaBeans for dynamic content, optimizing SQL query execution time.",
        "Executed unit and integration testing the using JUnit and Jest, achieving majorly test coverage, using CI/CD-pipelines to automate testing, which helped reduce regression defects by 30%.",
        "Arranged scalable programs on Azure Data Lake and Azure Data Factory through configuring information pipelines for real-time analytics even as optimizing deployment time through automated scripts and a microservices architecture.",
        "Employed RESTful APIs for microservices communication & Postman for testing, streamlining developer on boarding, while maintain useful teams to integrate microservices & resolve 85% of merge conflicts through model manage."
      ]
    }
  ];

  return (
    <section id="experience" className="pt-16">
      <div className="container mx-auto">
        <div className="mb-8">
          <h2 className="section-title">My Professional Journey!</h2>
        </div>
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="card hover:shadow-lg transition-shadow duration-300">
              <div className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <FaBriefcase className="text-2xl text-secondary" />
                  <div>
                    <h3 className="text-xl font-bold text-secondary">{exp.title}</h3>
                    <p className="text-lg text-textPrimary">{exp.company}</p>
                  </div>
                </div>
                <div className="mb-4">
                  <p className="text-textSecondary">{exp.location} • {exp.date}</p>
                </div>
                <ul className="list-disc list-inside space-y-2 text-textSecondary">
                  {exp.description.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience; 