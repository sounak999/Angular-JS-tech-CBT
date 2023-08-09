var app = angular.module("app", []);

app.controller("emp", ["$scope", function($scope) {
    $scope.a = 10;
    $scope.b = 20;

    $scope.doDoubleAndSum = function() {
        $scope.a *= 2;
        $scope.b *= 2;

        $scope.sum = parseInt($scope.a) + parseInt($scope.b);
    }
}]);



