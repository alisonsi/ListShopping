
app.controller("ListShoppingController", function ($scope, crud, $location, storage) {
   
    
    
    //model para adicição de novos produtos
   
    $scope.items = storage;
    console.log(storage)
    //array com todos os produtos adicionados
    // crud.listProdutcs().then(function (response) {
    //     console.log(response.data)
    //     $scope.items = response.data
    // })
    
    // crud.createProdutcs().then(function(response){
    //     console.log(response.data)
    // })
    // crud.deleteProdutcs().then(function(response){
    //     console.log(response.data)        
    // })

    // crud.updateProdutcs().then(function(response){
    //     console.log(response.data)
    // })
   

   
    //ao selecionar um checkbox
    $scope.setCheked = function (item) {
        localStorage.setItem("list", JSON.stringify($scope.items))
    }

    $scope.alterQuantity= function(item,op) {
        
        switch (op) {
            case '-': item.quantity -= 1; break;
            case '+': item.quantity += 1; break;
        }     
        setLocalStorage("list", $scope.items);
    }
    $scope.removeProduct = function(indice){
        $scope.items.splice(indice,1)
        
        localStorage.setItem("list", JSON.stringify($scope.items))
    }
    
   
})
function setLocalStorage(name, object) {
    localStorage.setItem(name, JSON.stringify(object))

}