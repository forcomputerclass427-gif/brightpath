import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/6.jpg"

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <nav className="navbar">

     
          {/* Logo */}
          <img
            src={logo}
            alt="Natural Disaster Awareness Logo"
            className="logo"
          />


    
      {/* Left Side Links */}
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/About">About</Link>
        <Link to="/Contact">Contact</Link>
        <Link to="/Service">Service</Link>
      </div>

      {/* Right Side Three Dots */}
      <div className="menu-container">
        <button
          className="menu-btn"
          onClick={() => setShowMenu(!showMenu)}
        >
          &#8942;
        </button>

        {showMenu && (
          <div className="dropdown-menu">
            <Link to="/Profile">Profile</Link>
            <Link to="/Settings">Settings</Link>
            <Link to="/Help">Help</Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;