const mongoose = require('mongoose')
const slugify = require('slugify')
const productSchema = mongoose.Schema({
    name: {
        type: String,
        require: true,
        trim: true,
    },
    slug: {
        type: String,
    },
    brand: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Brand'
    },
    thumb_url: {
        type: Object
    },
    images: [
        {
            type: Object,
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

productSchema.pre('save', function (next) {
    if (!this.slug) {
        this.slug = slugify(this.name, {
            replacement: '-',
            remove: undefined,
            lower: true,
            strict: false,
            locale: 'vi',
            trim: true
        })
    }
    next();
});

module.exports = mongoose.model('Product', productSchema)