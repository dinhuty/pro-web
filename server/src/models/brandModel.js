const mongoose = require('mongoose')

const brandSchema = mongoose.Schema({
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

brandSchema.methods.addProduct = function (productId) {
    if (!this.products.includes(productId)) {
        this.products.push(productId);
    }
};
module.exports = mongoose.model('Brand', brandSchema)