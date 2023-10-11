const express = require('express')
const {
    addProduct,
    listProduct,
    deleteProduct,
    detailProduct,
} = require('../controller/productController')

const router = express.Router()

router.post('/add', addProduct)
router.get('/list', listProduct)
router.delete('/delete', deleteProduct)
router.get('/detail/:id', detailProduct)

module.exports = router