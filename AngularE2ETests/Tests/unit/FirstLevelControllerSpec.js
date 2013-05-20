// ReSharper disable InconsistentNaming

(function () {

    "use strict";

    describe('Controllers', function () {

        var _parentScope;
        var _scope;
        var _controller;

        beforeEach(angular.mock.module('TestApp'));

        describe('FirstLevelController', function () {

            var _httpBackend;
            var TEST_FIRST_LEVEL_ITEM = "ABC";

            beforeEach(angular.mock.inject(function ($rootScope, $controller, _$httpBackend_) {

                _httpBackend = _$httpBackend_;

                _httpBackend.whenPOST(
                    /^Index.aspx\/GetSecondLevelItems/,
                    new FirstLevelItemMatcher(TEST_FIRST_LEVEL_ITEM))
                        .respond({ "d": ["i", "ii", "iii"] });

                _parentScope = $rootScope.$new();
                _parentScope.firstLevelItem = TEST_FIRST_LEVEL_ITEM;

                _scope = _parentScope.$new();
                _controller = $controller('FirstLevelController', {
                    $scope: _scope
                });

            }));

            it('should be able to construct an instance of FirstLevelController', function () {
                expect(_controller).not.toBeNull();
            });

            it("should initialise the second level items in $scope correctly", function () {
                expect(_scope.secondLevelItems).toBeUndefined();
                _httpBackend.flush();
                expect(_scope.secondLevelItems).toEqual(["i", "ii", "iii"]);
            });
        });
    });

    var FirstLevelItemMatcher = function (firstLevelItem) {
        this.test = function (data) {
            var postParams = angular.fromJson(data);
            return postParams && postParams.firstLevelItem && postParams.firstLevelItem === firstLevelItem;
        };
    };
} ());
