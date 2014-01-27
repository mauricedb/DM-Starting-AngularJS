(function () {
    "use strict";
    var module = angular.module("myResources", ["ngResource"]);

    module.factory("Person", ['$resource', function ($resource) {
        return $resource("/api/people/:id", { id: '@id' }, {
            save: {
                method: "PUT"
            }
        });
    }]);
}());
