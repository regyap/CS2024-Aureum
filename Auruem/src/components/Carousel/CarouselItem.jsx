import { useState } from "react";
import "./CarouselItem.css";
import dummy from "../../assets/dummy.jpg";
import { Container, Row, Col } from "react-bootstrap";

function CarouselItem(props) {
  return (
    <Container id="container">
      <Row>
        <Col className="mb-3 mt-3 px-3">
          <img className="product_image" src={dummy} alt="ItemPicture" />
        </Col>
      </Row>
      <Row>
        <span id="collection_name">{props.data.collection}</span>
      </Row>
      <Row>
        <span id="product_name" className="mb-4">
          {props.data.name}
        </span>
      </Row>
      <Row className="mx-3">
        <Col className="mb-3 px-3">
          <p id="product_description">{props.data.description}</p>
        </Col>
      </Row>
      <Row>
        <span id="product_volume" className="mb-2">
          {props.data.volume}
        </span>
      </Row>
      <Row>
        <Col md={{ span: 6, offset: 3 }} className="mb-3">
          <button type="button" id="view_button">
            View More
          </button>
        </Col>
      </Row>
    </Container>
  );
}

export default CarouselItem;
