import React from "react";
import "./CardCell.modules.css"; // Importa os estilos

const CardCell = ({ texto1, texto2, imageSrc, iconSrc, onClick }) => {
  const contentCard = texto1 === "" ? "content-card transparent" : "content-card";

  return (
    <div className={contentCard} onClick={onClick} >
      <div className="poster">
        <img src={imageSrc} alt="Imagem do projeto" className="poster-image" />
      </div>
     
      <div className="footer">
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