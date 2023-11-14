import React from "react";
import "./Philosophy_BannerWithText.css";
import mainBannerImg from "../../assets/products_main_banner.png";

const BannerWithText = () => {
  return (
    <div id="mainBanner" className="position-relative p-0">
      <div id="mainBannerImg">
        <img className="img-fluid" src={mainBannerImg} alt="ItemPicture" />
      </div>
      <div className="overlay-text">
        <p className="text-white text1">LEARN MORE ABOUT</p>
        <p className="text-white text2">
        OUR PHILOSOPHY & MISSION
        </p>
      </div>
    </div>
  );
};

export default BannerWithText;
