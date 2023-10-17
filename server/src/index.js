const express = require('express')
const app = express()
const connectDB = require('./config/database')
const cors = require('cors')
const cookieParser = require('cookie-parser')
const routes = require('./routes')
const { cloudinary } = require('./services/cloudinary')

require('dotenv').config()

connectDB()

app.use(cors())
app.use(cookieParser())
app.use(express.json())
app.use(express.urlencoded({ extended: true }));
routes(app)
const port = process.env.PORT_WEB || 5000
console.log(process.env.PORT_WEB)
app.listen(port, () => {
    console.log("Dang chay ", port)
})