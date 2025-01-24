import React from "react";
import "./Projects.css";

function Projects() {
  const projects = [
    {
      name: "Creative Chamber",
      description: "An internal designing website using Python and MySQL.",
      techStack: "Python, MySQL",
      gif: "https://i.pinimg.com/originals/3f/c3/2b/3fc32b3699a73c4a172720cc51b24e19.gif",
    },
    {
      name: "MEDHUB",
      description: "A telemedicine app enabling virtual consultations.",
      techStack: "HTML, CSS, JavaScript, PHP",
      gif: "https://cdn.dribbble.com/users/1138476/screenshots/12653355/media/cd149d846d48f7fb5103d3b6e983a5c3.gif",
    },
    {
      name: "SECE SkillSync",
      description: "A smart training application for SECE students.",
      techStack: "HTML, CSS, JS, PHP",
      gif: "https://cdn.dribbble.com/users/1233499/screenshots/3900568/education.gif",
    },
  ];

  return (
    <div className="projects-container">
      <h2>My Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <img
              src={project.gif}
              alt={`${project.name} Animation`}
              className="project-gif"
            />
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            <span>Tech Stack: {project.techStack}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
