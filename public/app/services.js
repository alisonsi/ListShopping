app.service("crud", function ($http) {
    let url = "http://localhost:3000/api/products";

    this.listProdutcs = function () {
        return $http.get(url);
    }

    this.createProdutcs = function () {
        let body = {

            "product": "product - 10000",
            "quantity": 15,
            "buy": false
        }
        return $http.post(url, body)
    }

    this.deleteProdutcs = function () {
        return $http.delete(url+"/1");
    }
    this.updateProdutcs = function () {
        let body = {
            
                        "product": "product - 10000",
                        "quantity": 15,
                        "buy": false
                    }
        return $http.put(url+"/1",body);
    }
})