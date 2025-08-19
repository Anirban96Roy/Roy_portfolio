import React, { useState } from "react";
import { projects } from "../../constants";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleOpenModal = (project) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  return (
    <section
      id="projects"
      className="py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[20vw] font-sans relative "
    >
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-gray-800">PROJECTS</h2>
        <div className=" mx-auto mt-4"></div>
        <p className="text-gray-900 mt-4 text-lg font-semibold">
          A showcase of the projects I have worked on, highlighting my skills
          and experience in various technologies
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
        {projects.map((project) => (
          <div
            key={project.id}
            onClick={() => handleOpenModal(project)}
            className="border border-white  bg-[#EBFFD1] backdrop-blur-md rounded-2xl shadow-2xl cursor-pointer hover:shadow-purple-500/50 hover:-translate-y-2 transition-transform duration-300 flex flex-col max-w-sm mx-auto h-[380px] overflow-hidden"
          >
            <div className="p-2 flex-shrink-0">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-32 object-cover rounded-xl"
              />
            </div>
            <div className="p-4 flex flex-col justify-between flex-grow overflow-hidden">
              <div>
                <h3 className="text-lg font-bold text-black mb-1 truncate">
                  {project.title}
                </h3>
                <p className="text-black text-sm line-clamp-3 leading-snug">
                  {project.description}
                </p>
              </div>
              <div className="mt-3">
                {project.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="inline-block bg-[#251f38] text-[10px] font-semibold text-white rounded-full px-2 py-0.5 mr-2 mb-2"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal Container */}
      {selectedProject && (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#A3DC9A] bg-opacity-90 p-4">
    <div className="bg-[#EBFFD1] rounded-xl shadow-2xl w-[70%] max-w-2xl max-h-[80vh] overflow-y-auto relative p-4">
      <div className="flex justify-end p-2">
        <button
          onClick={handleCloseModal}
          className="text-black text-3xl font-bold hover:text-purple-500"
        >
          &times;
        </button>
      </div>

      <div className="flex flex-col">
        <div className="w-full flex justify-center bg-gray-900 px-4">
          <img
            src={selectedProject.image}
            alt={selectedProject.title}
            className="lg:w-full w-[95%] object-contain rounded-xl shadow-2xl"
          />
        </div>
        <div className="lg:p-8 p-6">
          <h3 className="lg:text-3xl font-bold text-black mb-4 text-md">
            {selectedProject.title}
          </h3>
          <p className="text-black mb-6 lg:text-base text-xs">
            {selectedProject.description}
          </p>
          <div className="flex flex-wrap gap-2 mb-6">
            {selectedProject.tags.map((tag, index) => (
              <span
                key={index}
                className="bg-[#251f38] text-xs font-semibold text-white rounded-full px-2 py-1"
              >
                {tag}
              </span>
            ))}
          </div>
          <div className="flex gap-4">
            <a
              href={selectedProject.github}
              target="_blank"
              rel="noopener noreferrer"
              className="w-1/2 bg-gray-800 hover:bg-[#757f68] text-white lg:px-6 lg:py-2 px-2 py-1 rounded-xl lg:text-xl text-sm font-semibold text-center"
            >
              View Code
            </a>
            
      
            
            
            
          </div>
        </div>
      </div>
    </div>
  </div>
)}

    </section>
  );
};

export default Projects;
