const mongoose = require('mongoose')

const categorySchema = mongoose.Schema({
    name: {
        type: String,
        require: true,
    },
    products: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Product'

        }
    ]
},
    { timestamps: true }
)

categorySchema.methods.addProduct = function (productId) {
    if (!this.products.includes(productId)) {
        this.products.push(productId);
    }
};

module.exports = mongoose.model('Category', categorySchema)