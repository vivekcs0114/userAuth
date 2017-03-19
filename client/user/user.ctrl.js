/**
 * Created by synerzip on 19/3/17.
 */

app.controller("UserCtrl", function ($scope, UserService,$http) {

    //UserService.getUsers
    $http.get("http://192.168.1.10:3000/api/record").then(function (result) {
        $scope.users = result.data;
    });
});