const express = require('express')
const router = express.Router()

const ProductController = require('../controllers/ProductController')

router.get('/create', ProductController.createProduct)
router.post('/create', ProductController.saveProduct)
router.get('/:id', ProductController.getProduct)
router.post('/:id', ProductController.deleteProduct)
router.post('/update', ProductController.updateProductPost)
router.get('/update/:id', ProductController.updateProduct)
router.get('/', ProductController.showProducts)

module.exports = router