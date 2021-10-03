const User = require('../../Models/User')
const CryptoJS = require("crypto-js");

/**
 * Register User Controller
 * 
 * @param {Requsest} req 
 * @param {Response} res 
 * @param {next} next 
 */
module.exports = {
    register: async (req, res, next) => {
        const { username, email, password } = req.body
        const newUser = new User({
            username: username,
            email: email,
            password: CryptoJS.AES.encrypt(password, process.env.SECRET_KEY).toString()
        })

        console.log(newUser);
        try {
            const user = await newUser.save()
            res.status(201).json(user)

        } catch (err) {
            console.log('Errors : ', err.message);
            next(err)
        }
    }
}