import React from 'react';
import './project.css';
import image from '../hero-section/image/employee_attrition.png';

const Project = () => {
  const projects = [
    {
      title: "Power BI ",
      description: "A brief description of project 1",
      imgSrc: image,
      url: "https://app.powerbi.com/groups/me/dashboards/082392e4-8bf6-4595-a95e-e9ce60f7e59c",
    },
    {
      title: "Python ",
      description: "A brief description of project 2",
      imgSrc: image,
      url: "https://project2.com",
    },
    {
      title: "Machine learning",
      description: "A brief description of project 3",
      imgSrc: image,
      url: "https://project3.com",
    },
    {
      title: "Excel",
      description: "A brief description of project 4",
      imgSrc: image,
      url: "https://project4.com",
    },
  ];

  return (
    <div className="project-section">
      <h2 className="section-title">Our Projects</h2>
      {projects.map((project, index) => (
        <div
          key={index}
          className={`project-item ${index % 2 === 0 ? 'text-left' : 'text-right'}`}
        >
          <div className="project-content">
            <a href={project.url} target="_blank" rel="noopener noreferrer">
              <h3 className="project-title">{project.title}</h3>
            </a>
            <p className="project-description">{project.description}</p>
          </div>
          <div className="project-image-container">
            <img src={project.imgSrc} alt={project.title} className="project-image" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Project;
