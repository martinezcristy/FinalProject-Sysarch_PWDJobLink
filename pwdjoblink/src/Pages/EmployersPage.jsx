import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import './EmployersPage.css';

function EmployersPage() {
  const [emailAddress, setEmailAddress] = useState('');
  const [firstName, setFirstName] = useState('');
  const [password, setPassword] = useState('');
  const [submitClicked, setSubmitClicked] = useState(false);

  const f = [
    { label: 'Company/Organization Name', type: 'text', value: emailAddress, onChange: setEmailAddress },
    { label: 'Name', type: 'text', value: firstName, onChange: setFirstName },
    { label: 'Email Address', type: 'email', value: password, onChange: setPassword },
    { label: 'Contact Number', type: 'text', value: password, onChange: setPassword },
    { label: 'Password', type: 'password', value: password, onChange: setPassword },
  ];

  const handleChange = (e, index) => {
    const { value } = e.target;
    f[index].onChange(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitClicked(true);
  };

  return (
    <div className="employers-page">
    <Form onSubmit={handleSubmit}>
      <h3 className="registration-heading">EMPLOYERS REGISTRATION</h3>
        {f.map((field, index) => (
          <Form.Group className="mb-3" controlId={`form${field.label}`} key={field.label}>
            <Form.Label>{field.label}</Form.Label>
            <Form.Control
              type={field.type}
              placeholder={`Enter ${field.label}`}
              value={field.value}
              onChange={(e) => handleChange(e, index)}
              className="input-field"
            />
          </Form.Group>
        ))}
        <Button
          variant="primary"
          type="submit"
          style={{ backgroundColor: 'rgb(196, 173, 84)', borderColor: 'rgb(196, 173, 84)', color: 'white' }}
        >
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default EmployersPage;
