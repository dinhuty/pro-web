const express = require('express')
const {
    addCategory,
    listCategory,
    deleteCategory
} = require('../controller/categoryController')

const router = express.Router()

router.post('/create', addCategory)
router.get('/list', listCategory)
router.delete('/delete', deleteCategory)

module.exports = router