import React from "react";
import Header from "../components/Header";
import Banner from "../components/Banner";
import logo from "../assets/cafe.png";
import Footer from "../components/Footer";
import ProductsList from "../components/ProductsList";
const oteller = () => {
  const list = [
    { name: "Otto Classic", price: 2250 },
    { name: "Otto Alfakher & Nakla Serisi", price: 2250 },
    { name: "Otto Ice Serisi", price: 2500 },
    { name: "Otto S Serisi", price: 2750 },
    { name: "Otto Dark Serisi", price: 3000 },
    { name: "Otto King Natural", price: 3900 },
    { name: "Otto Big King Natural", price: 5900 },
  ];

  return (
    <div className="bg-[#111] min-h-screen">
      <Header imgSrc={logo} nameOfCafe={"Oteller"}></Header>
      <Banner imgSrc={logo}></Banner>
      <ProductsList list={list}/>
      <Footer
        cafeName={"Oteller"}
        instagramad={"ottomania_"}
        instagramlink={"https://www.instagram.com/ottomania_/"}
      />{" "}
    </div>
  );
};

export default oteller;
