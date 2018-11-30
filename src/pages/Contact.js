import React from "react";
import "./PageStyles.css";
import "../styles.css";
import "./Contact.css";

const Contact = () => (
  <div className="contentWrapper">
    <h1 className="headline">Contact Us</h1>
    <small>Contact us today for more information.</small>
    <div className="infoPanel" style={{ textAlign: "center" }}>
      <div className="contact">
        <h2>BLUEWATERWORLD</h2>
        <br />
        David Boyle, CPO Instructor
        <hr />
        Phone:{" "}
        <a href="tel:702-561-6444" title="Click or tap here to give me a call!">
          <strong>702-561-6444</strong>
        </a>
        <hr />
        <a
          href="https://goo.gl/maps/Hab3LHoH8zC2"
          target="_blank"
          title="Want to find my business? Check this Google Maps link."
          rel="noopener noreferrer"
        >
          6629 Cinnabar Coast Lane,
          <br />
          Las Vegas, NV 89084
        </a>
        <hr />
        <p>
          Please call me at{" "}
          <a
            href="tel:702-561-6444"
            title="Click or tap here to give me a call!"
          >
            <strong>702-561-6444</strong>
          </a>{" "}
          or email me at{" "}
          <a
            href="mailto:cpo@bluewaterworld.net"
            title="Click to send me an email and I'll get back to you!"
          >
            <strong>cpo@bluewaterworld.net</strong>
          </a>{" "}
          to setup your appointment.
        </p>
      </div>
    </div>
  </div>
);

export default Contact;
