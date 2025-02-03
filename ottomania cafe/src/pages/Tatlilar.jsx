import React, { useEffect } from "react";
import Banner from "../components/Banner";
import Header from "../components/Header";
import { useLocation, useNavigate } from "react-router-dom";

const Tatlilar = () => {
  const location = useLocation(); // State'ten gelen verileri alıyoruz
  const navigate = useNavigate();
  const { imgSrc, nameOfCafe, categoryName, instagramad, instagramlink } =
    location.state || {
      imgSrc: localStorage.getItem("imgSrc") || "",
      nameOfCafe: localStorage.getItem("nameOfCafe") || "Bilinmeyen Kafe",
      categoryName: localStorage.getItem("categoryName") || " ",
      instagramad: localStorage.getItem("instagramad") || " ",
      instagramlink: localStorage.getItem("instagramlink") || " ",
    };
  useEffect(() => {
    if (categoryName.trim()) {
      // Boşlukları temizleyerek kontrol ediyoruz
      navigate(`/category/tatlılar`, {
        state: { imgSrc, nameOfCafe, categoryName, instagramad, instagramlink },
        replace: true, // Tarayıcı geçmişine eklenmesini engeller
      });
    }
  }, [categoryName, navigate]);

  return null; // Sayfa içeriği yüklenmeden yönlendirileceği için boş dönüyoruz
};

export default Tatlilar;
