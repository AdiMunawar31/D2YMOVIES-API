const Movie = require("../../Models/Movie")

module.exports = {
    createMovie: async (req, res) => {
        if (req.user.isAdmin) {
            const newMovie = new Movie(req.body)

            try {
                const movie = await newMovie.save()
                res.status(201).json(movie)

            } catch (err) {
                res.status(500).json(err)
            }
        } else {
            res.status(403).json("Your not allowed!")
        }
    }
}