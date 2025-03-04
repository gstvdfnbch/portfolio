// import React, { useEffect, useRef } from "react";
import "./Articles.modules.css";
import MenuTopo from "../components/MenuTopo/MenuTopo.jsx";
// import dataArticle from "../data/dataArticle.jsx"; // Importando os dados
// import CardArticle from "../components/CardArticle/CardArticle.jsx";

const Articles = () => {
  // const scrollContainerRef = useRef(null);

  // useEffect(() => {
  //   const scrollContainer = scrollContainerRef.current;

  //   if (scrollContainer) {
  //     const handleWheel = (event) => {
  //       event.preventDefault();
  //       scrollContainer.scrollLeft += event.deltaY;
  //     };

  //     scrollContainer.addEventListener("wheel", handleWheel);
  //     return () => scrollContainer.removeEventListener("wheel", handleWheel);
  //   }
  // }, []);

  return (
    <div className="dev-page">
      <div className="dev-icon-container">
        <MenuTopo showMenuRight={true} />

        {/* <div className="horizontal-scroll" ref={scrollContainerRef}>
          {dataArticle.map((project) => (
            <CardArticle 
              key={project.id} 
              titulo={project.title} 
              text={project.text} 
              imageSrc={project.imageSrc}
              link={project.link}
            />
          ))}
        </div> */}
      </div>
    </div>
  );
};

export default Articles;