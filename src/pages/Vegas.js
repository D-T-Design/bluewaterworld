import React from "react";
import "./Vegas.css";

const Vegas = () => (
  <div className="contentWrapper">
    <div className="class-section">
      <h1>2019 Las Vegas CPO Classes</h1>
      <p className="classLocation center">
        Las Vegas classes are held at:
        <br />
        <a
          href="https://americanpoollv.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          American Pool Supply
        </a>
        <br />
        3721 West Meade Avenue
        <br />
        Las Vegas, NV 89102
      </p>
      <p className="alert-text" style={{ textAlign: "center" }}>
        <strong>
          <span>Cash Discounts Available</span>
          <br />
          Call 702-561-6444
        </strong>
      </p>

      <h2 className="class-month">January 2019</h2>
      <ul className="class-group">
        <li className="class">
          <h3>January Two Day CPO Class - Las Vegas, NV </h3>
          <strong>
            Tuesday, January 8th, and Wednesday, January 9th, 2019
            <br />
            Cost: $230 Complete with Final Exam
            <br />
          </strong>
          <form
            target="paypal"
            action="https://www.paypal.com/cgi-bin/webscr"
            method="post"
          >
            <input type="hidden" name="cmd" value="_s-xclick" />
            <input
              type="hidden"
              name="hosted_button_id"
              value="66KPXGM9UZKNJ"
            />
            <input
              type="image"
              src="https://www.paypalobjects.com/en_US/i/btn/btn_cart_LG.gif"
              border="0"
              name="submit"
              alt="PayPal - The safer, easier way to pay online!"
            />
            <img
              alt=""
              border="0"
              src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif"
              width="1"
              height="1"
            />
          </form>
        </li>
        <li className="class">
          <h3>January One Day Primer Fusion CPO Class - Las Vegas, NV</h3>
          <strong>
            Date: January 9th, 2019
            <br />
            Time: Class begins 7am, exam begins 3pm
            <br />
            Cost: $280 Complete with Final Exam
          </strong>
          <br />
          <form
            target="paypal"
            action="https://www.paypal.com/cgi-bin/webscr"
            method="post"
          >
            <input type="hidden" name="cmd" value="_s-xclick" />
            <input
              type="hidden"
              name="hosted_button_id"
              value="Q3ZA4GDSP22JA"
            />
            <input
              type="image"
              src="https://www.paypalobjects.com/en_US/i/btn/btn_cart_LG.gif"
              border="0"
              name="submit"
              alt="PayPal - The safer, easier way to pay online!"
            />
            <img
              alt=""
              border="0"
              src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif"
              width="1"
              height="1"
            />
          </form>
        </li>
      </ul>

      <h2 className="class-month">February 2019</h2>
      <ul className="class-group">
        <li className="class">
          <h3>February Two Day CPO Class - Las Vegas, NV </h3>
          <strong>
            Tuesday, February 5th, and Wednesday, February 6th, 2019
            <br />
            Cost: $230 Complete with Final Exam
            <br />
          </strong>
          <form
            target="paypal"
            action="https://www.paypal.com/cgi-bin/webscr"
            method="post"
          >
            <input type="hidden" name="cmd" value="_s-xclick" />
            <input
              type="hidden"
              name="hosted_button_id"
              value="T4DLNGRDXX75L"
            />
            <input
              type="image"
              src="https://www.paypalobjects.com/en_US/i/btn/btn_cart_LG.gif"
              border="0"
              name="submit"
              alt="PayPal - The safer, easier way to pay online!"
            />
            <img
              alt=""
              border="0"
              src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif"
              width="1"
              height="1"
            />
          </form>
        </li>
        <li className="class">
          <h3>February One Day Primer Fusion CPO Class - Las Vegas, NV</h3>
          <strong>
            Date: February 6th, 2019
            <br />
            Time: Class begins 7am, exam begins 3pm
            <br />
            Cost: $280 Complete with Final Exam
            <br />
          </strong>
          <form
            target="paypal"
            action="https://www.paypal.com/cgi-bin/webscr"
            method="post"
          >
            <input type="hidden" name="cmd" value="_s-xclick" />
            <input
              type="hidden"
              name="hosted_button_id"
              value="FUL3THS68Q2GC"
            />
            <input
              type="image"
              src="https://www.paypalobjects.com/en_US/i/btn/btn_cart_LG.gif"
              border="0"
              name="submit"
              alt="PayPal - The safer, easier way to pay online!"
            />
            <img
              alt=""
              border="0"
              src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif"
              width="1"
              height="1"
            />
          </form>
        </li>
      </ul>
    </div>
    <div>
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
          materials to you in time for the class and exam. It also will give you
          time to study before the exam.
        </li>
      </ul>
    </div>
    <hr />
    <p>
      <strong>Included in price</strong>: NSPF CPO handbook, CPO math workbook,
      final exam, and NSPF certificate
    </p>
    <p>Students need to provide their own beverages and snacks.</p>
    <p>
      <strong>Please Note</strong>: At the order review section below your
      personal informataion, go to information from buyer box and type; contact
      name (if different), phone #'s, and a delivery address if different from
      the card holder's address.
    </p>
    <p>
      To pay by check, or cash payment or if you have any questions, contact
      David Boyle at 702-561-6444. Email{" "}
      <a href="mailto:cpo@bluewaterworld.net">cpo@bluewaterworld.net</a>
    </p>
  </div>
);

export default Vegas;
