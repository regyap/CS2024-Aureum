import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./ImageOverlay.css";
import dummy from "../../assets/dummy.jpg";

const ImageOverlay = () => {
  return (
    <Container className="p-0 mb-3 mt-3" fluid>
      <Row className="justify-content-center align-items-center">
        <Col md={12} className="text-center">
          <div className="position-relative">
            <img className="img-fluid-stretch" src={dummy} alt="ItemPicture" />
            <div className="overlay-text">
              <p className="text-white">Visitor's Centre</p>
              <p className="text-white">
                THE AURUEM <br></br> EXPERIENCE
              </p>
              <p className="text-white">
                Our Fragrance Sommeliers await your arrival with open arms
              </p>
              <button className="btn btn-primary">LEARN MORE</button>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ImageOverlay;
