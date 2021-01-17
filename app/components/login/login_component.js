'use strict';
angular.module('myApp')
    .component('loginComponent',{
    templateUrl: '../../components/login/login_component.html',
    controller :['$http','$resource','$log', '$scope', '$location', function LoginController($http, $resource, $log, $scope,$location) {
        var self = this;
        $scope.login = true;
        $scope.dashboard = false;
        this.email;
        this.password;

        // USING HTTP DATA FORM POST
        // $scope.user = {};
        $scope.loginUser=function() {
            $scope.login = true;
            $http({
                method: 'POST',
                url: "http://localhost/login",
                headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                data: {
                    email: this.email,
                    password: this.password
                }
            }).then(function (success) {
                $log.log(success);
                $scope.data = success.data;
                $scope.login = true;
                if ($scope.data.status === 1){
                    $log.log($scope.data.status);
                    $scope.data = success.data;
                    $scope.login = false;
                    $scope.dashboard = true;
                }
                else{
                    $log.log($scope.data.status);
                    $scope.login = true;
                    $scope.dashboard = false;
                }
            }, function (error) {
                $scope.login = true;
                $scope.dashboard = false;
                $log.log(error);

            });
        };

    }]
});