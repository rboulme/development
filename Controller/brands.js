const connection = require("../connection/Mysql")

const getBrands = (req, res) => {
    const sql = `select * from brands`
    connection.query(sql, (err, result) => {
        if (err) {
            res.json(err)
        } else {
            res.json(result)
        }
    })
}
module.exports = {
    getBrands
}