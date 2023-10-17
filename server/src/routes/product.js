const express = require('express')
const upload = require('../middleware/multer')

const {
    addProduct,
    listProduct,
    deleteProduct,
    detailProduct,
    addImageProduct
} = require('../controller/productController')

const router = express.Router()

router.post('/add', addProduct)
router.post('/add/image', upload.any(), addImageProduct)
router.get('/list', listProduct)
router.delete('/delete', deleteProduct)
router.get('/detail/:slug', detailProduct)

module.exports = router