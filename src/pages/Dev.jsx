import React from "react";
import "../pages/Dev.modules.css";
import "../App.css";
import MenuTopo from "../components/MenuTopo/MenuTopo.jsx"; // Importando o novo componente
import objImage from '../assets/3dobj.png';

const Dev = () => {
  return (
    <div className="dev-page">
      <MenuTopo showMenuRight={true} />
      
      <div className="content"> 
        <div className="red">
          <img src={objImage} alt="3D Object" className="image-3d" />
        </div>
        <div className="blue">
        <p>👋 Hi, I’m Gustavo.</p>
        <p>I’m driven by the challenge of solving problems with creative and interactive solutions — and I write about it here.</p>
        </div>
      </div>

    </div>
  );
};

export default Dev;
