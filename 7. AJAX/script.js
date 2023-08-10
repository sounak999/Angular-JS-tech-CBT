var app = angular.module("app", []);

app.controller("emp", ["$scope", "$http", "$log", function($scope, $http, $log) {
    $scope.a = 10;
    $scope.b = 20;

    $scope.doSum = function() {
        $http({
            url: `http://localhost:8080/Sum?a=${$scope.a}&b=${$scope.b}`,
            method: `GET`
        }).then(function(resp) {
            // success function
            $log.log(resp.data)
            $scope.sum = resp.data
        }, function(resp) {
            // failure function
            $log.error("ERROR Occurred")
            // alert("Error Occuurred - " + $scope.sum)
        })
    }
}]);