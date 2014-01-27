/// <reference path="../../Scripts/angular.js" />
/// <reference path="../../Scripts/angular-route.js" />

(function () {
    "use strict";
    var app = angular.module("myApp", ["ngRoute", "ngAnimate", "myControllers", "myResources", "myDirectives"]);

    app.config(["$routeProvider",
        function ($routeProvider) {
            $routeProvider.when("/people", {
                templateUrl: "./Templates/PeopleList.html",
                controller: "PeopleListCtrl",
                resolve: {
                    people: ["Person", function (Person) {
                        return Person.query();
                    }]
                }
            });
            
            $routeProvider.when("/person/:id", {
                templateUrl: "./Templates/PersonEditor.html",
                controller: "PersonEditorCtrl",
                resolve: {
                    person: ["$route", "Person", function ($route, Person) {
                        return Person.get({ id: $route.current.params.id });
                    }]
                }
            });

            $routeProvider.otherwise({
                redirectTo: "/people"
            });
        }
    ]);
}());
