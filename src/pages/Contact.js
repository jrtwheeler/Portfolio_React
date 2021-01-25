import React from "react";
import Hero from "../components/Hero";

function Contact(props) {
  return (
    <div>
     <Hero className="mb-0">
        <h1>Contact Me</h1>
        <h2>
          To contact me, please reach out to me through LinkedIn, follow me on GitHub, or email me at wheelewell@yahoo.com.
        </h2>
        {/* <br/> */}
        <hr class="rule-lines" />
        <p>
          <a href="https://www.linkedin.com/in/james-w-54270740/" className="contact-list"
            target="_blank">LINKED IN</a>
          <a> / </a>
          <a href="https://github.com/jrtwheeler" className="contact-list" target="_blank"> GITHUB</a>
        </p>
        <hr class="hr-contacts" />
      </Hero>
    </div>
  );
}

export default Contact;
