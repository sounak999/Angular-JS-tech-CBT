var app = angular.module("app", []);

app.controller("emp", ["$scope", "calcFactory", function($scope, calcFactory) {
    $scope.a = 10;
    $scope.b = 20;

    $scope.doSum = function() {
    //     $scope.sum = calcFactory.getSum($scope.a, $scope.b);

    calcFactory.getSum($scope.a, $scope.b, function (r) {
            $scope.sum = r;
        });
    }


}]);

app.factory('calcFactory', ['$http', '$log', function ($http, $log) {
    $log.log("instantiating calcFactory...");

    var oCalcService = {};
    // oCalcService.getSum = function (a, b) {
    //     return parseInt(a) + parseInt(b);
    // }

    // oCalcService.getSum = function (a, b, cb) {
    //     var s = parseInt(a) + parseInt(b)
    //     cb(s)
    // }

    // NB: We want to achieve async behaviour here. Callback functions are never async by default. They are always sync. However, they become async once they are executed as part of some other async function (especially in this case, it would be $http).
    oCalcService.getSum = function (a, b, cb) {
        $http({
            url: `http://localhost:8080/Sum?a=${a}&b=${b}`,
            method: `GET`
        }).then(function(resp) {
            $log.log(resp.data)
            cb(resp.data)
        }, function (resp) {
            $log.error("Error Occurred")
        })
    }

    return oCalcService;
}]);