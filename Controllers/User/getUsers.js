const User = require("../../Models/User")

module.exports = {
    getUsers: async (req, res, next) => {
        const query = req.query.new

        if (req.user.isAdmin) {
            try {
                const users = query ? await User.find().sort({ _id: -1 }).limit(5) : await User.find()
                res.status(200).json(users)
            } catch (err) {
                res.status(500).json(err)
            }
        } else {
            res.status(403).json("You are not allowed to see all users! ")
        }
    }
}