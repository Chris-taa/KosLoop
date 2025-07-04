// src/pages/Profile.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
// Jika Navbar dan Footer sudah di App.js, tidak perlu import di sini

import './CSS/Profile.css';

function Profile() {
    const [selectedTab, setSelectedTab] = useState('biodata');

    // Dummy data untuk Biodata Diri
    const [biodata, setBiodata] = useState({
        name: "ZeroTube HD",
        birthDate: "Tambah Tanggal Lahir",
        gender: "Pria",
        email: "christianhadi189@gmail.com",
        phone: "6285858905205",
        profileImage: "https://images.tokopedia.net/img/cache/200-square/VqbcmM/2021/11/18/abcde123-4567-8901-2345-67890abcdef.jpg", // Gambar profile dummy
    });

    // Dummy data untuk Daftar Alamat
    const [addresses, setAddresses] = useState([
        {
            id: 'rumah-utama',
            type: 'Rumah',
            isPrimary: true,
            recipient: 'ZeroTube HD',
            phone: '6285858905205',
            fullAddress: 'jlm', // Ini bisa diperluas jadi street, city, postal code dll.
            isPinned: true, // Sudah Pinpoint
        },
        // Tambahkan alamat dummy lain jika perlu
        {
            id: 'kantor-cabang',
            type: 'Kantor',
            isPrimary: false,
            recipient: 'ZeroTube Project',
            phone: '6281234567890',
            fullAddress: 'Jl. Raya Denpasar No. 123',
            isPinned: false,
        },
    ]);

    const handleTabChange = (tab) => {
        setSelectedTab(tab);
    };

    // Fungsi dummy untuk mengubah biodata
    const handleEditBiodata = (field) => {
        alert(`Fungsi edit ${field} akan ditambahkan di sini.`);
        // Di aplikasi nyata, ini akan membuka modal atau form input
    };

    // Fungsi dummy untuk mengubah alamat
    const handleEditAddress = (addressId) => {
        alert(`Fungsi edit alamat ${addressId} akan ditambahkan di sini.`);
    };

    // Fungsi dummy untuk tambah alamat baru
    const handleAddAddress = () => {
        alert('Fungsi tambah alamat baru akan ditambahkan di sini.');
    };

    return (
        <>
            {/* Navbar akan dirender dari App.js */}
            <div className="profile-page-container">
                <div className="profile-sidebar">
                    <div className="profile-avatar-section">
                        <img src={biodata.profileImage} alt="Profile" className="profile-avatar" />
                        <p className="profile-name-sidebar">ZeroTube HD</p> {/* Atau ambil dari biodata.name */}
                        <div className="profile-rating">
                            <i className="fas fa-star"></i> 5.0
                        </div>
                    </div>
                    <div className="sidebar-menu">
                        <h4 className="sidebar-menu-title">Kotak Masuk</h4>
                        <ul>
                            <li><Link to="/chat">Chat</Link></li>
                            <li><Link to="/discussion">Diskusi Produk</Link></li>
                            <li><Link to="/reviews">Ulasan</Link></li>
                            <li><Link to="/help">Pesan Bantuan</Link></li>
                            <li><Link to="/complaints">Pesanan Dikomplain</Link></li>
                        </ul>
                        <h4 className="sidebar-menu-title">Akun</h4>
                        <ul>
                            <li className={selectedTab === 'biodata' ? 'active' : ''} onClick={() => handleTabChange('biodata')}>Biodata Diri</li>
                            <li className={selectedTab === 'addresses' ? 'active' : ''} onClick={() => handleTabChange('addresses')}>Daftar Alamat</li>
                            {/* Sisanya diabaikan sesuai permintaan */}
                        </ul>
                    </div>
                </div>

                <div className="profile-content">
                    <div className="profile-tabs-header">
                        {/* Tab header di sini bisa menjadi redundan jika sidebar sudah berfungsi sebagai tab */}
                        {/* Namun, sesuai gambar, ada tab di bagian atas juga */}
                        <button className={selectedTab === 'biodata' ? 'active' : ''} onClick={() => handleTabChange('biodata')}>Biodata Diri</button>
                        <button className={selectedTab === 'addresses' ? 'active' : ''} onClick={() => handleTabChange('addresses')}>Daftar Alamat</button>
                    </div>

                    <div className="tab-content">
                        {selectedTab === 'biodata' && (
                            <div className="biodata-diri-section">
                                <h3>Ubah Biodata Diri</h3>
                                <div className="biodata-item">
                                    <span className="biodata-label">Nama</span>
                                    <span className="biodata-value">{biodata.name}</span>
                                    <button className="edit-button" onClick={() => handleEditBiodata('name')}>Ubah</button>
                                </div>
                                <div className="biodata-item">
                                    <span className="biodata-label">Tanggal Lahir</span>
                                    <span className="biodata-value">{biodata.birthDate}</span>
                                    <button className="add-button" onClick={() => handleEditBiodata('birthDate')}>Tambah Tanggal Lahir</button>
                                </div>
                                <div className="biodata-item">
                                    <span className="biodata-label">Jenis Kelamin</span>
                                    <span className="biodata-value">{biodata.gender}</span>
                                    <button className="edit-button" onClick={() => handleEditBiodata('gender')}>Ubah</button>
                                </div>

                                <h3 className="section-title">Ubah Kontak</h3>
                                <div className="biodata-item">
                                    <span className="biodata-label">Email</span>
                                    <span className="biodata-value">{biodata.email}</span>
                                    <span className="status-badge verified">Terverifikasi</span>
                                    <button className="edit-button" onClick={() => handleEditBiodata('email')}>Ubah</button>
                                </div>
                                <div className="biodata-item">
                                    <span className="biodata-label">Nomor HP</span>
                                    <span className="biodata-value">{biodata.phone}</span>
                                    <span className="status-badge verified">Terverifikasi</span>
                                    <button className="edit-button" onClick={() => handleEditBiodata('phone')}>Ubah</button>
                                </div>

                                {/* Bagian Pilih Foto */}
                                <div className="upload-photo-section">
                                    <img src={biodata.profileImage} alt="Profile preview" className="uploaded-photo-preview" />
                                    <button className="choose-photo-button">Pilih Foto</button>
                                    <p className="photo-info">Besar file maksimum 10.000.000 bytes (10 Megabytes).</p>
                                    <p className="photo-info">Ekstensi file yang diperbolehkan: JPG, JPEG, PNG.</p>
                                </div>
                            </div>
                        )}

                        {selectedTab === 'addresses' && (
                            <div className="daftar-alamat-section">
                                <div className="search-address-bar">
                                    <input type="text" placeholder="Tulis Nama Alamat / Kota / Kecamatan tujuan pengiriman" />
                                    <button className="add-new-address-button" onClick={handleAddAddress}>+ Tambah Alamat Baru</button>
                                </div>
                                <div className="address-filters">
                                    <button className="address-filter-button active">Semua Alamat</button>
                                    <button className="address-filter-button">Dari Teman</button>
                                </div>

                                <div className="address-list">
                                    {addresses.map(address => (
                                        <div key={address.id} className={`address-card ${address.isPrimary ? 'primary' : ''}`}>
                                            <div className="address-header">
                                                <span className="address-type">{address.type}</span>
                                                {address.isPrimary && <span className="address-status">Utama</span>}
                                            </div>
                                            <p className="address-recipient">{address.recipient}</p>
                                            <p className="address-phone">{address.phone}</p>
                                            <p className="address-full">{address.fullAddress}</p>
                                            <div className="address-actions">
                                                {address.isPinned && <span className="pinpoint-status"><i className="fas fa-map-marker-alt"></i> Sudah Pinpoint</span>}
                                                <div className="action-buttons-group">
                                                    <button className="share-address-button"><i className="fas fa-share-alt"></i> Share</button>
                                                    <button className="edit-address-button" onClick={() => handleEditAddress(address.id)}>Ubah Alamat</button>
                                                </div>
                                            </div>
                                            <div className="address-card-indicator">
                                                {/* Ini adalah centang hijau di pojok kanan atas */}
                                                <i className="fas fa-check"></i>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
            {/* Footer akan dirender dari App.js */}
        </>
    );
}

export default Profile;