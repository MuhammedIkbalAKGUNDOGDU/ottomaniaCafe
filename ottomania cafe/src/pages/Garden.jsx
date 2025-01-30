import React from "react";
import Header from "../components/Header";
import GardenLogo from "../assets/garden.png";
import Banner from "../components/Banner";
import Categories from "../components/Categories";
import { Helmet } from "react-helmet-async";

const Garden = () => {
  const categories = [
    { name: "Kahve" },
    { name: "Tatlılar" },
    { name: "Ana Yemekler" },
    { name: "İçecekler" },
    { name: "Atıştırmalıklar" },
    { name: "Salatalar" },
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
    </div>
  );
};

export default Garden;
