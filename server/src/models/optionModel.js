const mongoose = require('mongoose')

const optionSchema = mongoose.Schema({
    
    colors: {
        type: Array
    },
    attribute: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Attribute'
        }
    ]
},
    { timestamps: true }
)


module.exports = mongoose.model('Option', optionSchema)