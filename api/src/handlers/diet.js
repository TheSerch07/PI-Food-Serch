const { getDiet, getDietDb } = require("./functions");

const getDiets = async (req, res, next) => {
    try {
        await getDiet()
        const dietInDb = await getDietDb()
        res.status(200).json(dietInDb)
    } catch (err) {
        next(err)
    }
}

module.exports = {
    getDiets
}