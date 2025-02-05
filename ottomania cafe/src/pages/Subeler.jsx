import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Banner from "../components/Banner";
import Categories from "../components/Categories";
import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";
import SubeItem from "../components/subeItem";
import Foto from "../assets/nargile.jpeg";

const Subeler = () => {
  const location = useLocation();
  const { imgSrc, nameOfCafe } = location.state || {};
  return (
    <div className="bg-[#111] min-h-screen">
      <Helmet>
        <title>Ottomania Cafe & Nargile</title>
      </Helmet>
      <Header imgSrc={imgSrc} nameOfCafe={nameOfCafe} />
      <Banner imgSrc={imgSrc} nameOfCafe={nameOfCafe} />

      <SubeItem
        subeIsmi="Shangri-La Bosphorus İstanbul"
        imageSrc={Foto}
        locationUrl="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3009.2757054910026!2d29.004814099999997!3d41.0410995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab79ed5e4b2af%3A0x95a3c04d410592a1!2sShangri-La%20Bosphorus%20%C4%B0stanbul!5e0!3m2!1str!2str!4v1738524507021!5m2!1str!2str"
      />

      <SubeItem
        subeIsmi="Conrad İstanbul Bosphorus"
        imageSrc={Foto}
        locationUrl="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3578.3656431667046!2d29.010206161689602!3d41.04636714958294!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14d25a3c3495946b%3A0xa3047f4c016284e0!2sConrad%20%C4%B0stanbul%20Bosphorus!5e0!3m2!1str!2str!4v1738524604333!5m2!1str!2str"
      />
      <SubeItem
        subeIsmi="Fairmont Quasar İstanbul"
        imageSrc={Foto}
        locationUrl="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3008.1927084022773!2d29.000427199999994!3d41.0647801!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab6ff5a2cd7c5%3A0x4570c2089cdc3fe1!2sFairmont%20Quasar%20%C4%B0stanbul!5e0!3m2!1str!2str!4v1738524680895!5m2!1str!2str"
      />
      <SubeItem
        subeIsmi="Ottomania Kurtköy"
        imageSrc={Foto}
        locationUrl="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3014.439316113676!2d29.3087673!3d40.928038!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cadbf65762645b%3A0x554480c168c80508!2sOttomania%20Kurtk%C3%B6y!5e0!3m2!1str!2str!4v1738524754900!5m2!1str!2str"
      />
      <SubeItem
        subeIsmi="Ottomania Üsküdar"
        imageSrc={Foto}
        locationUrl="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3010.0093675934436!2d29.013688!3d41.025051!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab788e137ac29%3A0x83c959f4642d9fd3!2sOttomania!5e0!3m2!1str!2str!4v1738524815647!5m2!1str!2str"
      />
      <SubeItem
        subeIsmi="Ottomania Garden Göktürk"
        imageSrc={Foto}
        locationUrl="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5051.404507007425!2d28.894189206540265!3d41.165447739250645!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab3602af666c5%3A0xefc62d95d3a45f44!2sOttomania%20Garden%20G%C3%B6kt%C3%BCrk!5e0!3m2!1str!2str!4v1738524880227!5m2!1str!2str"
      />
      <Footer cafeName={nameOfCafe} />
    </div>
  );
};

export default Subeler;
