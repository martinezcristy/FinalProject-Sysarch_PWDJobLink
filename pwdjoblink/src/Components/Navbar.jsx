import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from './logo.png';
import './Navbar.css';

function CollapsibleExample() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Brand as={Link} to="/home" className="text-center">
        <span className="logo-space">
          <img src={logo} alt="logo" width={40} />
        </span>
        PWD JobLink
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link as={Link} to="/home">Home</Nav.Link>
          <Nav.Link as={Link} to="/about">About</Nav.Link>
          <Nav.Link as={Link} to="/jobsearch">Job Search</Nav.Link>
        </Nav>
        <Nav className="ms-auto nav-space">
          <Nav.Link as={Link} to="/employers">Employers</Nav.Link>
          <Nav.Link as={Link} to="/subscribe">Subscribe</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default CollapsibleExample;
