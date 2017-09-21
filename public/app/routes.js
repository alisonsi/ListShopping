app.config(function ($routeProvider) {
    $routeProvider.when("/",{
        templateUrl:"app/components/shopping/shopping.view.html",
        controller:"ListShoppingController",
        resolve:{
            storage: isStorage
        }
    })
    $routeProvider.when("/addProducts",{
        templateUrl:"app/components/addProducts/addProducts.view.html",
        controller:"AddProductController",
        resolve:{
            storage: isStorage
        }

    })

})

function isStorage(){
    return (localStorage.getItem("list")) ? JSON.parse(localStorage.getItem("list")) : [];
}