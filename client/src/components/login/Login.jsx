import "./login.scss";
import { FaUser, FaLock } from "react-icons/fa";

const Login = () => {
  return (
    <div className="login">
      <div className="wrapper">
        <form action="">
          <h1>Login</h1>
          <div className="input-box">
            <input type="email" placeholder="Email" required />
            <FaUser className="icon"/>
          </div>
          <div className="input-box">
            <input type="text" placeholder="Password" required />
            <FaLock className="icon"/>
          </div>
          <div className="remember-forget">
            <label>
              <input type="checkbox" />
              Remember me
            </label>
            <a href="#">Forget password?</a>
          </div>
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
