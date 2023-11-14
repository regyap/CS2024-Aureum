import { useState } from "react";
import { Helmet } from "react-helmet";
import "./Story.css";
import React from "react";
import InspirationPic1 from "../assets/Story_InspirationPic1.png";
import InspirationPic2 from "../assets/Story_InspirationPic2.png";
import InspirationPic3 from "../assets/Story_InspirationPic3.png";

function Story() {
  return (
    <>
      <Helmet>
        <title>Our Story</title>
        <meta name="description" content="Your page description" />
        {/* Add other meta tags or link tags as needed */}
      </Helmet>

      <div className="storybanner">
        <h1>Our Story</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
          eaque repellendus amet harum cupiditate officiis ipsam accusamus iste
          quasi, expedita totam esse dolorem omnis culpa nulla debitis,
          voluptatum recusandae repudiandae.
        </p>
      </div>

      {/* ---- inspiration ---- */}
      <section className="inspiration">
        <h2>Our Inspiration</h2>
        <div id="timeless" className="inspiSection">
          <div className="inspiText">
            <h1>Timeless</h1>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Molestias vitae dolores rerum quisquam, nihil cumque blanditiis
              maiores, saepe odit error dolore excepturi sed nostrum numquam
              impedit distinctio dolorem harum optio.
            </p>
          </div>
          <img src={InspirationPic1} alt="" />
        </div>
        <div id="trust" className="inspiSection">
          <img src={InspirationPic2} alt="" />
          <div className="inspiText">
            <h1>Trust</h1>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi
              expedita ad quisquam quaerat, nam labore laboriosam eum excepturi
              at quasi necessitatibus numquam accusamus! Minima, incidunt itaque
              quo nesciunt autem veniam!
            </p>
          </div>
        </div>
        <div id="exclusivity" className="inspiSection">
          <div className="inspiText">
            <h1>Excusivity</h1>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio
              dicta qui voluptatibus corporis obcaecati labore, impedit incidunt
              error ipsum illo facilis quasi repellat autem eaque magni
              inventore possimus? Eos, sapiente!
            </p>
          </div>
          <img src={InspirationPic3} alt="" />
        </div>
      </section>
    </>
  );
}

export default Story;
