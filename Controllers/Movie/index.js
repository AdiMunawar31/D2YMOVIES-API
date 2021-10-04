const { getMovieById } = require("./getMovieById");
const { createMovie } = require("./createMovie");
const { updateMovie } = require("./updateMovie");
const { deleteMovie } = require("./deleteMovie");
const { getRandomMovies } = require("./getRandomMovies");
const { getMovies } = require("./getMovies");

module.exports = { createMovie, updateMovie, deleteMovie, getMovieById, getRandomMovies, getMovies }