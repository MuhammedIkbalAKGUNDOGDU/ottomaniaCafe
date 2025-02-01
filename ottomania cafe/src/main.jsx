import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import { HelmetProvider } from "react-helmet-async"; // HelmetProvider import et

import AnaYemekler from "./pages/AnaYemekler";
import Tatlilar from "./pages/Tatlilar";
import AlkolsuzKokteyller from "./pages/AlkolsuzKokteyller";
import Baslangüclar from "./pages/Baslangüclar";
import LandingPage from "./pages/HomePage";
import Cafe from "./pages/Cafe";
import Garden from "./pages/Garden";
import Products from "./pages/Products";
import Nargileler from "./pages/Nargileler";
import SıcakIcecekler from "./pages/SıcakIcecekler";
import SogukIcecekler from "./pages/SogukIcecekler";
import Admin from "./pages/admin";
ReactDOM.createRoot(document.getElementById("root")).render(
  <HelmetProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />}></Route>
        <Route path="/ottomania-cafe" element={<Cafe />}></Route>
        <Route path="/ottomania-garden" element={<Garden />}></Route>
        <Route path="/category/:categoryName" element={<Products />} />
        <Route path="/ana-yemekler" element={<AnaYemekler />} />
        <Route path="/tatlılar" element={<Tatlilar />} />
        <Route path="/alkolsuz-kokteyller" element={<AlkolsuzKokteyller />} />
        <Route path="/baslangiclar" element={<Baslangüclar />} />
        <Route path="/nargileler" element={<Nargileler />} />
        <Route path="/sicak-icecekler" element={<SıcakIcecekler />} />
        <Route path="/soguk-icecekler" element={<SogukIcecekler />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </BrowserRouter>
  </HelmetProvider>
);
