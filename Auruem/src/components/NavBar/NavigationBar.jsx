import { Row } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./NavigationBar.css";

function NavigationBar() {
  return (
    <Navbar
      collapseOnSelect
      expand="md"
      className="bg-body-tertiary nav-container"
    >
      <div id="first-row">
        <Navbar.Brand href="#home">Aureum</Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          className="custom-toggle"
        />
      </div>
      <div id="second-row">
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav>
            <Nav.Link href="#Fragrances">
              <span className="m-2">Fragrances</span>
            </Nav.Link>
            <Nav.Link href="#Gifting">
              <span className="m-2">Gifting</span>
            </Nav.Link>
            <Nav.Link href="#Stores">
              <span className="m-2">Stores</span>
            </Nav.Link>
            <Nav.Link href="#OurWorld">
              <span className="m-2">Our World</span>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
}

export default NavigationBar;
