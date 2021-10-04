const router = require('express').Router()
const { createList, deleteList, getLists } = require('../Controllers/List')
const verify = require('../Helpers/verifyToken')

/* Get List Route */
router.get('/', verify, getLists)

/* Create a new List Route */
router.post('/', verify, createList)

/* Delete List Route */
router.delete('/:id', verify, deleteList)

module.exports = router