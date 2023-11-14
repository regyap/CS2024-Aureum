import React from "react";
import { useState } from 'react';
import "./Product_Customisation.css";
import productImg1 from "../../assets/product1_transparent.png";
import { Container, Row, Col, Button, Form, Modal } from "react-bootstrap";

const Customisation = () => {

  function triggerInput() {

    const input = document.getElementById('textInput');
    const enteredValue = input.value;
    const bottleText = document.getElementById('bottleText');
    bottleText.innerHTML = enteredValue;
  }

  const [show, setShow] = useState(false);
  return (
    <div id="customisationSection"className="position-relative p-0">
      <Row className="justify-content-md-center gap-2">
      <Col xs lg="5" className="d-grid gap-3">
          <div id="productImage">
          <img src={productImg1} />
          </div>
      </Col>
      <Col xs lg="4" className="d-grid gap-0 rightCol">
        <Row className="justify-content-start productName">
        REPLICA WHEN THE<br/>
        RAIN STOPS
        </Row>
        <Row className="justify-content-start desc">
        Clean & Fresh
        </Row>
        <Row className="justify-content-start selectLabel">
        Select a size
        </Row>
        <Row className="justify-content-start">
        <Form>
          <Row>
            {['3.4 oz, 100ml', '1.05z, 30ml', '0.3oz, 10ml'].map((size) => (
              <Col>
              <div key={`inline-radio`} className="mb-3 selectButtons">
                <Form.Check // prettier-ignore
                  inline
                  name= 'bottleSize'
                  type={`radio`}
                  id={`inline-radio-${size} radioSelection`}
                  label={`${size}`}
                />
              </div>
                </Col>
            ))}
          </Row>
        </Form>
        </Row>
        <Row className="justify-content-end">
          <Button className="addCustomButton" variant="link" size="sm" onClick={() => setShow(true)} style={{ width: "160px", height: "30px"}}>
            Add Customization
          </Button>
        </Row>
        <Row className="justify-content-start">
          <Button variant="dark" size="sm" style={{ width: "160px", height: "30px"}}>
            ADD TO BAG
          </Button>
        </Row>
      </Col>
      </Row>

      <Modal
        size="lg"
        show={show}
        onHide={() => setShow(false)}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title">
          <span class="popupTitle">CUSTOMIZE YOUR BOTTLE</span>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Row className=" gap-2 popupContent ">
      <Col xs lg="6" className="d-grid gap-3 position-relative p-0">
          <div id="popup_productImage">
          <img className="img-fluid" src={productImg1} />
          </div>
          <div className="overlay-text ">
            <p id="bottleText" className="text-black"></p>
          </div>
      </Col>
      <Col xs lg="4" className="d-grid gap-4 popupRightCol">
        <Row className="justify-content-center ">
        Your bespoke perfume awaits, a reflection of your style, grace, 
and the essence of your extraordinary self.
        </Row>
        <Row className="justify-content-center ">
        <hr/>
        </Row>
        <Row className="justify-content-center">
        <Form>
          <Form.Control id="textInput" type="text" size="sm" placeholder="Enter nickname or phrase" onChange={triggerInput}/>
        </Form>
        </Row>
        <Row className="justify-content-center">
          <Button variant="dark" size="sm" style={{ width: "160px", height: "30px"}}>
            SAVE
          </Button>
        </Row>
      </Col>
      </Row>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default Customisation;
