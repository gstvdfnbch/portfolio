import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Menu.module.css";

const Menu = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const navigate = useNavigate();
  const [isExiting, setIsExiting] = useState(false);
  const [tiltStyle, setTiltStyle] = useState({});
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Detecta se o dispositivo tem mouse (Desktop) ou não (Mobile)
    const hasHover = window.matchMedia("(hover: hover)").matches;
    setIsMobile(!hasHover);

    if (!hasHover) {
      // Se for um dispositivo móvel, ativa o acelerômetro
      const handleMotion = (event) => {
        const { beta, gamma } = event; // beta: inclinação frente/trás, gamma: esquerda/direita
        const x = gamma / 5; // Sensibilidade do X
        const y = beta / 10; // Sensibilidade do Y

        setTiltStyle({
          transform: `perspective(500px) rotateY(${-x}deg) rotateX(${y}deg)`,
        });
      };

      if (window.DeviceMotionEvent) {
        window.addEventListener("deviceorientation", handleMotion);
      }

      return () => {
        if (window.DeviceMotionEvent) {
          window.removeEventListener("deviceorientation", handleMotion);
        }
      };
    }
  }, []);

  const handleMouseMove = (e) => {
    if (isMobile) return; // Se for mobile, ignora o evento do mouse

    const { clientX, clientY, currentTarget } = e;
    const { width, height, left, top } = currentTarget.getBoundingClientRect();

    const x = ((clientX - left) / width - 0.5) * 40;
    const y = ((clientY - top) / height - 0.5) * 100;

    setTiltStyle({
      transform: `perspective(500px) rotateY(${-x}deg) rotateX(${y}deg)`,
    });
  };

  const handleMouseLeave = () => {
    if (isMobile) return; // Evita resetar a rotação no mobile

    setTiltStyle({ transform: "perspective(500px) rotateY(0deg) rotateX(0deg)" });
  };

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