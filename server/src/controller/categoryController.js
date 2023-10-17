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
const getProductByCategory = async (req, res) => {
    try {
        const { name } = req.params
        const { brand, option, price, sort } = req.query;
        console.log(req.query)
        const category = await Category.findOne({ name })
            .populate({
                path: 'products',
                populate: [
                    {
                        path: 'brand',
                        model: 'Brand'
                    },
                    {
                        path: 'options',
                        model: 'Option',
                        populate: {
                            path: 'attribute',
                            model: 'Attribute'
                        }

                    }
                ]
            })
            .exec();

        if (sort) {
            if (sort === '0') {
                category.products.sort((a, b) => a.basePrice - b.basePrice);
            } else if (sort === '1') {
                category.products.sort((a, b) => b.basePrice - a.basePrice);
            }
        }
        console.log(sort)
        if (brand) {
            category.products = category.products.filter((product => product.brand.name.toLowerCase() === brand.toLowerCase()))
        }
        if (option) {
            category.products = category.products.filter((product) => {
                return product.options.attribute.some((att) => {
                    return att.value.toLowerCase().includes(option.toLowerCase());
                });
            });
        }
        if (price) {
            console.log(price)
            const priceInt = Number(price)
            var lsPrice = priceInt
            if (name === 'laptop') {
                lsPrice = 20000000
            } else if (name === 'mobile') {
                lsPrice = 10000000
            }
            if (priceInt <= lsPrice) {
                category.products = category.products.filter((product) => {
                    return product.basePrice <= priceInt
                })
            } else {
                category.products = category.products.filter((product) => {
                    return product.basePrice >= priceInt
                })
            }

        }
        res.status(200).json(category)
    } catch (error) {
        res.status(500).json({ errror: "can't get" })
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
    deleteCategory,
    getProductByCategory
}