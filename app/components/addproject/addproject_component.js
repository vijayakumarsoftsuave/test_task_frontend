'use strict';
angular.module('myApp').component('addprojectComponent',{
    templateUrl: '../../components/addproject/addproject_component.html',
    controller :['$http','$resource','$log', '$scope', function AddprojectController($http, $resource, $log, $scope) {
        var self = this;
        this.componentName = 'adduser';
        // $scope.email = '';
        // $scope.password = '';
        // $scope.name = '';
        // $scope.empID = '';
        // $scope.dashboard = true;


        this.getManager = $resource('http://localhost/api/getManager', {},{get : {method: 'GET', isArray:true}});
        this.$onInit = function () {
            this.getManager.get().$promise.then(function (response){
                $log.log(response);
                // $scope.login = false;
                $scope.data = response;

            }, function (error){
                $log.log(error);
            });
        };



        $scope.addProject=function() {
            $http({
                method: 'POST',
                url: "http://localhost/add_project",
                headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                data: {
                    title: this.title,
                    description: this.description,
                    manager: this.manager
                }
            }).then(function (result) {
                $log.log(result);
                $scope.res = 'Project added successfully!!.';
            }, function (error) {
                $log.log(error);

            });
        };
    }]
});