import React from "react";
import "./CardArticle.modules.css";

const CardArticle = ({ titulo, text, imageSrc, link }) => {
  const card = titulo === "" ? "card transparent" : "card";


  return (
    <div>
      <a href={link} target="_blank" rel="noopener noreferrer" className="link-a">
        <div className={card}>

          <div className="cover">
            <img src={imageSrc} alt="Imagem do projeto" className="image-article" />
          </div>


          <div className="box-content">
            <div className="title-article">{titulo}</div>
            <div className="descrip-article">{text}</div>
          </div>
        </div>
      </a>
    </div>
  );
};

export default CardArticle;