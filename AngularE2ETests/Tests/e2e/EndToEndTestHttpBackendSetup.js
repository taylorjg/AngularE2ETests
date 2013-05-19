// ReSharper disable InconsistentNaming

(function () {

    "use strict";

    var app = angular.module("TestAppE2E", ["TestApp", "ngMockE2E"]);

    app.run(["$httpBackend", function ($httpBackend) {

        if (window.location.search === "?mode=e2etest1") {
            $httpBackend.whenPOST(/^Index.aspx\/GetFirstLevelItems/).respond({ "d": ["FirstLevelItemA", "FirstLevelItemB"] });
            $httpBackend.whenPOST(/^Index.aspx\/GetSecondLevelItems/).respond([]);
        }
    } ]);
} ());
