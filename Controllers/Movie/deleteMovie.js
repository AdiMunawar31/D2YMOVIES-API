const Movie = require("../../Models/Movie")

module.exports = {
    deleteMovie: async (req, res) => {
        if (req.user.isAdmin) {
            try {
                await Movie.findByIdAndDelete(req.params.id)
                res.status(200).json("Movie Successfully Deleted!")

            } catch (err) {
                res.status(500).json(err)
            }
        } else {
            res.status(403).json("Your not allowed!")
        }
    }
}