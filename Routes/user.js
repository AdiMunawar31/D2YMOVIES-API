const { deleteUser } = require('../Controllers/User/deleteUser')
const { getUserById } = require('../Controllers/User/getUserById')
const { getUsers } = require('../Controllers/User/getUsers')
const { statsUser } = require('../Controllers/User/statsUser')
const { updateUser } = require('../Controllers/User/updateUser')
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