import React from "react";
import "./PageStyles.css";

const Evaluation = () => (
  <div className="contentWrapper">
    <h1 className="headline">Evaluation</h1>
    <small>
      Don't allow your new home's pool or spa become a tidal wave of financial distress.
    </small>
    <div className="infoPanel">
      <div className="colLeft">
        <p>
          I offer a complete inspection service which includes a written
          evaluation of your equipment, your pool/spa surface, the condition of
          the filter, your pool plaster, your pool plumbing, main drains and
          fittings. This service is not completely covered by home inspectors
          and many times the new homeowner can be greatly surprised with unknown
          problems.
        </p>
        <p>Your complete written pool/spa evaluation is $150.00.</p>
        <p>
          Please call me @ 702-561-6444 or email me at Bluewaterworld@cox.net to
          setup your appointment.
        </p>
      </div>
      <div className="colRight">
        <p>
          Complete Inspection Service
          <ul>
            <li>Written evaluation of equipment</li>
            <li>Pool/Spa Surface Condition</li>
            <li>Filter Cartridges Condition</li>
            <li>Plaster Condition</li>
            <li>Pool/Spa Plumbing</li>
            <li>Main Drains and Fittings</li>
          </ul>
        </p>
      </div>
    </div>
  </div>
);

export default Evaluation;
