import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Banner.css";
import dummy from "../../assets/dummy.jpg";

const Banner = () => {
  return (
    <div id="banner" className="position-relative">
      <img className="img-fluid-stretch" src={dummy} alt="ItemPicture" />
      <div className="overlay-content">
        <h3>ATLIER OF THE WIND</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
          exercitationem voluptatibus dolorum pariatur ipsam aut unde non,
          numquam cumque ut sed aperiam ad repudiandae ab saepe magni,
          perspiciatis voluptas enim.
        </p>
      </div>
    </div>
  );
};

export default Banner;
