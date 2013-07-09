// ReSharper disable InconsistentNaming

(function () {

    "use strict";

    var app = angular.module("TestAppE2E", ["TestApp", "ngMockE2E"]);

    app.run(["$httpBackend", function ($httpBackend) {

        var REGEXP_FOR_GETFIRSTLEVELITEMS_WEB_METHOD_URL = /^Index.aspx\/GetFirstLevelItems/;
        var REGEXP_FOR_GETSECONDLEVELITEMS_WEB_METHOD_URL = /^Index.aspx\/GetSecondLevelItems/;
        
        if (window.location.search === "?mode=e2etest1") {
            $httpBackend.whenPOST(REGEXP_FOR_GETFIRSTLEVELITEMS_WEB_METHOD_URL).respond({ "d": ["FirstLevelItemA", "FirstLevelItemB"] });
            $httpBackend.whenPOST(REGEXP_FOR_GETSECONDLEVELITEMS_WEB_METHOD_URL).respond(function (method, url, data) {
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
