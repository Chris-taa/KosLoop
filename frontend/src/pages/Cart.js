// src/pages/Cart.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';

import './CSS/Cart.css';

function Cart() {
    // Dummy data untuk item di keranjang
    const [cartItems, setCartItems] = useState([
        {
            id: 1,
            shopName: "TokoTeknoPro",
            shopId: "tokoteknopro-id",
            discountPercentage: "33%",
            name: "Fantech WGP15 V2s / WGP-15V2s / EOS PRO II S / EOS PRO 2 S Wireless Multiplatform Gamepad Joystick WGP15 Orion",
            image: "https://images.tokopedia.net/img/cache/300/VqbcmM/2023/11/14/b42784ae-f418-4033-a3b0-6813ce8288cf.jpg",
            originalPrice: 699000,
            currentPrice: 399000,
            quantity: 1,
            isSelected: true,
        },
        {
            id: 2,
            shopName: "TokoTeknoPro",
            shopId: "tokoteknopro-id",
            discountPercentage: "20%",
            name: "Keyboard Gaming Mechanical RGB XPro",
            image: "https://images.tokopedia.net/img/cache/300/VqbcmM/2023/10/01/a1b2c3d4-e5f6-7890-abcd-efgh12345678.jpg",
            originalPrice: 800000,
            currentPrice: 640000,
            quantity: 2,
            isSelected: true,
        },
        {
            id: 3,
            shopName: "Elektronik Murah",
            shopId: "elektronik-murah-id",
            discountPercentage: "10%",
            name: "Smartwatch X-Band Pro",
            image: "https://images.tokopedia.net/img/cache/300/VqbcmM/2023/09/01/567890ab-cdef-1234-5678-90abcdef12.jpg",
            originalPrice: 400000,
            currentPrice: 360000,
            quantity: 1,
            isSelected: false,
        },
    ]);

    const [recommendedProducts, setRecommendedProducts] = useState([]);

    useEffect(() => {
        const dummyRecommendations = [
            {
                id: 201, name: "Robot M205 Wireless Optical Mouse", image: "https://images.tokopedia.net/img/cache/300/VqbcmM/2023/12/12/35799988-2921-4f9e-a0e2-63630f9d6c17.jpg", currentPrice: 35900, rating: 4.9, soldCount: "250+ terjual", location: "Jakarta Pusat", isFlashSale: false, discount: null, hasGift: true, isCOD: true,
            },
            {
                id: 202, name: "FANTECH TWS Earbuds True Wireless Stereo", image: "https://images.tokopedia.net/img/cache/300/VqbcmM/2023/12/13/a1e0b57e-61e8-4034-9279-d102e3b4a2e5.jpg", currentPrice: 99000, originalPrice: 150000, rating: 4.7, soldCount: "100+ terjual", location: "Bandung", isFlashSale: true, discount: "Disc 30%", hasGift: false, isCOD: false,
            },
            {
                id: 203, name: "Anker PowerCore Essential 20000mAh", image: "https://images.tokopedia.net/img/cache/300/VqbcmM/2023/11/20/c2c54483-e1a5-4f3b-b70d-034e320f7f2d.jpg", currentPrice: 389000, rating: 4.8, soldCount: "80+ terjual", location: "Surabaya", isFlashSale: false, discount: null, hasGift: true, isCOD: true,
            },
            {
                id: 204, name: "Topi Baseball Casual 'C'est la vie'", image: "https://images.tokopedia.net/img/cache/300/VqbcmM/2023/10/25/0a123456-7890-abcd-efgh-1234567890ab.jpg", currentPrice: 75000, rating: 4.6, soldCount: "40+ terjual", location: "Yogyakarta", isFlashSale: false, discount: null, hasGift: false, isCOD: true,
            },
            {
                id: 205, name: "Headset Gaming Stereo RGB Terbaik", image: "https://images.tokopedia.net/img/cache/300/VqbcmM/2023/09/10/fedcba98-7654-3210-abcd-efgh12345678.jpg", currentPrice: 199000, originalPrice: 250000, rating: 4.7, soldCount: "60+ terjual", location: "Jakarta Utara", isFlashSale: true, discount: "Disc 20%", hasGift: false, isCOD: false,
            },
            {
                id: 206, name: "Keyboard Mekanik Mini RGB", image: "https://images.tokopedia.net/img/cache/300/VqbcmM/2023/08/01/98765432-10fe-dcba-9876-543210fedcba.jpg", currentPrice: 450000, rating: 4.9, soldCount: "30+ terjual", location: "Bekasi", isFlashSale: false, discount: null, hasGift: true, isCOD: true,
            },
            {
                id: 207, name: "Mousepad Gaming Besar Speed Edition", image: "https://images.tokopedia.net/img/cache/300/VqbcmM/2023/07/15/abcdef12-3456-7890-abcd-efgh12345678.jpg", currentPrice: 65000, rating: 4.5, soldCount: "150+ terjual", location: "Tangerang", isFlashSale: false, discount: null, hasGift: false, isCOD: false,
            },
        ];
        setRecommendedProducts(dummyRecommendations);
    }, []);

    const handleQuantityChange = (itemId, delta) => {
        setCartItems(prevItems =>
            prevItems.map(item =>
                item.id === itemId
                    ? { ...item, quantity: Math.max(1, item.quantity + delta) }
                    : item
            )
        );
    };

    const handleItemSelection = (itemId) => {
        setCartItems(prevItems =>
            prevItems.map(item =>
                item.id === itemId ? { ...item, isSelected: !item.isSelected } : item
            )
        );
    };

    const handleSelectAll = () => {
        const allSelected = cartItems.every(item => item.isSelected);
        setCartItems(prevItems =>
            prevItems.map(item => ({ ...item, isSelected: !allSelected }))
        );
    };

    const handleShopSelection = (shopId) => {
        const isShopSelected = cartItems.filter(item => item.shopId === shopId).every(item => item.isSelected);
        setCartItems(prevItems =>
            prevItems.map(item =>
                item.shopId === shopId ? { ...item, isSelected: !isShopSelected } : item
            )
        );
    };

    const handleDeleteSelected = () => {
        setCartItems(prevItems => prevItems.filter(item => !item.isSelected));
    };

    // Mengelompokkan item berdasarkan toko
    const groupedCartItems = cartItems.reduce((acc, item) => {
        if (!acc[item.shopId]) {
            acc[item.shopId] = {
                shopName: item.shopName,
                shopId: item.shopId,
                items: [],
            };
        }
        acc[item.shopId].items.push(item);
        return acc;
    }, {});

    // Menghitung apakah semua item dalam toko dipilih atau tidak
    Object.keys(groupedCartItems).forEach(shopId => {
        groupedCartItems[shopId].isSelected = groupedCartItems[shopId].items.every(item => item.isSelected);
    });

    const selectedItems = cartItems.filter(item => item.isSelected);
    const subtotal = selectedItems.reduce((sum, item) => sum + item.currentPrice * item.quantity, 0);

    return (
        <>
            <div className="cart-page-container">
                <div className="cart-content">
                    <div className="cart-header">
                        <h2>Keranjang</h2>
                    </div>

                    <div className="cart-items-section">
                        <div className="cart-actions">
                            <label className="select-all-checkbox">
                                <input
                                    type="checkbox"
                                    checked={cartItems.length > 0 && cartItems.every(item => item.isSelected)}
                                    onChange={handleSelectAll}
                                />
                                Pilih Semua ({selectedItems.length})
                            </label>
                            <button className="delete-selected-btn" onClick={handleDeleteSelected}>Hapus</button>
                        </div>

                        {Object.values(groupedCartItems).map(shopGroup => (
                            <div key={shopGroup.shopId} className="cart-shop-group">
                                {/* Header Toko */}
                                <div className="shop-header-row">
                                    <label className="shop-checkbox-label">
                                        <input
                                            type="checkbox"
                                            checked={shopGroup.isSelected}
                                            onChange={() => handleShopSelection(shopGroup.shopId)}
                                        />
                                        <Link to={`/shop/${shopGroup.shopId}`} className="shop-name-link">
                                            <i className="fas fa-store"></i> {shopGroup.shopName}
                                        </Link>
                                    </label>
                                </div>
                                {/* Item-item di dalam toko ini */}
                                {shopGroup.items.map(item => (
                                    <div key={item.id} className="cart-item">
                                        <div className="item-checkbox-col"> {/* Kolom untuk checkbox item */}
                                            <input
                                                type="checkbox"
                                                checked={item.isSelected}
                                                onChange={() => handleItemSelection(item.id)}
                                            />
                                        </div>
                                        <div className="item-details-col"> {/* Kolom untuk detail produk */}
                                            <div className="product-details-content">
                                                <Link to={`/products/${item.id}`} className="product-image-link">
                                                    <img src={item.image} alt={item.name} className="product-image" />
                                                </Link>
                                                <div className="product-info-text">
                                                    {item.discountPercentage && <span className="discount-badge">{item.discountPercentage}</span>}
                                                    <Link to={`/products/${item.id}`} className="product-name">{item.name}</Link>
                                                    {item.originalPrice && (
                                                        <p className="original-price">Rp{item.originalPrice.toLocaleString('id-ID')}</p>
                                                    )}
                                                    <p className="current-price">Rp{item.currentPrice.toLocaleString('id-ID')}</p>
                                                    <div className="item-actions-bottom">
                                                        <div className="item-action-buttons">
                                                            <i className="far fa-heart"></i>
                                                            <i className="far fa-trash-alt" onClick={() => setCartItems(prev => prev.filter(ci => ci.id !== item.id))}></i>
                                                        </div>
                                                        <div className="quantity-control">
                                                            <button onClick={() => handleQuantityChange(item.id, -1)}>-</button>
                                                            <span>{item.quantity}</span>
                                                            <button onClick={() => handleQuantityChange(item.id, 1)}>+</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>

                    <div className="summary-section">
                        <h3>Ringkasan belanja</h3>
                        <div className="summary-row">
                            <span>Total</span>
                            <span className="total-price">Rp{subtotal.toLocaleString('id-ID')}</span>
                        </div>
                        <div className="summary-promo">
                            <i className="fas fa-ticket-alt"></i>
                            <span>1 kupon promo berhasil dipakai</span>
                        </div>
                        <p className="cashback-info">Dapat cashback 25.000</p>
                        <button className="buy-button">Beli ({selectedItems.length})</button>
                    </div>
                </div>

                <div className="recommendations-section">
                    <h3>Rekomendasi untukmu</h3>
                    <div className="recommendations-grid">
                        {recommendedProducts.map(product => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Cart;