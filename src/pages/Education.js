import React from "react";
import { Link } from "react-router-dom";
import "./PageStyles.css";

const Education = () => (
  <div className="contentWrapper">
    <h1 className="headline">Education</h1>
    <small>A message to new or existing pool and spa owners.</small>
    <div className="infoPanel">
      <div className="colLeft">
        <div class="class-buttons" style={{ paddingTop: "0px" }}>
          <Link to="/lasvegas" title="Click to Register for Las Vegas classes!">
            <button>
              <span>
                <strong>Las Vegas</strong>
                <br />
                CPO Classes
              </span>
            </button>
          </Link>
        </div>
        <p>
          Would you like to know more about your pool or spa?
          <br />
          Do you wonder if your service is doing the job right?
          <br />
          If you knew what to do, would you take care of your own pool or spa?
          <br />
          Is chemically treating my pool so difficult to learn?
        </p>
        <p>
          Well, I know I can help answer these and many other questions. In
          fact, I believe I can teach you the best skills to service your
          pool/spa. I'm David Boyle and I have been educating people on how to
          take care of their pools for over a decade. For three years, I have
          been teaching a class on Residential Pool and Spa Maintenance at the
          Community College of Southern Nevada. Also, I'm an instructor of the
          National Pool and Spa Foundation conducting Certified Pool/Spa
          Operator classes to train commercial pool operators. However, I have
          found that people can be more successful, if taught how to operate
          their own personal facility.
        </p>
        <p>
          This instruction course will include how to balance your water's
          chemistry, labeling your equipment, and hands on basket and filter
          cleaning, what to do about pool problems like algae blooms or scale
          build-up and how to avoid them. You will learn proper weekly pool
          maintenance. You will begin a path to understanding your pool or spa
          and its water. I believe KNOWLEDGE IS POWER, and I can help you to
          acquire this knowledge.
        </p>
        <p>
          Your personalized instruction will take between 3 to 4 hours, and
          includes a complete DPD test kit or 5 in 1 test strips for quick
          testing and an instruction booklet edited by myself and tailored to
          Las Vegas conditions. Also, your training will continue, you can get
          further information by simply calling my by phone or contacting me via
          e-mail.
        </p>
        <p>
          Your personalized class is only $130.00 including materials.
          <br />
          (This class is open to all members of household's family only)
        </p>
        <p>
          Please call me at 702-561-6444 or e-mail at Bluewaterworld@cox.net to
          set-up your appointment.
        </p>
      </div>
      <div className="colRight">
        <p>
          Personalized Instruction Course
          <ul>
            <li>Balance Water Chemistry</li>
            <li>Labeline Equipment</li>
            <li>Basket & Filter Cleaning</li>
            <li>Troubleshooting Pool Problems</li>
            <li>Weekly Maintenance</li>
            <li>Understand Your Pool/Spa</li>
            <li>3-4 Hours Professional Training</li>
          </ul>
          (A test kit or testing strips and instruction booklet also included)
        </p>
      </div>
    </div>
  </div>
);

export default Education;
