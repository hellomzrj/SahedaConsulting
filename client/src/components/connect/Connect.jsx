import "./connect.scss";
import { useNavigate } from "react-router-dom";

const Connect = () => {
  const navigate = useNavigate();

  return <div className="connect">
      <span>Connect with us.</span>
      <div className="wrapper">
        <div className="connect-wrapper">
          <div className="buyer-connect" onClick={() => navigate("/connect-as-buyer")}>
            <h2>Connect as a Buyer</h2>
            <p>To get service or work, click here to connect with us.</p>
          </div>
          <div className="seller-connect" onClick={() => navigate("/connect-as-seller")}>
            <h2>Connect as a Seller</h2>
            <p>To provide service or work, click here to connect with us.</p>
          </div>
        </div>
      </div>
  </div>;
};

export default Connect;
