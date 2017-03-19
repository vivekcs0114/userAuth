/**
 * Created by synerzip on 19/3/17.
 */
app.controller("SignupCtrl", function ($scope, $location) {
    $scope.register = function () {

        var username = $scope.user;
        var mobile = $scope.mobile;
        var email = $scope.email;
        var pass = $scope.password;
        var cnfrm = $scope.confpass;
        if (pass == cnfrm) {
            $location.path('/login');
        } else {
            alert("password must be same");
        }
    };

});