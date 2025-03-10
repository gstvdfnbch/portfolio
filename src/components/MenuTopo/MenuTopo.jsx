import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./MenuTopo.modules.css";
import GstvIcon from "../GstvIcon/GstvIcon";
import { useNavigate } from "react-router-dom";

import emailIcon from "../../assets/iconcontacts/email-icon.png";
import mediumIcon from "../../assets/iconcontacts/medium-icon.png";
import gitIcon from "../../assets/iconcontacts/git-icon.png";
import linkedinIcon from "../../assets/iconcontacts/linkedin-icon.png";
import instaIcon from "../../assets/iconcontacts/insta-icon.png";

const MenuTopo = ({ showMenuRight = true }) => {
  const [tooltip, setTooltip] = useState(false);
  const email = "gustavodiefenbach.dev@gmail.com";
  const navigate = useNavigate(); // Hook para voltar à página anterior

  const copyEmailToClipboard = (e) => {
    e.preventDefault();
    navigator.clipboard.writeText(email).then(() => {
      setTooltip(true);
      setTimeout(() => setTooltip(false), 2000); // Oculta o tooltip após 2s
    });
  };

  return (
    <div className="menu-top">
      <div className="menu-left">
        <button className="back-button" onClick={() => navigate(-1)}>
          &lt; {/* HTML entity para "<" */}
        </button>
        <Link to="/portfolio">
          <GstvIcon />
        </Link>
      </div>
      {showMenuRight ? (
        <div className="menu-right">
          <div className="menu-topicos">
            <Link to="/portfolio/projects" className="menu-link">PROJECTS    </Link>|
            <Link to="/portfolio/articles" className="menu-link">    ARTICLES</Link>
          </div>
          <div className="menu-icons">
            <div className="tooltip-container" onMouseEnter={() => setTooltip(true)} onMouseLeave={() => setTooltip(false)}>
  <a href="#" role="button" onClick={copyEmailToClipboard} tabIndex={0} onKeyPress={(e) => e.key === 'Enter' && copyEmailToClipboard()}>                <img src={emailIcon} alt="Email Icon" className="menu-icon" /> 
              </a>
              {tooltip && <span className="tooltip">Clique para copiar o email</span>}
            </div>
            <a href="https://github.com/gstvdfnbch" target="_blank" rel="noopener noreferrer">
              <img src={gitIcon} alt="GitHub Icon" className="menu-icon" /> 
            </a>
            <a href="http://linkedin.com/in/gstvdfnbch/" target="_blank" rel="noopener noreferrer">
              <img src={linkedinIcon} alt="LinkedIn Icon" className="menu-icon" /> 
            </a>
            <a href="https://gstvdfnbch.medium.com" target="_blank" rel="noopener noreferrer">
              <img src={mediumIcon} alt="Medium Icon" className="menu-icon" /> 
            </a>
          </div>
        </div>
      ) : (
        <div className="menu-right">
        <div className="menu-left-icons">
          <a href="https://www.instagram.com/gstv.xyz/" target="_blank" rel="noopener noreferrer">
            <img src={instaIcon} alt="Insta" className="menu-icon-insta" />
          </a>
        </div>
        </div>
      )}
    </div>
  );
};

export default MenuTopo;