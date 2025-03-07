import React, { useEffect, useRef } from "react";
import "./Articles.modules.css";
import MenuTopo from "../components/MenuTopo/MenuTopo";
import CardArticle from "../components/CardArticle/CardArticle.jsx";
import dataArticle from "../data/dataArticle.js";


const Articles = () => {
  const scrollContainerRef = useRef(null);

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
    <div className="article-page">
      <div className="article-icon-container-articles">
        <MenuTopo showMenuRight={true} />
        <div className="box-content-articles">
          <div className="horizontal-scroll" ref={scrollContainerRef}>
          {dataArticle.map((project) => (
            <CardArticle 
              key={project.id} 
              titulo={project.title} 
              text={project.text} 
              imageSrc={project.imageSrc}
              link={project.link}
            />
          ))}
        </div>
      </div>
      </div>
    </div>
  );
};

export default Articles;