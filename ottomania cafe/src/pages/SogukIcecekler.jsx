import React from "react";
import Header from "../components/Header";
import Banner from "../components/Banner";
import { useLocation, useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import { FaArrowCircleRight } from "react-icons/fa";

const SogukIcecekler = () => {
  const location = useLocation(); // State'ten gelen verileri alıyoruz
  const navigate = useNavigate();

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
      {/* Grid Yapısı: md: 2 kolon, altında 1 kolon */}
      <div
        onClick={() =>
          navigate(`/category/soğuk kahveleri`, {
            state: { imgSrc, nameOfCafe, categoryName },
          })
        }
        className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-6 px-4"
      >
        <div className="h-40 bg-cover bg-center rounded-lg flex items-center justify-center text-white text-xl font-bold mx-12 py-30 bg-gray-500">
          <div className="uppercase bg-opacity-50 px-4 py-2 rounded-md text-center flex-row justify-items-center items-center">
            <div className="text-3xl "> Soğuk kahveler</div>
            <div className="flex w-fit items-center gap-2 mt-4 px-6 py-2 bg-white text-black text-base rounded-md font-medium shadow-md hover:bg-gray-300 transition-all cursor-pointer">
              DETAYLI BİLGİ
              <FaArrowCircleRight className="h-3 w-3" />
            </div>
          </div>
        </div>
        <div
          onClick={() =>
            navigate(`/category/frapuccino`, {
              state: { imgSrc, nameOfCafe, categoryName },
            })
          }
          className="h-40 bg-cover bg-center rounded-lg flex items-center justify-center text-white text-xl font-bold mx-12 py-30 bg-gray-500"
        >
          <div className="uppercase bg-opacity-50 px-4 py-2 rounded-md text-center flex-row justify-items-center items-center">
            <div className="text-3xl "> Frapuccino</div>
            <div className="flex w-fit items-center gap-2 mt-4 px-6 py-2 bg-white text-black text-base rounded-md font-medium shadow-md hover:bg-gray-300 transition-all cursor-pointer">
              DETAYLI BİLGİ
              <FaArrowCircleRight className="h-3 w-3" />
            </div>
          </div>
        </div>
        <div
          onClick={() =>
            navigate(`/category/smoothie`, {
              state: { imgSrc, nameOfCafe, categoryName },
            })
          }
          className="h-40 bg-cover bg-center rounded-lg flex items-center justify-center text-white text-xl font-bold mx-12 py-30 bg-gray-500"
        >
          <div className="uppercase bg-opacity-50 px-4 py-2 rounded-md text-center flex-row justify-items-center items-center">
            <div className="text-3xl "> smoothie</div>
            <div className="flex w-fit items-center gap-2 mt-4 px-6 py-2 bg-white text-black text-base rounded-md font-medium shadow-md hover:bg-gray-300 transition-all cursor-pointer">
              DETAYLI BİLGİ
              <FaArrowCircleRight className="h-3 w-3" />
            </div>
          </div>
        </div>
        <div
          onClick={() =>
            navigate(`/category/milkshake`, {
              state: { imgSrc, nameOfCafe, categoryName },
            })
          }
          className="h-40 bg-cover bg-center rounded-lg flex items-center justify-center text-white text-xl font-bold mx-12 py-30 bg-gray-500"
        >
          <div className="uppercase bg-opacity-50 px-4 py-2 rounded-md text-center flex-row justify-items-center items-center">
            <div className="text-3xl "> milkshake</div>
            <div className="flex w-fit items-center gap-2 mt-4 px-6 py-2 bg-white text-black text-base rounded-md font-medium shadow-md hover:bg-gray-300 transition-all cursor-pointer">
              DETAYLI BİLGİ
              <FaArrowCircleRight className="h-3 w-3" />
            </div>
          </div>
        </div>
        <div  onClick={() =>
            navigate(`/category/frozen`, {
              state: { imgSrc, nameOfCafe, categoryName },
            })
          } className="h-40 bg-cover bg-center rounded-lg flex items-center justify-center text-white text-xl font-bold mx-12 py-30 bg-gray-500">
          <div className="uppercase bg-opacity-50 px-4 py-2 rounded-md text-center flex-row justify-items-center items-center">
            <div className="text-3xl "> frozen</div>
            <div className="flex w-fit items-center gap-2 mt-4 px-6 py-2 bg-white text-black text-base rounded-md font-medium shadow-md hover:bg-gray-300 transition-all cursor-pointer">
              DETAYLI BİLGİ
              <FaArrowCircleRight className="h-3 w-3" />
            </div>
          </div>
        </div>
        <div  onClick={() =>
            navigate(`/category/bubbletea`, {
              state: { imgSrc, nameOfCafe, categoryName },
            })
          } className="h-40 bg-cover bg-center rounded-lg flex items-center justify-center text-white text-xl font-bold mx-12 py-30 bg-gray-500">
          <div className="uppercase bg-opacity-50 px-4 py-2 rounded-md text-center flex-row justify-items-center items-center">
            <div className="text-3xl "> bubbletea</div>
            <div className="flex w-fit items-center gap-2 mt-4 px-6 py-2 bg-white text-black text-base rounded-md font-medium shadow-md hover:bg-gray-300 transition-all cursor-pointer">
              DETAYLI BİLGİ
              <FaArrowCircleRight className="h-3 w-3" />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SogukIcecekler;
