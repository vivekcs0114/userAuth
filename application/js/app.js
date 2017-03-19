/**
 * Created by VIVEK on 2/25/2017.
 */
var app=angular.module('myapp',['ngRoute']);
app.config(function ($routeProvider) {
    $routeProvider
        .when('/',{
            templateUrl: 'index.html'
        })
        .when('/login',{
            templateUrl: 'login.html'
        })
        .when('/register',{
            templateUrl: 'register.html'
        })
        .when('/dashboard',{
            templateUrl: './dashboard.html'
        })
        .otherwise({
            redirectTo:'/'
        });
});

app.service("myservice",function () {
    this.setData=function (value) {
       this.data=value;
       console.log("setting "+ this.data);
   } ;
    this.getData=function () {
        return this;
    } ;
});

app.controller("mycontroller",function($scope, $location, myservice)
{
    $scope.submit=function () {
        var name=$scope.uname;
        var pass=$scope.upassword;
        if($scope.uname=='admin' && $scope.upassword=='admin'){
            myservice.setData(name);
            $location.path('/dashboard');
        }else{
            alert('user not exist');
        }
    };
    $scope.signin=function () {
            $location.path('/login');
    };
    $scope.register=function () {

        var username=$scope.user;
        var mobile=$scope.mobile;
        var email=$scope.email;
        var pass=$scope.password;
        var cnfrm=$scope.confpass;
        if(pass==cnfrm){
            $location.path('/login');
        }else
        {
            alert("password must be same");
        }
    };
    $scope.signup=function () {
        $location.path('/register');
    };
});
app.controller("mycontroller2",function ($scope, myservice, $location) {
    $scope.username=myservice.getData().data;
    $scope.signin=function () {
        $location.path('/login');
    }
});