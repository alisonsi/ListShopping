const listProducts = require("../listShopping.json")
//CRUD 

//LIST ALL PRODUCTS
module.exports.listProducts = function (req, res) {
    res.status(200).json(listProducts)
}

//READ
module.exports.product = function (req, res) {

    res.status(200).json(
        {
            "_id": "59c2af663e02e84136f1cf3f",
            "product": "product - 14",
            "quantity": 15,
            "buy": true
        }
    )
}

//CREATE
module.exports.createProduct = function (req, res) {
    res.status(200).json({
        message: "product has been created",
        product: req.body
    })
}
//UPDATE
module.exports.updateProduct = function (req, res) {
    res.status(200).json({
        message: "product has been updated",
        product: req.body
    })
}
//DELETE
module.exports.deleteProduct = function (req, res) {
    res.status(200).json({
        message: "product has been deleted"
    })
}

