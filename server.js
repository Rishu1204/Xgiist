const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
require("dotenv").config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Configure your email service here
// Using Gmail example - you can change to any SMTP service
const transporter = nodemailer.createTransport({
  service: "gmail", // or any other email service
  auth: {
    user: process.env.EMAIL_USER || "your-email@gmail.com",
    pass: process.env.EMAIL_PASSWORD || "your-app-password", // Use app-specific password for Gmail
  },
});

// Verify connection
transporter.verify((error, success) => {
  if (error) {
    console.log("SMTP Connection Error:", error);
  } else {
    console.log("SMTP Connection Ready:", success);
  }
});

// Send email endpoint
app.post("/api/send-email", async (req, res) => {
  const { name, email, phone, subject, message } = req.body;

  // Validate required fields
  if (!name || !email || !subject || !message) {
    return res.status(400).json({
      error: "Missing required fields",
    });
  }

  try {
    // Email content for admin
    const adminMailOptions = {
      from: process.env.EMAIL_USER || "your-email@gmail.com",
      to: process.env.ADMIN_EMAIL || "your-admin-email@gmail.com",
      subject: `New Internship Inquiry: ${subject}`,
      html: `
        <h2>New Internship Inquiry</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || "Not provided"}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <h3>Message:</h3>
        <p>${message.replace(/\n/g, "<br>")}</p>
        <hr>
        <p>Please reply to: ${email}</p>
      `,
    };

    // Confirmation email to user
    const userMailOptions = {
      from: process.env.EMAIL_USER || "your-email@gmail.com",
      to: email,
      subject: "We Received Your Inquiry - xgiist",
      html: `
        <h2>Thank You for Your Interest in xgiist!</h2>
        <p>Dear ${name},</p>
        <p>We have received your inquiry and will get back to you within 24-48 hours.</p>
        <h3>Your Message Details:</h3>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, "<br>")}</p>
        <hr>
        <p>Best regards,<br>xgiist Team</p>
      `,
    };

    // Send both emails
    await transporter.sendMail(adminMailOptions);
    await transporter.sendMail(userMailOptions);

    res.status(200).json({
      success: true,
      message: "Email sent successfully!",
    });
  } catch (error) {
    console.error("Email sending error:", error);
    res.status(500).json({
      error: "Failed to send email",
      details: error.message,
    });
  }
});

// Health check endpoint
app.get("/api/health", (req, res) => {
  res.status(200).json({ status: "Server is running" });
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
