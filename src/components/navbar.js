import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import logo from "./images/rapidScript-logo.png"; 

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      {/* Left Section: Logo and Nav Links */}
      <div className="nav-left">
        <Link to="/">
          <img src={logo} alt="RapidScript Logo" className="logo" />
        </Link>
        <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
          <li><Link title="Privacy Policy" to="/privacy-policy">Privacy Policy</Link></li>
          <li><Link title="Terms of Service" to="/terms-of-service">Terms of Service</Link></li>
          <li><Link title="Pricing" to="/pricing">Pricing</Link></li>
        </ul>
      </div>

      {/* Right Section: Sign In and CTA Button */}
      <div className="nav-right">
        <Link title="Sign In" to="/signin" className="sign-in">Sign In</Link>
        <Link title="Get Started" to="/get-started" className="get-started-btn">Get Started <span>Today</span></Link>
        {/* Hamburger Menu Button */}
        <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          <div className={`bar ${menuOpen ? "open" : ""}`}></div>
          <div className={`bar ${menuOpen ? "open" : ""}`}></div>
          <div className={`bar ${menuOpen ? "open" : ""}`}></div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;