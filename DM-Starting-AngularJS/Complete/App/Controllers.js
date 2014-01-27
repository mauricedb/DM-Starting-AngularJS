(function () {
    "use strict";
    var module = angular.module("myControllers", []);

    module.controller("PeopleListCtrl", ["$scope", "$location", "people",
        function ($scope, $location, people) {
            $scope.people = people;

            $scope.select = function (p) {
                $location.path("/person/" + p.id);
            };
        }
    ]);

    module.controller("PersonEditorCtrl", ["$scope", "$location", "person",
        function ($scope, $location, person) {
            $scope.currentPerson = person;

            $scope.cancel = function () {
                $location.path("/people");
            };

            $scope.save = function () {
                $scope.currentPerson.$save(function () {
                    $location.path("/people");
                });
            };
        }
    ]);
}());
