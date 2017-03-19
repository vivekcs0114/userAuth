/**
 * Created by synerzip on 19/3/17.
 */
var app = angular.module('myapp');
app.controller("LoginCtrl", function ($scope, $location,AuthService) {

    $scope.signup = function () {
        $location.path('/register');
    };

    $scope.login = function () {
        var name = $scope.uname;
        var pass = $scope.upassword;
        if(AuthService.auth(name,pass)){
            $location.path('/dashboard');
        }
        else {
            alert('user not exist');
        }
    };
});