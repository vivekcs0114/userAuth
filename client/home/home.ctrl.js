/**
 * Created by synerzip on 19/3/17.
 */
app.controller("HomeCtrl", function ($scope, AuthService, $location) {
    $scope.username = AuthService.getUser();
    $scope.signin = function () {
        $location.path('/login');
    }
});