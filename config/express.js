var express = require('express');
var bodyParser = require('body-parser');
const productsRoutes = require('../app.api.components/rotas/shopping.rotas')

// Exportando módulo (Padrão CommonJS)
module.exports = function () {
    var app = express();
    //Definindo variável de aplicação
    app.set("port", 3000);

    var bodyParser = require('body-parser')
    app.use(bodyParser.json());       // to support JSON-encoded bodies
    app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
        extended: false
    }));

    app.use(express.static('./public'))
    productsRoutes(app)
    // corridasRouting(app);
    return app;
};