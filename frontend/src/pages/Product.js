// src/pages/Product.js
import React, { useState, useEffect } from 'react';
import ProductCard from '../components/ProductCard';
import './CSS/Product.css';

function Product() {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const dummyProducts = [
      {
        id: 1,
        name: "Lexar SL500 1TB - SSD External Portable USB Type C Original",
        originalPrice: 1469000,
        currentPrice: 1469000,
        discount: null,
        image: "https://picsum.photos/200/300?random=1",
        rating: 5.0,
        soldCount: "250+ terjual",
        location: "Kota Administrasi Jakarta Barat",
        isFlashSale: false,
        hasGift: false,
        isCOD: false,
      },
      {
        id: 2,
        name: "ORICO Magnetic Portable SSD 1TB - USB 3.2 Gen2 - 10Gbps",
        originalPrice: 985000,
        currentPrice: 837250,
        discount: "Flash Sale",
        image: "https://picsum.photos/200/300?random=2",
        rating: 5.0,
        soldCount: "30+ terjual",
        location: "Kota Administrasi Jakarta Utara",
        isFlashSale: true,
        hasGift: false,
        isCOD: false,
      },
      {
        id: 3,
        name: "SanDisk Extreme Portable SSD 2TB - Garansi Resmi",
        originalPrice: 1949000,
        currentPrice: 1870900,
        discount: "4%",
        image: "https://picsum.photos/200/300?random=3",
        rating: 5.0,
        soldCount: "50+ terjual",
        location: "Kota Administrasi Jakarta Pusat",
        isFlashSale: false,
        hasGift: false,
        isCOD: false,
      },
      {
        id: 4,
        name: "KYO PS200E Portable SSD USB 3.2 Gen2 Type-C 500GB",
        originalPrice: 799000,
        currentPrice: 789000,
        discount: null,
        image: "https://picsum.photos/200/300?random=4",
        rating: 4.9,
        soldCount: "500+ terjual",
        location: "Kota Administrasi Jakarta Utara",
        isFlashSale: false,
        hasGift: true,
        isCOD: false,
      },
      {
        id: 5,
        name: "Adata SE760 SSD External USB3.2 Gen2 Type-C 1TB",
        originalPrice: null,
        currentPrice: 645000,
        discount: null,
        image: "https://images.tokopedia.net/img/cache/900/VqbcmM/2024/6/15/8e040051-512c-473d-bb62-58e1778129759.jpg", // Menggunakan gambar spesifik ini untuk demo Detail Page
        rating: 5.0,
        soldCount: "50+ terjual",
        location: "Kab. Sleman",
        isFlashSale: false,
        hasGift: false,
        isCOD: true,
      },
      {
        id: 6,
        name: "KYO PS200E 500GB 1TB 2TB 4TB Portable SSD Original",
        originalPrice: null,
        currentPrice: 749000,
        discount: null,
        image: "https://picsum.photos/200/300?random=6",
        rating: 5.0,
        soldCount: "200+ terjual",
        location: "Kota Administrasi Jakarta Utara",
        isFlashSale: false,
        hasGift: false,
        isCOD: false,
      },
      {
        id: 7,
        name: "APACER AS725 512GB 1TB 2TB Portable SSD Magnetic Original",
        originalPrice: 759000,
        currentPrice: 1196000,
        discount: null,
        image: "https://picsum.photos/200/300?random=7",
        rating: 5.0,
        soldCount: "4 terjual",
        location: "Kab. Sleman",
        isFlashSale: false,
        hasGift: false,
        isCOD: false,
      },
      {
        id: 8,
        name: "Crucial X10 Portable SSD 1TB",
        originalPrice: null,
        currentPrice: 2184000,
        discount: null,
        image: "https://picsum.photos/200/300?random=8",
        rating: 5.0,
        soldCount: "100+ terjual",
        location: "Kota Administrasi Jakarta Barat",
        isFlashSale: false,
        hasGift: false,
        isCOD: false,
      },
      {
        id: 9,
        name: "KYO Mini X 10Gbps Portable SSD Enclosure",
        originalPrice: 999000,
        currentPrice: 788000,
        discount: null,
        image: "https://picsum.photos/200/300?random=9",
        rating: 4.9,
        soldCount: "100+ terjual",
        location: "Kota Administrasi Jakarta Utara",
        isFlashSale: false,
        hasGift: false,
        isCOD: false,
      },
      {
        id: 10,
        name: "SanDisk Portable SSD 2TB 1TB - 5 Tahun Garansi",
        originalPrice: null,
        currentPrice: 1101000,
        discount: null,
        image: "https://picsum.photos/200/300?random=10",
        rating: 5.0,
        soldCount: "100+ terjual",
        location: "Kota Tangerang Selatan",
        isFlashSale: false,
        hasGift: false,
        isCOD: false,
      },
      {
        id: 11,
        name: "SSD Lexar SL600 2TB - SSD External USB Type C",
        originalPrice: null,
        currentPrice: 2546000,
        discount: null,
        image: "https://picsum.photos/200/300?random=11",
        rating: 5.0,
        soldCount: "250+ terjual",
        location: "Kota Administrasi Jakarta Barat",
        isFlashSale: false,
        hasGift: false,
        isCOD: false,
      },
      {
        id: 12,
        name: "SSD ADATA SE880 500GB 1TB 2TB - Original",
        originalPrice: null,
        currentPrice: 1396000,
        discount: null,
        image: "https://picsum.photos/200/300?random=12",
        rating: 5.0,
        soldCount: "100+ terjual",
        location: "Kab. Sleman",
        isFlashSale: false,
        hasGift: false,
        isCOD: false,
      },
    ];
    setProducts(dummyProducts);
  }, []);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
    // Logika filter produk jika diperlukan
  };

  return (
    <>
      <div className="product-page-container">
        {/* Secondary Header/Filter Chips */}
        <div className="secondary-header">
          <div className="filter-chips">
              <button className="chip">Samsung Note 10</button>
              <button className="chip">Charger Mobil</button>
              <button className="chip">Samsung A73</button>
              <button className="chip">Pull Up Bar</button>
              <button className="chip">Hdd 1tb</button>
              <button className="chip">Xbox Series X</button>
          </div>
          <div className="header-misc">
              <span>Gratis Ongkir + Banyak Promo belanja di aplikasi</span>
              <div className="location-picker">
                  <span>Dikirim ke Jakarta Pusat</span>
                  <span className="dropdown-arrow">▼</span>
              </div>
          </div>
        </div>

        {/* Filter and Sort Bar */}
        <div className="filter-sort-bar">
          <div className="filter-buttons">
            <button className="filter-btn">Filter</button>
            <button className="filter-btn">Kategori ▼</button>
            <button className="filter-btn">
              <span role="img" aria-label="power-shop-icon">⭐</span> Power Shop
            </button>
            <button className="filter-btn">4 Keatas</button>
            <button className="filter-btn">Bebas Ongkir</button>
          </div>
          <div className="sort-options">
            <span>Urutkan</span>
            <select className="sort-select">
              <option>Paling Sesuai</option>
              <option>Harga Terendah</option>
              <option>Harga Tertinggi</option>
            </select>
          </div>
        </div>

        {/* Product Grid */}
        <div className="product-grid">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* Tombol Share di pojok kanan bawah */}
        <div className="share-button-fixed">
          <button>
            <span role="img" aria-label="share-icon">↗️</span> Share
          </button>
        </div>

        {/* Tombol Back to Top */}
        <div className="back-to-top-button-fixed">
          <button>Top</button>
        </div>
      </div>
    </>
  );
}

export default Product;