app.controller("AddProductController", function($scope, $location, storage){
    $scope.items = storage;
    $scope.setItem = function (action) {
        //nessa função setItem é adicionado um produto ao array e adicionado ao localstorage
        
        $scope.items.push(
            {
                product: $scope.myItem.product,
                quantity:$scope.myItem.quantity,
                priority:$scope.value,
                buy:false,
            }
        )
        localStorage.setItem("list",JSON.stringify($scope.items))
        
        $scope.myItem.product = null;
        $scope.myItem.quantity = null;
        $scope.value = "none"
        console.log(action)
        if(action == "back"){
            $location.path("/")
        }
    }
    $scope.priority = ["Low", "Medium", "High"]
})