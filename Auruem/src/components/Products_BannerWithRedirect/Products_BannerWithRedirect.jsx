import React from "react";
import "./Products_BannerWithRedirect.css";
import mainBannerImg from "../../assets/products_main_banner.png";
import { Container, Row, Col, Button } from "react-bootstrap";

const BannerWithRedirect = () => {
  return (
    <div id="collectionsBanner" className="position-relative p-0">
      <div id="collectionsBannerImg">
        <img className="img-fluid" src={mainBannerImg} />
      </div>
      <div className="overlay-text">
        <p className="text-black text1">WINTER COLLECTION</p>
        <Button variant="dark" size="sm" style={{ width: "160px", height: "30px"}}>
          DISCOVER
        </Button>
      </div>
    </div>
  );
};

export default BannerWithRedirect;
