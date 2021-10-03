const User = require("../../Models/User")

module.exports = {
    getUserById: async (req, res, next) => {
        try {
            const user = await User.findById(req.params.id)

            const { password, ...info } = user._doc
            res.status(200).json(info)
        } catch (err) {
            res.status(500).json(err)
            next(err)
        }
    }
}