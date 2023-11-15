import { useState } from "react";
import { Helmet } from "react-helmet";
import "./Contact.css";
import "../index.css";
function Contact() {
  return (
    <>
      <Helmet>
        <title>Your Page Title</title>
        <meta name="description" content="Your page description" />
        {/* Add other meta tags or link tags as needed */}
      </Helmet>
      <section className="container">
        <h1>Contact Us</h1>
        <div className="flexbox">
          <div id="contactUs">
            <h2>Customer Service</h2>
            <h3>SG Office Address:</h3>
            <p>
              Aureum 50 Nanyang Ave, <br />
              Floor B4, #2.2-B4.04 <br />
              Singapore 639798
            </p>
            <h3>Chat with Us</h3>
            <p>
              Mon-Fri 8am to 10pm SGT <br />
              Sat-Sun 10am to 8pm SGT
            </p>
            <p>
              <a href="tel:+">CHAT NOW</a>
            </p>
          </div>
          <div id="contactForm">
            <h2>Contact Form</h2>
            <form action="#">
              <label htmlFor="name">
                Full Name <span className="redStar">*</span>
              </label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Your Full Name"
              />

              <label htmlFor="email">
                Email <span className="redStar">*</span>
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Your Email Address"
              />

              <label htmlFor="contact">
                Contact Number <span className="redStar">*</span>
              </label>
              <input
                type="number"
                name="contact"
                id="contact"
                placeholder="Your Contact Number"
              />

              <label htmlFor="message">
                Message <span className="redStar">*</span>
              </label>
              <input
                type="text"
                name="message"
                id="message"
                placeholder="Write your message here"
              />

              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
