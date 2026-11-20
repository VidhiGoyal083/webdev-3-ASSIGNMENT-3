const express = require('express');
const router = express.Router();
const {
  createProduct,
  getProducts,
  getProductById,
  updateProduct,
  adjustStock,
  deleteProduct,
  getLowStockProducts,
  getInventorySummary
} = require('../controllers/productController');

// Report & Aggregation Routes (must come before /:id)
router.get('/low-stock', getLowStockProducts);
router.get('/summary', getInventorySummary);

// Standard CRUD & Stock Routes
router.route('/').get(getProducts).post(createProduct);
router.route('/:id').get(getProductById).put(updateProduct).delete(deleteProduct);
router.patch('/:id/stock', adjustStock);

module.exports = router;