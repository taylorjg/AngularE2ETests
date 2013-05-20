// ReSharper disable InconsistentNaming

(function () {

    "use strict";

    describe('Controllers', function () {

        var _scope;
        var _controller;

        beforeEach(angular.mock.module('TestApp'));

        describe('MainController', function () {

            var _httpBackend;

            beforeEach(angular.mock.inject(function ($rootScope, $controller, _$httpBackend_) {

                _httpBackend = _$httpBackend_;
                _httpBackend.whenPOST(/^Index.aspx\/GetFirstLevelItems/).respond({ "d": ["A", "B"] });
                
                _scope = $rootScope.$new();
                _controller = $controller('MainController', {
                    $scope: _scope
                });
                
            }));

            it('should be able to construct an instance of MainController', function () {
                expect(_controller).not.toBeNull();
            });

            it("should initialise the first level items in $scope correctly", function () {
                expect(_scope.firstLevelItems).toBeUndefined();
                _httpBackend.flush();
                expect(_scope.firstLevelItems).toEqual(["A", "B"]);
            });
        });
    });
} ());
