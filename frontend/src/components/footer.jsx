import React from 'react';
import './CSS/Footer.css'; // Make sure to create this CSS file with the styles below

// Import your local images. Replace these paths with your actual image paths.
// Example:
import pciBadge from './Assets/user-placeholder.png';
import bsiBadge from './Assets/user-placeholder.png';
import isoBadge from './Assets/user-placeholder.png';
import facebookIcon from './Assets/user-placeholder.png';
import twitterIcon from './Assets/user-placeholder.png';
import instagramIcon from './Assets/user-placeholder.png';
import pinterestIcon from './Assets/user-placeholder.png';
import qrCode from './Assets/user-placeholder.png'; // Make sure you have a QR code for KosLoop
import googlePlay from './Assets/user-placeholder.png';
import appStore from './Assets/user-placeholder.png';
import appGallery from './Assets/user-placeholder.png';


const Footer = () => {
    return (
        <footer className="kosloop-footer">
            <div className="footer-content">
                <div className="footer-section">
                    <h3>KosLoop</h3>
                    <ul>
                        <li><a href="#">Tentang KosLoop</a></li>
                        <li><a href="#">Hak Kekayaan Intelektual</a></li>
                        <li><a href="#">Karir</a></li>
                        <li><a href="#">Blog</a></li>
                        <li><a href="#">KosLoop Affiliate Program</a></li>
                        <li><a href="#">KosLoop B2B Digital</a></li>
                        <li><a href="#">KosLoop Marketing Solutions</a></li>
                        <li><a href="#">Kalkulator Indeks Masa Tubuh</a></li>
                        <li><a href="#">KosLoop Farma</a></li>
                        <li><a href="#">Promo Hari Ini</a></li>
                        <li><a href="#">Beli Lokal</a></li>
                        <li><a href="#">Promo Guncang</a></li>
                    </ul>
                </div>

                <div className="footer-section">
                    <h3>Beli</h3>
                    <ul>
                        <li><a href="#">Tagihan & Top Up</a></li>
                        <li><a href="#">KosLoop COD</a></li>
                        <li><a href="#">Bebas Ongkir</a></li>
                    </ul>
                    <h3>Jual</h3>
                    <ul>
                        <li><a href="#">Pusat Edukasi Seller</a></li>
                        <li><a href="#">Daftar Mall</a></li>
                    </ul>
                    <h3>Bantuan dan Panduan</h3>
                    <ul>
                        <li><a href="#">KosLoop Care</a></li>
                        <li><a href="#">Syarat dan Ketentuan</a></li>
                        <li><a href="#">Kebijakan Privasi</a></li>
                    </ul>
                </div>

                <div className="footer-section footer-security">
                    <h3>Keamanan & Privasi</h3>
                    <div className="security-badges">
                        <img src={pciBadge} alt="PCI Compliant" className="security-badge" />
                        <img src={bsiBadge} alt="BSI Standard" className="security-badge" />
                        <img src={isoBadge} alt="ISO Certified" className="security-badge" />
                    </div>
                    <h3>Ikuti Kami</h3>
                    <div className="social-icons">
                        <a href="#" className="social-icon facebook" aria-label="Facebook"><img src={facebookIcon} alt="Facebook" /></a>
                        <a href="#" className="social-icon twitter" aria-label="Twitter"><img src={twitterIcon} alt="Twitter" /></a>
                        <a href="#" className="social-icon instagram" aria-label="Instagram"><img src={instagramIcon} alt="Instagram" /></a>
                        <a href="#" className="social-icon pinterest" aria-label="Pinterest"><img src={pinterestIcon} alt="Pinterest" /></a>
                    </div>
                </div>

                <div className="footer-section footer-app">
                    <h3>Nikmati keuntungan spesial di aplikasi:</h3>
                    <div className="app-feature">
                        <span className="icon">💸</span> Diskon 70%* hanya di aplikasi
                    </div>
                    <div className="app-feature">
                        <span className="icon">✨</span> Promo khusus aplikasi
                    </div>
                    <div className="app-feature">
                        <span className="icon">🚚</span> Gratis Ongkir tiap hari
                    </div>

                    <p>Buka aplikasi dengan scan QR atau klik tombol:</p>
                    <div className="app-qr-download">
                        <img src={qrCode} alt="Download KosLoop App QR Code" className="qr-code" />
                        <div className="download-buttons">
                            <a href="#" aria-label="Google Play"><img src={googlePlay} alt="Google Play" /></a>
                            <a href="#" aria-label="App Store"><img src={appStore} alt="App Store" /></a>
                            <a href="#" aria-label="AppGallery"><img src={appGallery} alt="AppGallery" /></a>
                        </div>
                    </div>
                    <a href="#" className="learn-more">Pelajari Selengkapnya →</a>
                </div>
            </div>

            <div className="footer-bottom">
                <p>&copy; 2009 - 2025, PT. KosLoop. All Rights Reserved.</p>
                <div className="footer-links-bottom">
                    <a href="#">KosLoop Care</a>
                </div>
                <div className="language-selector">
                    <button className="lang-button active">Indonesia</button>
                    <button className="lang-button">English</button>
                </div>
            </div>
        </footer>
    );
};

export default Footer;