import "../pages/Store.modules.css";
import MenuTopo from "../components/MenuTopo/MenuTopo";

const Store = () => {
  return (
    <div>
      <div className="dev-icon-container">
        <MenuTopo showMenuRight={false} />
      </div>
      <div className="coming-soon-banner">EM BREVE ● COMING SOON ● EM BREVE ● COMING SOON ●</div>
    </div>
  );
};

export default Store;