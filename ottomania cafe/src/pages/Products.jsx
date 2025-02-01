import Header from "../components/Header";
import Banner from "../components/Banner";
import { useParams, useLocation } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import ProductsList from "../components/ProductsList";
import Footer from "../components/Footer";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../firebase"; // Firestore bağlantısını içe aktar
import { useEffect, useState } from "react";

const Products = () => {
  const { categoryName } = useParams(); // URL'den parametre al
  const location = useLocation(); // State'ten gelen verileri alıyoruz

  const { imgSrc, nameOfCafe } = location.state || {
    imgSrc: localStorage.getItem("imgSrc") || "",
    nameOfCafe: localStorage.getItem("nameOfCafe") || "Bilinmeyen Kafe",
  };

  const [products, setProducts] = useState([]); // Firestore'dan çekilen ürünleri saklamak için state
  const cafeName = nameOfCafe.toLowerCase().includes("garden")
    ? "garden"
    : "cafe";
  useEffect(() => {
    const fetchProducts = async () => {
      console.log("Seçilen kategori:", categoryName);
      console.log("Firestore koleksiyonu:", cafeName);

      try {
        const q = query(
          collection(db, cafeName),
          where("category", "==", categoryName)
        );
        const querySnapshot = await getDocs(q);

        const productsArray = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
          MIDIAccess,
        }));

        setProducts(productsArray);
      } catch (error) {
        console.error("Ürünleri getirirken hata oluştu:", error);
      }
    };

    fetchProducts();
  }, [categoryName]);

  const coffeeList = [
    {
      name: "Espresso",
      description: "Yoğun ve güçlü aromasıyla tek shot kahve.",
      price: "45",
    },
    {
      name: "Americano",
      description: "Espresso'nun sıcak su ile seyreltilmiş hali.",
      price: "50",
    },
    {
      name: "Latte",
      description: "Bol sütlü ve hafif kahve severler için mükemmel seçim.",
      price: "55",
    },
    {
      name: "Cappuccino",
      description: "Eşit oranda espresso, süt ve süt köpüğü içerir.",
      price: "60",
    },
    {
      name: "Mocha",
      description: "Espresso, süt ve çikolata lezzetinin mükemmel uyumu.",
      price: "65",
    },
    {
      name: "Macchiato",
      description: "Espresso üzerine az miktarda süt köpüğü eklenmiş kahve.",
      price: "50",
    },
    {
      name: "Flat White",
      description:
        "Latte’ye benzeyen ama daha yoğun kahve tadına sahip içecek.",
      price: "58",
    },
    {
      name: "Turkish Coffee",
      description: "Geleneksel Türk kahvesi, yoğun ve köpüklü servis edilir.",
      price: "40",
    },
    {
      name: "Cold Brew",
      description:
        "Soğuk suda uzun süre demlenerek hazırlanan hafif asidik kahve.",
      price: "70",
    },
    {
      name: "Affogato",
      description: "Espresso ve dondurmanın eşsiz birleşimi.",
      price: "75",
    },
  ];

  return (
    <div className="bg-[#111] min-h-screen">
      <Helmet>
        <title>
          {nameOfCafe} | {categoryName}
        </title>
      </Helmet>
      <Header imgSrc={imgSrc} nameOfCafe={nameOfCafe} />
      <Banner imgSrc={imgSrc} nameOfCafe={nameOfCafe} />
      <div className="text-white font-bold text-center mt-12 text-4xl font-bold capitalize">
        {categoryName}
      </div>
      <ProductsList list={products} nameOfCafe={nameOfCafe} />
      <Footer />
    </div>
  );
};

export default Products;
