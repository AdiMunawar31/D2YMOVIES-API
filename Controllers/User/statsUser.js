const User = require("../../Models/User")

module.exports = {
    statsUser: async (req, res) => {
        const today = new Date()

        const lateYear = today.setFullYear(today.setFullYear() - 1)

        const monthsArray = [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "Oktober",
            "November",
            "December",
        ]

        try {

            const data = await User.aggregate([
                {
                    $project: {
                        month: { $month: "$createdAt" }
                    }
                }, {
                    $group: {
                        _id: "$month",
                        total: { $sum: 1 }
                    }
                }
            ])

            res.status(200).json(data)

        } catch (err) {
            res.status(500).json(err)
        }

    }
}