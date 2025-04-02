import React from 'react';

const Projects = () => {
  const projects = [
    {
      title: "CRUD App",
      description: "A full-stack CRUD application that allows users to manage data with create, read, update, and delete operations.",
      techStack: ["React.js", "Firebase (Authentication & Firestore)", "Material-UI", "React Router", "Web Vitals"],
      challenges: [
        "Implementing real-time data synchronization with Firebase",
        "Managing complex state with multiple users",
        "Optimizing performance for large datasets"
      ],
      solutions: [
        "Used Firebase listeners for real-time updates",
        "Implemented efficient state management patterns",
        "Applied lazy loading and pagination"
      ]
    },
    {
      title: "Search App",
      description: "An intelligent search application with debouncing functionality for optimal performance.",
      techStack: ["React", "Lodash (for debouncing)", "CSS3"],
      challenges: [
        "Handling frequent API calls during user input",
        "Managing search performance with large datasets",
        "Implementing responsive design for various screen sizes"
      ],
      solutions: [
        "Implemented debouncing to optimize API calls",
        "Used efficient search algorithms and caching",
        "Applied mobile-first design principles"
      ]
    },
    {
      title: "Weather App",
      description: "A weather application that provides real-time weather information with a clean, intuitive interface.",
      techStack: ["React", "TypeScript", "HTML", "CSS3"],
      challenges: [
        "Handling asynchronous API calls efficiently",
        "Implementing accurate location detection",
        "Managing state updates with changing weather data"
      ],
      solutions: [
        "Used TypeScript for better error handling",
        "Implemented geolocation API with fallback options",
        "Created efficient state management system"
      ]
    }
  ];

  return (
    <section id="projects" className="pt-16">
      <div className="container mx-auto">
        <div className="mb-8">
          <h2 className="section-title">Personal Projects!</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div key={index} className="card hover:shadow-lg transition-shadow duration-300">
              <div className="p-6">
                <h3 className="text-xl font-bold text-secondary mb-3">{project.title}</h3>
                <p className="text-textSecondary mb-4">{project.description}</p>
                
                <div className="mb-4">
                  <h4 className="font-semibold text-secondary mb-2">Tech Stack:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech, i) => (
                      <span key={i} className="bg-secondary/10 text-secondary px-2 py-1 rounded-md text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mb-4">
                  <h4 className="font-semibold text-secondary mb-2">Challenges:</h4>
                  <ul className="list-disc list-inside space-y-1 text-textSecondary">
                    {project.challenges.map((challenge, i) => (
                      <li key={i}>{challenge}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-secondary mb-2">Solutions:</h4>
                  <ul className="list-disc list-inside space-y-1 text-textSecondary">
                    {project.solutions.map((solution, i) => (
                      <li key={i}>{solution}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects; 