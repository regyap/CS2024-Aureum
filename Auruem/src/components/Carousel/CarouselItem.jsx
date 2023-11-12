import { useState } from "react";
import "./CarouselItem.css";
import dummy from "../../assets/dummy.jpg";
import { Container, Row, Col } from "react-bootstrap";

function CarouselItem(props) {
  return (
    <Container id="container">
      <Row>
        <Col className="mb-3 mt-3 px-3">
          <img className="product" src={dummy} alt="ItemPicture" />
        </Col>
      </Row>
      <Row>
        <span className="collection_name">{props.data.collection}</span>
      </Row>
      <Row>
        <span className="product_name mb-4">{props.data.name}</span>
      </Row>
      <Row className="mx-3">
        <Col className="px-3">
          <p className="product_description">{props.data.description}</p>
        </Col>
      </Row>
      <Row>
        <span className="product_volume mb-2">{props.data.volume}</span>
      </Row>
      <Row className="justify-content-center">
        <Col md={8} className="mb-3">
          <button type="button" className="button">
            View More
          </button>
        </Col>
      </Row>
    </Container>
  );
}

export default CarouselItem;
