const User = require('../../Models/User')

/**
 * Register User Controller
 * 
 * @param {Requsest} req 
 * @param {Response} res 
 * @param {next} next 
 */
module.exports = {
    register: async (req, res, next) => {
        const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            password: req.body.password,
        })

        console.log(newUser);
        try {
            const user = await newUser.save()
            res.status(201).json(user)

        } catch (err) {
            console.log('Errors : ', err.message);
        }
    }
}