import React from 'react';
import './CSS/Categories.css';

// Import images for categories. PASTIKAN PATH INI BENAR SESUAI STRUKTUR PROJECT ANDA.
// BERDASARKAN KOMENTAR ANDA, ASUMSIKAN PATH INI SUDAH BENAR.

import TopUpTagihanIcon from '../pages/Assets/Icons/letter.png';
import ElektronikIcon from '../pages/Assets/Icons/letter.png';
import PerawatanHewanIcon from '../pages/Assets/Icons/letter.png';
import MakananKeringIcon from '../pages/Assets/Icons/letter.png';
import FigureIcon from '../pages/Assets/Icons/letter.png';
import HarddiskFlashdiskIcon from '../pages/Assets/Icons/letter.png';
import TasSlempangPriaIcon from '../pages/Assets/Icons/letter.png';
import FlatShoesWanitaIcon from '../pages/Assets/Icons/letter.png';

const Categories = () => {
    const categories = [
        // Hapus `|| "emoji"` karena kita akan selalu merender <img> jika icon diimport.
        // Jika import gagal (misalnya file tidak ada), `icon` akan undefined, dan fallback akan jalan.
        { name: "Handphone & Tablet", icon: "/Icons/handphone-tablet.png"},
        { name: "Top Up & Tagihan", icon: TopUpTagihanIcon},
        { name: "Elektronik", icon: ElektronikIcon},
        { name: "Perawatan Hewan", icon: PerawatanHewanIcon},
        { name: "Makanan Kering", icon: MakananKeringIcon},
        { name: "Figure", icon: FigureIcon},
        { name: "Harddisk & Flashdisk", icon: HarddiskFlashdiskIcon},
        { name: "Tas Selempang Pria", icon: TasSlempangPriaIcon},
        { name: "Flat Shoes Wanita", icon: FlatShoesWanitaIcon},
    ];

    return (
        <div className="categories-wrapper">
            <div className="category-grid">
                {categories.map((category, index) => (
                    <div key={index} className="category-card">
                        {/* Simplifikasi kondisi rendering:
                            Jika category.icon memiliki nilai (berarti import berhasil), render <img>.
                            Jika tidak, render fallback text/emoji.
                        */}
                        {category.icon ? (
                            <img src={category.icon} alt={category.name} className="category-image" />
                        ) : (
                            // Fallback jika icon undefined (misal import path salah atau file tidak ada)
                            <div className="category-icon-text">?</div> // Anda bisa ganti dengan ikon default atau teks 'No Icon'
                        )}
                        <p className="category-name">{category.name}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Categories;