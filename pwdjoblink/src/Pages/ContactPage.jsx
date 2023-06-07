import React, { useEffect } from 'react';
import './AboutPage.css';
import { useLocation } from 'react-router-dom';

function ContactPage() {
  const location = useLocation();

  useEffect(() => {
    // Access the location.state if necessary
    const fromPath = location.state && location.state.from;
    // Perform any desired logic here
  }, [location]);

  return (
    <div className="backgroundImage">
      <div className="contact-container">
        <h2>Contact Us</h2>
        <p>If you have any questions or inquiries, please feel free to reach out to us.</p>
        <form className="contact-form">
          <div className="input-container">
            <label htmlFor="name" className="label">Name</label>
            <input type="text" id="name" name="name" />
          </div>
          <div className="input-container">
            <label htmlFor="email" className="label">Email</label>
            <input type="email" id="email" name="email" />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" rows="4"></textarea>
            <p></p>
          </div>
          <button type="submit" className="submit-button">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default ContactPage;
