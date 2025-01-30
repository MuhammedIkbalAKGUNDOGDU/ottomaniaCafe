import React from "react";
import LogoCafe from "../assets/cafe.png";
import LogoGarden from "../assets/garden.png";

const ProductsList = ({ list, nameOfCafe }) => {
  // nameOfCafe değerine göre doğru logoyu belirle
  console.log(nameOfCafe);
  const Logo = nameOfCafe === "Ottomania Cafe" ? LogoCafe : LogoGarden;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
      {list.map((item, index) => (
        <div
          key={index}
          className="bg-white text-white p-4 mt-4 rounded-lg shadow-md h-100 text-center mx-8"
        >
          <img
            src={item.image || Logo}
            alt=""
            className="w-full h-60 object-scale-down rounded-md"
          />
          <h2 className="text-xl text-black font-bold">{item.name}</h2>
          <p className="text-gray-400 mt-2">{item.description}</p>
          <p className="text-gray-400 mt-2">{item.price}₺</p>
        </div>
      ))}
    </div>
  );
};

export default ProductsList;
