import React from 'react';
import './HomePage.css';
import Logo from '../Components/logo.png';

function HomePage() {
  return (
    <div className="backgroundImage">
      <div className="HomePage">
      <img src={Logo} alt="Logo" className="logo" /> 
        <h2 className="welcome-heading">Welcome to PWD JobLink!</h2>
        <div className="spacer"></div>
        <hr className="line" />
        <h2 className="about-heading">UNFOLDING OPPORTUNITIES FOR PEOPLE WITH DIVERSE ABILITIES</h2>
        <hr className="line" />
        <p className="about-text">
          PWD JobLink is committed to providing a variety of opportunities for individuals who possess a wide range of skills, talents, and capabilities. 
          People have different strengths and abilities that may not fit within traditional or conventional norms, but this does not hinder their chances of finding good opportunities. 
          Diversity in abilities is a valuable asset and can contribute to the success and growth of individuals, employers, and society as a whole.
        </p>
      </div>
    </div>
  );
}

export default HomePage;
