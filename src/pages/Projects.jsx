import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "../pages/Projects.module.css";
import MenuTopo from "../components/MenuTopo/MenuTopo.jsx";
import CardCell from "../components/CardCell/CardCell";
// import projectsData from "../data/dataProject.jsx";

const Projects = () => {
  const scrollContainerRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;

    if (scrollContainer) {
      const handleWheel = (event) => {
        event.preventDefault();
        scrollContainer.scrollLeft += event.deltaY;
      };

      scrollContainer.addEventListener("wheel", handleWheel);
      return () => scrollContainer.removeEventListener("wheel", handleWheel);
    }
  }, []);

  const handleCardClick = (id) => {
    if ((id != 0) && (id != projectsData.length - 1)) {
      navigate(`/portfolio/project/${id}`);
    }
  };

  const projects = getProjectsData();

  return (
    <div className="dev-page">
      <div className="dev-icon-container">
        <MenuTopo showMenuRight={true} />

        <div className="horizontal-scroll" ref={scrollContainerRef}>
          {projects.map((project) => (
            <CardCell 
              key={project.id} 
              texto1={project.texto1} 
              texto2={project.texto2} 
              imageSrc={project.imageSrc} // Imagem principal
              iconSrc={project.icon}
              onClick={() => handleCardClick(project.id)} // Passa o ID ao clicar
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;