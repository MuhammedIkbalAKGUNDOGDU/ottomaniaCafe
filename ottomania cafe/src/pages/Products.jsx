import Header from "../components/Header";
import Banner from "../components/Banner";
import { useParams, useLocation } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import ProductsList from "../components/ProductsList";
import Footer from "../components/Footer";
import { collection, getDocs, query, where, orderBy } from "firebase/firestore";
import { db } from "../firebase"; // Firestore bağlantısını içe aktar
import { useEffect, useState } from "react";

const Products = () => {
  const { categoryName } = useParams(); // URL'den parametre al
  const location = useLocation(); // State'ten gelen verileri al

  const { imgSrc, nameOfCafe, instagramad, instagramlink } = location.state || {
    imgSrc: localStorage.getItem("imgSrc") || "",
    nameOfCafe: localStorage.getItem("nameOfCafe") || "Bilinmeyen Kafe",
    instagramad: localStorage.getItem("instagramad") || "",
    instagramlink: localStorage.getItem("instagramlink") || "",
  };

  console.log("instagram ad", instagramad);
  console.log("link", instagramlink);

  const [products, setProducts] = useState([]); // Firestore'dan çekilen ürünleri saklamak için state
  const [loading, setLoading] = useState(true); // Yüklenme durumu için state

  const cafeName = nameOfCafe.toLowerCase().includes("garden")
    ? "garden"
    : "cafe";

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true); // Yükleme başlıyor
      try {
        const q = query(
          collection(db, cafeName),
          where("category", "==", categoryName),
          orderBy("timestamp", "asc") // İlk eklenen en üstte
        );
        const querySnapshot = await getDocs(q);

        const productsArray = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        setProducts(productsArray);
      } catch (error) {
        console.error("Ürünleri getirirken hata oluştu:", error);
      } finally {
        setLoading(false); // Yükleme tamamlandı
      }
    };

    fetchProducts();
  }, [categoryName]);

  return (
    <div className="bg-[#111] min-h-screen">
      <Helmet>
        <title>
          {nameOfCafe} | {categoryName}
        </title>
      </Helmet>
      <Header imgSrc={imgSrc} nameOfCafe={nameOfCafe} />
      <Banner imgSrc={imgSrc} nameOfCafe={nameOfCafe} />
      <div className="text-white font-bold text-center mt-12 text-5xl my-8 uppercase">
        {categoryName}
      </div>

      {loading ? (
        <div className="text-white text-center text-xl my-8">Yükleniyor...</div>
      ) : (
        <ProductsList list={products} nameOfCafe={nameOfCafe} />
      )}

      <Footer
        cafeName={nameOfCafe}
        instagramad={instagramad}
        instagramlink={instagramlink}
      />
    </div>
  );
};

export default Products;
