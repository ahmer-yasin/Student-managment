/**
 * Created by AHMER on 11/3/2014.
 */
app.controller('studentCtrl',function($scope,$location){
    $scope.task = function(){
        $location.path('/studentTask')
    }

})