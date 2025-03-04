import React from "react";
import "./CardArticle.css"; // Importa os estilos

const CardArticle = ({ titulo, text, imageSrc, link }) => {
  const card = titulo === "" ? "card zero" : "card";
  const boxTitle = titulo === "" ? "box-title zero" : "box-title";

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