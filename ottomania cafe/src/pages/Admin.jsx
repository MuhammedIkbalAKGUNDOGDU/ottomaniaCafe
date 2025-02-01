import { useState } from "react";
import { db } from "../firebase";
import { collection, addDoc } from "firebase/firestore";

const Admin = () => {
  const [selectedCollection, setSelectedCollection] = useState("cafe");
  const [productName, setProductName] = useState("");
  const [category, setCategory] = useState("kahve");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");

  // Kategori seçenekleri
  const categories = {
    cafe: ["kahve", "çay", "tatlı", "sandviç"],
    garden: ["çiçek", "bitki", "bahçe aksesuarı"],
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!productName || !category || !description || !price) {
      alert("Lütfen tüm alanları doldurun!");
      return;
    }

    try {
      await addDoc(collection(db, selectedCollection), {
        name: productName,
        category: category,
        description: description,
        price: Number(price),
      });

      alert("Ürün başarıyla eklendi!");
      setProductName("");
      setCategory(categories[selectedCollection][0]); // Seçilen koleksiyona göre varsayılan kategori ayarla
      setDescription("");
      setPrice("");
    } catch (error) {
      console.error("Ürün ekleme hatası:", error);
    }
  };

  return (
    <div className="flex gap-4">
      <div className="p-4 bg-[#F4EFCC]">
        <h2>Ürün Ekle</h2>
        <form onSubmit={handleSubmit}>
          {/* Cafe veya Garden seçimi */}
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

          {/* Kategori Seçimi */}
          <div className="flex flex-col">
            <label className="font-bold">Kategori:</label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="border-2 rounded-lg  "
            >
              {categories[selectedCollection].map((cat, index) => (
                <option key={index} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
          </div>

          <br />

          {/* Ürün Adı */}
          <div className="flex flex-col">
            <label className="font-bold">Ürün Adı:</label>
            <input
              className="border-2 rounded-lg "
              type="text"
              value={productName}
              onChange={(e) => setProductName(e.target.value)}
            />
          </div>

          <br />

          {/* Açıklama */}
          <div className="flex flex-col">
            <label className="font-bold  ">Açıklama:</label>
            <textarea
              className="border-2 rounded-lg"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <br />

          {/* Fiyat */}
          <div className="flex flex-col">
            <label className="font-bold">Fiyat:</label>
            <input
              className="border-2 rounded-lg "
              type="number"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>

          <br />

          {/* Gönder Butonu */}
          <button
            className="bg-[#024D46] text-white rounded-lg p-2 font-bold  cursor-pointer"
            type="submit"
          >
            Ürün Ekle
          </button>
        </form>
      </div>
    </div>
  );
};

export default Admin;
