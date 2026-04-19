import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <h1 className="hero-title">Welcome to xgiist</h1>
        <p className="hero-subtitle">
          Launching Your Career in Web Development, AI/ML & Data Science
        </p>
        <p className="hero-description">
          Join our comprehensive internship programs and gain hands-on
          experience with industry experts. Transform your skills and kickstart
          your professional journey today.
        </p>
        <button
          className="hero-btn"
          onClick={() =>
            document
              .getElementById("internships")
              .scrollIntoView({ behavior: "smooth" })
          }
        >
          Explore Internships
        </button>
      </div>
      <div className="hero-images">
        <div className="hero-image-card image-1">
          <img
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='150' height='150'%3E%3Crect fill='%23667eea' width='150' height='150'/%3E%3Ctext x='50%' y='50%' font-size='24' font-weight='bold' fill='%23ffffff' text-anchor='middle' dy='.3em'%3E💻%3C/text%3E%3C/svg%3E"
            alt="Web Development"
          />
        </div>
        <div className="hero-image-card image-2">
          <img
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='150' height='150'%3E%3Crect fill='%23764ba2' width='150' height='150'/%3E%3Ctext x='50%' y='50%' font-size='24' font-weight='bold' fill='%23ffffff' text-anchor='middle' dy='.3em'%3E🤖%3C/text%3E%3C/svg%3E"
            alt="AI/ML"
          />
        </div>
        <div className="hero-image-card image-3">
          <img
            src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='150' height='150'%3E%3Crect fill='%23f093fb' width='150' height='150'/%3E%3Ctext x='50%' y='50%' font-size='24' font-weight='bold' fill='%23ffffff' text-anchor='middle' dy='.3em'%3E📊%3C/text%3E%3C/svg%3E"
            alt="Data Science"
          />
        </div>
      </div>
      <div className="hero-background"></div>
    </section>
  );
};

export default Hero;
