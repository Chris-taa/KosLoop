import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import './CSS/Login.css'; // Menggunakan file CSS yang sama untuk autentikasi
import register_icon from './Assets/register-icon.png'; // Menggunakan ikon yang sama

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false); // State for password visibility

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const res = await axios.post('http://localhost:5000/api/users/login', {
        email,
        password,
      });

      // Contoh: Simpan token di localStorage atau context/state management
      localStorage.setItem('token', res.data.token);
      alert('Login berhasil! Selamat datang kembali.');
      navigate('/dashboard'); // Ganti dengan halaman dashboard atau halaman utama setelah login

    } catch (err) {
      console.error('Login error:', err.response ? err.response.data : err.message);
      setError(err.response?.data?.message || 'Login gagal. Email atau kata sandi salah.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-left">
        <img src={register_icon} alt="KosLoop Illustration" className="auth-illustration" />
        <h2 className="auth-tagline">Jual Beli Barang Kebutuhan Kos</h2>
        <p className="auth-description">Gabung dan rasakan kemudahan bertransaksi di KosLoop</p>
      </div>

      <div className="auth-right">
        <div className="auth-card">
          <h3 className="auth-title">Masuk Akun</h3>
          <p className="register-prompt">Belum punya akun KosLoop? <Link to="/register" className="register-link">Daftar Sekarang</Link></p>

          <form onSubmit={handleSubmit} className="auth-form">
            {error && <p className="error-message">{error}</p>}

            <div className="input-group">
              <label htmlFor="email">E-mail</label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Masukkan email Anda"
                required
                className="auth-input" 
                disabled={loading}
              />
            </div>

            {/* Password Input */}
            <div className="input-group password-input-container">
              <label htmlFor="password">Kata Sandi</label>
              <input
                id="password"
                type={showPassword ? 'text' : 'password'}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Masukkan kata sandi Anda"
                required
                className="auth-input"
                disabled={loading}
              />
              <span
                className="password-toggle"
                onClick={() => setShowPassword(!showPassword)}
              >
                <i className={showPassword ? 'fas fa-eye-slash' : 'fas fa-eye'}></i>
              </span>
            </div>
            
            <button type="submit" className="auth-button" disabled={loading}>
              {loading ? 'Memuat...' : 'Masuk'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;