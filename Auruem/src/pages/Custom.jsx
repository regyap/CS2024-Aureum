import { useState } from "react";
import { Helmet } from "react-helmet";
import "./Custom.css";

function Custom() {
  return (
    <>
      <Helmet>
        <title>Your Page Title</title>
        <meta name="description" content="Your page description" />
        {/* Add other meta tags or link tags as needed */}
      </Helmet>
      <div>Custom Page</div>
    </>
  );
}

export default Custom;
