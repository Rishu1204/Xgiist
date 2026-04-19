import React, { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
    setMobileMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <span className="logo-text">xgiist</span>
        </div>
        <div className={`nav-menu ${mobileMenuOpen ? "active" : ""}`}>
          <button onClick={() => scrollToSection("home")} className="nav-link">
            Home
          </button>
          <button
            onClick={() => scrollToSection("internships")}
            className="nav-link"
          >
            Internships
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="nav-link cta-btn"
          >
            Contact Us
          </button>
        </div>
        <div
          className={`hamburger ${mobileMenuOpen ? "active" : ""}`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
