import React from 'react';
import './CSS/ProductCard.css'; // You'll create this CSS file next

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <div className="product-card-image-wrapper">
        <img src={product.image} alt={product.name} className="product-image" />
        {product.isFlashSale && <span className="badge flash-sale">Flash Sale</span>}
        {product.discount && <span className="badge discount">{product.discount}</span>}
      </div>
      <div className="product-info">
        <h3 className="product-name">{product.name}</h3>
        {product.originalPrice && (
          <p className="product-original-price">Rp{product.originalPrice.toLocaleString('id-ID')}</p>
        )}
        <p className="product-current-price">Rp{product.currentPrice.toLocaleString('id-ID')}</p>
        <div className="product-meta">
          <span className="product-rating">⭐ {product.rating.toFixed(1)}</span>
          <span className="product-sold">• {product.soldCount}</span>
        </div>
        <p className="product-location">📍 {product.location}</p>
        {product.hasGift && <span className="product-tag gift">Hadiah Gratis</span>}
        {product.isCOD && <span className="product-tag cod">Bisa COD</span>}
      </div>
    </div>
  );
};

export default ProductCard; // Export the component so it can be imported elsewhere