const express = require('express')
const {
    addBrand,
    listBrand,
    deleteBrand
} = require('../controller/brandController')

const router = express.Router()

router.post('/create', addBrand)
router.get('/list', listBrand)
router.delete('/delete', deleteBrand)

module.exports = router