import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import './SubscribePage.css';

function SubscribePage() {
  const [email, setEmail] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <div className="subscribe-background">
      <div className="subscription-widget">
        <h3>Job Alerts!</h3>
        <p>Subscribe to receive job opportunities based on your searches from over <b>100</b> job sites.</p>
        <form onSubmit={handleSubmit}>
          <div className="input-container">
            <input
              type="email"
              className="email-input"
              placeholder="example@mail.com"
              value={email}
              onChange={handleEmailChange}
            />
          </div>
          <button type="submit" className="subscribe-button">
          Subscribe
          </button>
        </form>
      </div>
    </div>
  );
}

export default SubscribePage;