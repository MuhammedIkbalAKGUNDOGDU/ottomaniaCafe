import React from "react";
import Header from "../components/Header";
import CafeLogo from "../assets/cafe.png";
import Banner from "../components/Banner";
import Categories from "../components/Categories";
import { Helmet } from "react-helmet-async";
import Footer from "../components/Footer";
import soguk from "../assets/sogukIcecekBg.jpeg";
import sicak from "../assets/sıcakicecek.jpeg";
import ana from "../assets/anayemek.jpeg";
import baslangic from "../assets/baslangic.jpeg";
import nargile from "../assets/nargile.jpeg";
import kokteyl from "../assets/kokteyl.jpeg";
import tatli from "../assets/tatli.jpeg";

const Cafe = () => {
  const categories = [
    { name: "Ana Yemekler", image: ana },
    { name: "Tatlılar", image: tatli  },
    { name: "Soğuk İçecekler", image: soguk },
    { name: "Sıcak İçecekler", image: sicak },
    { name: "Başlangıçlar", image: baslangic },
    { name: "Alkolsüz Kokteyller", image: kokteyl },
    { name: "Nargileler", image: nargile },
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
      <Footer />
    </div>
  );
};

export default Cafe;
