import { useState } from "react";
import { Helmet } from "react-helmet";
import BannerWithText from "../components/Philosophy_BannerWithText/Philosophy_BannerWithText";
import ValueBanners from "../components/Philosophy_ValueBanners/Philosophy_ValueBanners";

function Mission() {
  return (
    <>
      <Helmet>
        <title>Your Page Title</title>
        <meta name="description" content="Your page description" />
        {/* Add other meta tags or link tags as needed */}
      </Helmet>
      <BannerWithText/>
      <ValueBanners/>
    </>
  );
}

export default Mission;
