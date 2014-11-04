/**
 * Created by Ahmer on 11/1/2014.
 */
/*
angular.module('app')
*/
    app.controller('loginCtrl',function($scope,$http,$location){
    $scope.todo = [];
    $scope.login = function(user){
    $http.post('users/login',user).success(function(data){
           $scope.todo = data;
            console.log(data);
            $location.path('/todo')
        })
        .error(function(data){
            console.log(user);
            console.log(data);
        })

    }

        $scope.adminLogin = function(user){
            $http.post('admin/login',user).success(function(data){
                $scope.todo = data;
                console.log(data);
                $location.path('/home')
            })
                .error(function(data){
                    console.log(user);
                    console.log(data);
                })

        }



})