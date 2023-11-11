import { useState } from "react";
import Footer from "../components/Footer/Footer";
import Mailing from "../components/MailingList/Mailing";
import ImageOverlay from "../components/ImageOverlay/ImageOverlay";
import { Container, Row, Col } from "react-bootstrap";
import "./Home.css";
import dummy from "../assets/dummy.jpg";

function Home() {
  return (
    <Container className="p-0" fluid>
      <Row className="justify-content-center align-items-center">
        <Col md={12} className="text-center">
          <span>Discover</span>
        </Col>
      </Row>
      <Row className="justify-content-center align-items-center">
        <Col md={12} className="text-center">
          <span>The Aureum Collection</span>
        </Col>
      </Row>
      <Row className="justify-content-center align-items-center">
        <Col md={2}>
          <img className="img-fluid-stretch" src={dummy} alt="ItemPicture" />
        </Col>
        <Col md={2}>
          <img className="img-fluid-stretch" src={dummy} alt="ItemPicture" />
        </Col>
        <Col md={2}>
          <img className="img-fluid-stretch" src={dummy} alt="ItemPicture" />
        </Col>
      </Row>
      <Row>
        <ImageOverlay />
      </Row>
      <Row className="justify-content-center align-items-center">
        <hr style={{ width: "90%" }}></hr>

        <Mailing />
      </Row>
      <Row>
        <Footer />
      </Row>
    </Container>
  );
}

export default Home;
