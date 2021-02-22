import React from "react";
import { Navbar, Nav } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


// Depending on the current path, this component sets the "active" className on the appropriate navigation link item
function NavigationBar() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Brand href="/home" rel="noreferrer">Jim Wheeler</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/about" rel="noreferrer">About</Nav.Link>
          <Nav.Link href="/portfolio" rel="noreferrer">Portfolio</Nav.Link>
          <Nav.Link href="/contact" rel="noreferrer">Contact</Nav.Link>
        </Nav>
        <Nav>
          <Nav.Link href="https://www.linkedin.com/in/james-w-54270740/" target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={['fab', 'linkedin']} />
          </Nav.Link>
          <Nav.Link href="https://github.com/jrtwheeler" target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={['fab', 'github']} />
          </Nav.Link>
          <Nav.Link href="https://docs.google.com/document/d/e/2PACX-1vTRm2WKIL8udaUOcZXCVm3yrinhqizl94i95SiFVBGaXU1iZIsq3B1RHFCroQ2Mg8V0x-Z4O9ex0TwF/pub" target="_blank">
            Resume
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavigationBar;
