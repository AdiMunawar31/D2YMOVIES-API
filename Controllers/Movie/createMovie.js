module.exports = {
    createMovie: async (req, res, next) => {
        if (req.user.isAdmin) {

        } else {
            res.status(403).json("Your not allowed!")
        }
    }
}