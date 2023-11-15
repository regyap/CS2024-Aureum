import React from "react";
import "./Philosophy_ValueBanners.css";
import mainBannerImg from "../../assets/products_main_banner.png";

const ValueBanners = () => {
  return (
    <div id="valueBanners">
      <div className="position-relative p-0 whiteBanner">
          <div class="whiteBox">
          </div>
          <div className="overlay-text">
            <p className="text-black text1">WE STRIVE</p>
            <p className="text-black text2">
            LOYALTY
            </p>
            <p className="text-black text3">
            A willingness to go the extra mile to satisfy our clients. <br/>
            An openness to listen to the Amouage lover. <br/>
            An investment in our employees.
            </p>
          </div>
        </div>
        <div className="position-relative p-0 imageBanner crueltyfree">
          <div class="bannerImg">
          </div>
          <div className="overlay-text">
            <p className="text-white text1">WE PRODUCE</p>
            <p className="text-white text2">
            CRUELTY-FREE
            </p>
            <p className="text-white text3">
            A willingness to go the extra mile to satisfy our clients. <br/>
            An openness to listen to the Amouage lover. <br/>
            An investment in our employees.
            </p>
          </div>
        </div>
        <div className="position-relative p-0 whiteBanner">
          <div class="whiteBox">
          </div>
          <div className="overlay-text">
            <p className="text-black text1">WE VALUE</p>
            <p className="text-black text2">
            LOYALTY
            </p>
            <p className="text-black text3">
            A willingness to go the extra mile to satisfy our clients. <br/>
            An openness to listen to the Amouage lover. <br/>
            An investment in our employees.
            </p>
          </div>
        </div>
        <div className="position-relative p-0 imageBanner environment">
          <div class="bannerImg">
          </div>
          <div className="overlay-text">
            <p className="text-white text1">WE CARE FOR</p>
            <p className="text-white text2">
            THE ENVIRONMENT
            </p>
            <p className="text-white text3">
            A willingness to go the extra mile to satisfy our clients. <br/>
            An openness to listen to the Amouage lover. <br/>
            An investment in our employees.
            </p>
          </div>
        </div>
    </div>
    
  );
};

export default ValueBanners;
