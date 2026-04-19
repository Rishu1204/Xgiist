import React from "react";
import "./Statistics.css";

const Statistics = () => {
  const stats = [
    { number: "500+", label: "Students Trained", icon: "👨‍🎓" },
    { number: "50+", label: "Companies Partnered", icon: "🏢" },
    { number: "95%", label: "Placement Rate", icon: "🎯" },
    { number: "24/7", label: "Support Available", icon: "🤝" },
  ];

  return (
    <section className="statistics">
      <div className="stats-container">
        {stats.map((stat, index) => (
          <div key={index} className="stat-card">
            <div className="stat-icon">{stat.icon}</div>
            <h3 className="stat-number">{stat.number}</h3>
            <p className="stat-label">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Statistics;
