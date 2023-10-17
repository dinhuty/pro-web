const express = require('express')
const {
    addCategory,
    listCategory,
    deleteCategory,
    getProductByCategory
} = require('../controller/categoryController')

const router = express.Router()

router.post('/create', addCategory)
router.get('/list', listCategory)
router.delete('/delete', deleteCategory)
router.get('/product/:name', getProductByCategory)

module.exports = router