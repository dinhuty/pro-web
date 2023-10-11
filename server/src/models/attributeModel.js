const mongoose = require('mongoose')

const attributeSchema = mongoose.Schema({
    name: {
        type: String,
        require: true,
    },
    value: {
        type: String,
        require: true
    },
    quantity: {
        type: Number,
        require: true
    },
    price: {
        type: Number,
        require: true
    }

},
    { timestamps: true }
)


module.exports = mongoose.model('Attribute', attributeSchema)