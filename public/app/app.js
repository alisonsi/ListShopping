let app = angular.module("myApp",["ngMaterial"])
app.controller("AppController",function($scope){
    $ = $scope;
    $.swape = false;
    //exibir ou nao um conteudo
    $setSwape = function(){
        if($swape){
            $swape = false
        }else
            $swape  = true;
    }
})