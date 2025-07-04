// src/App.js
import React, { useState } from 'react'; // Import useState
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/navbar';
import NavbarLogin from './components/navbar-login';
import Footer from './components/footer';
import FloatingChatButton from './components/FloatingChat'; // <-- IMPORT FloatingChatButton
import ChatPopup from './components/ChatPopUp'; // <-- IMPORT ChatPopup (jika ini untuk chat umum)

import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import NotFound from './pages/NotFound';
import About from './pages/About';
import Product from './pages/Product';
import Detail from './pages/Detail';
import Cart from './pages/Cart';

function App() {
  const [isGlobalChatPopupOpen, setIsGlobalChatPopupOpen] = useState(false);

  // Dummy product data for the global chat popup, if it's not product-specific.
  // Or you can make ChatPopup smarter to handle null productData for general chat.
  const defaultChatProductData = {
    name: "General Inquiry",
    price: 0,
    image: "https://via.placeholder.com/60?text=Chat", // Placeholder image
    shopName: "Customer Service",
  };

  return (
    <Router>
      <Navbar />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/products" element={<Product />} />
          <Route path="/products/:id" element={<Detail />} />
          <Route path="/categories" element={<Product/>} />
          <Route path="/about" element={<About />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      <Footer />

      {/* Tombol chat mengambang global */}
      <FloatingChatButton onClick={() => setIsGlobalChatPopupOpen(true)} />

      {/* Global Chat Popup (jika diperlukan untuk chat umum) */}
      <ChatPopup
        isOpen={isGlobalChatPopupOpen}
        onClose={() => setIsGlobalChatPopupOpen(false)}
        productData={defaultChatProductData} // Meneruskan data produk default
      />
    </Router>
  );
}

export default App;