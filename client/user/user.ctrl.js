/**
 * Created by synerzip on 19/3/17.
 */

app.controller("UserCtrl", function ($scope, UserService) {

    $scope.users = UserService.users;
});