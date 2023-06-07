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
      <hr className="line" />
        <h2 className="about-heading">UNFOLDING OPPORTUNITIES FOR PEOPLE WITH DIVERSE ABILITIES</h2>
        <hr className="line" />
        <p className="about-text">
          PWD JobLink is committed to providing a variety of opportunities for individuals who possess a wide range of skills, talents, and capabilities. 
          People have different strengths and abilities that may not fit within traditional or conventional norms, but this does not hinder their chances of finding good opportunities. 
          Diversity in abilities is a valuable asset and can contribute to the success and growth of individuals, employers, and society as a whole.
        </p>
        <hr className="line" />
        <h2 className="about-heading">MISSION</h2>
        <p className='about-text'>
        To connect individuals with diverse abilities to inclusive employment opportunities, fostering empowerment,and promoting equal access to fulfilling careers.
        </p>
        <h2 className="about-heading">VISION</h2>
        <p className='about-text'>
        Creating a society where every person, regardless of their abilities, is valued and given the opportunity to contribute their unique talents and skills in a supportive and inclusive work environment.
        </p>
        <hr className="line" />
        <h2 className="about-heading">GOT A QUESTION?</h2>
        <p className='about-text'>
            We'd love to hear from you.
        </p>
        <button className="contactButton" onClick={handleClick}>Contact Us</button>
      </div>
    </div>
  );
}

export default AboutPage;
