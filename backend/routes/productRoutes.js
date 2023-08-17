const express = require('express');
const productController = require('../controllers/productController');


const router = express.Router();

router.get('/products/:id', productController.findById);
router.get('/video/:video_id/products', productController.findByVideoId);
router.get('/products', productController.findAll);

module.exports = router;