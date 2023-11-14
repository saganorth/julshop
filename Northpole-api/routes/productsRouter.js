const express = require('express');
const router = express.Router();
const products = require('../products'); 

router.get('/', (req, res) => {
  res.json(products); 
});
router.get('/:id', (req, res) => {
    const productId = parseInt(req.params.id);
    const product = products.find((p) => p.id === productId);
    if (product) {
      res.json(product);
    } else {
      res.status(404).json({ message: 'Produkt hittades inte' });
    }
  });

module.exports = router;
