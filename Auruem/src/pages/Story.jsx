import { useState } from "react";
import { Helmet } from "react-helmet";
import "./Story.css";

function Story() {
  return (
    <>
      <Helmet>
        <title>Your Page Title</title>
        <meta name="description" content="Your page description" />
        {/* Add other meta tags or link tags as needed */}
      </Helmet>
      <div>Our Story</div>
    </>
  );
}

export default Story;
