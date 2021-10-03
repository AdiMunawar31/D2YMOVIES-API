const express = require('express')
const dotenv = require('dotenv')
const morgan = require('morgan')
const authRoute = require('./Routes/auth')
const connectDB = require('./Configs/init_db')

dotenv.config()

/* Initialize Database */
connectDB()

const app = express()

/* MORGAN LOGS */
app.use(morgan('dev'))

/* Get Body Request JSON */
app.use(express.json())
// app.use(express.urlencoded({ extended: true }))

/* Base Routing to Authentication Route */
app.use('/api/auth', authRoute)

const PORT = process.env.PORT
app.listen(PORT, () => console.log(`Server Running in http://localhost:${PORT}`))