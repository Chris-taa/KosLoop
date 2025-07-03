import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import "./CSS/Register.css";
import register_icon from "./Assets/register-icon.png";

function Register() {
  const [username, setUsername] = useState("");
  const [namaLengkap, setNamaLengkap] = useState("");
  const [email, setEmail] = useState("");
  const [noHp, setNoHp] = useState("");
  const [address, setAddress] = useState(""); // 🔹 Tambah state address
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    if (password !== confirmPassword) {
      setError("Kata sandi dan konfirmasi kata sandi tidak cocok.");
      setLoading(false);
      return;
    }

    try {
      const res = await axios.post(
        "https://65f1-103-47-133-123.ngrok-free.app/api/auth/register",
        {
          username,
          namaLengkap,
          email,
          password,
          phoneNumber: noHp,
          address, // 🔹 Kirim address ke backend
        }
      );

      alert("Registrasi berhasil! Silakan login.");
      navigate("/login");
    } catch (err) {
      console.error(
        "Registration error:",
        err.response ? err.response.data : err.message
      );
      setError(
        err.response?.data?.message ||
          "Registrasi gagal. Pastikan semua kolom diisi dengan benar."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="register-page">
      <div className="register-left">
        <img
          src={register_icon}
          alt="KosLoop Illustration"
          className="register-illustration"
        />
        <h2 className="register-tagline">Jual Beli Barang Kebutuhan Kos</h2>
        <p className="register-description">
          Gabung dan rasakan kemudahan bertransaksi di KosLoop
        </p>
      </div>

      <div className="register-right">
        <div className="register-card">
          <h3 className="register-title">Daftar Sekarang</h3>
          <p className="login-prompt">
            Sudah punya akun KosLoop?{" "}
            <Link to="/login" className="login-link">
              Masuk
            </Link>
          </p>

          <form onSubmit={handleSubmit} className="register-form">
            {error && <p className="error-message">{error}</p>}

            <div className="input-group">
              <label htmlFor="namaLengkap">Nama Lengkap</label>
              <input
                id="namaLengkap"
                type="text"
                value={namaLengkap}
                onChange={(e) => setNamaLengkap(e.target.value)}
                placeholder="Masukkan nama lengkap Anda"
                required
                className="register-input"
                disabled={loading}
              />
            </div>

            <div className="input-group">
              <label htmlFor="username">Nama Pengguna</label>
              <input
                id="username"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Pilih nama pengguna Anda"
                required
                className="register-input"
                disabled={loading}
              />
            </div>

            <div className="input-group">
              <label htmlFor="email">E-mail</label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Contoh: email@kosloop.com"
                required
                className="register-input"
                disabled={loading}
              />
            </div>

            <div className="input-group">
              <label htmlFor="phoneNumber">Nomor HP</label>
              <input
                id="phoneNumber"
                type="tel"
                value={noHp}
                onChange={(e) => setNoHp(e.target.value)}
                placeholder="Contoh: 081234567890"
                required
                className="register-input"
                disabled={loading}
              />
            </div>

            <div className="input-group">
              <label htmlFor="address">Alamat</label> {/* 🔹 Input alamat */}
              <input
                id="address"
                type="text"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                placeholder="Contoh: Jalan Mawar No. 99"
                required
                className="register-input"
                disabled={loading}
              />
            </div>

            {/* Password */}
            <div className="input-group password-input-container">
              <label htmlFor="password">Kata Sandi</label>
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Masukkan kata sandi (min. 6 karakter)"
                required
                className="register-input"
                disabled={loading}
              />
              <span
                className="password-toggle"
                onClick={() => setShowPassword(!showPassword)}
              >
                <i
                  className={showPassword ? "fas fa-eye-slash" : "fas fa-eye"}
                ></i>
              </span>
            </div>

            {/* Confirm Password */}
            <div className="input-group password-input-container">
              <label htmlFor="confirm-password">Konfirmasi Kata Sandi</label>
              <input
                id="confirm-password"
                type={showConfirmPassword ? "text" : "password"}
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Konfirmasi kata sandi Anda"
                required
                className="register-input"
                disabled={loading}
              />
              <span
                className="password-toggle"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              >
                <i
                  className={
                    showConfirmPassword ? "fas fa-eye-slash" : "fas fa-eye"
                  }
                ></i>
              </span>
            </div>

            <button
              type="submit"
              className="register-button"
              disabled={loading}
            >
              {loading ? "Mendaftar..." : "Daftar"}
            </button>
          </form>

          <p className="terms-privacy">
            Dengan mendaftar, saya menyetujui{" "}
            <Link to="/terms" className="terms-link">
              Syarat & Ketentuan
            </Link>{" "}
            serta{" "}
            <Link to="/privacy" className="privacy-link">
              Kebijakan Privasi KosLoop
            </Link>
            .
          </p>
        </div>
      </div>
    </div>
  );
}

export default Register;
