import React from "react";
import Header from "../components/Header";
import GardenLogo from "../assets/garden.png";
import Banner from "../components/Banner";
import Categories from "../components/Categories";
import { Helmet } from "react-helmet-async";
import Footer from "../components/Footer";

const Garden = () => {
  const categories = [
    { name: "Ana Yemekler" },
    { name: "Tatlılar" },
    { name: "Soğuk İçecekler" },
    { name: "Sıcak İçecekler" },
    { name: "Başlangıçlar" },
    { name: "Alkolsüz Kokteyller" },
    { name: "Nargileler" },
  ];

  return (
    <div className="bg-[#111] min-h-screen">
      <Helmet>
        <title>Ottomania Garden</title>{" "}
      </Helmet>
      <Header imgSrc={GardenLogo} nameOfCafe={"Ottomania Garden"} />
      <Banner imgSrc={GardenLogo} nameOfCafe={"Ottomania Garden"} />
      <Categories
        imgSrc={GardenLogo}
        nameOfCafe={"Ottomania Garden"}
        categories={categories}
      />
      <Footer />
    </div>
  );
};

export default Garden;
