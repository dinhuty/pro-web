const Brand = require('../models/brandModel')

const addBrand = async (req, res) => {
    try {
        const { name } = req.body
        const existingBrand = await Brand.findOne({ name })
        if (existingBrand) {
            return res.status(409).json({ status: "Đã tồn tại" })
        }
        const brand = new Brand({
            name: name
        })
        await brand.save()
        res.status(201).json({ brand })
    } catch (error) {
        res.status(500).json({ error: "Error" })
    }
}
const listBrand = async (req, res) => {
    try {
        const listBrand = await Brand.find({})
        res.status(200).json({ listBrand })
    } catch (error) {
        res.status(500).json({ error: "Error" })
    }
}

const deleteBrand = async (req, res) => {
    try {
        const { id } = req.body
        const deleteABrand = await Brand.findOneAndDelete({ _id: id })
        if (!deleteABrand) {
            return res.status(404).json({ error: "Not found" });
        }
        res.status(200).json({ status: "Delete successfully" })
    } catch (error) {
        res.status(500).json({ error: "Error" })
    }
}

module.exports = {
    addBrand,
    listBrand,
    deleteBrand
}