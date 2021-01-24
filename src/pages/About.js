import React from "react";

function About() {
  return (
    <div>
      <section className="row">
        <article className="card portrait-info col-sm-12 my-5">
          <h1 className="card-header text-white font-weight-bold">Hello, I'm James Wheeler</h1>
                <hr className="rule-lines"></hr>
                <h2 class="subhead col-sm-8">
                        Citizen coder with a <span>Johns Hopkins</span> education currently coding at <span>Stanley
                            Black and Decker</span>
                </h2>

                <p>
                        <a href="https://www.linkedin.com/in/james-w-54270740/" class="contact-list"
                            target="_blank">LINKED IN</a>
                        <a> / </a>
                        <a href="https://github.com/jrtwheeler" class="contact-list" target="_blank"> GITHUB</a>
                        <a> / </a>
                        <a href="https://docs.google.com/document/d/e/2PACX-1vTRm2WKIL8udaUOcZXCVm3yrinhqizl94i95SiFVBGaXU1iZIsq3B1RHFCroQ2Mg8V0x-Z4O9ex0TwF/pub"
                            class="contact-list" target="_blank"> RESUME </a>
                    </p>
          </article>
      </section>
    </div>
  );
}

export default About;
