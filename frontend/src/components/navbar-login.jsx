import React, { useState } from 'react'; // Import useState for local demo
import './CSS/navbar.css';
import { Link } from 'react-router-dom';
import userPlaceholder from './Assets/user-placeholder.png'; // Make sure you have a placeholder image

const Navbar_login = () => {
  // For demonstration: replace with actual login state management (e.g., from context, Redux)
  const [isLoggedIn, setIsLoggedIn] = useState(true); // Set to true for logged-in view initially
  const userName = "John Doe"; // Replace with actual user name

  return (
    <nav className="navbar">
      {/* Kolom Kiri */}
      <div className="navbar-left">
        <div className="navbar-logo">
          <Link to="/">KosLoop</Link>
        </div>
        <div className="navbar-search">
          <input type="text" placeholder="Cari barang..." />
          <i className="fas fa-search search-icon"></i>
        </div>
      </div>

      {/* Kolom Tengah */}
      <div className="navbar-center">
        <ul>
          <li><Link to="/products">Produk</Link></li>
          <li><Link to="/categories">Kategori</Link></li>
          <li><Link to="/about">Tentang</Link></li>
        </ul>
      </div>

      {/* Kolom Kanan - Conditional Rendering */}
      <div className="navbar-right">
        <ul>
          <li><Link to="/cart"><i className="fas fa-shopping-cart"></i></Link></li>

          {isLoggedIn ? (
            // Render this if user is logged in
            <li className="user-profile">
              <Link to="/profile">
                <span className="username">{userName}</span>
                <img src={userPlaceholder} alt="Profile" className="profile-pic" />
              </Link>
            </li>
          ) : (
            // Render this if user is NOT logged in (your current Masuk/Daftar)
            <>
              <li className="outline-button"><Link to="/login">Masuk</Link></li>
              <li className="enter"><Link to="/register">Daftar</Link></li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar_login;