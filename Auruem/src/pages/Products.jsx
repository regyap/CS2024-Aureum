import { useState } from "react";
import { Helmet } from "react-helmet";
import "./Products.css";
import { Container, Row, Col } from "react-bootstrap";
import BannerWithText from "../components/Products_BannerWithText/Products_BannerWithText";
import ListSection from "../components/Products_ListSection/Products_ListSection";
import BannerWithRedirect from "../components/Products_BannerWithRedirect/Products_BannerWithRedirect";

function Products() {
  return (
    <Container className="p-0" fluid>
      <Helmet>
        <title>Aureum - Products</title>
        <meta name="description" content="Your page description" />
        {/* Add other meta tags or link tags as needed */}
      </Helmet>
      <BannerWithText/>
      <div class="spacer"></div>
      <ListSection/>
      <div class="spacer"></div>
      <BannerWithRedirect/>
    </Container>
  );
}

export default Products;
