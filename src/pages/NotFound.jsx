import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./NotFound.modules.css"; // Arquivo de estilos da página 404
import GstvIcon from "../components/GstvIcon/GstvIcon";

const NotFound = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Redireciona para "/portfolio" após 3 segundos
    const timer = setTimeout(() => {
      navigate("/portfolio");
    }, 5000);

    return () => clearTimeout(timer); // Limpa o timer caso o usuário saia antes
  }, [navigate]);

  return (
    <div className="notfound-container">
      <GstvIcon />
      <p>YOU ARE ACCESSING A PAGE THAT DOES NOT EXIST </p>
      <p>YOU WILL BE REDIRECTED TO THE HOME</p>
    </div>
  );
};

export default NotFound;