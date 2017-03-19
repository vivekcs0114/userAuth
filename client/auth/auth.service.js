/**
 * Created by synerzip on 19/3/17.
 */
var app=angular.module('myapp');
app.service("AuthService",function () {
    this.setData=function (value) {
        this.data=value;
        console.log("setting "+ this.data);
    } ;
    this.getData=function () {
        return this;
    } ;
});