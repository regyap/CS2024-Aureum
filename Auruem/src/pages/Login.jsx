import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Helmet } from "react-helmet";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./Login.css";

const ORSeperator = () => {
  return (
    <div
      style={{
        margin: "10px 0",
        textAlign: "center",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <hr style={{ width: "40%", display: "inline-block", margin: "0" }} />
      <span style={{ margin: "0 10px" }}>OR</span>
      <hr style={{ width: "40%", display: "inline-block", margin: "0" }} />
    </div>
  );
};

const LoginForm = ({ onToggle }) => {
  return (
    <div className="card-container">
      <h2 className="page-title">Login</h2>
      <form>
        <input type="text" placeholder=" Username" className="mb-3" />
        <br />
        <input type="password" placeholder=" Password" />
        <br />
        <div className="mb-3" style={{ textAlign: "right" }}>
          <span>Forget Password</span>
        </div>

        <button type="button" className="button mb-3">
          Login
        </button>
      </form>
      <ORSeperator />
      <p>
        Don't have an account?{" "}
        <span onClick={onToggle} className="clickable">
          Create Here
        </span>
      </p>
    </div>
  );
};

const RegisterForm = ({ onToggle }) => {
  return (
    <Container className="card-container">
      <Row>
        <Col>
          <h2 className="page-title">Register</h2>
        </Col>
      </Row>

      <form>
        <Row>
          <Col xs={8} md={8}>
            <input type="text" placeholder="First Name" className="mb-3" />
          </Col>
          <Col xs={4} md={4}>
            <input type="text" placeholder="Last Name" className="mb-3" />
          </Col>
        </Row>
        <Row>
          <Col md={12}>
            <input type="email" placeholder="Email" className="mb-3" />
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <input type="password" placeholder="Password" className="mb-3" />
          </Col>
          <Col md={6}>
            <input
              type="password"
              placeholder="Confirm Password"
              className="mb-3"
            />
          </Col>
        </Row>
        {/* <Row className="mx-1">
          For your security, we invite you to fill your password according to
          the following criteria:
        </Row>
        <Row>
          <Col md={11} className="password-conditions p-0 mx-3">
            At least 10 characters
            <br />
            At least 1 uppercase letter
            <br />
            At least 1 lowercase letter
            <br />
            At least 1 number
            <br />
            At least 1 special character"
            <br />
          </Col>
        </Row> */}
        <Row>
          <Col xs={6} md={6}>
            <div className="customDatePickerWidth">
              <DatePicker placeholderText="Date of Birth" />
            </div>
          </Col>
          <Col xs={6} md={6}>
            <input type="tel" placeholder="Contact Number" className="mb-3" />
          </Col>
        </Row>
        <Row>
          <Col md={12}>
            <input type="text" placeholder="Address" className="mb-3" />
          </Col>
        </Row>
        <Row>
          <Col xs={1} md={1}>
            <input type="checkbox" name="terms-conditions" />
          </Col>
          <Col xs={11} md={11} className="p-0" style={{ textAlign: "left" }}>
            <label>I agree to the Terms of Service</label>
          </Col>
        </Row>
        <Row>
          <Col xs={1} md={1}>
            <input type="checkbox" name="privacy-policy" />
          </Col>
          <Col xs={11} md={11} className="p-0" style={{ textAlign: "left" }}>
            <label>
              I agree to receive information by email about offers, services,
              products, and events from Aureum or other group companies, in
              accordance with the Privacy Policy.
            </label>
          </Col>
        </Row>

        <br />
        <button type="button" className="button mb-3">
          Register
        </button>
      </form>
      <ORSeperator />
      <p>
        Already have an account?{" "}
        <span onClick={onToggle} className="clickable">
          Login Here
        </span>
      </p>
    </Container>
  );
};

const AuthPage = () => {
  const [isLogin, setIsLogin] = useState(true);

  const handleToggle = () => {
    setIsLogin((prevIsLogin) => !prevIsLogin);
  };

  return (
    <div className="page-container">
      <Helmet>
        <title>Login</title>
        <meta name="LoginPage" content="To login to website" />
        {/* Add other meta tags or link tags as needed */}
      </Helmet>
      {isLogin ? (
        <LoginForm onToggle={handleToggle} />
      ) : (
        <RegisterForm onToggle={handleToggle} />
      )}
    </div>
  );
};

export default AuthPage;
