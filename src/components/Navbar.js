import React from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";

const Navbar = () => (
  <nav className="navbar">
    <h1 className="navbar-title">DevConnect</h1>
    <div className="navbar-links">
      <Link to="/" className="nav-link">Home</Link>
      <Link to="/profile" className="nav-link">Profile</Link>
    </div>
  </nav>
  
);
export default Navbar;
