import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <div className="contact-container">
      <h2>Contact Me</h2>
      <p>If you would like to get in touch, feel free to reach out to me through any of the following:</p>
      
      <div className="contact-info">
        <div className="contact-item">
          <h3>Email</h3>
          <p>
            <a href="mailto:akshaya.n2023ai-ds@sece.ac.in">
              akshaya.n2023ai-ds@sece.ac.in
            </a>
          </p>
        </div>

        <div className="contact-item">
          <h3>Phone</h3>
          <p>
            <a href="tel:+919514152789">+91 9514152789</a>
          </p>
        </div>

        <div className="contact-item">
          <h3>GitHub</h3>
          <p>
            <a href="https://github.com/23AIDS011" target="_blank" rel="noopener noreferrer">
              github.com/23AIDS011
            </a>
          </p>
        </div>

        <div className="contact-item">
          <h3>LinkedIn</h3>
          <p>
            <a href="https://www.linkedin.com/in/akshaya-n-b7879a293/" target="_blank" rel="noopener noreferrer">
              linkedin.com/in/akshaya-n-b7879a293
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
