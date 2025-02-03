import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const AlkolsuzKokteyller = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const { imgSrc, nameOfCafe, categoryName, instagramad, instagramlink } =
    location.state || {
      imgSrc: localStorage.getItem("imgSrc") || "",
      nameOfCafe: localStorage.getItem("nameOfCafe") || "Bilinmeyen Kafe",
      categoryName: localStorage.getItem("categoryName").toLowerCase() || "",
      instagramad: localStorage.getItem("instagramad") || " ",
      instagramlink: localStorage.getItem("instagramlink") || " ",
    };

  useEffect(() => {
    if (categoryName.trim()) {
      // Boşlukları temizleyerek kontrol ediyoruz
      navigate(`/category/${encodeURIComponent(categoryName)}`, {
        state: { imgSrc, nameOfCafe, categoryName, instagramad, instagramlink },
        replace: true, // Tarayıcı geçmişine eklenmesini engeller
      });
    }
  }, [categoryName, navigate]);

  return null; // Sayfa içeriği yüklenmeden yönlendirileceği için boş dönüyoruz
};

export default AlkolsuzKokteyller;
