

this.homeController = function ($scope, $http, $location) {

    // get the list of cars
    $http.get("/carList.json")
        .then(function (response) {
            $scope.items = response.data;
        });

    // go to detail page
    $scope.gotoDetail = function(id){
        $location.path('car/'+id);
    };

    $scope.goHome = function(){
        window.location.replace('/')
    };

}