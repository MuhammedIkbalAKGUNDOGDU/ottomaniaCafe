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

  return (
    <div className="h-30 flex items-center px-4 shadow-md">
      <img
        onClick={handleSubmit}
        src={imgSrc}
        alt="Logo"
        className="h-16 p-2 mx-2 w-auto cursor-pointer md:h-26 md:mx-8"
      />
      <div className="flex items-center justify-between mr-12 w-full">
        <div className="text-sm md:text-l font-bold text-white">
          {nameOfCafe}
        </div>
        <div
          onClick={() =>
            navigate("/subelerimiz", { state: { imgSrc, nameOfCafe } })
          }
          className="text-white text-sm md:text-xl font-bold ml-4 cursor-pointer"
        >
          Şubelerimiz
        </div>
      </div>
    </div>
  );
};

export default Header;
