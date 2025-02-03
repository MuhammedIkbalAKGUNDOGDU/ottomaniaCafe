import React from "react";
import bgImg from "../assets/nargile.jpeg";
import bgImg2 from "../assets/sıcakicecek.jpeg";
import bgImg3 from "../assets/kokteyl.jpeg";
import bgImg4 from "../assets/tatli.jpeg";
import bgImg5 from "../assets/sogukIcecekBg.jpeg";
import { useEffect, useState } from "react";
import { db } from "../firebase";
import { collection, getDocs, query } from "firebase/firestore";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const images = [
  bgImg, // İlk arka plan
  bgImg2, // İkinci arka plan
  bgImg3, // Üçüncü arka plan
  bgImg4,
  bgImg5,
];
const Banner = ({ imgSrc, nameOfCafe }) => {
  const [lastUpdatedDate, setLastUpdatedDate] = useState("");

  useEffect(() => {
    const fetchDateFromFirestore = async () => {
      try {
        const q = query(collection(db, "priceUpdateDates"));
        const querySnapshot = await getDocs(q);
        if (!querySnapshot.empty) {
          const latestDate = querySnapshot.docs[0].data().lastUpdated;
          setLastUpdatedDate(latestDate);
        }
      } catch (error) {
        console.error("Tarih çekme hatası:", error);
      }
    };

    fetchDateFromFirestore();
  }, []);

  return (
    <div>
      <Swiper
        modules={[Autoplay, Pagination]}
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 3000, disableOnInteraction: false }} // 3 saniyede bir değişir
        pagination={{ clickable: true }} // Sadece sayfa göstergesi olacak
        className="h-[50vh] w-full"
      >
        {images.map((bgImg, index) => (
          <SwiperSlide key={index}>
            <div
              className="h-[50vh] w-full relative bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: `url(${bgImg})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            >
              {/* Hafif karartı efekti */}
              <div className="absolute inset-0 bg-black/50"></div>

              {/* Logo */}
              <img
                src={imgSrc}
                alt="logo"
                className="h-48 w-auto absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="flex flex-col items-end mx-4 text-sm">
        <p className="text-gray-500 ">Fiyatlarımıza KDV Dahildir</p>
        <p className="text-gray-500">
          Son Fiyat Güncelleme Tarihi : {lastUpdatedDate}
        </p>
      </div>
    </div>
  );
};

export default Banner;
