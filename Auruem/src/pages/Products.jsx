import { useState } from "react";
import { Helmet } from "react-helmet";
import "./Products.css";

function Products() {
  return (
    <>
      <Helmet>
        <title>Your Page Title</title>
        <meta name="description" content="Your page description" />
        {/* Add other meta tags or link tags as needed */}
      </Helmet>
      <div>Products Page</div>
    </>
  );
}

export default Products;
