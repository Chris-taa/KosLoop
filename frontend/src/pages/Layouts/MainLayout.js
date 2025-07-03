import React from 'react';
import Navbar from '../components/navbar';
import Footer from '../components/footer';

const MainLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main>
        {children} {/* children akan merender konten halaman spesifik */}
      </main>
      <Footer />
    </>
  );
};

export default MainLayout;