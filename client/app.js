/**
 * Created by VIVEK on 2/25/2017.
 */
var app=angular.module('myapp',['ngRoute']);
app.service("myservice",function () {
    this.setData=function (value) {
       this.data=value;
       console.log("setting "+ this.data);
   } ;
    this.getData=function () {
        return this;
    } ;
});


