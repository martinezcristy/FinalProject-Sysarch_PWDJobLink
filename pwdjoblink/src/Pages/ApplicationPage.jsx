import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import './EmployersPage.css';
import PopUpAlert from '../Components/PopUpAlert';

function ApplicationPage() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [resume, setResume] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleFullNameChange = (event) => {
    setFullName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePhoneChange = (event) => {
    setPhone(event.target.value);
  };

  const handleResumeChange = (event) => {
    setResume(event.target.files[0]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!fullName || !email || !phone || !resume) {
      setShowModal(true);
      setIsSuccess(false);
    } else {
      // Simulating form submission
      // You can handle form submission to your backend here
      // Reset form fields
      setFullName('');
      setEmail('');
      setPhone('');
      setResume(null);
      setShowModal(true);
      setIsSuccess(true);
    }
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className="backgroundImage">
    <div className="job-application-page">
      <Form onSubmit={handleSubmit}>
        <h3>Job Application</h3>
        <Form.Group controlId="formFullName">
          <Form.Label>Full Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your full name"
            value={fullName}
            onChange={handleFullNameChange}
          />
        </Form.Group>
        <Form.Group controlId="formEmail">
          <Form.Label>Email Address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter your email address"
            value={email}
            onChange={handleEmailChange}
          />
        </Form.Group>
        <Form.Group controlId="formPhone">
          <Form.Label>Phone Number</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your phone number"
            value={phone}
            onChange={handlePhoneChange}
          />
        </Form.Group>
        <Form.Group controlId="formResume">
          <Form.Label>Resume</Form.Label>
          <Form.Control type="file" onChange={handleResumeChange} />
        </Form.Group>
        <Button variant="primary" type="submit"style={{ backgroundColor: 'rgb(196, 173, 84)', borderColor: 'rgb(196, 173, 84)', color: 'white' }}>
        Submit
        </Button>
      </Form>
      <PopUpAlert showModal={showModal} closeModal={closeModal} isSuccess={isSuccess} />
    </div>
    </div>
  );
}

export default ApplicationPage;
