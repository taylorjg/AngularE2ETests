/// <reference path="../../Scripts/ThirdParty/AngularJS/angular-scenario.js" />
/// <reference path="../../Scripts/ThirdParty/AngularJS/angular-mocks.js" />

// ReSharper disable InconsistentNaming

(function () {

    "use strict";

    describe("AngularE2ETests", function () {

        describe("First level items", function () {

            beforeEach(function () {
                browser().navigateTo("http://localhost:65272/Index.aspx?mode=e2etest1");
            });

            it("displays the correct number of first level items", function () {
                expect(window.repeater("div.firstLevelItem").count()).toBe(2);
            });

            it("displays the first level items correctly", function () {
                expect(element("div.firstLevelItem:nth-of-type(1) h2").html()).toBe("FirstLevelItemA");
                expect(element("div.firstLevelItem:nth-of-type(2) h2").html()).toBe("FirstLevelItemB");
            });
        });
    });
} ());
