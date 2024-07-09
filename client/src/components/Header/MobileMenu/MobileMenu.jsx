import { MdClose } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import "./MobileMenu.scss";

const MobileMenu = ({ setShowMobileMenu }) => {
    const navigate = useNavigate();
  return (
    <div className="mobile-menu-container">
      <div className="close-btn">
        <MdClose
          onClick={() => {
            setShowMobileMenu(false);
          }}
        />
      </div>
      <div className="mobile-menu-items">
        <ul className="menu-items">
          <li className="menu-item" onClick={() => navigate("/home")}>HOME</li>
          <li className="menu-item" onClick={() => navigate("/services")}>SERVICES</li>
          <li className="menu-item" onClick={() => navigate("/connect")}>CONNECT</li>
          <li className="menu-item" onClick={() => navigate("/news")}>NEWS</li>
          <li className="menu-item" onClick={() => navigate("/login")}>LOGIN</li>
        </ul>
      </div>
    </div>
  );
};

export default MobileMenu;
