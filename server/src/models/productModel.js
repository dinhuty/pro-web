const mongoose = require('mongoose')

const productSchema = mongoose.Schema({
    name: {
        type: String,
        require: true,
        trim: true,
    },
    brand: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Brand'
    },
    images: [
        {
            type: String,
        }
    ],
    basePrice: {
        type: Number,
        require: true
    },
    description: {
        type: String,
        require: true,
        trim: true
    },
    specs: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Specification'
        }
    ],
    options: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Option'
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category'
    },
    rating: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Rating'
        }
    ]

},
    { timestamps: true }
)


module.exports = mongoose.model('Product', productSchema)