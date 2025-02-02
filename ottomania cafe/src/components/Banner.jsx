import React from "react";
import bgImg from "../assets/nargile.jpeg";

const Banner = ({ imgSrc, nameOfCafe }) => {
  return (
    <div
      className="h-[50vh] w-full relative bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${bgImg})`,
        backgroundSize: "cover", // Arka planın tamamını kaplamasını sağlar
        backgroundPosition: "center", // Görselin ortalanmasını sağlar
        backgroundRepeat: "no-repeat", // Görselin tekrar etmesini engeller
      }}
    >
      {/* Hafif karartı efekti */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Logo */}
      <img
        src={imgSrc}
        alt="logo"
        className="h-48 w-auto absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10"
      />
    </div>
  );
};

export default Banner;
