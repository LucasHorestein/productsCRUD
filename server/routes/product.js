const express = require('express');
const router = express.Router();
const productController = require('../controllers/product-controller')
// api/products

router.post('/', productController.createProducts);
router.get('/',productController.getProduct)
router.put('/:id',productController.updateProduct)
router.get('/:id',productController.getOneProduct)
router.delete('/:id',productController.deleteProduct) 

module.exports = router;