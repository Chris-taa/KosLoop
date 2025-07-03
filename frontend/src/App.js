import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import NotFound from './pages/NotFound';
import About from './pages/About'; // Menggunakan komponen About yang sebenarnya
import Product from './pages/Product'; // Menggunakan komponen Product yang sebenarnya

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        
        {/* Rute untuk halaman login dan registrasi */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        
        {/* Rute halaman yang dilindungi (misalnya, setelah login) */}
        <Route path="/dashboard" element={<Dashboard />} />
        
        {/* Rute untuk halaman sebenarnya */}
        <Route path="/products" element={<Product />} />
        <Route path="/categories" element={<Product/>} /> {/* Rute ini akan menampilkan komponen Categories secara penuh */}
        <Route path="/about" element={<About />} />
        
        {/* Fallback 404 - pastikan ini adalah rute terakhir di dalam Routes */}
        <Route path="*" element={<NotFound />} /> 
      </Routes>
    </Router>
  );
}

export default App;