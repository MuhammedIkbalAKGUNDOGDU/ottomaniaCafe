import React from "react";
import Header from "../components/Header";
import Banner from "../components/Banner";
import { useLocation, useNavigate } from "react-router-dom";
import { FaArrowCircleRight } from "react-icons/fa";
import Footer from "../components/Footer";
const Nargileler = () => {
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
          navigate(`/category/ottoN serisi`, {
            state: { imgSrc, nameOfCafe, categoryName },
          })
        }
        className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-6 px-4"
      >
        <div className="h-40 bg-cover bg-center rounded-lg flex items-center justify-center text-white text-xl font-bold mx-12 py-30 bg-gray-500">
          <div className="uppercase bg-opacity-50 px-4 py-2 rounded-md text-center flex-row justify-items-center items-center">
            <div className="text-3xl "> OttoN Serisi</div>
            <div className="flex w-fit items-center gap-2 mt-4 px-6 py-2 bg-white text-black text-base rounded-md font-medium shadow-md hover:bg-gray-300 transition-all cursor-pointer">
              DETAYLI BİLGİ
              <FaArrowCircleRight className="h-3 w-3" />
            </div>
          </div>
        </div>
        <div
          onClick={() =>
            navigate(`/category/natural otto klasik`, {
              state: { imgSrc, nameOfCafe, categoryName },
            })
          }
          className="h-40 bg-cover bg-center rounded-lg flex items-center justify-center text-white text-xl font-bold mx-12 py-30 bg-gray-500"
        >
          <div className="uppercase bg-opacity-50 px-4 py-2 rounded-md text-center flex-row justify-items-center items-center">
            <div className="text-3xl "> Natural Otto Klasik</div>
            <div className="flex w-fit items-center gap-2 mt-4 px-6 py-2 bg-white text-black text-base rounded-md font-medium shadow-md hover:bg-gray-300 transition-all cursor-pointer">
              DETAYLI BİLGİ
              <FaArrowCircleRight className="h-3 w-3" />
            </div>
          </div>
        </div>
        <div
          onClick={() =>
            navigate(`/category/dark serisi`, {
              state: { imgSrc, nameOfCafe, categoryName },
            })
          }
          className="h-40 bg-cover bg-center rounded-lg flex items-center justify-center text-white text-xl font-bold mx-12 py-30 bg-gray-500"
        >
          <div className="uppercase bg-opacity-50 px-4 py-2 rounded-md text-center flex-row justify-items-center items-center">
            <div className="text-3xl "> Dark Serisi</div>
            <div className="flex w-fit items-center gap-2 mt-4 px-6 py-2 bg-white text-black text-base rounded-md font-medium shadow-md hover:bg-gray-300 transition-all cursor-pointer">
              DETAYLI BİLGİ
              <FaArrowCircleRight className="h-3 w-3" />
            </div>
          </div>
        </div>
        <div
          onClick={() =>
            navigate(`/category/otto special`, {
              state: { imgSrc, nameOfCafe, categoryName },
            })
          }
          className="h-40 bg-cover bg-center rounded-lg flex items-center justify-center text-white text-xl font-bold mx-12 py-30 bg-gray-500"
        >
          <div className="uppercase bg-opacity-50 px-4 py-2 rounded-md text-center flex-row justify-items-center items-center">
            <div className="text-3xl "> Otto Special</div>
            <div className="flex w-fit items-center gap-2 mt-4 px-6 py-2 bg-white text-black text-base rounded-md font-medium shadow-md hover:bg-gray-300 transition-all cursor-pointer">
              DETAYLI BİLGİ
              <FaArrowCircleRight className="h-3 w-3" />
            </div>
          </div>
        </div>
        <div
          onClick={() =>
            navigate(`/category/otto ice tea`, {
              state: { imgSrc, nameOfCafe, categoryName },
            })
          }
          className="h-40 bg-cover bg-center rounded-lg flex items-center justify-center text-white text-xl font-bold mx-12 py-30 bg-gray-500"
        >
          <div className="uppercase bg-opacity-50 px-4 py-2 rounded-md text-center flex-row justify-items-center items-center">
            <div className="text-3xl "> Otto Ice Tea</div>
            <div className="flex w-fit items-center gap-2 mt-4 px-6 py-2 bg-white text-black text-base rounded-md font-medium shadow-md hover:bg-gray-300 transition-all cursor-pointer">
              DETAYLI BİLGİ
              <FaArrowCircleRight className="h-3 w-3" />
            </div>
          </div>
        </div>
        <div
          onClick={() =>
            navigate(`/category/premium`, {
              state: { imgSrc, nameOfCafe, categoryName },
            })
          }
          className="h-40 bg-cover bg-center rounded-lg flex items-center justify-center text-white text-xl font-bold mx-12 py-30 bg-gray-500"
        >
          <div className="uppercase bg-opacity-50 px-4 py-2 rounded-md text-center flex-row justify-items-center items-center">
            <div className="text-3xl ">Premium</div>
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

export default Nargileler;
