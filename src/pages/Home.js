import React from "react";
import Hero from "../components/Hero";
import API from "../utils/github.json";
import "./css/style.css"

function Home() {
  return (
    <div className = "background">
      <Hero>
        <h1>Hello, I'm {API.basics.name}.</h1>
        <h2>
          Citizen coder with a <span>Johns Hopkins</span> education currently coding at <span>Stanley Black and Decker</span>.
        </h2>
        {/* <br/> */}
        <hr class="rule-lines" />
        <p>
          <a href="https://www.linkedin.com/in/james-w-54270740/" className="contact-list" rel="noreferrer" 
            target="_blank">LINKED IN </a>
          /
          <a href={"https://github.com/jrtwheeler"} className="contact-list" rel="noreferrer" target="_blank"> GITHUB</a>
          / 
          <a href="https://docs.google.com/document/d/e/2PACX-1vTRm2WKIL8udaUOcZXCVm3yrinhqizl94i95SiFVBGaXU1iZIsq3B1RHFCroQ2Mg8V0x-Z4O9ex0TwF/pub"
            className="contact-list" rel="noreferrer" target="_blank"> RESUME </a>
        </p>
        <hr class="hr-contacts" />
      </Hero>
    </div>
  );
}

export default Home;
