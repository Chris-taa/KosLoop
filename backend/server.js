const express = require('express');
const cors = require('cors');
const path = require('path');
const db = require('./models/db.js');
require('dotenv').config();

const app = express();
const PORT = 5000;

app.use(cors());
app.use('/images', express.static(path.join(__dirname, 'public/images')));

// Endpoint produk
app.get('/api/products', async (req, res) => {
  try {
    const [rows] = await db.query('SELECT * FROM products');
    res.json(rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Gagal mengambil produk' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
