import React from "react";
import "./Products_BannerWithText.css";
import mainBannerImg from "../../assets/products_main_banner.png";

const BannerWithText = () => {
  return (
    <div id="mainBanner" className="position-relative p-0">
      <div id="mainBannerImg">
        <img className="img-fluid" src={mainBannerImg} alt="ItemPicture" />
      </div>
      <div className="overlay-text">
        <p className="text-white text1">IDÔLE NOW</p>
        <p className="text-white text2">
        JOIN THE  <br></br> RIDE NOW
        </p>
        <p className="text-white text3">
        Each of our simple, elegant Colognes is crafted from fine ingredients and designed to be layered with 
another on the skin  to create something truly personal to you 
        </p>
      </div>
    </div>
  );
};

export default BannerWithText;
