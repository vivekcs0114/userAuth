/**
 * Created by synerzip on 19/3/17.
 */

var app=angular.module('myapp');
app.config(function ($routeProvider) {
    $routeProvider
        .when('/',{
            templateUrl: 'client/main/main.html',
            controller:'MainCtrl'
        })
        .when('/login',{
            templateUrl: 'client/login/login.html',
            controller:'LoginCtrl'
        })
        .when('/register',{
            templateUrl: 'client/signup/signup.html',
            controller:'SignupCtrl'
        })
        .when('/dashboard',{
            templateUrl: 'client/home/home.html',
            controller:'HomeCtrl'
        })
        .when('/users',{
            templateUrl: 'client/user/user.html',
            controller:'UserCtrl'
        })
        .otherwise({
            redirectTo:'/'
        });
});