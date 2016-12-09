
this.carsController = function ($scope, $http, $location, $route, globals) {

    var maintenancelist = [];

    // get the list of cars
    $http.get("/carList.json")
        .then(function (response) {
            $scope.cars = response.data;
            angular.forEach($scope.cars, function(carLists) {
                if(carLists.id == $route.current.params.id)
                    $scope.carList = carLists;
            });
        });

            // get the maintenance history of the car
            $scope.maints = globals.maintenance;
            var carId = $route.current.params.id;
            angular.forEach($scope.maints, function(p) {
                if(p.car == carId)
                    maintenancelist.push(p);
            });
            $scope.maintenances=maintenancelist;


    // add a new maintenance to the car
    $scope.addMaintenance = function(maintenance){
        maintenancelist = [];
        var newID = globals.maintenance.length+1;
        maintenance.id = newID;
        maintenance.car = $route.current.params.id;
        maintenance.date = new Date();
        globals.maintenance.push(maintenance);
        $scope.maints = globals.maintenance;
        var carId = $route.current.params.id;
        angular.forEach($scope.maints, function(p) {
            if(p.car == carId)
                maintenancelist.push(p);
        });
        $scope.maintenances=maintenancelist;
        $scope.maintenance = '';
    };

    // remove car maintenance
    $scope.remove = function(id){
        maintenancelist = [];
        for(var i = globals.maintenance.length - 1; i >= 0; i--){
            if(globals.maintenance[i].id == id){
                globals.maintenance.splice(i,1);
            }
        };
        $scope.maints = globals.maintenance;
        var carId = $route.current.params.id;
        angular.forEach($scope.maints, function(p) {
            if(p.car == carId) // CHECK IF THERE ARE PRESCRIPTION ITEMS BELONGING TO DOCTOR VISIT
                maintenancelist.push(p); // PUSH ITEMS TO PRESCRIPTION LIST
        });
        $scope.maintenances=maintenancelist;
    };

    // go back to home
    $scope.goHome = function(){
        $location.path('home');
    };

};