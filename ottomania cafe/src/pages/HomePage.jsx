import React from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col md:flex-row justify-center items-center bg-[#5C3828] h-screen">
      <div
        onClick={() => navigate("/ottomania-cafe")}
        className="bg-[#F4EFCC] p-6 w-xs text-center rounded-xl  font-bold text-xl m-6 cursor-pointer text-[#024D46] transition-transform duration-300 hover:scale-105"
      >
        Ottomania Cafe
      </div>
      <div
        onClick={() => navigate("/ottomania-garden")}
        className="bg-[#F4EFCC] p-6 w-xs text-center rounded-xl font-bold text-xl m-6 cursor-pointer text-[#024D46] transition-transform duration-300 hover:scale-105"
      >
        Ottomania Garden
      </div>
     
    </div>
  );
};

export default HomePage;
