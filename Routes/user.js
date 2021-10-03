const { updateUser } = require('../Controllers/User/updateUser')
const verify = require('../Helpers/verifyToken')

const router = require('express').Router()

router.put('/:id', verify, updateUser)

module.exports = router