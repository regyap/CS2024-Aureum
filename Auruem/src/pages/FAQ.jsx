import { useState } from "react";
import { Helmet } from "react-helmet";
import "./FAQ.css";

function FAQ() {
  return (
    <>
      <Helmet>
        <title>Your Page Title</title>
        <meta name="description" content="Your page description" />
        {/* Add other meta tags or link tags as needed */}
      </Helmet>
      <div>FAQ Page</div>
    </>
  );
}

export default FAQ;
