import { useState } from "react";
import { Helmet } from "react-helmet";
import "./Product.css";
import { Container, Row, Col } from "react-bootstrap";
import Customisation from "../components/Product_Customisation/Product_Customisation";
import DescTabs from "../components/Product_DescTabs/Product_DescTabs";

function Product() {
  return (
    <Container className="p-0" fluid>
      <Helmet>
        <title>Aureum - Products</title>
        <meta name="description" content="Your page description" />
        {/* Add other meta tags or link tags as needed */}
      </Helmet>
      <Customisation/>
      <DescTabs/>
    </Container>
  );
}

export default Product;
