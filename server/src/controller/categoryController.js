const Category = require('../models/categoryModel')

const addCategory = async (req, res) => {
    try {
        const { name } = req.body
        const existingCategory = await Category.findOne({ name })
        if (existingCategory) {
            return res.status(409).json({ status: "Đã tồn tại" })
        }
        const category = new Category({
            name: name
        })
        await category.save()
        res.status(201).json({ category })
    } catch (error) {
        res.status(500).json({ error: "Error" })
    }
}
const listCategory = async (req, res) => {
    try {
        const categories = await Category.find({})
        res.status(200).json({ categories })
    } catch (error) {
        res.status(500).json({ error: "Error" })
    }
}

const deleteCategory = async (req, res) => {
    try {
        const { id } = req.body
        const deleteACategory = await Category.findOneAndDelete({ _id: id })
        if (!deleteACategory) {
            return res.status(404).json({ error: "Not found" });
        }
        res.status(200).json({ status: "Delete successfully" })
    } catch (error) {
        res.status(500).json({ error: "Error" })
    }
}

module.exports = {
    addCategory,
    listCategory,
    deleteCategory
}