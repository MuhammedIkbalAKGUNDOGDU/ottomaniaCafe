import React from "react";
import { useNavigate } from "react-router-dom";

const Header = ({ imgSrc, nameOfCafe }) => {
  const navigate = useNavigate();
  const handleSubmit = () => {
    if (nameOfCafe === "Ottomania Cafe") {
      navigate("/ottomania-cafe", { replace: true }); // Buraya yönlendirmek istediğiniz rotayı yazabilirsiniz.
    } else {
      navigate("/ottomania-garden", { replace: true }); // Buraya yönlendirmek istediğiniz rotayı yazabilirsiniz.
    }
  };

  return (
    <div className="h-30 flex items-center px-4 shadow-md">
      <img
        onClick={handleSubmit}
        src={imgSrc}
        alt="Logo"
        className="h-26 p-4 mx-8 w-auto cursor-pointer"
      />
      <div className="flex items-center justify-between mr-12 w-full">
        <div className="ml-4 text-xl font-bold text-white">{nameOfCafe}</div>
        <div className="text-white text-xl font-bold text-white ml-4 cursor-pointer">
          Şubelerimiz
        </div>
      </div>
    </div>
  );
};

export default Header;
