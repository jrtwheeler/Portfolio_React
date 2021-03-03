import React from "react";
import Hero from "../components/Hero"
import portrait from "./assets/mn_portrait.jpg"
import "./css/style.css"

function About() {
  return (
    <div>
      <Hero className="mb-0">
        <h1>About Me</h1>
        <img id="portrait" className="float-left mr-2 mb-2" src={portrait} alt=""/>
        <p>
          Front-end web developer leveraging design and writing background to build a more intuitive user experience
          on the web. Certified in full stack development from the University of Johns Hopkins, with experience in
          JavaScript, CSS, HTML, JQUERY and responsive web design. Citizen coder who designed automations in
          JavaScript and Python for Adobe stack for Stanley Black and Decker that saved the company forty weeks of
          manual data entry a year.
          </p>
        <p>
          My automated layout system merited an Eagle Award for SBD employee of the year. To
          build the system, I taught myself JavaScript and Python on weekends. I applied agile design to develop the
          system. I improve efficiency. I have fifteen years of supervisor experience. I am a committed lifelong
          learner who is willing to educate myself through any available means. Experienced in meeting and beating
          deadlines.
          </p>
        <hr />
        <h5 class="contact-about">CONTACT ME</h5>
        <span class="badge badge-light">(410) 302 1006</span>
        <span class="badge badge-light">wheelewell@yahoo</span>
        <hr class="rule-lines" />
        <p>
          <a href="https://www.linkedin.com/in/james-w-54270740/" className="contact-list" rel="noreferrer" 
            target="_blank">LINKED IN</a>
           / 
          <a href="https://github.com/jrtwheeler" className="contact-list" rel="noreferrer" target="_blank"> GITHUB</a>
           / 
          <a href="https://docs.google.com/document/d/e/2PACX-1vTRm2WKIL8udaUOcZXCVm3yrinhqizl94i95SiFVBGaXU1iZIsq3B1RHFCroQ2Mg8V0x-Z4O9ex0TwF/pub"
            className="contact-list" rel="noreferrer" target="_blank"> RESUME </a>
        </p>
        <hr class="hr-contacts" />
      </Hero>
    </div>
  );
}

export default About;
