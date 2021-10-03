const express = require('express')
const dotenv = require('dotenv')

dotenv.config()

/* Initialize Database */
require('./Configs/init_db')

const app = express()

const PORT = process.env.PORT
app.listen(PORT, () => console.log(`Server Running in http://localhost:${PORT}`))