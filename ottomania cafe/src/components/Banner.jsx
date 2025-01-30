import React from "react";
import bgImg from "../assets/bg.jpeg";

const Banner = ({ imgSrc, nameOfCafe }) => {
  return (
    <div
      className="h-[50vh] bg-cover bg-center relative"
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      {/* Hafif karartı efekti */}
      <div className="absolute inset-0 bg-black opacity-70"></div>

      {/* Logo */}
      <img
        src={imgSrc}
        alt=""
        className="h-48 w-auto absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10"
      />
    </div>
  );
};

export default Banner;
