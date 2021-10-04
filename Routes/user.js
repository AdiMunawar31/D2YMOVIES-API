const { getUsers, getUserById, updateUser, deleteUser, statsUser } = require('../Controllers/User')
const verify = require('../Helpers/verifyToken')
const router = require('express').Router()

/* Get All User Route */
router.get('/', verify, getUsers)

/* Get Data By Id User Route */
router.get('/find/:id', getUserById)

/* Update User Route */
router.put('/:id', verify, updateUser)

/* Delete User Route */
router.delete('/:id', verify, deleteUser)

/* Stats User Route */
router.get('/stats', statsUser)

module.exports = router