import { useState } from "react";
import { Helmet } from "react-helmet";
import "./TnC.css";

function TnC() {
  return (
    <>
      <Helmet>
        <title>Your Page Title</title>
        <meta name="description" content="Your page description" />
        {/* Add other meta tags or link tags as needed */}
      </Helmet>
      <div>TnC Page</div>
    </>
  );
}

export default TnC;
