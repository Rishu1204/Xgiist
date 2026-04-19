import React from "react";
import InternshipCard from "./InternshipCard";
import "./InternshipSection.css";

const InternshipSection = () => {
  const internships = [
    {
      id: 1,
      title: "Web Development",
      icon: "💻",
      image:
        "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='200'%3E%3Crect fill='%23667eea' width='300' height='200'/%3E%3Ctext x='50%' y='50%' font-size='48' font-weight='bold' fill='%23ffffff' text-anchor='middle' dy='.3em'%3E💻%3C/text%3E%3C/svg%3E",
      modules: [
        "HTML & CSS",
        "JavaScript & React",
        "Backend (Node.js)",
        "Databases",
        "Deployment",
      ],
      duration: "3 Months",
      level: "Beginner to Intermediate",
      description:
        "Learn modern web development with hands-on projects and real-world experience.",
    },
    {
      id: 2,
      title: "AI/ML",
      icon: "🤖",
      image:
        "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='200'%3E%3Crect fill='%23764ba2' width='300' height='200'/%3E%3Ctext x='50%' y='50%' font-size='48' font-weight='bold' fill='%23ffffff' text-anchor='middle' dy='.3em'%3E🤖%3C/text%3E%3C/svg%3E",
      modules: [
        "Python Basics",
        "Machine Learning",
        "Deep Learning",
        "NLP",
        "Computer Vision",
      ],
      duration: "3 Months",
      level: "Intermediate to Advanced",
      description:
        "Master artificial intelligence and machine learning with cutting-edge tools and techniques.",
    },
    {
      id: 3,
      title: "Data Science",
      icon: "📊",
      image:
        "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='200'%3E%3Crect fill='%23f093fb' width='300' height='200'/%3E%3Ctext x='50%' y='50%' font-size='48' font-weight='bold' fill='%23ffffff' text-anchor='middle' dy='.3em'%3E📊%3C/text%3E%3C/svg%3E",
      modules: [
        "Data Analysis",
        "Data Visualization",
        "Statistical Analysis",
        "Big Data",
        "Real-world Projects",
      ],
      duration: "3 Months",
      level: "Intermediate",
      description:
        "Extract insights from data and become a proficient data scientist with practical experience.",
    },
    {
      id: 4,
      title: "Finance",
      icon: "💰",
      image:
        "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='200'%3E%3Crect fill='%234facfe' width='300' height='200'/%3E%3Ctext x='50%' y='50%' font-size='48' font-weight='bold' fill='%23ffffff' text-anchor='middle' dy='.3em'%3E💰%3C/text%3E%3C/svg%3E",
      modules: [
        "Financial Analysis",
        "Investment Strategies",
        "Risk Management",
        "Trading Basics",
        "Portfolio Management",
      ],
      duration: "3 Months",
      level: "Beginner to Intermediate",
      description:
        "Understand financial markets and gain expertise in investment and portfolio management.",
    },
    {
      id: 5,
      title: "Marketing",
      icon: "📈",
      image:
        "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='200'%3E%3Crect fill='%2300f2fe' width='300' height='200'/%3E%3Ctext x='50%' y='50%' font-size='48' font-weight='bold' fill='%23ffffff' text-anchor='middle' dy='.3em'%3E📈%3C/text%3E%3C/svg%3E",
      modules: [
        "Digital Marketing",
        "Social Media Strategy",
        "SEO & SEM",
        "Content Creation",
        "Analytics & Metrics",
      ],
      duration: "3 Months",
      level: "Beginner to Intermediate",
      description:
        "Master digital marketing strategies and learn to build powerful brand presence online.",
    },
  ];

  return (
    <section id="internships" className="internship-section">
      <div className="internship-container">
        <h2 className="section-title">Our Internship Programs</h2>
        <p className="section-subtitle">
          Choose from our comprehensive internship programs designed to
          accelerate your career
        </p>
        <div className="cards-grid">
          {internships.map((internship) => (
            <InternshipCard key={internship.id} internship={internship} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default InternshipSection;
