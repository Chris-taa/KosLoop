const db = require('../models/db');

// Get all products
exports.getAllProducts = (req, res) => {
  db.query('SELECT * FROM products', (err, results) => {
    if (err) return res.status(500).json({ message: err.message });
    res.json(results);
  });
};

// Get single product
exports.getProductById = (req, res) => {
  db.query('SELECT * FROM products WHERE id = ?', [req.params.id], (err, results) => {
    if (err) return res.status(500).json({ message: err.message });
    if (!results.length) return res.status(404).json({ message: 'Product not found' });
    res.json(results[0]);
  });
};

// Create product
exports.createProduct = (req, res) => {
  const { name, description, price, image } = req.body;
  db.query(
    'INSERT INTO products (name, description, price, image) VALUES (?, ?, ?, ?)',
    [name, description, price, image],
    (err, result) => {
      if (err) return res.status(500).json({ message: err.message });
      res.json({ message: 'Product created' });
    }
  );
};

// Update product
exports.updateProduct = (req, res) => {
  const { name, description, price, image } = req.body;
  db.query(
    'UPDATE products SET name=?, description=?, price=?, image=? WHERE id=?',
    [name, description, price, image, req.params.id],
    (err, result) => {
      if (err) return res.status(500).json({ message: err.message });
      res.json({ message: 'Product updated' });
    }
  );
};

// Delete product
exports.deleteProduct = (req, res) => {
  db.query('DELETE FROM products WHERE id=?', [req.params.id], (err, result) => {
    if (err) return res.status(500).json({ message: err.message });
    res.json({ message: 'Product deleted' });
  });
};