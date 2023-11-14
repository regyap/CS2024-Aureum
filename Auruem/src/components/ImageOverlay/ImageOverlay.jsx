import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./ImageOverlay.css";
import banner from "../../assets/experience_banner.png";

const ImageOverlay = () => {
  return (
    <div className="position-relative p-0 mb-5">
      <img className="img-fluid-stretch" src={banner} alt="ItemPicture" />
      <div className="overlay-text">
        <p className="text-white">Visitor's Centre</p>
        <p className="text-white">
          THE AURUEM <br></br> EXPERIENCE
        </p>
        <p className="text-white">
          Our Fragrance Sommeliers await your arrival with open arms
        </p>
        <button className="button">LEARN MORE</button>
      </div>
    </div>
  );
};

export default ImageOverlay;
