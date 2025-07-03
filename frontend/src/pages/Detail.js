// src/pages/Detail.js (Tidak ada perubahan signifikan dari versi terakhir Anda yang benar)
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
// import Navbar from '../components/navbar'; // Hapus ini jika sudah di App.js
// import Footer from '../components/footer'; // Hapus ini jika sudah di App.js
import ProductCard from '../components/ProductCard';
import ChatPopup from '../components/ChatPopUp'; // <-- Pastikan path ini benar (ChatPopup, bukan ChatPopUp)

import './CSS/Detail.css';

function Detail() {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [selectedTab, setSelectedTab] = useState('detail');
    const [mainImage, setMainImage] = useState("");
    const [showFullDescription, setShowFullDescription] = useState(false);

    const [reviewFilterMedia, setReviewFilterMedia] = useState('Semua');
    const [reviewFilterRating, setReviewFilterRating] = useState('Semua');
    const [reviewFilterTopic, setReviewFilterTopic] = useState('Semua');
    const [reviewSort, setReviewSort] = useState('Paling Membantu');

    // State untuk ChatPopup spesifik produk
    const [isChatPopupOpen, setIsChatPopupOpen] = useState(false);

    // Dummy data untuk produk rekomendasi
    const [recommendedProducts, setRecommendedProducts] = useState([]);

    useEffect(() => {
        const dummyProductData = {
            id: 5,
            name: "AR Scarlet sv1S sv1V kirlla Ratts Fidough RioLu Greavard Pachirisu",
            price: 45000,
            stock: 1,
            images: [
                "https://images.tokopedia.net/img/cache/900/VqbcmM/2024/6/15/8e040051-512c-473d-bb62-58e178129759.jpg", // Main image
                "https://images.tokopedia.net/img/cache/900/VqbcmM/2024/6/15/d5b4a9a0-f5a6-444a-b970-c441aa37.jpg", // Gambar kedua
                "https://images.tokopedia.net/img/cache/900/VqbcmM/2024/6/15/79a86847-f050-4d57-b2e1-897b7b134b22.jpg" // Gambar ketiga
            ],
            // Pastikan Anda memiliki gambar yang akan digunakan di chat popup
            chatProductImage: "https://images.tokopedia.net/img/cache/300/VqbcmM/2024/6/15/d5b4a9a0-f5a6-444a-b970-c441aa37.jpg", // Contoh gambar untuk chat popup
            minOrder: 1,
            condition: "Baru",
            etalase: "Semua Etalase",
            language: "Japanese",
            set: "sv1S & sv1V (Scarlet Violet)",
            physicalCondition: "Near Mint - Mint",
            fullDescription: `
                Selamat datang di toko kami! Produk ini adalah kartu Pokemon TCG original dengan kondisi Near Mint - Mint.
                Kami sangat memperhatikan kualitas kartu yang kami jual. Setiap kartu telah melalui proses seleksi ketat
                untuk memastikan Anda mendapatkan produk terbaik.

                Detail lebih lanjut:
                - Grade: Unik (berdasarkan standar kami)
                - Tahun Rilis: 2024
                - Seri: Scarlet & Violet Series
                - Tipe Kartu: Basic Pokemon
                - Attack: Energy Drive (20+)
                - Retreat Cost: 1
                - Weakness: Grass x2
                - Resistance: None
                - Ilustrator: Souichirou Gunjima

                Kami menjamin keaslian produk ini. Jika ada pertanyaan lebih lanjut atau Anda ingin melihat foto/video
                detail tambahan, jangan ragu untuk menghubungi admin melalui fitur chat. Kami siap melayani Anda dengan
                senang hati.

                Packaging akan dilakukan dengan sangat aman, menggunakan sleeve, top loader/card saver, bubble wrap,
                dan kotak kardus untuk memastikan kartu tiba di tangan Anda dalam kondisi sempurna.

                Terima kasih telah berbelanja di toko kami! Happy collecting!
            `,
            shopName: "Pokemon Cardz",
            shopRating: 5.0,
            shopReviews: 20,
            shippingLocation: "Kota Administrasi Jakarta Pusat",
            shippingCost: 7500,
            estimatedDelivery: "Tiba 6 - 10 Jul",
            reviews: [
                { id: 1, rating: 5, user: "j***a", variant: "Hijau", comment: "Kualitas produk bagus. Nyaman dipakai. Warnanya cerah sekali. Respon penjual cepat. Rekomended!", image: "https://picsum.photos/80/80?random=100", time: "Lebih dari 1 tahun lalu" },
                { id: 2, rating: 5, user: "m***n", variant: "Biru", comment: "Barang sesuai pesanan, packing aman, pengiriman cepat. Top banget!", image: null, time: "8 bulan lalu" },
                { id: 3, rating: 4, user: "a***i", variant: "Merah", comment: "Lumayan, tapi ada sedikit goresan kecil di bagian belakang.", image: "https://picsum.photos/80/80?random=101", time: "5 bulan lalu" },
                { id: 4, rating: 5, user: "s***y", variant: null, comment: "Keren banget kartunya, mulus! Puas belanja di sini.", image: null, time: "3 bulan lalu" },
                { id: 5, rating: 2, user: "d***o", variant: "Kuning", comment: "Ukuran tidak sesuai deskripsi, agak kecewa.", image: null, time: "1 bulan lalu" },
                { id: 6, rating: 1, user: "p***t", variant: null, comment: "Parah, produk rusak pas sampai, ga bisa dipakai.", image: null, time: "2 minggu lalu" },
                { id: 7, rating: 5, user: "v***a", variant: "Hitam", comment: "Pengemasan rapi dan aman, produk sesuai ekspektasi. Makasih!", image: "https://picsum.photos/80/80?random=102", time: "1 minggu lalu" },
                { id: 8, rating: 5, user: "r***u", variant: null, comment: "Anak saya suka banget, kartunya asli dan bagus. Akan beli lagi.", image: null, time: "3 hari lalu" },
                { id: 9, rating: 5, user: "k***d", variant: "Cokelat", comment: "Mantap, respon penjual cepat dan ramah. Pengiriman juga oke.", image: null, time: "Kemarin" },
                { id: 10, rating: 4, user: "b***t", variant: null, comment: "Oke lah, sesuai harga. Tapi pengiriman agak lama dari estimasi.", image: null, time: "Hari ini" },
                { id: 11, rating: 5, user: "f***e", variant: "Hijau", comment: "Produk bagus. Nyaman dipakai. Warnanya cerah sekali.", image: null, time: "Lebih dari 1 tahun lalu" },
                { id: 12, rating: 5, user: "a***e", variant: "Biru", comment: "Barang sesuai pesanan, packing aman, pengiriman cepat.", image: null, time: "8 bulan lalu" },
                { id: 13, rating: 5, user: "g***s", variant: "Merah", comment: "Sangat direkomendasikan! Penjual responsif dan produk berkualitas.", image: null, time: "5 bulan lalu" },
            ]
        };
        setProduct(dummyProductData);

        // Data dummy untuk rekomendasi produk
        const dummyRecommendedProducts = [
            {
                id: 101, name: "Kartu Pokemon Rare Charizard VMAX", image: "https://picsum.photos/300/300?random=10", currentPrice: 193963, originalPrice: 250000, rating: 4.8, soldCount: "124 terjual", location: "Jakarta Barat", isFlashSale: true, discount: "Disc 20%", hasGift: false, isCOD: true,
            },
            {
                id: 102, name: "Booster Pack Scarlet & Violet Era", image: "https://picsum.photos/300/300?random=11", currentPrice: 95635, rating: 4.5, soldCount: "50+ terjual", location: "Bandung", isFlashSale: false, discount: null, hasGift: true, isCOD: false,
            },
            {
                id: 103, name: "Sleeve Pelindung Kartu Elite Series", image: "https://picsum.photos/300/300?random=12", currentPrice: 75000, originalPrice: 80000, rating: 4.9, soldCount: "200+ terjual", location: "Surabaya", isFlashSale: false, discount: "Disc 5%", hasGift: false, isCOD: true,
            },
            {
                id: 104, name: "Binder Album Koleksi Pokemon", image: "https://picsum.photos/300/300?random=13", currentPrice: 250000, rating: 4.7, soldCount: "75 terjual", location: "Jakarta Pusat", isFlashSale: true, discount: null, hasGift: false, isCOD: false,
            },
            {
                id: 105, name: "Pokemon Deck Box Premium", image: "https://picsum.photos/300/300?random=14", currentPrice: 120000, rating: 4.6, soldCount: "30+ terjual", location: "Depok", isFlashSale: false, discount: null, hasGift: true, isCOD: true,
            },
            {
                id: 106, name: "Figurin Pikachu Edisi Terbatas", image: "https://picsum.photos/300/300?random=15", currentPrice: 88000, originalPrice: 100000, rating: 4.8, soldCount: "90+ terjual", location: "Bekasi", isFlashSale: false, discount: "Disc 12%", hasGift: false, isCOD: false,
            },
        ];
        setRecommendedProducts(dummyRecommendedProducts);

    }, [id]);

    useEffect(() => {
        if (product && product.images.length > 0) {
            setMainImage(product.images[0]);
        }
    }, [product]);

    if (!product) {
        return <div>Loading product details...</div>;
    }

    const getShortDescription = (text, maxLength = 150) => {
        if (!text) return "";
        if (text.length <= maxLength) return text;
        return text.substring(0, text.lastIndexOf(' ', maxLength)) + '...';
    };

    const displayedDescription = showFullDescription ? product.fullDescription : getShortDescription(product.fullDescription);

    const calculateReviewStats = (reviews) => {
        if (!reviews || reviews.length === 0) {
            return {
                averageRating: 0,
                totalRatings: 0,
                totalReviews: 0,
                ratingCounts: { 5: 0, 4: 0, 3: 0, 2: 0, 1: 0 },
                percentageSatisfied: 0,
                reviewsWithMedia: []
            };
        }

        let totalScore = 0;
        let totalRatings = reviews.length;
        let totalReviewsWithComment = 0;
        let ratingCounts = { 5: 0, 4: 0, 3: 0, 2: 0, 1: 0 };
        let reviewsWithMedia = [];

        reviews.forEach(review => {
            totalScore += review.rating;
            ratingCounts[review.rating]++;
            if (review.comment && review.comment.trim() !== '') {
                totalReviewsWithComment++;
            }
            if (review.image) {
                reviewsWithMedia.push(review);
            }
        });

        const averageRating = totalRatings > 0 ? (totalScore / totalRatings) : 0;
        const satisfiedCount = ratingCounts[5] + ratingCounts[4];
        const percentageSatisfied = totalRatings > 0 ? ((satisfiedCount / totalRatings) * 100).toFixed(0) : 0;

        return {
            averageRating,
            totalRatings,
            totalReviews: totalReviewsWithComment,
            ratingCounts,
            percentageSatisfied,
            reviewsWithMedia
        };
    };

    const reviewStats = product ? calculateReviewStats(product.reviews) : calculateReviewStats([]);

    const filteredReviews = product.reviews.filter(review => {
        const matchesMedia = reviewFilterMedia === 'Semua' || (reviewFilterMedia === 'Ada Foto & Video' && review.image);
        const matchesRating = reviewFilterRating === 'Semua' || review.rating.toString() === reviewFilterRating;
        const matchesTopic = reviewFilterTopic === 'Semua';

        return matchesMedia && matchesRating && matchesTopic;
    }).sort((a, b) => {
        if (reviewSort === 'Terbaru') {
            return b.id - a.id;
        } else if (reviewSort === 'Rating Tertinggi') {
            return b.rating - a.rating;
        } else if (reviewSort === 'Rating Terendah') {
            return a.rating - b.rating;
        }
        return 0;
    });

    // Data produk yang akan diteruskan ke ChatPopup
    const chatProductData = {
        name: product.name,
        price: product.price,
        image: product.chatProductImage || product.images[0], // Gunakan gambar khusus chat atau gambar utama
        shopName: product.shopName,
    };


    return (
        <>
            {/* <Navbar /> Karena sudah di App.js */}
            <div className="detail-page-container">
                <div className="detail-product-content">
                    <div className="detail-product-images">
                        <img src={mainImage} alt={product.name} className="main-product-image" />
                        <div className="thumbnail-images">
                            {product.images.map((img, index) => (
                                <img
                                    key={index}
                                    src={img}
                                    alt={`Thumbnail ${index + 1}`}
                                    className={`thumbnail-image ${mainImage === img ? 'active' : ''}`}
                                    onClick={() => setMainImage(img)}
                                />
                            ))}
                        </div>
                    </div>

                    <div className="detail-product-info">
                        <h1 className="product-name">{product.name}</h1>
                        <div className="product-price">
                            Rp{product.price.toLocaleString('id-ID')}
                        </div>

                        <div className="quantity-selector">
                            <span>Atur jumlah dan catatan</span>
                            <div className="quantity-control">
                                <button>-</button>
                                <span>1</span>
                                <button>+</button>
                                <span className="stock-info">Sisa: {product.stock}</span>
                            </div>
                        </div>
                        <div className="subtotal">
                            Subtotal <span className="subtotal-price">Rp{product.price.toLocaleString('id-ID')}</span>
                        </div>
                        <div className="action-buttons">
                            <button className="buy-button">Beli</button>
                            <button className="add-to-cart-button">+ Keranjang</button>
                        </div>

                        <div className="seller-contact">
                            <button className="chat-button" onClick={() => setIsChatPopupOpen(true)}>
                                <i className="fas fa-comment"></i> Chat
                            </button>
                            <button className="wishlist-button">
                                <i className="fas fa-heart"></i> Wishlist
                            </button>
                            <button className="share-button">
                                <i className="fas fa-share-alt"></i> Share
                            </button>
                        </div>
                    </div>
                </div>

                <div className="detail-tabs">
                    <div className="tab-buttons">
                        <button
                            className={selectedTab === 'detail' ? 'active' : ''}
                            onClick={(e) => {
                                e.preventDefault();
                                setSelectedTab('detail');
                            }}
                        >
                            Detail Produk
                        </button>
                        <button
                            className={selectedTab === 'ulasan' ? 'active' : ''}
                            onClick={(e) => {
                                e.preventDefault();
                                setSelectedTab('ulasan');
                            }}
                        >
                            Ulasan Pembeli
                        </button>
                        <button
                            className={selectedTab === 'diskusi' ? 'active' : ''}
                            onClick={(e) => {
                                e.preventDefault();
                                setSelectedTab('diskusi');
                            }}
                        >
                            Diskusi
                        </button>
                        <button
                            className={selectedTab === 'rekomendasi' ? 'active' : ''}
                            onClick={(e) => {
                                e.preventDefault();
                                setSelectedTab('rekomendasi');
                            }}
                        >
                            Rekomendasi
                        </button>
                    </div>
                    <div className="tab-content">
                        {selectedTab === 'detail' && (
                            <div className="product-details-section">
                                <h3>Detail</h3>
                                <p><strong>Kondisi:</strong> {product.condition}</p>
                                <p><strong>Min. Pemesanan:</strong> {product.minOrder} Buah</p>
                                <p><strong>Etalase:</strong> <a href="#">{product.etalase}</a></p>
                                <p><strong>Kartu Pokemon TCG Original</strong></p>
                                <p><strong>Language:</strong> {product.language}</p>
                                <p><strong>Set:</strong> {product.set}</p>
                                <p><strong>Kondisi:</strong> {product.physicalCondition}</p>

                                <div className="product-description-content">
                                    <p dangerouslySetInnerHTML={{ __html: displayedDescription.replace(/\n/g, '<br/>') }}></p>
                                    {product.fullDescription.length > 150 && (
                                        <a
                                            href="#"
                                            className="see-more-link"
                                            onClick={(e) => {
                                                e.preventDefault();
                                                setShowFullDescription(!showFullDescription);
                                            }}
                                        >
                                            {showFullDescription ? 'Ciutkan' : 'Lihat Selengkapnya'}
                                        </a>
                                    )}
                                </div>

                                <p className="note">Kondisi bagus mulus sesuai foto, serious buyer silahkan chat admin jika perlu foto lebih detail.</p>

                                <div className="shop-info">
                                    <div className="shop-header">
                                        <span className="shop-icon">P</span>
                                        <span className="shop-name">{product.shopName}</span>
                                    </div>
                                    <div className="shop-rating">
                                        <i className="fas fa-star"></i> {product.shopRating.toFixed(1)} ({product.shopReviews})
                                    </div>
                                    <button className="follow-button">Follow</button>
                                </div>
                            </div>
                        )}
                        {selectedTab === 'ulasan' && (
                            <div className="product-reviews-section">
                                <div className="review-summary-header">
                                    <div className="overall-rating-score">
                                        <i className="fas fa-star"></i> {reviewStats.averageRating.toFixed(1)} <span className="max-rating">/ 5.0</span>
                                    </div>
                                    <p className="satisfaction-percentage">{reviewStats.percentageSatisfied}% pembeli merasa puas</p>
                                    <p className="rating-review-count">{reviewStats.totalRatings} rating • {reviewStats.totalReviews} ulasan</p>
                                </div>

                                <div className="rating-breakdown-extended">
                                    {[5, 4, 3, 2, 1].map(star => (
                                        <div key={star} className="rating-row-extended">
                                            <span className="star-label">{star} <i className="fas fa-star"></i></span>
                                            <div className="progress-bar-container-extended">
                                                <div
                                                    className="progress-bar-extended"
                                                    style={{ width: `${reviewStats.totalRatings > 0 ? (reviewStats.ratingCounts[star] / reviewStats.totalRatings) * 100 : 0}%` }}
                                                ></div>
                                            </div>
                                            <span className="rating-count">({reviewStats.ratingCounts[star]})</span>
                                        </div>
                                    ))}
                                </div>

                                <p className="review-note">Beli produk ini dan jadilah yang pertama memberikan ulasan</p>

                                <div className="review-filters-and-content">
                                    <div className="review-filters">
                                        <h4 className="filter-heading">FILTER ULASAN</h4>
                                        <div className="filter-dropdown-wrapper">
                                            <div className="filter-label">Media</div>
                                            <select
                                                className="filter-dropdown"
                                                value={reviewFilterMedia}
                                                onChange={(e) => setReviewFilterMedia(e.target.value)}
                                            >
                                                <option value="Semua">Semua</option>
                                                <option value="Ada Foto & Video">Ada Foto & Video</option>
                                            </select>
                                            <i className="fas fa-chevron-down dropdown-icon"></i>
                                        </div>
                                        <div className="filter-dropdown-wrapper">
                                            <div className="filter-label">Rating</div>
                                            <select
                                                className="filter-dropdown"
                                                value={reviewFilterRating}
                                                onChange={(e) => setReviewFilterRating(e.target.value)}
                                            >
                                                <option value="Semua">Semua</option>
                                                <option value="5">Bintang 5</option>
                                                <option value="4">Bintang 4</option>
                                                <option value="3">Bintang 3</option>
                                                <option value="2">Bintang 2</option>
                                                <option value="1">Bintang 1</option>
                                            </select>
                                            <i className="fas fa-chevron-down dropdown-icon"></i>
                                        </div>
                                        <div className="filter-dropdown-wrapper">
                                            <div className="filter-label">Topik Ulasan</div>
                                            <select
                                                className="filter-dropdown"
                                                value={reviewFilterTopic}
                                                onChange={(e) => setReviewFilterTopic(e.target.value)}
                                            >
                                                <option value="Semua">Semua</option>
                                                <option value="Produk">Produk</option>
                                                <option value="Pengiriman">Pengiriman</option>
                                                <option value="Penjual">Penjual</option>
                                            </select>
                                            <i className="fas fa-chevron-down dropdown-icon"></i>
                                        </div>
                                    </div>

                                    <div className="review-list-section">
                                        <h4 className="filter-heading">FOTO & VIDEO PEMBELI</h4>
                                        <div className="buyer-media-gallery">
                                            {reviewStats.reviewsWithMedia.length > 0 ? (
                                                reviewStats.reviewsWithMedia.map(review => (
                                                    <img key={review.id} src={review.image} alt="Review Media" className="buyer-media-thumbnail" />
                                                ))
                                            ) : (
                                                <p className="no-media-text">Belum ada foto & video ulasan.</p>
                                            )}
                                        </div>

                                        <h4 className="filter-heading review-list-heading">ULASAN PILIHAN</h4>
                                        <div className="review-list-header">
                                            <span className="review-count-display">Menampilkan {filteredReviews.length} dari {product.reviews.length} ulasan</span>
                                            <div className="sort-dropdown-wrapper">
                                                <span className="sort-label">Urutkan</span>
                                                <select
                                                    className="sort-dropdown"
                                                    value={reviewSort}
                                                    onChange={(e) => setReviewSort(e.target.value)}
                                                >
                                                    <option value="Paling Membantu">Paling Membantu</option>
                                                    <option value="Terbaru">Terbaru</option>
                                                    <option value="Rating Tertinggi">Rating Tertinggi</option>
                                                    <option value="Rating Terendah">Rating Terendah</option>
                                                </select>
                                                <i className="fas fa-chevron-down dropdown-icon"></i>
                                            </div>
                                        </div>

                                        <div className="actual-review-list">
                                            {filteredReviews.length > 0 ? (
                                                filteredReviews.map(review => (
                                                    <div key={review.id} className="single-review-item">
                                                        <div className="review-header">
                                                            <div className="review-stars">
                                                                {Array(review.rating).fill(null).map((_, i) => (
                                                                    <i key={i} className="fas fa-star gold"></i>
                                                                ))}
                                                                {Array(5 - review.rating).fill(null).map((_, i) => (
                                                                    <i key={i} className="far fa-star grey"></i>
                                                                ))}
                                                            </div>
                                                            <span className="review-time">{review.time}</span>
                                                            <button className="review-options-btn">
                                                                <i className="fas fa-ellipsis-h"></i>
                                                            </button>
                                                        </div>
                                                        <div className="reviewer-info">
                                                            {/* Avatar placeholder - bisa diganti dengan gambar asli */}
                                                            <span className="reviewer-avatar"></span>
                                                            <span className="reviewer-name">{review.user}</span>
                                                        </div>
                                                        {review.variant && <p className="review-variant">Varian: {review.variant}</p>}
                                                        <p className="review-comment">{review.comment}</p>
                                                        {review.image && (
                                                            <div className="review-media-preview">
                                                                <img src={review.image} alt="Review Media" />
                                                            </div>
                                                        )}
                                                    </div>
                                                ))
                                            ) : (
                                                <p className="no-reviews-text">Belum ada ulasan yang sesuai filter.</p>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                        {selectedTab === 'diskusi' && (
                            <div className="product-discussion-section">
                                <h3>Diskusi Produk</h3>
                                <p>Punya pertanyaan lain? Bisa langsung chat penjual aja.</p>
                                <button className="chat-seller-button" onClick={() => setIsChatPopupOpen(true)}>Chat Penjual</button>
                            </div>
                        )}
                        {selectedTab === 'rekomendasi' && (
                            <div className="product-recommendations-section">
                                <h3>Lainnya di toko ini</h3>
                                <div className="recommendations-grid">
                                    {recommendedProducts.map((recProduct) => (
                                        <ProductCard
                                            key={recProduct.id}
                                            product={recProduct}
                                        />
                                    ))}
                                </div>
                                <button className="see-all-recommendations">Lihat Semua</button>

                                <h3>Pilihan lainnya untukmu</h3>
                                <div className="recommendations-grid">
                                    {recommendedProducts.slice().reverse().map((recProduct, index) => (
                                        <ProductCard
                                            key={`other-${recProduct.id}-${index}`}
                                            product={{
                                                ...recProduct,
                                                id: `${recProduct.id}-other`,
                                                name: `Pilihan Lainnya: ${recProduct.name}`,
                                                currentPrice: recProduct.currentPrice + 10000,
                                            }}
                                        />
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                </div>

                {selectedTab === 'detail' && (
                    <>
                        <div className="shipping-info">
                            <h3>Pengiriman</h3>
                            <p>
                                Dikirim dari <strong>{product.shippingLocation}</strong>
                            </p>
                            <p>
                                Ongkir <strong>Rp{product.shippingCost.toLocaleString('id-ID')}</strong>
                            </p>
                            <p>Ekonomi - Estimasi Tiba {product.estimatedDelivery}</p>
                            {/* <a href="#">Lihat Kurir Lainnya</a> Hapus baris ini */}
                        </div>

                        <div className="app-promo-banner">
                            <h3>Beli di aplikasi, makin banyak promo!</h3>
                            <div className="promo-content">
                                <img src="https://images.tokopedia.net/img/promo/qr-code.png" alt="QR Code" />
                                <p>Scan QR-nya untuk lihat barang ini di aplikasi Tokopedia. Bebas ongkir, lho-</p>
                            </div>
                        </div>

                        <div className="report-issue">
                            <p>Ada masalah dengan produk ini?</p>
                            <button className="report-button">Laporan</button>
                        </div>
                    </>
                )}
            </div>
            {/* <Footer /> Karena sudah di App.js */}

            {/* Tambahkan ChatPopup di sini */}
            {product && ( // Render hanya jika product data sudah dimuat
                <ChatPopup
                    isOpen={isChatPopupOpen}
                    onClose={() => setIsChatPopupOpen(false)}
                    productData={chatProductData}
                />
            )}
        </>
    );
}

export default Detail;