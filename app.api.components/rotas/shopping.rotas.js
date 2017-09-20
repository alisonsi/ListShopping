var controllerList = require("../controllers/shopping.controller");
var cors = require('cors')

module.exports = function(app){
    app.
    use(cors())

    //lista informações de um projeto, passando a key dele
    .get("/api/products", controllerList.listProducts)
    .get("/api/products/:id", controllerList.product)
    .post("/api/products", controllerList.createProduct)
    .delete("/api/products/:id",controllerList.deleteProduct)
    .put("/api/products/:id",controllerList.updateProduct)
    
}

