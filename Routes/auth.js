const { login } = require('../Controllers/Auth/login')
const { register } = require('../Controllers/Auth/register')
const router = require('express').Router()

/* POST => Register User */
router.post('/register', register)

/* POST => Login User */
router.post('/login', login)

module.exports = router