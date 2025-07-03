import React, { useState, useEffect } from 'react';
import './CSS/navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  // State to track if the page has been scrolled
  const [scrolled, setScrolled] = useState(false);

  // Effect to add and clean up the scroll event listener
  useEffect(() => {
    const handleScroll = () => {
      // Check if the scroll position is greater than 50px (you can adjust this value)
      const isScrolled = window.scrollY > 50;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    // Add the event listener when the component mounts
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]); // Re-run effect if 'scrolled' state changes

  return (
    // Dynamically apply 'scrolled' or 'transparent' class based on the state
    <nav className={`navbar ${scrolled ? 'scrolled' : 'transparent'}`}>
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

      {/* Kolom Kanan */}
      <div className="navbar-right">
        <ul>
          <li><Link to="/cart"><i className="fas fa-shopping-cart"></i></Link></li>
          <li className="outline-button"><Link to="/login">Masuk</Link></li>
          <li className="enter"><Link to="/register">Daftar</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;