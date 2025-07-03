import React from 'react';
import './CSS/About.css'; // Pastikan Anda membuat file CSS ini

const AboutUs = () => {
  return (
    <div className="about-us-page">
      {/* Hero Section - New addition */}
      <section className="hero-section">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1 className="hero-title">From Sustainability To The Future</h1>
          <p className="hero-subtitle">KosLoop</p>
        </div>
      </section>

      {/* Bagian Misi Kami */}
      <section className="about-section mission-section">
        <div className="container">
          <p className="section-subtitle">MISI KAMI</p>
          <h1 className="section-title">Kami ingin merobohkan tembok penghalang untuk memberikan kesempatan yang sama.</h1>
          <p className="section-description">
            KosLoop.ID adalah platform digital berbasis komunitas yang dirancang khusus untuk mahasiswa dan anak kos di Indonesia. Misi kami adalah memberdayakan ekosistem sirkular di lingkungan pendidikan tinggi, di mana siapa pun bisa menjual, membeli, dan memanfaatkan kembali barang layak pakai dengan mudah dan efisien. Kami percaya bahwa setiap barang memiliki cerita dan nilai guna, serta berhak mendapatkan kesempatan kedua.
          </p>
          <button className="read-more-button">Baca Selengkapnya</button>
        </div>
      </section>

      {/* Bagian Tantangan Kami */}
      <section className="about-section challenge-section">
        <div className="container">
          <p className="section-subtitle">TANTANGAN KAMI</p>
          <h2 className="section-title">Pemborosan yang Terabaikan di Lingkungan Mahasiswa</h2>
          <p className="section-description">
            Kehidupan anak kos, meskipun identik dengan efisiensi dan mobilitas, seringkali menyisakan masalah besar: limbah barang bekas layak pakai. Setiap akhir semester atau saat kelulusan, banyak perabotan, elektronik, perlengkapan belajar, dan peralatan dapur yang ditinggalkan begitu saja. Barang-barang ini seringkali berakhir sebagai limbah, padahal masih memiliki nilai guna tinggi dan dapat dimanfaatkan kembali oleh mahasiswa lain yang membutuhkan. Kurangnya platform terintegrasi untuk jual beli barang bekas di kalangan mahasiswa menjadi penghalang utama dalam pemanfaatan kembali ini, berkontribusi pada pemborosan dan peningkatan jejak karbon.
          </p>
        </div>
      </section>

      {/* Bagian Dampak Kami */}
      <section className="about-section impact-section">
        <div className="container">
          <p className="section-subtitle">DAMPAK KAMI</p>
          <h2 className="section-title">Dampak dari komitmen kami terhadap ekonomi sirkular dan keberlanjutan di Indonesia</h2>
          <p className="section-description">
            Kami percaya bahwa setiap transaksi di KosLoop.ID adalah langkah kecil menuju perubahan besar. Dengan memfasilitasi jual beli barang bekas, kami tidak hanya membantu mahasiswa mengelola pengeluaran mereka, tetapi juga secara aktif berkontribusi pada:
          </p>
          <ul className="impact-list">
            <li><strong>Pengurangan Limbah:</strong> Mencegah barang layak pakai berakhir di tempat pembuangan sampah.</li>
            <li><strong>Dukungan Ekonomi Sirkular:</strong> Memperpanjang siklus hidup produk dan mengurangi kebutuhan produksi baru.</li>
            <li><strong>Pemberdayaan Ekonomi Mahasiswa:</strong> Memberikan kesempatan bagi mahasiswa untuk mendapatkan penghasilan tambahan atau membeli kebutuhan dengan harga terjangkau.</li>
            <li><strong>Gaya Hidup Berkelanjutan:</strong> Mendorong kesadaran lingkungan dan kebiasaan konsumsi yang lebih bertanggung jawab di kalangan generasi muda.</li>
          </ul>
          <div className="impact-images">
            {/* Placeholder untuk gambar dampak, bisa diganti dengan tag <img> */}
            <div className="impact-image-item">
              <img src="https://via.placeholder.com/300x200?text=Mahasiswa+dengan+Barang" alt="Mahasiswa dengan Barang" />
              <p>Meningkatkan pemanfaatan barang</p>
            </div>
            <div className="impact-image-item">
              <img src="https://via.placeholder.com/300x200?text=Pengepakan+Barang" alt="Pengepakan Barang" />
              <p>Proses sirkulasi yang mudah</p>
            </div>
            <div className="impact-image-item">
              <img src="https://via.placeholder.com/300x200?text=Pengurangan+Limbah" alt="Pengurangan Limbah" />
              <p>Berkontribusi pada lingkungan</p>
            </div>
          </div>
        </div>
      </section>

      {/* Bagian Budaya Kerja Kami */}
      <section className="about-section culture-section">
        <div className="container">
          <p className="section-subtitle">BUDAYA KERJA KAMI</p>
          <h2 className="section-title">Kesejahteraan Komunitas adalah yang utama</h2>
          <p className="section-description">
            Di KosLoop.ID, kami mengutamakan pembangunan komunitas yang kuat dan kolaboratif. Kami berupaya menciptakan platform yang bukan hanya sekadar tempat bertransaksi, tetapi juga ruang di mana mahasiswa merasa terhubung, aman, dan diberdayakan. Nilai-nilai kami mendorong:
          </p>
          <div className="culture-cards">
            <div className="culture-card">
              <i className="fas fa-users"></i> {/* Ganti dengan ikon yang sesuai */}
              <h3>Budaya Inklusif</h3>
              <p>Setiap mahasiswa memiliki kesempatan yang sama.</p>
            </div>
            <div className="culture-card">
              <i className="fas fa-shield-alt"></i> {/* Ganti dengan ikon yang sesuai */}
              <h3>Kepercayaan dan Transparansi</h3>
              <p>Sistem verifikasi dan rating untuk transaksi yang aman.</p>
            </div>
            <div className="culture-card">
              <i className="fas fa-lightbulb"></i> {/* Ganti dengan ikon yang sesuai */}
              <h3>Inovasi Berkelanjutan</h3>
              <p>Terus mengembangkan fitur untuk pengalaman terbaik.</p>
            </div>
            <div className="culture-card">
              <i className="fas fa-leaf"></i> {/* Ganti dengan ikon yang sesuai */}
              <h3>Kepedulian Lingkungan</h3>
              <p>Mendorong praktik yang mengurangi dampak negatif terhadap bumi.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Bagian Bisnis Kami */}
      <section className="about-section business-section">
        <div className="container">
          <p className="section-subtitle">BISNIS KAMI</p>
          <h2 className="section-title">Kami membangun ekosistem super dengan infrastruktur menyeluruh untuk mempermudah masyarakat Indonesia</h2>
          <p className="section-description">
            KosLoop.ID dirancang untuk menjadi platform yang intuitif dan komprehensif, mendukung seluruh alur transaksi barang bekas bagi anak kos. Kami membangun teknologi untuk menghubungkan penjual dan pembeli dengan efisien.
          </p>
          <div className="business-features">
            <div className="feature-item">
              <i className="fas fa-shopping-bag"></i>
              <h3>E-Commerce Terfokus</h3>
              <p>Layanan jual beli barang bekas khusus untuk mahasiswa dan anak kos.</p>
            </div>
            <div className="feature-item">
              <i className="fas fa-truck"></i>
              <h3>Pengiriman & Pengambilan</h3>
              <p>Fleksibilitas pengiriman barang antar kos.</p>
            </div>
            <div className="feature-item">
              <i className="fas fa-shield-check"></i>
              <h3>Sistem Aman & Tepercaya</h3>
              <p>Verifikasi akun, produk, dan rating pengguna.</p>
            </div>
          </div>

          <div className="business-stats">
            <h2 className="section-title">Kami membangun teknologi untuk menghubungkan penjual dan pembeli</h2>
            <div className="stats-grid">
              <div className="stat-item">
                <span className="stat-number">99%</span>
                <span className="stat-label">Kos Terjangkau</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">40<sup>+</sup></span>
                <span className="stat-label">Kategori Barang</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">12<sup>JT</sup></span>
                <span className="stat-label">Anak Kos Terdaftar</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">638<sup>JT</sup></span>
                <span className="stat-label">Produk Terdaftar di Platform</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">86.5<sup>%</sup></span>
                <span className="stat-label">Penjual adalah pebisnis baru</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">&gt;60<sup>%</sup></span>
                <span className="stat-label">Peningkatan Reuse/Sirkulasi</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">2.5<sup>X</sup></span>
                <span className="stat-label">Peningkatan Ekonomi Mahasiswa</span>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default AboutUs;