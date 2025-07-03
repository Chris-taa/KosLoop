const db = require('../models/db');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

exports.registerUser = (req, res) => {
    const { name, email, password } = req.body;
    const hash = bcrypt.hashSync(password, 8);

    db.query(
        'INSERT INTO users (name, email, password) VALUES (?, ?, ?)',
        [name, email, hash],
        (err, result) => {
        if (err) return res.status(500).json({ message: err.message });
            res.json({ message: 'User registered!' });
        }
    );
};

exports.loginUser = (req, res) => {
    const { email, password } = req.body;
    db.query('SELECT * FROM users WHERE email = ?', [email], (err, results) => {
        if (err) return res.status(500).json({ message: err.message });
        if (!results.length) return res.status(401).json({ message: 'User not found' });

        const user = results[0];
        const isMatch = bcrypt.compareSync(password, user.password);
        if (!isMatch) return res.status(401).json({ message: 'Invalid password' });

        const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: '1d' });
        res.json({ token, user: { id: user.id, name: user.name, email: user.email } });
    });
};