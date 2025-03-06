import "./ProjectDetail.module.css";
import MenuTopo from "../components/MenuTopo/MenuTopo";
import React from 'react';
import { useParams } from 'react-router-dom';
import projectsDetails from '../data/dataProjectDetails.js';

const ProjectDetail = () => {
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

  background = "background";
  top = "top";
  description = "description";
  images = "images";
  sizeImages = "size-images";
  boxIcon = "box-icon";
  boxTopDescription = "box-top-description";
  boxBadgets = "box-badgets";

  if (project.badges.length === 0) {
    boxBadgets = "box-badgets hidden"
  }
  
  if (project.isVertical) {
    background = "background vertical";
    images = "images vertical";
    sizeImages = "size-images vertical"
    top = "top vertical";
    description = "description vertical";
  } else {
    background = "background";
    images = "images";
    sizeImages = "size-images"
    top = "top";
    description = "description";
  }

  if (project.imageSrc.length === 0) {
    images = "images hidden";
  }

  if (project.imageSrc.length === 1) {
    top = "top vertical";
    description = "description vertical";
    images = "images only";
    sizeImages = "size-images only"
    background = "background vertical";
  }

  if (!project) {
    return <div>Projeto não encontrado.</div>
  }
  
  return (
    <div>
      <div className="dev-icon-container">
        <MenuTopo showMenuRight={true} />
        <div className="general-container">
          
          <div className={background}>

            <div className={boxTopDescription}>
              <div className={top}>
                <div className={boxIcon}>
                  <img key={project.id} src={project.icon} alt={`Imagem ${project.id}`} className="size-icon" />
                </div>
              
                <div className="box-title">

                  <div className="title">
                    {project.texto1}
                  </div>

                  <div className="subtitle">
                    {project.texto2}
                  </div>

                  <div className="box-badgets">
                    {
                        project.badges.map((img, index) => (
                          <a href={project.links[index]} className="size-badget">
                            <img key={index} src={img} alt={`Imagem ${index}`} className="size-badget" />
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