    var app = angular.module("myCars", ["ngRoute"]);

    app.factory('globals', function() {
        return {
            maintenance : [
                {
                    "id": 1,
                    "car": 1,
                    "maintenance": "Changed wind shield",
                    "date": "2016-12-10"
                },
                {
                    "id": 2,
                    "car": 1,
                    "maintenance": "Changed tire",
                    "date": "2016-12-10"
                },
                {
                    "id": 3,
                    "car": 2,
                    "maintenance": "Painted",
                    "date": "2016-12-10"
                },
                {
                    "id": 4,
                    "car": 3,
                    "maintenance": "changed engine oil",
                    "date": "2016-12-10"
                },
                {
                    "id": 5,
                    "car": 4,
                    "maintenance": "Cleaning",
                    "date": "2016-12-10"
                },
                {
                    "id": 6,
                    "car": 5,
                    "maintenance": "Changed tire",
                    "date": "2016-12-10"
                },
                {
                    "id": 7,
                    "car": 6,
                    "maintenance": "gearbox repair",
                    "date": "2016-12-10"
                },
                {
                    "id": 8,
                    "car": 7,
                    "maintenance": "Door repair",
                    "date": "2016-12-10"
                }
            ]
        };
    });


    app.controller("homeController", homeController);
    app.controller("carsController", carsController);

