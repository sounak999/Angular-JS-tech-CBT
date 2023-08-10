var app = angular.module("app", []);

app.controller("emp", ["$scope", "$http", function($scope, $http) {
    $scope.a = 10;
    $scope.b = 20;

    $scope.doSum = function() {
        $http({
            url: `http://localhost:8080/Sum?a=${$scope.a}&b=${$scope.b}`,
            method: `GET`
        }).then(function(resp) {
            // success function
            $scope.sum = resp.data
        }, function(resp) {
            // failure function
            alert("Error Occuurred - " + $scope.sum)
        })
    }
}]);