import React from "react";
import Header from "../components/Header";
import CafeLogo from "../assets/cafe.png";
import Banner from "../components/Banner";
import Categories from "../components/Categories";
import { Helmet } from "react-helmet-async";

const Cafe = () => {
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
        <title>Ottomania Cafe & Nargile</title>
      </Helmet>
      <Header imgSrc={CafeLogo} nameOfCafe={"Ottomania Cafe"} />
      <Banner imgSrc={CafeLogo} nameOfCafe={"Ottomania Cafe"} />
      <Categories
        imgSrc={CafeLogo}
        nameOfCafe={"Ottomania Cafe"}
        categories={categories}
      />
    </div>
  );
};

export default Cafe;
