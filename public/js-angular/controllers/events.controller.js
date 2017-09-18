app.controller("eventsController",function($scope){
    $scope.detail = {
        dtl:false,
        modify: function(){
            switch(this.dtl){
                case false: this.dtl = true; break;
                case true:  this.dtl = false; break;
            }
        }
    };
})