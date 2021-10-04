const express = require('express')
const dotenv = require('dotenv')
const morgan = require('morgan')
const authRoute = require('./Routes/auth')
const userRoute = require('./Routes/user')
const movieRoute = require('./Routes/movie')
const connectDB = require('./Configs/init_db')

dotenv.config()

/* Initialize Database */
connectDB()

const app = express()

/* MORGAN LOGS */
app.use(morgan('dev'))

/* Get Body Request JSON */
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

/* Base Routing for Authentication Route */
app.use('/api/auth', authRoute)

/* Base Routing for User Route */
app.use('/api/users', userRoute)

/* Base Routing for Movie Route */
app.use('/api/movies', movieRoute)

const PORT = process.env.PORT
app.listen(PORT, () => console.log(`Server Running in http://localhost:${PORT}`))