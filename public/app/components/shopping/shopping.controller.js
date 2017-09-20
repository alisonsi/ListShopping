
app.controller("ListShoppingController", function ($scope, crud) {
   
    
    $ = $scope;
    //model para adicição de novos produtos
    $.myItem = {
        product: "",
        quantity: 0,
    };

    $scope.items = [];
    //array com todos os produtos adicionados
    crud.listProdutcs().then(function (response) {
        console.log(response.data)
        $scope.items = response.data
    })

    crud.createProdutcs().then(function(response){
        console.log(response.data)
    })
    crud.deleteProdutcs().then(function(response){
        console.log(response.data)        
    })

    crud.updateProdutcs().then(function(response){
        console.log(response.data)
    })
   
    
    // if (localStorage.getItem("lista")) {
    //     //caso já exista produtos armazenados no localstorage aqui é capturado
    //     $scope.items = JSON.parse(localStorage.getItem("lista"));
    // }
    $scope.setItem = function () {
        //nessa função setItem é adicionado um produto ao array e adicionado ao localstorage
        $scope.items.push(
            {
                product: $scope.myItem.product,
                quantity:$scope.myItem.quantity,
                buy:false,
            }
        )
        //setLocalStorage("lista",$scope.items)
        $scope.myItem.product = " ";
        $scope.myItem.quantity = 0;
    }
    $scope.setCheked = function (item) {
        console.log($scope.items)
        //localStorage.setItem("lista", JSON.stringify($scope.items))
    }

    $scope.alterQuantity= function(item,op) {
        
        switch (op) {
            case '-': item.quantity -= 1; break;
            case '+': item.quantity += 1; break;
        }     
        //setLocalStorage("lista", $scope.items);
    }
    
    $scope.priority = ["Low", "Medium", "High"]
})
function setLocalStorage(name, object) {
    localStorage.setItem(name, JSON.stringify(object))

}