import React from "react";
import "./Features.css";

const Features = () => {
  const features = [
    {
      icon: "💼",
      title: "Industry-Expert Mentors",
      description:
        "Learn from professionals with 10+ years of industry experience",
    },
    {
      icon: "🛠️",
      title: "Hands-on Projects",
      description: "Work on real-world projects and build your portfolio",
    },
    {
      icon: "📜",
      title: "Certification",
      description: "Earn recognized certifications upon completion",
    },
    {
      icon: "🎓",
      title: "Career Guidance",
      description: "Get personalized career counseling and placement support",
    },
  ];

  return (
    <section className="features">
      <div className="features-container">
        <h2 className="features-title">Why Choose xgiist?</h2>
        <p className="features-subtitle">
          Comprehensive internship programs designed for your success
        </p>

        <div className="features-grid">
          {features.map((feature, index) => (
            <div key={index} className="feature-card">
              <div className="feature-icon">{feature.icon}</div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
