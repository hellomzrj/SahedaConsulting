import "./connectAsBuyer.scss";
// import { useState } from "react";
import { FaUser, FaEnvelope } from "react-icons/fa";
import contactImg from "../assets/img/contact-img.jpg";

const ConnectAsBuyer = () => {
  // const [county, setCountry] = useState([])
  return (
    <div className="connect-as-buyer">
      <div className="wrapper">
        <div className="contact-left">
          <div className="contact-image">
            <img src={contactImg} alt="" />
          </div>
        </div>
        <div className="contact-right">
          <form action="">
            <h2>Get in Touch</h2>
            <div className="input-box">
              <input type="text" placeholder="Full Name" required />
              <FaUser className="contact-icon"/>
            </div>
            <div className="input-box">
              <input type="email" placeholder="Email" required />
              <FaEnvelope className="contact-icon" />
            </div>
            <div className="service-dropdown-menu">
              <div className="dropdown-services">
                <label htmlFor="">Select Service</label>
                <select name="Services" className="service-dropdown-items">
                  <option> - Select Service - </option>
                  <option> Engineering </option>
                  <option> Management </option>
                  <option> Information Technology </option>
                  <option> Others </option>
                </select>
              </div>
            </div>
            <div className="message-box">
              <textarea name="massage" placeholder="Write your message" id="" rows="7"></textarea>
            </div>
            <button>Send</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ConnectAsBuyer;
