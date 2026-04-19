import React, { useState } from "react";
import "./ContactForm.css";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setStatus("");

    // Simulate form submission
    setTimeout(() => {
      console.log("Form Data:", formData);
      setStatus("success");
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
      setIsLoading(false);
      setTimeout(() => setStatus(""), 5000);
    }, 1500);
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <div className="contact-header">
          <h2 className="contact-title">Get In Touch</h2>
          <p className="contact-subtitle">
            Ready to start your internship journey? Contact us today!
          </p>
        </div>

        <div className="contact-content">
          <div className="contact-info">
            <div className="info-card">
              <div className="info-icon">📍</div>
              <h3>Location</h3>
              <p>Patna, Bihar</p>
            </div>
            <div className="info-card">
              <div className="info-icon">📧</div>
              <h3>Email</h3>
              <p>contact@xgiist.com</p>
            </div>
            <div className="info-card">
              <div className="info-icon">📱</div>
              <h3>Phone</h3>
              <p>+91 6200307983</p>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Full Name *</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Your Full name"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email Address *</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="your.email@example.com"
              />
            </div>

            <div className="form-group">
              <label htmlFor="phone">Phone Number</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+91 xxxxxxxxxx"
              />
            </div>

            <div className="form-group">
              <label htmlFor="subject">Subject *</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                placeholder="Internship Inquiry"
              />
            </div>

            <div className="form-group full-width">
              <label htmlFor="message">Message *</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
                placeholder="Tell us about your interest in our internship programs..."
              ></textarea>
            </div>

            <button type="submit" className="submit-btn" disabled={isLoading}>
              {isLoading ? "Sending..." : "Send Message"}
            </button>

            {status === "success" && (
              <div className="status-message success">
                ✓ Message sent successfully! We'll get back to you soon.
              </div>
            )}
            {status === "error" && (
              <div className="status-message error">
                ✗ Error sending message. Please try again or contact us
                directly.
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
