import "./Projects.module.css";
import MenuTopo from "../components/MenuTopo/MenuTopo";
// import React, { useEffect, useRef } from "react";
// import { useNavigate } from "react-router-dom";

// import CardCell from "../components/CardCell/CardCell";
// import projectsData from "../data/dataProject.js";

const Projects = () => {
  // const scrollContainerRef = useRef(null);
  // const navigate = useNavigate();

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

  // const handleCardClick = (id) => {
  //   if ((id != 0) && (id != projectsData.length - 1)) {
  //     navigate(`/portfolio/project/${id}`);
  //   }
  // };

  // const projectsData = [
  //   {
  //     id: 0,
  //     title: "",
  //     texto1: "",
  //     texto2: "",
  //     imageSrc: require("../assets/covers/black-cover.png"),
  //     icon: require("../assets/icons/black.png")
  //   },
  //   {
  //     id: 1,
  //     title: "Projeto 1",
  //     texto1: "Encarte rápido",
  //     texto2: "Supermarket flyer generator.",
  //     imageSrc: require("../assets/covers/encarte-cover.png"),
  //     icon: require("../assets/icons/encarte.png")
  //   },
  //   {
  //     id: 2,
  //     title: "Projeto 2",
  //     texto1: "Trendy",
  //     texto2: "Personal media to live new experiences.",
  //     imageSrc: require("../assets/covers/trendy-cover.png"),
  //     icon: require("../assets/icons/trendy.png") 
  //   },
  //   {
  //     id: 3,
  //     title: "Projeto 3",
  //     texto1: "Burguer Maker",
  //     texto2: "Build your burger and compete.",
  //     imageSrc: require("../assets/covers/burguer-cover.png"),
  //     icon: require("../assets/icons/burguer.png")
  //   },
  //   {
  //     id: 4,
  //     title: "Projeto 3",
  //     texto1: "Flipty",
  //     texto2: "A coin or a dice, right from your wrist.",
  //     imageSrc: require("../assets/covers/flipty-cover.png"),
  //     icon: require("../assets/icons/flipty.png")
  //   },
  //   {
  //     id: 5,
  //     title: "Projeto 3",
  //     texto1: "Morfie",
  //     texto2: "Mood tracker and playlist maker.",
  //     imageSrc: require("../assets/covers/morfie-cover.png"),
  //     icon: require("../assets/icons/morfie.png")
  //   },
  //   {
  //     id: 6,
  //     title: "Projeto 3",
  //     texto1: "Tans",
  //     texto2: "Mini-games to practice logic.",
  //     imageSrc: require("../assets/covers/tans-cover.png"),
  //     icon: require("../assets/icons/tans.png")
  //   },
  //   {
  //     id: 7,
  //     title: "Projeto 3",
  //     texto1: "Byte Verse",
  //     texto2: "Gyroscope-based game like Space Invaders.",
  //     imageSrc: require("../assets/covers/byte-cover.png"),
  //     icon: require("../assets/icons/byte.png")
  //   },
  //   {
  //     id: 8,
  //     title: "Projeto 3",
  //     texto1: "Word Mistery",
  //     texto2: "Hangman game using Apple Watch and iPhone.",
  //     imageSrc: require("../assets/covers/word-cover.png"),
  //     icon: require("../assets/icons/word.png")
  //   },
  //   {
  //     id: 9,
  //     title: "Projeto 3",
  //     texto1: "Tardigrade",
  //     texto2: "Save the world in a 2D game.",
  //     imageSrc: require("../assets/covers/tardigrade-cover.png"),
  //     icon: require("../assets/icons/tardigrado.png")
  //   },
  //   {
  //     id: 10,
  //     title: "Projeto 3",
  //     texto1: "Keyboard Animal",
  //     texto2: "Keyboard to recognize animal songs.",
  //     imageSrc: require("../assets/covers/animal-cover.png"),
  //     icon: require("../assets/icons/animal.png")
  //   },
  //   {
  //     id: 11,
  //     title: "",
  //     texto1: "",
  //     texto2: "",
  //     imageSrc: require("../assets/covers/black-cover.png"),
  //     icon: require("../assets/icons/black.png")
  //   },
  // ];

  return (
    <div className="project-dev-page">
      <div className="project-dev-icon-container">
        <MenuTopo showMenuRight={true} />
       <div className="project-horizontal-scroll">
         {/* {projectsData.map((project) => (
            <CardCell 
              key={project.id} 
              texto1={project.texto1} 
              texto2={project.texto2} 
              imageSrc={project.imageSrc}
              iconSrc={project.icon}
              onClick={() => handleCardClick(project.id)}
            />
          ))}  */}
         </div>
      </div>
    </div>
  );
};

export default Projects;