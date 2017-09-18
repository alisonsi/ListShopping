
app.controller("ListShoppingController", function ($scope) {
    $ = $scope;
    //model para adicição de novos produtos
    $.myItem;

    //array com todos os produtos adicionados
    $scope.items = []
    if (localStorage.getItem("lista")) {
        //caso já exista produtos armazenados no localstorage aqui é capturado
        $scope.items = JSON.parse(localStorage.getItem("lista"));
    }
    $scope.setItem = function () {
        //nessa função setItem é adicionado um produto ao array e adicionado ao localstorage
        $scope.items.push(
            {
                product: $scope.myItem.product,
                quantity:$scope.myItem.quantity,
                buy:false,
            }
        )
        setLocalStorage("lista",$scope.items)
        $scope.myItem.product = $scope.myItem.quantity = "";
    }
    $scope.setCheked = function (checked) {

        setLocalStorage("lista", $scope.items);
    }

    $scope.alterQuantity= function(item,op) {
        switch (op) {
            case '-': item.quantity -= 1; break;
            case '+': item.quantity += 1; break;
        }     
        setLocalStorage("lista", $scope.items);
    }
  
})
function setLocalStorage(name, object) {
    localStorage.setItem(name, JSON.stringify(object))

}