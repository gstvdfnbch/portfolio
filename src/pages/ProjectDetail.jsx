import "./ProjectDetail.modules.css";
import MenuTopo from "../components/MenuTopo/MenuTopo";
import React, { useEffect, useRef } from "react";
import { useParams } from 'react-router-dom';
import projectsDetails from '../data/dataProjectDetails.js';

const ProjectDetail = () => {
  const scrollContainerRef = useRef(null);

  const { id } = useParams();
  const project = projectsDetails.find((proj) => proj.id === parseInt(id));
  let background;
  let top;
  let description;
  let images; 
  let boxTopDescription;
  let sizeImages;
  let boxIcon;
  let boxBadgets;

  background = "background-details";
  top = "top-details";
  description = "description-details";
  images = "images-details";
  sizeImages = "size-images-details";
  boxIcon = "box-icon-details";
  boxTopDescription = "box-top-description-details";
  boxBadgets = "box-badgets-details";

  if (!project.isVertical) {
    images = "images-details horizontal";
    sizeImages = "size-images-details horizontal";
  }

  if (!project) {
    return <div>Projeto não encontrado.</div>
  }
  
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

  return (
    <div>
      <div className="dev-icon-container-details">
        <MenuTopo showMenuRight={true} />
        <div className="general-container-details">
          
          <div className={background} ref={scrollContainerRef}>

            <div className={boxTopDescription} >
              <div className={top}>
                <div className={boxIcon}>
                  <img key={project.id} src={project.icon} alt={`Imagem ${project.id}`} className="size-icon-details" />
                </div>
              
                <div className="box-title-details">

                  <div className="title-details">
                    {project.texto1}
                  </div>

                  <div className="subtitle-details">
                    {project.texto2}
                  </div>

                  <div className="box-badgets-details">
                    {
                        project.badges.map((img, index) => (
                          <a href={project.links[index]} className="size-badget-details">
                            <img key={index} src={img} alt={`Imagem ${index}`} className="size-badget-details" />
                          </a>
                        ))
                    }    
                  </div>

                </div>

              </div>

              <div className={description}>
                {project.description}
              </div>
            </div>
            
            <div className={images}>
              {
                  project.imageSrc.map((img, index) => (
                    <img key={index} src={img} alt={`Imagem ${index}`} className={sizeImages} />
                  ))
              }     
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;