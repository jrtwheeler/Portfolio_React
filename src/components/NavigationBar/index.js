import React from "react";
import { Navbar, Nav } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFile } from '@fortawesome/fontawesome-free-solid';
import ReactTooltip from "react-tooltip";
import portrait from "./portrait.jpg"
import "./style.css";

// Depending on the current path, this component sets the "active" className on the appropriate navigation link item
function NavigationBar() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Brand href="/home" rel="noreferrer"><h5><img className="avatar" src={portrait} alt="Jim Wheeler"/></h5></Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/about" rel="noreferrer"><h5>About</h5></Nav.Link>
          <Nav.Link href="/portfolio" rel="noreferrer"><h5>Portfolio</h5></Nav.Link>
          <Nav.Link href="/contact" rel="noreferrer"><h5>Contact</h5></Nav.Link>
        </Nav>
        <Nav>
          <Nav.Link href="https://www.linkedin.com/in/james-w-54270740/" target="_blank" rel="noreferrer" data-tip
            data-for="linkedIn">
            <ReactTooltip
              id="linkedIn"
              place="bottom"
              effect="solid"
              backgroundColor="#4A6479"
            >
              See more on LinkedIn
              </ReactTooltip>
            <h2><FontAwesomeIcon icon={['fab', 'linkedin']} /></h2>
          </Nav.Link>
          <Nav.Link href="https://github.com/jrtwheeler" target="_blank" rel="noreferrer" data-tip
            data-for="GitHub"><h2>
              <FontAwesomeIcon icon={['fab', 'github']} /></h2>
          </Nav.Link>
          <ReactTooltip
            id="GitHub"
            place="bottom"
            effect="solid"
            backgroundColor="#4A6479"
          >
            See more on GitHub
            </ReactTooltip>
          <Nav.Link href="https://docs.google.com/document/d/e/2PACX-1vTRm2WKIL8udaUOcZXCVm3yrinhqizl94i95SiFVBGaXU1iZIsq3B1RHFCroQ2Mg8V0x-Z4O9ex0TwF/pub" target="_blank" data-tip
            data-for="Resume">
            <h2>
              <FontAwesomeIcon icon={faFile} /></h2>
          </Nav.Link>
          <ReactTooltip
            id="Resume"
            place="bottom"
            effect="solid"
            backgroundColor="#4A6479"
          >
            See my resume
            </ReactTooltip>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavigationBar;
