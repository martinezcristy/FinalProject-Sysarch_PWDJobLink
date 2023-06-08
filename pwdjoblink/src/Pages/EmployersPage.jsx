import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import './EmployersPage.css';
import PopUpAlert from '../Components/PopUpAlert';

function EmployersPage() {
  const [companyName, setCompanyName] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [password, setPassword] = useState('');
  const [showModal, setShowModal] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
  
    if (!companyName || !name || !email || !contactNumber || !password) {
      setShowModal(true);
    } else {
      setShowModal(true);
      event.target.reset();
    }
  };
  

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className="employers-page">
      <Form onSubmit={handleSubmit}>
        <h3 className="registration-heading">EMPLOYERS REGISTRATION</h3>
        <Form.Group controlId="formCompanyName">
          <Form.Label>Company/Organization Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter company/organization name"
            value={companyName}
            onChange={(event) => setCompanyName(event.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="formName">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="formEmail">
          <Form.Label>Email Address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter your email address"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="formContactNumber">
          <Form.Label>Contact Number</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your contact number"
            value={contactNumber}
            onChange={(event) => setContactNumber(event.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="formPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter a password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
          <p></p>
        </Form.Group>
        <Button variant="primary" type="submit"style={{ backgroundColor: 'rgb(196, 173, 84)', borderColor: 'rgb(196, 173, 84)', color: 'white' }}>
        Submit
        </Button>
      </Form>
      <PopUpAlert showModal={showModal} closeModal={closeModal} isSuccess={false} />
    </div>
  );
}

export default EmployersPage;
