// src/components/ProductCard.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './CSS/ProductCard.css';

const ProductCard = ({ product }) => {
  return (
    // Bungkus seluruh card dengan Link
    <Link to={`/products/${product.id}`} className="product-card-link">
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
            <span className="product-rating">
              <i className="fas fa-star"></i> {product.rating.toFixed(1)}
            </span>
            <span className="product-sold">
              <i className="fas fa-circle"></i> {product.soldCount}
            </span>
          </div>
          <p className="product-location">
            <i className="fas fa-map-marker-alt"></i> {product.location}
          </p>
          <div className="product-tags">
              {product.hasGift && <span className="product-tag gift">
                  <i className="fas fa-gift"></i> Hadiah Gratis
              </span>}
              {product.isCOD && <span className="product-tag cod">
                  <i className="fas fa-money-bill-wave"></i> Bisa COD
              </span>}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;