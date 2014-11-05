/**
 * Created by AHMER on 11/3/2014.
 */
app.controller('studentCtrl',function($scope,$location,$rootScope,$http){
    $scope.user = $rootScope.student;


    $scope.task = function(){
        $location.path('/studentTask')
    }
    $scope.comments = '';
    $scope.addComments = function(user,index,comments){
    $http.post('student/comments',{user:user,index:index,comment:comments})
            .success(function(data){
                console.log(data)
            })
            .error(function(err){
                console.log(err);
            })

    }

})