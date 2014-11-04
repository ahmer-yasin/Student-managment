/**
 * Created by Ahmer on 11/1/2014.
 */
var app = angular.module('app',['ngRoute'])
    .config(function($routeProvider){
        $routeProvider
            .when('/login',{
                templateUrl:'./partials/login.html',
                controller:'loginCtrl'
            })
            .when('/home',{
                templateUrl:'./partials/Home.html',
                controller:'homeCtrl'
            })
            .when('/studentHome',{
                templateUrl:'./partials/studentHome.html',
                controller:'studentCtrl'
            })
            .when('studenTask',{
                templateUrl:'./partials/studentTask.html',
                controller:'studentCtrl'
            })
            .otherwise({ redirectTo:'/login' });
    })