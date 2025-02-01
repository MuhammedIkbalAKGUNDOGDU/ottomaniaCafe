import React, { useEffect } from "react";
import Banner from "../components/Banner";
import Header from "../components/Header";
import { useLocation, useNavigate } from "react-router-dom";

const Tatlilar = () => {
  const location = useLocation(); // State'ten gelen verileri alıyoruz
  const navigate = useNavigate();
  const { imgSrc, nameOfCafe, categoryName } = location.state || {
    imgSrc: localStorage.getItem("imgSrc") || "",
    nameOfCafe: localStorage.getItem("nameOfCafe") || "Bilinmeyen Kafe",
    categoryName: localStorage.getItem("categoryName") || " ",
  };
  useEffect(() => {
    if (categoryName.trim()) {
      // Boşlukları temizleyerek kontrol ediyoruz
      navigate(`/category/tatlılar`, {
        state: { imgSrc, nameOfCafe, categoryName },
        replace: true, // Tarayıcı geçmişine eklenmesini engeller
      });
    }
  }, [categoryName, navigate]);

  return null; // Sayfa içeriği yüklenmeden yönlendirileceği için boş dönüyoruz
};

export default Tatlilar;
