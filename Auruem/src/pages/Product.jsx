import { useState } from "react";
import { Helmet } from "react-helmet";
import "./Product.css";
import { Container, Row, Col } from "react-bootstrap";

function Product() {
  return (
    <Container className="p-0" fluid>
      <Helmet>
        <title>Your Page Title</title>
        <meta name="description" content="Your page description" />
        {/* Add other meta tags or link tags as needed */}
      </Helmet>
      <div>Detailed Product Page</div>
    </Container>
  );
}

export default Product;
