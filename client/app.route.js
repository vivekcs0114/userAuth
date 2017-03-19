/**
 * Created by synerzip on 19/3/17.
 */

var app=angular.module('myapp');
app.config(function ($routeProvider) {
    $routeProvider
        .when('/',{
            templateUrl: 'client/main/main.html'
        })
        .when('/login',{
            templateUrl: 'client/login/login.html'
        })
        .when('/register',{
            templateUrl: 'client/signup/signup.html'
        })
        .when('/dashboard',{
            templateUrl: 'client/home/home.html'
        })
        .otherwise({
            redirectTo:'/'
        });
});