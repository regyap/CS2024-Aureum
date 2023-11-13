import { useState } from "react";
import { Helmet } from "react-helmet";
import "./Locate.css";

function Locate() {
  return (
    <>
      <Helmet>
        <title>Your Page Title</title>
        <meta name="description" content="Your page description" />
        {/* Add other meta tags or link tags as needed */}
      </Helmet>
      <div>Locate Page</div>
    </>
  );
}

export default Locate;
