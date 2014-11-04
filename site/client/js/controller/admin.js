/**
 * Created by pc on 11/5/14.
 */
app.controller('adminCtrl',function($scope,$http){
       $scope.user = '';
       $scope.addStudent = function(user){
           $http.post('admin/addStudent',user)
               .success(function(data){
                   $scope.data = data;
                   console.log(data);
               })
               .error(function(err){
                   console.log(err);
               })
       }

})