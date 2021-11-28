(function () {
    'use strict';

    angular.module('color', [])
    .controller('ctrl1', ctrl1);

    ctrl1.inject = ['$scope'];
    function ctrl1($scope) {
        $scope.cname = "Blue";
        $scope.changeTo = "blue";

        $scope.msg = function () {
            return "Click the button to Change Color"
        };

        $scope.changecolor =function () {
            $scope.changeTo = "green";
        }
    }

}) ();
