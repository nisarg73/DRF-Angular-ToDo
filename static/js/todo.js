var app = angular.module('toDo', []);
app.controller('toDoController', function($scope){
	$scope.todoList = [{todoText: 'Finish this tutorial', done: false}]
    $scope.todoAdd = function() {
        $scope.todoList.push({todoText: $scope.todoInput, done: false});
        $scope.todoInput = '';
    };
	$scope.remove = function() {
        var oldList = $scope.todoList;
        $scope.todoList = [];
        angular.forEach(oldList, function(todo) {
            if (!todo.done) {
                $scope.todoList.push(todo);
            }
        })
    }
})