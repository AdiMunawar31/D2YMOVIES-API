const Movie = require("../../Models/Movie")

module.exports = {
    getMovieById: async (req, res) => {
        try {
            const movie = await Movie.findById(req.params.id)
            res.status(200).json(movie)
        } catch (err) {
            res.status(500).json(err)
        }
    }
}