    app.config(function($routeProvider){

        $routeProvider
            .when("/", {
                templateUrl: "DOM/home.html",
                controller: "homeController"
            })
            .when("/home", {
                templateUrl: "DOM/home.html",
                controller: "homeController"
            })
            .when("/car/:id", {
                templateUrl: "DOM/car.html",
                controller: "carsController"
            })
    });