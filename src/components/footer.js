// src/components/Footer.js
import React from "react";
import { Link } from "react-router-dom";
import logo from "./images/rapidScript-logo.png"; 

const Footer = () => {
  return (
    <footer>
      <div className="footer-wrapper">
      <Link to="/">
          <img src={logo} alt="RapidScript Logo" className="logo" />
      </Link>
      <ul className="footer-links" >
          <li><Link to="/privacy-policy">Privacy Policy</Link></li>
          <li><Link to="/terms-of-service">Terms of Service</Link></li>
          <li><Link to="/pricing">Pricing</Link></li>
      </ul>
      </div>
      <div className="line"></div>
      <div className="copyright">
        <p>© 2025 rapidScript. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;