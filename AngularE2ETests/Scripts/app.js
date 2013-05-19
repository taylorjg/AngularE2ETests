(function() {

    "use strict";

    var app = angular.module("TestApp", []);

    app.controller("MainController", ["$scope", "$http", function($scope, $http) {
        $http.post("Index.aspx/GetFirstLevelItems", {})
            .success(function(data) {
                console.log("$http Index.aspx/GetFirstLevelItems succeeded");
                console.dir(arguments);
                $scope.firstLevelItems = data.d;
            });
    }]);

    app.controller("FirstLevelController", ["$scope", "$http", function($scope, $http) {
        $http.post("Index.aspx/GetSecondLevelItems", { firstLevelItem: $scope.firstLevelItem })
            .success(function(data) {
                console.log("$http Index.aspx/GetSecondLevelItems succeeded");
                console.dir(arguments);
                $scope.secondLevelItems = data.d;
            });
    }]);
}());
