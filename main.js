var todo=angular.module('todo',[]);
todo.controller('mainCtrl',['$scope','$timeout',function($scope,$timeout) {
    // $scope.title="todo";
    var getTime = function () {
        var date = new Date();
        var h = date.getHours();
        var m = date.getMinutes();
        var s = date.getSeconds();
        m = (m < 10) ? ('0' + m) : m;
        s = (s < 10) ? ('0' + s) : s;
        return h + ':' + m + ':' + s;
    }
    $scope.title = getTime();
    setInterval(function () {
        $timeout(function () {
            var date = new Date();
            var h = date.getHours();
            var m = date.getMinutes();
            var s = date.getSeconds();
            m = (m < 10) ? ('0' + m) : m;
            s = (s < 10) ? ('0' + s) : s;
            $scope.title = h + ':' + m + ':' + s;
        }, 0)
    }, 500)
}])