const Brand = require('../models/brandModel');
const Category = require('../models/categoryModel');
const Product = require('../models/productModel');
const Specification = require('../models/specificationModel');
const Option = require('../models/optionModel')
const Attribute = require('../models/attributeModel')
// add Product
// Font-end xử lý: với mỗi một type sản phẩm sẽ có danh mục các specs khác nhau của sản phẩm đó
// validate Backend
const addProduct = async (req, res) => {
    try {
        const {
            name,
            brandId,
            basePrice,
            description,
            categoryId,
            specs,
            options
        } = req.body
        if (!name || !brandId || !basePrice || !description || !categoryId) {
            return res.status(400).json({ error: "Không để trống" })
        }
        const createdSpecs = [];
        for (const specData of specs) {
            const spec = await Specification.create(specData);
            createdSpecs.push(spec);
        }
        console.log(options)
        // Tạo tùy chọn
        const option = await Option.create({
            colors: options.colors
        });

        const createdAttributes = [];
        for (const attributeData of options.attribute) {
            const attribute = await Attribute.create(attributeData);
            createdAttributes.push(attribute);
        }
        option.attribute = createdAttributes.map(attribute => attribute._id);
        await option.save();

        const product = new Product({
            name,
            brand: brandId,
            basePrice,
            description,
            category: categoryId,
            specs: createdSpecs.map(spec => spec._id),
            options: option._id
        })
        await product.save()

        // Thêm sp vào Brand tương ứng
        const brand = await Brand.findOne({ _id: brandId })
        if (!brand) {
            return res.status(404).json({ error: 'Brand not found' });
        }
        brand.addProduct(product._id);
        await brand.save();
        //thêm sp vào loại tương ứng
        const category = await Category.findOne({ _id: categoryId })
        if (!category) {
            return res.status(404).json({ error: 'Category not found' });
        }
        category.addProduct(product._id);
        await category.save();
        res.status(200).json({ product })
    } catch (error) {
        res.status(500).json({ error: "Add error" })
    }
}
const listProduct = async (req, res) => {
    try {
        const products = await Product.find({})
        res.status(200).json({ products })
    } catch (error) {
        res.status(500).json({ error: "error" })
    }
}

const detailProduct = async (req, res) => {
    try {
        const { id } = req.params
        const product = await Product.findOne({ _id: id })
            .populate('brand', 'name')
            .populate('category', 'name')
            .populate('specs', 'key value')
            .populate({
                path: 'options',
                populate: {
                    path: 'attribute',
                    model: 'Attribute',
                },
            });
        console.log(product)
        res.status(200).json({ product })
    } catch (error) {
        res.status(500).json({ error: "error" })
    }
}
const deleteProduct = async (req, res) => {
    try {
        const { id } = req.body
        const deleteAProduct = await Product.findOneAndDelete({ _id: id })
        if (!deleteAProduct) {
            res.status(409).json({ error: "Not found" })
        }
        res.status(200).json({ status: "DeleteSuccessfully" })
    } catch (error) {
        res.status(500).json({ error: "Add error" })
    }
}

module.exports = {
    addProduct,
    listProduct,
    deleteProduct,
    detailProduct
}