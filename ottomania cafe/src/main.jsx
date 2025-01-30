import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import { HelmetProvider } from "react-helmet-async"; // HelmetProvider import et

import LandingPage from "./pages/HomePage";
import Cafe from "./pages/Cafe";
import Garden from "./pages/Garden";
import Products from "./pages/Products";
ReactDOM.createRoot(document.getElementById("root")).render(
  <HelmetProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />}></Route>
        <Route path="/ottomania-cafe" element={<Cafe />}></Route>
        <Route path="/ottomania-garden" element={<Garden />}></Route>
        <Route path="/category/:categoryName" element={<Products />} />
      </Routes>
    </BrowserRouter>
  </HelmetProvider>
);
