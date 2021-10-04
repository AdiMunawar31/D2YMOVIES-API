const Movie = require("../../Models/Movie")

module.exports = {
    getMovies: async (req, res) => {
        if (req.user.isAdmin) {
            try {
                const movies = await Movie.find()
                res.status(200).json(movies.reverse())
            } catch (err) {
                res.status(500).json(err)
            }
        } else {
            res.status(403).json("You are not allowed!")
        }
    }
}