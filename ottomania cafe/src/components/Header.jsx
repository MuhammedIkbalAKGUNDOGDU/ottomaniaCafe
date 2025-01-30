import React from "react";
import { useNavigate } from "react-router-dom";

const Header = ({ imgSrc, nameOfCafe }) => {
  const navigate = useNavigate();
  return (
    <div className="h-30 flex items-center px-4 shadow-md">
      <img
        onClick={() => navigate("/")}
        src={imgSrc}
        alt="Logo"
        className="h-26 p-4 mx-8 w-auto cursor-pointer"
      />
      <div className="ml-4 text-xl font-bold text-white">{nameOfCafe}</div>
    </div>
  );
};

export default Header;
