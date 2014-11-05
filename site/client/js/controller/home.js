app.controller('homeCtrl',function($scope,$http){
       $scope.students = [];
       $scope.class = ['class1','class2','class3','class4','class5']
        $scope.addStudent = function(user){
            $http.post('admin/addStudent',user)
                .success(function(data){
                 //   var user = data.user;
                    $scope.persons = data.user;
                    $scope.user = data.user;
                    console.log(data)
                })
                .error(function(err){
                    console.log(err)
                })



        }
    var students;
    $scope.taskShow = false;
    $scope.show = function(student){
        $scope.taskShow = true;
        console.log(student);
        students = student;
    }

        $scope.addTask = function(task){
            students.Task.push(task);
            $http.post('admin/addTask',students)
                .success(function(data){
                    console.log(data);
                     $scope.taskShow = false;
                })
                .error(function(err){
                    console.log(err)
                })
        }
    $scope.popup = function(index){
        $scope.edited=$scope.user[index];
    }
    $scope.edit = function(user){
        $http.post('admin/editStudent',user).success(function(data){
            console.log(data);
            })
            .error(function(err){
                console.log(err);
            })
    }


})