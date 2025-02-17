import { useEffect, useState } from "react";
import { db } from "../firebase";
import {
  collection,
  addDoc,
  getDocs,
  query,
  deleteDoc,
  doc,
  updateDoc,
} from "firebase/firestore";

const Admin = () => {
  const [selectedCollection, setSelectedCollection] = useState("cafe");
  const [productName, setProductName] = useState("");
  const [category, setCategory] = useState("tavuk yemekleri");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [products, setProducts] = useState([]);

  // Kategori seçenekleri
  const categories = {
    cafe: [
      "tavuk yemekleri",
      "burgerlar",
      "makarnalar",
      "ızgaralar",
      "salatalar",
      "Alkolsüz Kokteyller",
      "atıştırmalıklar",
      "tostlar",
      "ottoN serisi",
      "otto klasik nargileler",
      "natural nargileler",
      "dark serisi",
      "otto special",
      "otto ice tea",
      "premium",
      "sıcak kahveler",
      "sıcak içecekler",
      "soğuk kahveler",
      "soğuk içecekler",
      "frappuccino",
      "limonatalar",
      "smoothie çeşitleri",
      "milkshake çeşitleri",
      "frozen çeşitleri",
      "bubbletea çeşitleri",
      "tatlılar",
    ],
    garden: [
      "ızgaralar",
      "tavalar",
      "Alkolsüz Kokteyller",
      "atıştırmalıklar",
      "tostlar",
      "ottoN serisi",
      "otto klasik nargileler",
      "natural nargileler",
      "dark serisi",
      "otto special",
      "otto ice tea",
      "premium",
      "sıcak kahveler",
      "sıcak içecekler",
      "soğuk kahveler",
      "soğuk içecekler",
      "frappuccino",
      "limonatalar",
      "smoothie çeşitleri",
      "milkshake çeşitleri",
      "frozen çeşitleri",
      "bubbletea çeşitleri",
      "tatlılar",
    ],
  };

  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [adminUser, setAdminUser] = useState(null);

  useEffect(() => {
    const fetchAdminUser = async () => {
      try {
        const q = query(collection(db, "adminUsers"));
        const querySnapshot = await getDocs(q);
        if (!querySnapshot.empty) {
          const userData = querySnapshot.docs[0].data();
          setAdminUser(userData);
        }
      } catch (error) {
        console.error("Admin kullanıcı verisi çekme hatası:", error);
      }
    };

    fetchAdminUser();
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    if (username === adminUser.username && password === adminUser.password) {
      setIsAuthenticated(true);
    } else {
      setError("Kullanıcı adı veya şifre hatalı");
    }
  };

  // Ürünleri Firestore'dan çekme fonksiyonu
  const fetchProducts = async () => {
    try {
      const q = query(collection(db, selectedCollection));
      const querySnapshot = await getDocs(q);
      const productList = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setProducts(productList);
    } catch (error) {
      console.error("Veri çekme hatası:", error);
    }
  };

  // Ürün ekleme fonksiyonu
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!productName || !category || !price) {
      alert("Lütfen tüm alanları doldurun!");
      return;
    }

    try {
      await addDoc(collection(db, selectedCollection), {
        name: productName,
        category: category,
        description: description,
        price: Number(price),
        timestamp: new Date(), // Yeni eklenen timestamp
      });

      alert("Ürün başarıyla eklendi!");
      setProductName("");
      setDescription("");
      setPrice("");
      fetchProducts(); // Ürünleri yeniden yükle
    } catch (error) {
      console.error("Ürün ekleme hatası:", error);
    }
  };

  // Ürün silme fonksiyonu
  const deleteProduct = async (productId) => {
    try {
      await deleteDoc(doc(db, selectedCollection, productId));
      alert("Ürün silindi!");
      fetchProducts(); // Silindikten sonra listeyi yenile
    } catch (error) {
      console.error("Ürün silme hatası:", error);
    }
  };
  const addDateToFirestore = async (dateString) => {
    try {
      await addDoc(collection(db, "priceUpdateDates"), {
        lastUpdated: dateString, // Kullanıcının girdiği tarih string olarak kaydedilir.
      });

      alert("Tarih başarıyla kaydedildi!");
    } catch (error) {
      console.error("Tarih ekleme hatası:", error);
    }
  };

  const [dateString, setDateString] = useState("");

  const handleDateSubmit = async (e) => {
    e.preventDefault();

    if (!dateString) {
      alert("Lütfen bir tarih girin!");
      return;
    }

    await addDateToFirestore(dateString);
    setDateString(""); // Giriş kutusunu sıfırla
  };

  // Ürün güncelleme fonksiyonu
  const updateProduct = async (productId, newPrice, newDescription) => {
    try {
      const productRef = doc(db, selectedCollection, productId);
      await updateDoc(productRef, {
        price: Number(newPrice),
        description: newDescription,
      });

      alert("Ürün güncellendi!");
      fetchProducts(); // Güncellendikten sonra listeyi yenile
    } catch (error) {
      console.error("Ürün güncelleme hatası:", error);
    }
  };

  // Koleksiyon değiştiğinde otomatik olarak ürünleri getir
  useEffect(() => {
    fetchProducts();
  }, [selectedCollection]);

  if (!isAuthenticated) {
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-gray-200">
        <h2 className="text-2xl font-bold">Admin Girişi</h2>
        <form
          onSubmit={handleLogin}
          className="bg-white p-6 rounded-lg shadow-lg w-80"
        >
          {error && <p className="text-red-500">{error}</p>}
          <div className="flex flex-col mb-4">
            <label className="font-bold">Kullanıcı Adı:</label>
            <input
              type="text"
              className="border-2 rounded-lg p-2"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="flex flex-col mb-4">
            <label className="font-bold">Şifre:</label>
            <input
              type="password"
              className="border-2 rounded-lg p-2"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="bg-blue-600 text-white rounded-lg p-2 font-bold cursor-pointer w-full"
          >
            Giriş Yap
          </button>
        </form>
      </div>
    );
  }
  return (
    <div className="flex flex-col gap-4">
      <div className="flex gap-4">
        {/* Ürün Ekleme Formu */}
        <div className="p-4 bg-[#F4EFCC] w-1/2">
          <h2 className=" font-bold text-xl">Ürün Ekle</h2>
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col">
              <label className="font-bold">Koleksiyon Seç:</label>
              <select
                className="border-2 rounded-lg"
                value={selectedCollection}
                onChange={(e) => {
                  setSelectedCollection(e.target.value);
                  setCategory(categories[e.target.value][0]); // Seçim değiştiğinde kategori de güncellensin
                }}
              >
                <option value="cafe">Cafe</option>
                <option value="garden">Garden</option>
              </select>
            </div>
            <br />

            <div className="flex flex-col">
              <label className="font-bold">Kategori:</label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="border-2 rounded-lg"
              >
                {categories[selectedCollection].map((cat, index) => (
                  <option key={index} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>
            </div>
            <br />

            <div className="flex flex-col">
              <label className="font-bold">Ürün Adı:</label>
              <input
                className="border-2 rounded-lg p-2"
                type="text"
                value={productName}
                onChange={(e) => setProductName(e.target.value)}
              />
            </div>
            <br />

            <div className="flex flex-col">
              <label className="font-bold">Fiyat:</label>
              <input
                className="border-2 rounded-lg p-2"
                type="number"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
            </div>
            <br />

            <div className="flex flex-col">
              <label className="font-bold">Açıklama:</label>
              <textarea
                className="border-2 rounded-lg p-2"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
            <br />

            <button
              className="bg-[#024D46] text-white rounded-lg p-2 font-bold cursor-pointer"
              type="submit"
            >
              Ürün Ekle
            </button>
          </form>
        </div>

        {/* Ürün Silme */}
        <div className="p-4 bg-[#E8E8E8] w-1/2">
          <h2 className="font-bold text-xl">Ürünleri Sil</h2>
          <div className="h-105 overflow-y-auto border p-2">
            {products.map((product) => (
              <div
                key={product.id}
                className="flex justify-between items-center border-b p-2"
              >
                <span className="font-bold">{product.name}</span>
                <button
                  className="bg-red-500 text-white rounded-lg p-2 px-6 cursor-pointer"
                  onClick={() => deleteProduct(product.id)}
                >
                  Sil
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Ürün Güncelleme */}
      <div className="p-4 bg-[#D3D3D3]">
        <h2 className="text-xl font-bold">Ürünleri Güncelle</h2>
        <div className="h-80 overflow-y-auto border p-2">
          {products.map((product) => (
            <div
              key={product.id}
              className="flex justify-between items-center border-b p-2"
            >
              <span className="font-bold w-32">{product.name}</span>
              <input
                type="number"
                className="border rounded p-1 w-20"
                defaultValue={product.price}
                onChange={(e) => (product.newPrice = e.target.value)}
              />
              <input
                type="text"
                className="border rounded p-1 w-48"
                defaultValue={product.description}
                onChange={(e) => (product.newDescription = e.target.value)}
              />
              <button
                className="bg-green-500 text-white rounded-lg p-2 cursor-pointer"
                onClick={() =>
                  updateProduct(
                    product.id,
                    product.newPrice || product.price,
                    product.newDescription || product.description
                  )
                }
              >
                Onayla
              </button>
            </div>
          ))}
        </div>
      </div>
      <div className="p-4 bg-gray-200">
        <h2 className="text-xl font-bold">Fiyat Güncellenme Tarihi Ekle</h2>
        <form onSubmit={handleDateSubmit}>
          <input
            type="text"
            className="border rounded p-2"
            placeholder="Örn: 03-02-2025"
            value={dateString}
            onChange={(e) => setDateString(e.target.value)}
          />
          <button
            type="submit"
            className="bg-blue-600 text-white rounded-lg p-2 ml-2 cursor-pointer"
          >
            Kaydet
          </button>
        </form>
      </div>
    </div>
  );
};

export default Admin;
