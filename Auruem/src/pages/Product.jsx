import { useState } from "react";
import { Helmet } from "react-helmet";
import "./Product.css";

function Product() {
  return (
    <>
      <Helmet>
        <title>Your Page Title</title>
        <meta name="description" content="Your page description" />
        {/* Add other meta tags or link tags as needed */}
      </Helmet>
      <div>Detailed Product Page</div>
    </>
  );
}

export default Product;
