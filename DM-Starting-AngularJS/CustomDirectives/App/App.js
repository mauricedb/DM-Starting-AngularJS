/// <reference path="../../Scripts/angular.js" />

(function () {
    "use strict";
    var app = angular.module("myApp", []);

    app.directive("myFocus", [function () {
        return {
            link: function (scope, element, attrs) {
                element[0].focus();
            }
        };
    }]);


    app.controller("peopleCtrl", ["$scope",
        function ($scope) {
            $scope.person = {
                firstName: "Maurice",
                lastName: "de Beijer"
            };

            this.save = function () {
                alert("Saving " + $scope.person.firstName +
                    " " + $scope.person.lastName);
            };
        }
    ]);

    app.directive("myPersonEditor", function () {
        return {
            restrict: 'E',
            scope: {
                thePerson: "=",
                saveAction: "&"
            },
            templateUrl: 'Templates/MyPersonEditor.html'
        };
    });

    app.directive("myLabelTextInput", function () {
        return {
            restrict: 'E',
            scope: {
                label: "@",
                field: "="
            },
            templateUrl: 'Templates/MyLabelTextInput.html'
        };
    });
}());
