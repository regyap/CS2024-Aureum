import { useState } from "react";
import { Helmet } from "react-helmet";
import Footer from "../components/Footer/Footer";
import Mailing from "../components/MailingList/Mailing";
import ImageOverlay from "../components/ImageOverlay/ImageOverlay";
import Banner from "../components/Banner/Banner";
import { Container, Row, Col } from "react-bootstrap";
import "./Home.css";
import dummy from "../assets/dummy.jpg";
import Carousel from "../components/Carousel/Carousel";

function Home() {
  return (
    <Container className="p-0" fluid>
      <Helmet>
        <title>Your Page Title</title>
        <meta name="description" content="Your page description" />
        {/* Add other meta tags or link tags as needed */}
      </Helmet>
      <Row className="p-0">
        <Banner />
      </Row>
      <Row className="justify-content-center">
        <Col md={10}>
          <img className="big" src={dummy} alt="ItemPicture" />
        </Col>
      </Row>
      <Row className="justify-content-center p-0">
        <Col md={10}>
          <Carousel />
        </Col>
      </Row>

      <Row className="justify-content-center">
        <Col md={10}>
          <img className="big" src={dummy} alt="ItemPicture" />
        </Col>
      </Row>
      <Row className="justify-content-center">
        <span>Discover</span>
        <span>The Aureum Collection</span>
        <Col md={10} className="spacebetween">
          <img className="product" src={dummy} alt="ItemPicture" />
          <img className="product" src={dummy} alt="ItemPicture" />
          <img className="product" src={dummy} alt="ItemPicture" />
        </Col>
      </Row>
      <Row className="p-0">
        <ImageOverlay />
      </Row>
      <Row className="justify-content-center">
        <hr style={{ width: "90%" }}></hr>

        <Mailing />
      </Row>
    </Container>
  );
}

export default Home;
