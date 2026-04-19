import React from "react";
import "./Footer.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>xgiist</h3>
            <p>
              Launching your career in tech with world-class internship
              programs.
            </p>
          </div>
          <div className="footer-section">
            <h4>Programs</h4>
            <ul>
              <li>
                <a href="#internships">Web Development</a>
              </li>
              <li>
                <a href="#internships">AI/ML</a>
              </li>
              <li>
                <a href="#internships">Data Science</a>
              </li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Company</h4>
            <ul>
              <li>
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
              <li>
                <a href="#contact">Support</a>
              </li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Follow Us</h4>
            <div className="social-links">
              <button
                className="social-icon"
                onClick={() => window.open("https://linkedin.com", "_blank")}
              >
                LinkedIn
              </button>
              <button
                className="social-icon"
                onClick={() => window.open("https://twitter.com", "_blank")}
              >
                Twitter
              </button>
              <button
                className="social-icon"
                onClick={() => window.open("https://facebook.com", "_blank")}
              >
                Facebook
              </button>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {currentYear} xgiist. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
