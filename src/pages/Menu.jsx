import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Menu.module.css";

const Menu = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const navigate = useNavigate();
  const [isExiting, setIsExiting] = useState(false);
  const [tiltStyle, setTiltStyle] = useState({}); 

  const handleNavigation = (path) => {
    setIsExiting(true);
    setTimeout(() => {
      navigate(path);
      setIsExpanded(false);
      setIsExiting(false);
    }, 1000);
  };

  const handleToggleMenu = (event) => {
    event.stopPropagation();
    if (isExpanded) {
      navigate("/portfolio");
      setIsExpanded(false);
    } else {
      setIsExpanded(true);
    }
  };

  const handleMouseMove = (e) => {
    const { clientX, clientY, currentTarget } = e;
    const { width, height, left, top } = currentTarget.getBoundingClientRect();
  
    const x = ((clientX - left) / width - 0.5) * 40; // Ajuste a sensibilidade do X
    const y = ((clientY - top) / height - 0.5) * 100; // Ajuste a sensibilidade do Y e inverta (-)
  
    setTiltStyle({
      transform: `perspective(500px) rotateY(${-x}deg) rotateX(${y}deg)`,
    });
  };

  // Reseta a inclinação quando o mouse sai do menu
  const handleMouseLeave = () => {
    setTiltStyle({ transform: "perspective(500px) rotateY(0deg) rotateX(0deg)" });
  };

  return (
    <div
    className={`menu ${isExpanded ? "expanded" : ""} ${isExiting ? "exiting" : ""}`}
      style={tiltStyle}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <span className="left" onClick={() => handleNavigation("/portfolio/dev")}>DEV</span>
      <span className="center" onClick={handleToggleMenu}>GSTV</span>
      <span className="right" onClick={() => handleNavigation("/portfolio/store")}>ART</span>
    </div>
  );
};

export default Menu;