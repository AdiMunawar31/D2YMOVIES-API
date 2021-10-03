const { register } = require('../Controllers/Auth/register')
const router = require('express').Router()

/* POST => Register User */
router.post('/register', register)

module.exports = router