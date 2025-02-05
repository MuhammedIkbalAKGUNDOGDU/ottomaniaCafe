import React from "react";
import { useNavigate } from "react-router-dom";
import bg1 from "../assets/nargile.jpeg";
import bg2 from "../assets/gardenhome.jfif";
import bg3 from "../assets/nargile.jpeg";

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col md:flex-row justify-center items-center bg-[#111] h-screen">
      {/* Ottomania Cafe Kutusu */}
      <div
        onClick={() => navigate("/ottomania-cafe")}
        className="relative p-6 w-72 h-72 text-center flex flex-col justify-center items-center rounded-xl font-bold text-xl m-6 cursor-pointer text-white transition-transform duration-300 hover:scale-105 bg-cover bg-center"
        style={{
          backgroundImage: `url(${bg1})`, // URL formatında olmalı
        }}
      >
        <div className="absolute inset-0 bg-black/50 rounded-xl"></div>
        <span className="relative z-10 text-2xl">Ottomania Cafe</span>{" "}
        <p className="relative z-10 text-2xl">Üsküdar & Kurtköy</p>
      </div>

      {/* Ottomania Garden Kutusu */}
      <div
        onClick={() => navigate("/ottomania-garden")}
        className="relative p-6 w-72 h-72 text-center flex-col rounded-xl flex justify-center items-center font-bold text-xl m-6 cursor-pointer text-white transition-transform duration-300 hover:scale-105 bg-cover bg-center"
        style={{
          backgroundImage: `url(${bg2})`, // URL formatında olmalı
        }}
      >
        <div className="absolute inset-0 bg-black/50 rounded-xl"></div>
        <span className="relative z-10 text-2xl">Ottomania Garden</span>
        <p className="relative z-10 text-2xl">Göktürk</p>
      </div>
      <div
        onClick={() => navigate("/oteller")}
        className="relative p-6 w-72 h-72 text-center flex-col rounded-xl flex justify-center items-center font-bold text-xl m-6 cursor-pointer text-white transition-transform duration-300 hover:scale-105 bg-cover bg-center"
        style={{
          backgroundImage: `url(${bg3})`, // URL formatında olmalı
        }}
      >
        <div className="absolute inset-0 bg-black/50 rounded-xl"></div>
        <span className="relative z-10 text-2xl">Oteller</span>
      </div>
    </div>
  );
};

export default HomePage;
