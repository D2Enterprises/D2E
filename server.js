const functions = require('firebase-functions');
const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();

// Serve static files
app.use('/images/product', express.static(path.join(__dirname, 'images/product')));

// Serve the index.html file at the root URL
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
});

// Endpoint to get product data
app.get('/api/products', (req, res) => {
    const productsDir = path.join(__dirname, 'images/product');
    fs.readdir(productsDir, (err, files) => {
        if (err) {
            return res.status(500).json({ error: 'Failed to read directory' });
        }
        const products = files.map(file => {
            const [name, price, id] = path.basename(file, path.extname(file)).split('-');
            return {
                name: name,
                price: `$${price}`,
                id: id,
                image: `/images/product/${file}`
            };
        });
        res.json(products);
    });
});

// Export the Express app as a Firebase Function
exports.app = functions.https.onRequest(app);
