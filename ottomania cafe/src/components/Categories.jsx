import React from "react";
import { FaArrowCircleRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
const Categories = ({ imgSrc, nameOfCafe, categories }) => {
  const navigate = useNavigate();

  const handleNavigation = (categoryName) => {
    if (categoryName === "Başlangıçlar") {
      navigate("/baslangiclar", { state: { imgSrc, nameOfCafe, categoryName } });
    } else if (categoryName === "Tatlılar") {
      navigate("/tatlilar", { state: { imgSrc, nameOfCafe, categoryName } });
    } else if (categoryName === "Ana Yemekler") {
      navigate("/ana-yemekler", { state: { imgSrc, nameOfCafe, categoryName } });
    } else if (categoryName === "Soğuk İçecekler") {
      navigate("/soguk-icecekler", { state: { imgSrc, nameOfCafe, categoryName } });
    } else if (categoryName === "Sıcak İçecekler") {
      navigate("/sicak-icecekler", { state: { imgSrc, nameOfCafe, categoryName } });
    } else if (categoryName === "Alkolsüz Kokteyller") {
      navigate("/alkolsuz-kokteyller", {
        state: { imgSrc, nameOfCafe, categoryName },
      });
    } else if (categoryName === "Nargileler") {
      navigate("/nargileler", { state: { imgSrc, nameOfCafe, categoryName } });
    } else {
      navigate("/category/genel", { state: { imgSrc, nameOfCafe, categoryName } });
    }
  };
  return (
    <div>
      <div className="text-center">
        <p className="font-bold text-white text-3xl uppercase my-20">
          {nameOfCafe}
        </p>
      </div>
      {/* Grid Yapısı: md: 2 kolon, altında 1 kolon */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-6 px-4">
        {categories.map((category, index) => {
          // Resim varsa, resim URL'sini kullan, yoksa gri arka plan uygula
          const backgroundStyle = category.image
            ? { backgroundImage: `url(${category.image})` }
            : { backgroundColor: "#343a40" }; // Gri arka plan (tailwind grey-300)

          return (
            <div
              key={index}
              className="h-40 bg-cover bg-center rounded-lg flex items-center justify-center text-white text-xl font-bold mx-12 py-30"
              style={backgroundStyle}
            >
              <div className="uppercase bg-opacity-50 px-4 py-2 rounded-md text-center flex-row justify-items-center items-center">
                <div className="text-3xl "> {category.name}</div>
                <div
                  onClick={() => handleNavigation(category.name)}
                  className="flex w-fit items-center gap-2 mt-4 px-6 py-2 bg-white text-black text-base rounded-md font-medium shadow-md hover:bg-gray-300 transition-all cursor-pointer"
                >
                  DETAYLI BİLGİ
                  <FaArrowCircleRight className="h-3 w-3" />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Categories;
