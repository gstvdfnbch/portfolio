import React from "react";
import "./CardCell.modules.css"; // Importa os estilos

const CardCell = ({ texto1, texto2, imageSrc, iconSrc, onClick }) => {
  const textContainerClass = texto1 === "" ? "card-footer transparent" : "card-footer";
  const cardTitleClass = texto1 === "" ? "card-title small" : "card-title";

  return (
    <div className="project-card" onClick={onClick} >
      <div className={cardTitleClass}>
        <img src={imageSrc} alt="Imagem do projeto" className="card-image" />
      </div>
      
      <div className={textContainerClass}>
        <div className="square-icon">
          <img src={iconSrc} alt="Ícone" className="icon-image" />
        </div>
        <div className="text-container">
          <span className="text-line1">{texto1}</span>
          <span className="text-line2">{texto2}</span>
        </div>
      </div> 
    </div>
  );
};

export default CardCell;