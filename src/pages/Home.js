import React from "react";
import { Card } from 'react-bootstrap';
import './style.css';

function Home() {
  return (
    <div>
      <main className="container">
        <section className="row">
          <section className="col-9">
            <Card text="white" className = "card">
              <Card.Header className = "h1"><h1>Hello, I'm James Wheeler</h1></Card.Header>
              <hr className="rule-lines"></hr>
              <Card.Title>
                <h2>Citizen coder with a <span>Johns Hopkins</span> education currently coding at <span>Stanley Black and Decker</span></h2>  
              </Card.Title>
              <hr className="rule-lines"></hr>
              <br></br>
              <Card.Text className=".contact-list">
                <a href="https://www.linkedin.com/in/james-w-54270740/" className="contact-list"
                  target="_blank" rel="noreferrer">LINKED IN / </a>
                <a href="https://github.com/jrtwheeler" className="contact-list" target="_blank" rel="noreferrer">GITHUB / </a>
                <a href="https://docs.google.com/document/d/e/2PACX-1vTRm2WKIL8udaUOcZXCVm3yrinhqizl94i95SiFVBGaXU1iZIsq3B1RHFCroQ2Mg8V0x-Z4O9ex0TwF/pub"
                  className="contact-list" target="_blank" rel="noreferrer"> RESUME </a>
              </Card.Text>
              <hr className="hr-contacts"></hr>
            </Card>
          </section>
        </section>
      </main>
    </div>
  );
}

export default Home;
