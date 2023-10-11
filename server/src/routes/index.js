const userRouter = require('./user')
const brandRouter = require('./brand')
const productRouter = require('./product')
const categoryRouter = require('./category')

module.exports = (app) => {
    app.use('/api/user', userRouter)
    app.use('/api/brand', brandRouter)
    app.use('/api/product', productRouter)
    app.use('/api/category', categoryRouter)
    app.use('/', userRouter)
}

// module.exports = routes