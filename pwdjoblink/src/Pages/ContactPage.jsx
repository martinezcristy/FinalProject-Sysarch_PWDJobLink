import React, { useState } from 'react';
import './AboutPage.css';
import { useLocation } from 'react-router-dom';
import PopUpAlert from '../Components/PopUpAlert';

function ContactPage() {
  const location = useLocation();
  const [showModal, setShowModal] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    const name = event.target.elements.name.value;
    const email = event.target.elements.email.value;
    const message = event.target.elements.message.value;

    if (!name || !email || !message) {
      setShowModal(true);
      setIsSuccess(false);
    } else {
      setShowModal(true);
      setIsSuccess(true);
      event.target.reset();
    }
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className="backgroundImage">
      <div className="contact-container">
        <h2>Contact Us</h2>
        <p>If you have any questions or inquiries, please feel free to reach out to us.</p>
        <form className="contact-form" onSubmit={handleSubmit}>
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
      <PopUpAlert showModal={showModal} closeModal={closeModal} isSuccess={isSuccess} />
    </div>
  );
}

export default ContactPage;
