const mongoose = require('mongoose')

const specificationSchema = mongoose.Schema({
    key: {
        type: String,
        require: true,
    },
    value: {
        type: String,
        require: true,
    }
},
    { timestamps: true }
)


module.exports = mongoose.model('Specification', specificationSchema)