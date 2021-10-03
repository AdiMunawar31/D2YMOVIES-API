const User = require("../../Models/User")

module.exports = {
    deleteUser: async (req, res, next) => {
        if (req.user.id === req.params.id || req.user.isAdmin) {
            try {
                await User.findByIdAndDelete(req.params.id)
                res.status(200).json("User Successfully Deleted!")
            } catch (err) {
                res.status(500).json(err)
            }
        } else {
            res.status(403).json("You can delete only your account! ")
        }
    }
}