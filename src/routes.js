const express = require('express');
const router = express.Router();

const ProductController = require('./controllers/ProductController');

router.post('/product', ProductController.createProduct);
router.get('/product', ProductController.showAllProducts);
router.get('/product/:id', ProductController.showProduct);
router.put('/product/:id', ProductController.updateProduct);
router.delete('/product/:id', ProductController.deleteProduct);

module.exports = router;