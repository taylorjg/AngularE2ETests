/// <reference path="../../Scripts/ThirdParty/AngularJS/angular-scenario.js" />
/// <reference path="../../Scripts/ThirdParty/AngularJS/angular-mocks.js" />

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

        describe("Second level items", function () {

            beforeEach(function () {
                browser().navigateTo("http://localhost:65272/Index.aspx?mode=e2etest1");
            });

            it("first level items display the correct number of second level items", function () {
                expect(window.repeater("div.firstLevelItem:nth-of-type(1) .secondLevelItem").count()).toBe(3);
                expect(window.repeater("div.firstLevelItem:nth-of-type(2) .secondLevelItem").count()).toBe(3);
            });

            it("displays the second level details correctly", function() {
                expect(element("div.firstLevelItem:nth-of-type(1) .secondLevelItem:nth-of-type(1)").html()).toBe("FirstLevelItemA child 0");
                expect(element("div.firstLevelItem:nth-of-type(1) .secondLevelItem:nth-of-type(2)").html()).toBe("FirstLevelItemA child 1");
                expect(element("div.firstLevelItem:nth-of-type(1) .secondLevelItem:nth-of-type(3)").html()).toBe("FirstLevelItemA child 2");
                expect(element("div.firstLevelItem:nth-of-type(2) .secondLevelItem:nth-of-type(1)").html()).toBe("FirstLevelItemB child 0");
                expect(element("div.firstLevelItem:nth-of-type(2) .secondLevelItem:nth-of-type(2)").html()).toBe("FirstLevelItemB child 1");
                expect(element("div.firstLevelItem:nth-of-type(2) .secondLevelItem:nth-of-type(3)").html()).toBe("FirstLevelItemB child 2");
            });
        });
    });
} ());
