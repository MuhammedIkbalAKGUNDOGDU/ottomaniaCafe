import React from "react";
import Header from "../components/Header";
import Banner from "../components/Banner";
import { useLocation } from "react-router-dom";

const SogukIcecekler = () => {
  const location = useLocation(); // State'ten gelen verileri alıyoruz

  const { imgSrc, nameOfCafe, categoryName } = location.state || {
    imgSrc: localStorage.getItem("imgSrc") || "",
    nameOfCafe: localStorage.getItem("nameOfCafe") || "Bilinmeyen Kafe",
    categoryName: localStorage.getItem("categoryName") || " ",
  };
  return (
    <div className="bg-[#111] min-h-screen">
      <Header imgSrc={imgSrc} nameOfCafe={nameOfCafe} />
      <Banner imgSrc={imgSrc} nameOfCafe={nameOfCafe} />
      <div className="text-white font-bold text-center mt-12 text-4xl font-bold">
        {categoryName}
      </div>
    </div>
  );
};

export default SogukIcecekler;
