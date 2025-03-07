import React, { useEffect, useRef } from "react";
import "./Projects.modules.css";
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
    if ((id != 0) && (id <= projectsData.length - 2)) {
      navigate(`/portfolio/project/${id}`);
    }
  };

  return (
    <div className="dev-page-products">
      <div className="dev-icon-container-products">
        <MenuTopo showMenuRight={true} />
        <div className="box-content-projects">
          <div className="horizontal-scroll-products" ref={scrollContainerRef}>
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
    </div>
  );
};

export default Projects;