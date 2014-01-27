(function () {
    "use strict";
    var module = angular.module("myDirectives", ["ngResource"]);

    module.directive("myLabelTextInput", function () {
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
