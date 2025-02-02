import React from "react";

const SubeItem = ({ subeIsmi, imageSrc, locationUrl }) => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center bg-white p-6 w-3/4 h-auto md:h-[30vh] mt-12 mx-auto shadow-lg rounded-lg">
      {/* Görsel Kısmı */}
      <div className="w-full md:w-1/2 h-[200px] md:h-full   relative">
        {/* Resim */}
        <img
          src={imageSrc}
          alt="Şube Görseli"
          className="w-full h-full object-cover rounded-lg"
        />

        {/* Blur Efektli Siyah Arkaplan ve Şube İsmi */}
        <div className="absolute top-0 left-0 w-full h-full bg-black/40 rounded-lg flex items-center justify-center">
          <h2 className="text-white text-sm md:text-2xl font-bold z-10">{subeIsmi}</h2>
        </div>
      </div>

      {/* Harita Kısmı */}
      <div className="w-full md:w-1/2 h-[200px] md:h-full pl-0 md:pl-4 mt-4 md:mt-0">
        <iframe
          src={locationUrl}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          className="w-full h-full rounded-lg"
        ></iframe>
      </div>
    </div>
  );
};

export default SubeItem;
