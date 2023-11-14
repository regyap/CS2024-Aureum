import { useState } from "react";
import './Footer.css'

function Footer() {
  return (
    <>
      <div id='footer'>
        <div class='outerBox'>
            <hr/>
            <div class='content'>
            
                <div class='compDetails'>
                    <span class='compName'>AUREUM</span>
                    <span class='compAdd'>High Perfumery from the land of Mexico, founded in 1989</span>
                </div>
                <div>
                    <span>ABOUT US</span>
                    <a href="">Our Story</a>
                    <a href="">Our Philosophy</a>
                </div>
                <div>
                    <span>CLIENT SERVICES</span>
                    <a href="">Contact</a>
                    <a href="">Delivery and Returns</a>
                    <a href="">Olfactive Society</a>
                    <a href="">FAQs</a>
                    <a href="">Find a Boutique</a>
                </div>
                <div>
                    <span>LEGAL</span>
                    <a href="">Terms and Conditions</a>
                    <a href="">Privacy Policy</a>
                </div>
                <div>
                    <span>FOLLOW US</span>
                    <a href="">Intagram</a>
                    <a href="">Tiktok</a>
                    <a href="">Twitter</a>
                    <a href="">Facebook</a>
                </div>
            </div>
            <hr/>
        </div>
        <div class='logo'>
            <div>
                © Aureum 2023. All rights reserved.
            </div>
            <div>
                logo
            </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
