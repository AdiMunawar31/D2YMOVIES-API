const List = require("../../Models/List")

module.exports = {
    getLists: async (req, res) => {
        const typeQuery = req.query.type
        const genreQuery = req.query.genre
        let list = []

        try {
            if (typeQuery) {
                if (genreQuery) {
                    list = await List.aggregate([
                        { $match: { type: typeQuery, genre: genreQuery } },
                        { $sample: { size: 10 } }
                    ])
                } else {
                    list = await List.aggregate([
                        { $match: { type: typeQuery } },
                        { $sample: { size: 10 } }
                    ])
                }
            } else {
                list = await List.aggregate([{ $sample: { size: 10 } }])
            }

            res.status(200).json(list)

        } catch (err) {
            res.status(500).json(err)
        }
    }
}