import React, { useState } from "react";
import { Row } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo_black from "../../assets/logo_black.png";
import profile from "../../assets/profile.svg";
import "./NavigationBar.css";

function NavigationBar() {
  const [expanded, setExpanded] = useState(false);

  const handleToggle = () => {
    setExpanded(!expanded);
  };
  return (
    <Navbar
      collapseOnSelect
      expand="md"
      sticky="top"
      className="bg-body-tertiary nav-container"
      expanded={expanded}
      onToggle={handleToggle}
    >
      <div id="first-row">
        <Navbar.Brand href="#home">
          <img src={logo_black} alt="Logo" />
        </Navbar.Brand>

        <div>
          <Navbar.Toggle
            aria-controls="responsive-navbar-nav"
            className="custom-toggle"
          />
          <Navbar.Collapse id="responsive-navbar-nav">
            {expanded ? "" : <img src={profile} alt="Profile Icon" />}
          </Navbar.Collapse>
        </div>
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
