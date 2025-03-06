import React, { useEffect, useRef } from "react";
import "./Projects.module.css";
import MenuTopo from "../components/MenuTopo/MenuTopo";
import CardCell from "../components/CardCell/CardCell";
import projectsData from "../data/dataProject";
import { useNavigate } from "react-router-dom";

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

  return (
    <div className="dev-page">
      <div className="dev-icon-container">
        <MenuTopo showMenuRight={true} />
       <div className="horizontal-scroll">
         {projectsData.map((project) => (
            <CardCell 
              key={project.id} 
              texto1={project.texto1} 
              texto2={project.texto2} 
              imageSrc={project.imageSrc}
              iconSrc={project.icon}
              onClick={() => handleCardClick(project.id)}
            />
          ))}
         </div> 
      </div>
    </div>
  );
};

export default Projects;