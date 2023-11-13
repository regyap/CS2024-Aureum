import { useState } from "react";
import { Helmet } from "react-helmet";

function Mission() {
  return (
    <>
      <Helmet>
        <title>Your Page Title</title>
        <meta name="description" content="Your page description" />
        {/* Add other meta tags or link tags as needed */}
      </Helmet>
      <div>Our Philosophy Mission and Vision</div>
    </>
  );
}

export default Mission;
