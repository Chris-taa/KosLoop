import React, { useEffect, useState } from "react";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import ProductCard from "../components/ProductCard";
import Categories from "../components/Categories"; // <--- UNCOMMENTED THIS LINE
import "./CSS/Home.css";
import Banner from "./Assets/banner.png";

function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const dummyProducts = [
      { id: 1, name: "Lexar SL500 1TB - SSD External Portable", originalPrice: 1469000, currentPrice: 1469000, image: "https://picsum.photos/200/300", rating: 5.0, soldCount: "250+ terjual", location: "Jakarta Barat" },
      { id: 2, name: "ORICO Magnetic Portable SSD 1TB", originalPrice: 985000, currentPrice: 837250, image: "https://picsum.photos/200/300", rating: 5.0, soldCount: "30+ terjual", location: "Jakarta Utara" },
      { id: 3, name: "SanDisk Extreme Portable SSD 2TB", originalPrice: 1949000, currentPrice: 1870900, image: "https://picsum.photos/200/300", rating: 5.0, soldCount: "50+ terjual", location: "Jakarta Pusat" },
      { id: 4, name: "KYO PS200E Portable SSD 500GB", originalPrice: 799000, currentPrice: 789000, image: "https://picsum.photos/200/300", rating: 4.9, soldCount: "500+ terjual", location: "Jakarta Utara" },
      { id: 5, name: "Adata SE760 SSD External USB-C 1TB", originalPrice: null, currentPrice: 645000, image: "https://picsum.photos/200/300", rating: 5.0, soldCount: "50+ terjual", location: "Sleman" },
      { id: 6, name: "KYO PS200E SSD 2TB", originalPrice: null, currentPrice: 749000, image: "https://picsum.photos/200/300", rating: 5.0, soldCount: "200+ terjual", location: "Jakarta Utara" },
      { id: 7, name: "KYO PS200E SSD 2TB", originalPrice: null, currentPrice: 749000, image: "https://picsum.photos/200/300", rating: 5.0, soldCount: "200+ terjual", location: "Jakarta Utara" },
      { id: 8, name: "KYO PS200E SSD 2TB", originalPrice: null, currentPrice: 749000, image: "https://picsum.photos/200/300", rating: 5.0, soldCount: "200+ terjual", location: "Jakarta Utara" },
      { id: 9, name: "KYO PS200E SSD 2TB", originalPrice: null, currentPrice: 749000, image: "https://picsum.photos/200/300", rating: 5.0, soldCount: "200+ terjual", location: "Jakarta Utara" },
      { id: 10, name: "KYO PS200E SSD 2TB", originalPrice: null, currentPrice: 749000, image: "https://picsum.photos/200/300", rating: 5.0, soldCount: "200+ terjual", location: "Jakarta Utara" },
    ];
    setProducts(dummyProducts);
  }, []);

  return (
    <div>
      <Navbar /> {/* Navbar Anda akan menangani kategori */}
      <div className="home-wrapper">
        {/* Hero Section */}
        <div className="hero-container">
          <div className="hero-grid">
            <div className="hero-text">
              <h1 className="hero-title">Selamat Datang di KosLoop</h1>
              <p className="hero-subtitle">
                Tempat jual-beli barang bekas anak kos yang hemat dan
                berkelanjutan.
              </p>
              <a href="#produk" className="hero-button">
                Jelajahi Produk
              </a>
            </div>
            <div className="hero-image">
              <img src={Banner} alt="Hero" />
            </div>
          </div>
        </div>

        {/* NEW: CATEGORIES SECTION IN HOME PAGE */}
        <section className="home-categories-section"> {/* UNCOMMENTED THIS BLOCK */}
          <h2 className="section-title">Telusuri Kategori Pilihan</h2>
          <Categories />
        </section>

        {/* Product Section */}
        <h1 className="home-title" id="produk">
          Produk Barang Bekas Anak Kos
        </h1>
        <div className="product-container">
          {products.slice(0, 10).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {products.length === 0 && (
          <p className="no-products-msg">Tidak ada produk tersedia saat ini.</p>
        )}
      </div>
      <Footer />
    </div>
  );
}

export default Home;