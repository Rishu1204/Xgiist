import React, { useState } from "react";
import "./InternshipCard.css";

const InternshipCard = ({ internship }) => {
  const [imageError, setImageError] = useState(false);

  const handleImageError = () => {
    setImageError(true);
  };

  return (
    <div className="card">
      <div className="card-image">
        {!imageError ? (
          <img
            src={internship.image}
            alt={internship.title}
            onError={handleImageError}
          />
        ) : (
          <div
            className="image-fallback"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              height: "100%",
              fontSize: "48px",
            }}
          >
            {internship.icon}
          </div>
        )}
      </div>
      <div className="card-icon">{internship.icon}</div>
      <h3 className="card-title">{internship.title}</h3>
      <p className="card-description">{internship.description}</p>

      <div className="card-meta">
        <div className="meta-item">
          <span className="meta-label">Duration:</span>
          <span className="meta-value">{internship.duration}</span>
        </div>
        <div className="meta-item">
          <span className="meta-label">Level:</span>
          <span className="meta-value">{internship.level}</span>
        </div>
      </div>

      <div className="modules-section">
        <h4 className="modules-title">Key Modules:</h4>
        <ul className="modules-list">
          {internship.modules.map((module, index) => (
            <li key={index} className="module-item">
              <span className="checkmark">✓</span>
              {module}
            </li>
          ))}
        </ul>
      </div>

      <button className="card-btn">Apply Now</button>
    </div>
  );
};

export default InternshipCard;
