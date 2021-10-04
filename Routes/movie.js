const { createMovie } = require('../Controllers/Movie')

const router = require('express').Router()

/* Create New Movies Route */
router.post('/', createMovie)