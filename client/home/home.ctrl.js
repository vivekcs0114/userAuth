/**
 * Created by synerzip on 19/3/17.
 */
var app = angular.module('myapp');
app.controller("HomeCtrl", function ($scope, AuthService, $location) {
    $scope.username = AuthService.getData().data;
    $scope.signin = function () {
        $location.path('/login');
    }
});