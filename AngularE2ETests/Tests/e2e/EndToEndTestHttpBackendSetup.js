(function () {

    "use strict";

    var app = angular.module("TestAppE2E", ["TestApp", "ngMockE2E"]);

    app.run(["$httpBackend", function ($httpBackend) {

        if (window.location.search === "?mode=e2etest1") {
            $httpBackend.whenPOST(/^Index.aspx\/GetFirstLevelItems/).respond({ "d": ["FirstLevelItemA", "FirstLevelItemB"] });
            $httpBackend.whenPOST(/^Index.aspx\/GetSecondLevelItems/).respond(function (method, url, data) {
                var firstLevelItem = getFirstLevelItemFromPostParams(data);
                var secondLevelItems = [];
                for (var i = 0; i < 3; i++) {
                    var secondLevelItem = firstLevelItem + " child " + i;
                    secondLevelItems.push(secondLevelItem);
                }
                var responseData = {
                    d: secondLevelItems
                };
                return [200, responseData];
            });
        }

        var getFirstLevelItemFromPostParams = function (data) {
            var postParams = angular.fromJson(data);
            return postParams.firstLevelItem;
        };
    } ]);
} ());
