var app = angular.module("app", []);

app.controller("emp", ["$scope", "calcService", function ($scope, calcService) {
    $scope.a = 10;
    $scope.b = 20;

    $scope.doSum = function () {
        // $scope.sum = calcService.getSum($scope.a, $scope.b);

        calcService.getSum($scope.a, $scope.b, function (r) {
            $scope.sum = r;
        });

    }

}]);

app.provider('calcService', function () {

    var baseURL = '';

    this.config = function (url) {
        baseURL = url;
    }

    this.$get = ['$log', '$http', function ($log, $http) {
        $log.log('Instantiating calcService...')

        var oCalcService = {};

        // oCalcService.getSum = function(a, b) {
        //     return parseInt(a) + parseInt(b);
        // };

        // oCalcService.getSum = function(a, b, cb) {
        //     var s = parseInt(a) + parseInt(b);
        //     cb(s);
        // }

        oCalcService.getSum = function (a, b, cb) {
            $http({
                url: `${baseURL}Sum?a=${a}&b=${b}`,
                method: `GET`
            }).then(function (resp) {
                $log.log(resp.data)
                cb(resp.data)
            }, function (resp) {
                $log.error("Error Occurred !!!")
            })
        }

        return oCalcService;
    }];
});


app.config(['calcServiceProvider', function (calcServiceProvider) {
    calcServiceProvider.config('http://localhost:8080/')
}])