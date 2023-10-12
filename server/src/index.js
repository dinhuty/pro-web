const express = require('express')
const app = express()
const connectDB = require('./config/database')
const cors = require('cors')
const cookieParser = require('cookie-parser')
const routes = require('./routes')
require('dotenv').config()

connectDB()

app.use(cors())
app.use(cookieParser())
app.use(express.json())
routes(app)
const port = process.env.PORT_WEB || 5000
console.log(process.env.PORT_WEB)
app.listen(port, () => {
    console.log("Dang chay ", port)
})