const List = require('../../Models/List')

module.exports = {
    createList: async (req, res) => {
        if (req.user.isAdmin) {
            const newList = new List(req.body)

            try {
                const list = await newList.save()
                res.status(201).json(list)
            } catch (err) {
                res.status(500).json(err)
            }
        } else {
            res.status(403).json("You are not allowed!")
        }
    }
}