import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Mailing.css";

function Mailing() {
  return (
    <Container>
      <Row className="justify-content-center">
        <Col xs={12} md={8} className="text-center">
          <h2>THE OLFACTIVE SOCIETY</h2>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col xs={12} md={8} className="text-center">
          <p className="text">
            Join the esteemed Olfactive Society simply by signing up to the
            newsletter here – and along with all the latest news and offers
            straight to your inbox, there’s even more marvellous perks besides.
            Please note that all emails will be sent in English.
          </p>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col xs={12} md={8} className="text-center">
          <p className="text">
            Please note that all emails will be sent in English.
          </p>
        </Col>
      </Row>
      <Row className="justify-content-center ">
        <Col xs={12} md={8} className="text-center">
          <input type="text" name="" id="" value="Enter your email address" />
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col xs={12} md={8} className="text-center">
          <p className="text">
            One's privacy is paramount. Aureum's will only divulge your data to
            third parties in accordance with our Privacy Policy. Scout's honour.
            For more information click here: <a href="#">Privacy Policy,</a>{" "}
            <a href="#">Terms of Use</a>
          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default Mailing;
