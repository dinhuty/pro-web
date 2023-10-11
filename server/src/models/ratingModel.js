const mongoose = require('mongoose')

const ratingSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    rate: {
        type: Number,
        require: true
    },
    content: {
        type: String
    }
},
    { timestamps: true }
)


module.exports = mongoose.model('Rating', ratingSchema)