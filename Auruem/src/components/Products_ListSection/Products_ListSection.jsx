import React from "react";
import "./Products_ListSection.css";
import productImg1 from "../../assets/product1_transparent.png";
import { Container, Row, Col, Button } from "react-bootstrap";

const ListSection = () => {
  return (
    <div className="position-relative p-0">
      <Row className="justify-content-md-center gap-5">
      <Col xs lg="3" className="d-grid gap-3">
        <Row className="justify-content-center">
          <div id="productImage">
          <img src={productImg1} />
          </div>
        </Row>
        <Row className="justify-content-center productName">
          PRODUCT NAME
        </Row>
        <Row className="justify-content-center">
          A new addictive scent A new addictive scent A new addictive scent 
        </Row>
        <Row className="justify-content-center">
        <Button variant="dark" size="sm" style={{ width: "160px", height: "30px"}}>
          DISCOVER
        </Button>
        </Row>
      </Col>
      <Col xs lg="3" className="d-grid gap-3">
        <Row className="justify-content-center">
          <div id="productImage">
          <img src={productImg1} />
          </div>
        </Row>
        <Row className="justify-content-center productName">
          PRODUCT NAME
        </Row>
        <Row className="justify-content-center">
          A new addictive scent A new addictive scent A new addictive scent 
        </Row>
        <Row className="justify-content-center">
        <Button variant="dark" size="sm" style={{ width: "160px", height: "30px"}}>
          DISCOVER
        </Button>
        </Row>
      </Col>
      <Col xs lg="3" className="d-grid gap-3">
        <Row className="justify-content-center">
          <div id="productImage">
          <img src={productImg1} />
          </div>
        </Row>
        <Row className="justify-content-center productName">
          PRODUCT NAME
        </Row>
        <Row className="justify-content-center">
          A new addictive scent A new addictive scent A new addictive scent 
        </Row>
        <Row className="justify-content-center">
        <Button variant="dark" size="sm" style={{ width: "160px", height: "30px"}}>
          DISCOVER
        </Button>
        </Row>
      </Col>
      <Col xs lg="3" className="d-grid gap-3">
        <Row className="justify-content-center">
          <div id="productImage">
          <img src={productImg1} />
          </div>
        </Row>
        <Row className="justify-content-center productName">
          PRODUCT NAME
        </Row>
        <Row className="justify-content-center">
          A new addictive scent A new addictive scent A new addictive scent 
        </Row>
        <Row className="justify-content-center">
        <Button variant="dark" size="sm" style={{ width: "160px", height: "30px"}}>
          DISCOVER
        </Button>
        </Row>
      </Col>
      <Col xs lg="3" className="d-grid gap-3">
        <Row className="justify-content-center">
          <div id="productImage">
          <img src={productImg1} />
          </div>
        </Row>
        <Row className="justify-content-center productName">
          PRODUCT NAME
        </Row>
        <Row className="justify-content-center">
          A new addictive scent A new addictive scent A new addictive scent 
        </Row>
        <Row className="justify-content-center">
        <Button variant="dark" size="sm" style={{ width: "160px", height: "30px"}}>
          DISCOVER
        </Button>
        </Row>
      </Col>
      </Row>
    </div>
  );
};

export default ListSection;
