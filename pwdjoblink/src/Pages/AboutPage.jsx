import React from 'react';
import './AboutPage.css';
import { useNavigate } from 'react-router-dom';

function AboutPage() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/contact');
  };

  return (
    <div className="backgroundImage">
      <div className="AboutPage">
        <h2 className="about-heading">MISSION</h2>
        <p></p>
        <p className='about-text'>
          To connect individuals with diverse abilities to inclusive employment opportunities, fostering empowerment, and promoting equal access to fulfilling careers.
        </p>
        <hr className="line" />
        <h2 className="about-heading">VISION</h2>
        <p></p>
        <p className='about-text'>
          Creating a society where every person, regardless of their abilities, is valued and given the opportunity to contribute their unique talents and skills in a supportive and inclusive work environment.
        </p>
        <hr className="line" />
        <div className="question-heading-wrapper">
          <h2 className="about-heading">GOT A QUESTION?</h2>
        </div>
        <p className='about-text'>
          We'd love to hear from you.
        </p>
        <button className="contactButton" onClick={handleClick}>Contact Us</button>
      </div>
    </div>
  );
}

export default AboutPage;
