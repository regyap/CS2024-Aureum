import { useState } from "react";
import { Helmet } from "react-helmet";
import "./Contact.css";

function Contact() {
  return (
    <>
      <Helmet>
        <title>Your Page Title</title>
        <meta name="description" content="Your page description" />
        {/* Add other meta tags or link tags as needed */}
      </Helmet>
      <div>Contact Us</div>
    </>
  );
}

export default Contact;
