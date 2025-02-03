import React from "react";
import { useNavigate } from "react-router-dom";

const Header = ({ imgSrc, nameOfCafe }) => {
  const navigate = useNavigate();

  const handleSubmit = () => {
    if (nameOfCafe === "Ottomania Cafe") {
      navigate("/ottomania-cafe", { replace: true });
    } else {
      navigate("/ottomania-garden", { replace: true });
    }
  };

  // Mail Gönderme İşlemi
  const handleMail = () => {
    const email = "iletisim@ottomania.com"; // Mail adresini buraya yaz
    const subject = encodeURIComponent("Şikayet/Öneri");
    const body = encodeURIComponent(
      "Merhaba,\n\nŞikayet/önerimi paylaşmak istiyorum:\n\n"
    );

    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
  };

  return (
    <div className="h-30 flex items-center px-4 shadow-md">
      <img
        onClick={handleSubmit}
        src={imgSrc}
        alt="Logo"
        className="h-16 p-2 mx-2 w-auto cursor-pointer md:h-26 md:mx-8"
      />
      <div className="flex items-center justify-end mr-2 md:justify-between md:mr-12 w-full">
        <div className="hidden sm:hidden md:block text-sm md:text-l font-bold text-white">
          {nameOfCafe}
        </div>
        <div className="flex items-center gap-6">
          <div
            onClick={() =>
              navigate("/subelerimiz", { state: { imgSrc, nameOfCafe } })
            }
            className="text-white text-xs md:text-xl font-bold cursor-pointer"
          >
            Şubelerimiz
          </div>
          <div
            onClick={handleMail}
            className="text-white text-xs md:text-xl font-bold cursor-pointer  px-4 py-2 rounded-md hover:bg-red-600 transition"
          >
            Şikayet/Öneri
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
