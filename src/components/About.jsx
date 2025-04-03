import React from 'react';
import { FaCode, FaServer, FaCloud, FaTools } from 'react-icons/fa';

const About = () => {
  return (
    <section id="about" className="py-16 bg-[#151923]">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-center mb-12">Who am I?</h2>
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg text-gray-300 mb-12">
            <p className="mb-6 text-lg leading-relaxed">
              I am a Software Engineer with 4+ years of experience in Java/J2EE development, 
              specializing in building scalable enterprise applications and microservices. 
              Proficient in backend technologies like Spring Boot, RESTful APIs, and SQL, 
              I also have experience with front-end frameworks like React and Angular.
            </p>
            <p className="text-lg leading-relaxed">
              My expertise extends to cloud platforms (AWS, GCP, Azure), automation testing, 
              and CI/CD pipelines, ensuring efficient and high-quality software delivery. 
              Passionate about problem-solving and continuous learning.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="text-center">
              <div className="text-4xl text-purple-500 mb-4">4+</div>
              <div className="text-gray-300">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-4xl text-purple-500 mb-4">15+</div>
              <div className="text-gray-300">Projects Delivered</div>
            </div>
            <div className="text-center">
              <div className="text-4xl text-purple-500 mb-4">20+</div>
              <div className="text-gray-300">Technologies</div>
            </div>
          </div>

          <div className="mt-16">
            <h3 className="text-2xl font-bold text-purple-400 mb-8 text-center">
              What I Bring To The Table
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  icon: <FaCode className="text-3xl text-purple-500" />,
                  title: "Java/J2EE Development",
                  description: "Expert in Java development with Spring ecosystem"
                },
                {
                  icon: <FaServer className="text-3xl text-purple-500" />,
                  title: "Full-Stack Development",
                  description: "End-to-end application development with modern technologies"
                },
                {
                  icon: <FaCloud className="text-3xl text-purple-500" />,
                  title: "Cloud Computing",
                  description: "Experience with AWS, Azure, and GCP services"
                },
                {
                  icon: <FaTools className="text-3xl text-purple-500" />,
                  title: "DevOps & CI/CD",
                  description: "Streamlined deployment and automation processes"
                }
              ].map((item, index) => (
                <div key={index} className="card p-6 hover:shadow-lg transition-shadow">
                  <div className="flex items-center gap-4 mb-4">
                    {item.icon}
                    <h4 className="text-xl font-semibold text-white">{item.title}</h4>
                  </div>
                  <p className="text-gray-300">{item.description}</p>
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