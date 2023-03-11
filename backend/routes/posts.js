const express = require('express')
const productsCtrl = require('../controllers/products')
const auth = require('../middleware/auth')
const multer = require('../middleware/multer-config')

const router = express.Router()

// Gets all products
router.get('/', auth, productsCtrl.getAllProducts)

// Gets a single product
router.get('/:id', auth, productsCtrl.getOneProduct)

// Posts a product
router.post('/', auth, multer, productsCtrl.createProduct)

// Posts a reaction
router.post('/:id/like', auth, productsCtrl.createProductReaction)

// Modifies a product
router.put('/:id', auth, multer, productsCtrl.modifyProduct)

// Deletes a product
router.delete('/:id', auth, productsCtrl.deleteProduct)

module.exports = router
