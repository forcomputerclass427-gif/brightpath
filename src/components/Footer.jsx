import React from "react";
import { PiAmbulanceLight } from "react-icons/pi";
import { PiFireExtinguisher } from "react-icons/pi";
import { GrUserPolice } from "react-icons/gr";
import { FaHeadset } from "react-icons/fa";



const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-wave"></div>

      <div className="footer-container">
        {/* Logo & About */}
        <div className="footer-section">
          <div className="footer-logo">
            
            <h2>DisasterGuard</h2>
          </div>

          <p>
            Protecting communities through awareness, preparedness, and
            emergency response. Together we build a safer and more resilient
            future.
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-section">
          <h3>Quick Links</h3>

          <ul>
            <li><a href="/"> Home</a></li>
            <li><a href="/services"> Services</a></li>
            <li><a href="/about"> About Us</a></li>
            <li><a href="/contact"> Contact</a></li>
          </ul>
        </div>

        {/* Emergency Contacts */}
        <div className="footer-section">
          <h3>Emergency Contacts</h3>

          <ul>
            <li> <PiAmbulanceLight className="iconcolor" />  Ambulance: 102</li>
            <li> <PiFireExtinguisher className="iconcolor"/> Fire Service: 101</li>
            <li> <GrUserPolice className="iconcolor" />  Police: 100</li>
            <li> <FaHeadset className="iconcolor" /> Support: 24/7 Available</li>
          </ul>
        </div>

        {/* Newsletter */}
        <div className="footer-section">
          <h3>Stay Updated</h3>

          <p>
            Receive disaster alerts, safety tips, and emergency updates.
          </p>

          <div className="newsletter">
            <input type="email" placeholder="Enter your email" />
            <button>Subscribe</button>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="footer-bottom">
        <p>
          © 2026 DisasterGuard | Prepared Today, Protected Tomorrow 
        </p>
      </div>
    </footer>
  );
};

export default Footer;