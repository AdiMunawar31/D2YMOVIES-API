const User = require('../../Models/User')
const CryptoJS = require("crypto-js");
const jwt = require('jsonwebtoken');

/**
 * Login User Controller
 *
 * @param {Requsest} req
 * @param {Response} res
 * @param {next} next
 */
module.exports = {
    login: async (req, res, next) => {
        try {
            const user = await User.findOne({ email: req.body.email })
            !user && res.status(401).json("Wrong Email or Password!")

            /* Decrypt Password from Database */
            const bytes = CryptoJS.AES.decrypt(user.password, process.env.SECRET_KEY);
            const originalPassword = bytes.toString(CryptoJS.enc.Utf8);

            originalPassword !== req.body.password && res.status(401).json('Wrong Email or Password!')

            /* Generate AccessToken from jsonwebtoken */
            const accessToken = jwt.sign(
                { id: user._id, isAdmin: user.isAdmin },
                process.env.SECRET_KEY,
                { expiresIn: '5d' }
            )

            /* Filter password from User Collection */
            const { password, ...info } = user._doc;

            res.status(200).json({ ...info, accessToken })

        } catch (err) {
            res.status(401).json(err.message)
            next(err)
        }
    }
}