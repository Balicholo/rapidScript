// src/components/pages/404.js
import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/download__21_-removebg-preview.png"; 

const NotFound = () => {
  return (
    <div className="page-notfound-page">
      <div className="page-notfound-wrapper">
      <Link to="/">
          <img src={logo} alt="RapidScript Logo" className="error-image" />
      </Link>
      <h1>404 - Page Not Found</h1>
      <p>The page you're looking for doesn't exist.</p>
      <Link title="Back to Home" to="/" className="get-started-btn">Back to Home</Link>
      </div>
    </div>
  );
};

export default NotFound;
