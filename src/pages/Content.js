import React from "react";
import { Link } from "react-router-dom";
import "../styles.css";
import "./PageStyles.css";

const Content = () => {
  return (
    <section className="content">
      <iframe
        width="700"
        height="393"
        src="https://www.youtube.com/embed/9RwqAsjWraA?rel=0&autoplay=1&mute=1"
        frameborder="0"
        allowfullscreen
        title="Bluewaterworld YouTube"
        style={{ maxWidth: "100%" }}
      />

      <div className="class-buttons">
        <Link to="/lasvegas" title="Click here to view our Las Vegas classes!">
          <button>
            <span>
              <strong>Las Vegas</strong>
              <br />
              CPO Classes
            </span>
          </button>
        </Link>
      </div>

      <div className="whats-included content-text">
        <h3>What is included in Bluewaterworld CPO 2 Day Classes</h3>
        <ul>
          <li>NSPF CPO Handbook 2017 Edition</li>
          <li>NSPF CPO Math book (increases pass rate by 20%)</li>
          <li>Your paid certification (CPO) for 5 years</li>
          <li>4 hours for exam time (most instructors only allow 3 hours)</li>
          <li>98% Graduation Rate!</li>
          <li>Day 1 Class 7am - 5pm. Lunch at noon (1/2 hour).</li>
          <li>
            Day 2 Class 7am - 2pm. Lunch at noon (1/2 hour). Exam 3pm - 7pm (or
            when finished)
          </li>
        </ul>
        <h3>What is included in Bluewaterworld One Day Primer Fusion CPO</h3>
        <ul>
          <li>NSPF CPO Handbook 2017 Edition</li>
          <li>NSPF CPO Math book (increases pass rate by 20%)</li>
          <li>Your paid certification (CPO) for 5 years</li>
          <li>4 hours for exam time (most instructors only allow 3 hours)</li>
          <li>100% Graduation Rate over 3 years!</li>
          <li>Day 1 Class - Do not attend day 1. Study online instead.</li>
          <li>
            Day 2 Class 7am - 2pm. Lunch at noon (1/2 hour). Exam 3pm - 7pm (or
            when finished)
          </li>
          <li>
            You must sign up for One Day Primer Fusion classes at least 2 weeks
            before the class date. This will ensure that we can deliver the
            materials to you in time for the class and exam. It also will give
            you time to study before the exam.
          </li>
        </ul>
        <hr />
        <p>
          <strong>Included in price</strong>: NSPF CPO handbook, CPO math
          workbook, final exam, and NSPF certificate
        </p>
        <p>Students need to provide their own beverages and snacks.</p>
        <p>
          <strong>Please Note</strong>: At the order review section below your
          personal informataion, go to information from buyer box and type;
          contact name (if different), phone #'s, and a delivery address if
          different from the card holder's address.
        </p>
        <p>
          To pay by check, or cash payment or if you have any questions, contact
          David Boyle at 702-561-6444. Email{" "}
          <a href="mailto:cpo@bluewaterworld.net">cpo@bluewaterworld.net</a>
        </p>
      </div>
    </section>
  );
};

export default Content;
