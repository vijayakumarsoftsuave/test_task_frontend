'use strict';
angular.module('myApp').component('adduserComponent',{
    templateUrl: '../../components/adduser/adduser_component.html',
    controller :['$http','$resource','$log', '$scope', function AdduserController($http, $resource, $log, $scope) {
        var self = this;
        this.componentName = 'adduser';
        $scope.email = '';
        $scope.password = '';
        $scope.name = '';
        $scope.empID = '';
        $scope.dashboard = true;

        $scope.addUser=function() {
            $http({
                method: 'POST',
                url: "http://localhost/add_employee",
                headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                data: {
                    name: $scope.name,
                    email: $scope.email,
                    password: $scope.password,
                    role: $scope.role
                }
            }).then(function (success) {
                $log.log(success);
                $scope.message = 'Employee details added successfully!!.'
            }, function (error) {
                $log.log(error);

            });
        };
    }]
});