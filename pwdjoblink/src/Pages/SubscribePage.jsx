import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import './SubscribePage.css';
import PopUpAlert from '../Components/PopUpAlert';

function SubscribePage() {
  const [email, setEmail] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email) {
      setShowModal(true);
      setIsSuccess(false);
    } else {
      setShowModal(true);
      setIsSuccess(true);
      // Handle form submission
      // Reset form
      setEmail('');
    }
  };

  const closeModal = () => {
    setShowModal(false);
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
      <PopUpAlert showModal={showModal} closeModal={closeModal} isSuccess={isSuccess} />
    </div>
  );
}

export default SubscribePage;
