import React from "react";
import { FaLocationArrow, FaMobileAlt, FaEnvelope } from "react-icons/fa";
import Logo from "../assets/img/logo.png";

import "./Footer.scss";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="col about-section">
          {/* <div className="title">About</div> */}
          <div className="logo">
            <img src={Logo} alt="" />
          </div>
          <div className="text">
            A premium ghost consulting service in Engineering, Management &
            IT all over the world.
          </div>
        </div>
        <div className="col">
          <div className="title">Menu</div>
          <span className="text">Home</span>
          <span className="text">Services</span>
          <span className="text">About</span>
          <span className="text">Connect</span>
          <span className="text">News</span>
        </div>
        <div className="col">
          <div className="title">Useful Links</div>
          <span className="text">Career</span>
          <span className="text">Support</span>
          <span className="text">Privacy & Policy</span>
          <span className="text">Cookie Policy</span>
          <span className="text">Studio</span>
        </div>
        <div className="col">
          <div className="title">Contact</div>
          <span className="text">Phone : +971 5656 3388</span>
          <span className="text">Phone : +91 92331 56375</span>
          <span className="text">Phone : +880 1717 726232</span>
          <span className="text">Need help or have a question?</span>
          <span className="text">info@sahedaconsulting.com</span>
        </div>
      </div>
      <div className="bottom-bar">
        <div className="bottom-bar-content">
          <div className="text">Powered by Saheda Consulting LLC</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
