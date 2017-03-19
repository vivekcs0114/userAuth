/**
 * Created by synerzip on 19/3/17.
 */
app.controller("MainCtrl", function ($scope, $location) {
    $scope.signin = function () {
        $location.path('/login');
    };
    $scope.signup = function () {
        $location.path('/register');
    };
});