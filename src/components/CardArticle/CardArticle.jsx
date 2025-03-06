import React from "react";
import "./CardArticle.modules.css";

const CardArticle = ({ titulo, text, imageSrc, link }) => {
  const card = titulo === "" ? "card zero" : "card";
  const boxTitle = titulo === "" ? "box-content zero" : "box-content";

  console.log(titulo,text,imageSrc,link)

  return (
        <div>
          <div className={card}>
          <a href={link} target="_blank" rel="noopener noreferrer" className="image-link">

          <div className="cover">
              <img src={imageSrc} alt="Imagem do projeto" className="image-article" />
          </div>
          </a>

          <div className={boxTitle}>
              <div className="title-article">{titulo}</div>
              <div className="descrip-article">{text}</div>
          </div>

          </div>
        </div>
  );
};

export default CardArticle;