const verify = require('../Helpers/verifyToken')
const { createMovie, updateMovie, deleteMovie, getMovieById, getRandomMovies, getMovies } = require('../Controllers/Movie')
const router = require('express').Router()

/* Get All Movies Route */
router.get('/', verify, getMovies)

/* Get Movies By Id Route */
router.get('/find/:id', verify, getMovieById)

/* Get Movies By Id Route */
router.get('/random', verify, getRandomMovies)

/* Create New Movies Route */
router.post('/', verify, createMovie)

/* Update Movies Route */
router.put('/:id', verify, updateMovie)

/* Delete Movies Route */
router.delete('/:id', verify, deleteMovie)

module.exports = router