const Movie = require("../../Models/Movie")

module.exports = {
    updateMovie: async (req, res) => {
        if (req.user.isAdmin) {
            try {
                const movie = await Movie.findByIdAndUpdate(req.params.id,
                    { $set: req.body },
                    { new: true }
                )
                res.status(200).json(movie)

            } catch (err) {
                res.status(500).json(err)
            }
        } else {
            res.status(403).json("Your not allowed!")
        }
    }
}