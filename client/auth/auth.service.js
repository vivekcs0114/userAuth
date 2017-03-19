/**
 * Created by synerzip on 19/3/17.
 */
var app=angular.module('myapp');
app.service("AuthService",function () {
    this.setUser=function (value) {
        this.user=value;
        console.log("setting "+ this.user);
    } ;
    this.getUser=function () {
        return this.user;
    } ;
    this.auth = function(uname,pass){

        if (uname == 'admin' && pass == 'admin') {
            this.setUser(uname);
            return true;
        } else {
            return false;
        }
    };
});