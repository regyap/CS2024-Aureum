import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Helmet } from "react-helmet";
import seasonalBanner from "../assets/seasonal_banner.png";
import dummy from "../assets/dummy.jpg";
import "./Seasonal.css";

function Seasonal() {
  return (
    <Container className="p-0 m-0" fluid>
      <Helmet>
        <title>Your Page Title</title>
        <meta name="description" content="Your page description" />
        {/* Add other meta tags or link tags as needed */}
      </Helmet>
      <Row>
        <img src={seasonalBanner} alt="ItemPicture" fluid />
      </Row>
      <Row>
        <span>
          <b>Written By Penhaligon's Times</b>
        </span>
        <p>
          Ah, Halfeti - the jewel in Turkey's crown. With its wonderful mix of
          Byzantine, Armenian, Egyptian and Ottonman heritage. And a town
          well-versed in trading with the world, too.
        </p>
      </Row>
      <Row className="justify-content-center">
        <Col md={4} className="img-container p-1">
          <img
            className="img-cover"
            src={seasonalBanner}
            alt="ItemPicture"
            fluid
          />
        </Col>
        <Col md={4} className="img-container p-1">
          <img
            className="img-cover"
            src={seasonalBanner}
            alt="ItemPicture"
            fluid
          />
        </Col>
      </Row>
      <Row>
        <p>
          Ah, Halfeti - the jewel in Turkey's crown. With its wonderful mix of
          Byzantine, Armenian, Egyptian and Ottonman heritage. And a town
          well-versed in trading with the world, too.
        </p>
      </Row>
      <Row>
        <img src={seasonalBanner} alt="ItemPicture" fluid />
      </Row>
      <Row>
        <span>
          <b>The Customising Workshop</b>
        </span>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure,
          repudiandae tempore! Iste dignissimos quos cumque consequuntur est,
          molestias dolorum expedita, minus dicta, doloremque accusamus nam
          earum repellat impedit iure veniam?
        </p>
        <div>
          <button className="button">Discover</button>
        </div>
      </Row>
    </Container>
  );
}

export default Seasonal;
